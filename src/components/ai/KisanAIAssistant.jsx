import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";
import { aiService } from "../../services/aiService";
import { weatherService } from "../../services/weatherService";
import {
  Bot,
  Mic,
  MicOff,
  Send,
  X,
  Volume2,
  VolumeX,
  Sparkles,
  RefreshCw,
  User,
  ShieldCheck,
  ChevronDown,
  MessageSquare,
  Maximize2,
  Minimize2,
  ArrowRight,
  Stethoscope,
  CheckCircle2,
  AlertTriangle,
  FileText
} from "lucide-react";

export const KisanAIAssistant = () => {
  const { language } = useLanguage();
  const { currentUser, role } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState("chat"); // 'chat' | 'doctor'
  const [messages, setMessages] = useState([]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speakingMessageIndex, setSpeakingMessageIndex] = useState(null);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [contextData, setContextData] = useState({
    district: "Nashik",
    state: "Maharashtra",
    crop: "Soybean",
    landArea: "4.5",
    soilType: "Medium Black",
    irrigation: "Borewell Drip"
  });

  // Plant Doctor State
  const [doctorCrop, setDoctorCrop] = useState("Tomato");
  const [doctorSymptom, setDoctorSymptom] = useState("Leaf Curl (पत्ता मुड़ना)");
  const [doctorDiagnosis, setDoctorDiagnosis] = useState(null);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize welcome and speech recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSpeechSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = language === "hi" ? "hi-IN" : "en-IN";

      recognition.onstart = () => setIsListening(true);
      recognition.onresult = (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setInputPrompt(transcript);
      };
      recognition.onerror = (event) => {
        console.warn("Speech recognition notice:", event.error);
        setIsListening(false);
      };
      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
    }

    // Load district weather for context safely
    if (weatherService && typeof weatherService.getWeatherData === "function") {
      weatherService
        .getWeatherData("Nashik")
        .then((wData) => {
          if (wData) setContextData((prev) => ({ ...prev, weather: wData }));
        })
        .catch((e) => console.warn("Weather context notice:", e));
    }

    // Welcome message
    const welcome =
      language === "hi"
        ? "राम-राम किसान भाई! मैं आपका डिजिटल कृषि सहायक 'किसान मित्र AI' हूँ। आप मुझसे बोलकर या लिखकर फसलों में लगने वाले रोग, सही खाद व कीटनाशक की मात्रा, मौसम या मंडी भाव के बारे में पूछ सकते हैं। आप क्या जानना चाहते हैं?"
        : "Namaste! I am Kisan Mitra AI, your digital agronomy and market intelligence guide. You can speak to me directly or type your questions about crop health, fertilizer dosage, weather advisories, or live APMC rates. How can I assist you?";

    setMessages([
      {
        sender: "ai",
        text: welcome,
        timestamp: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit"
        }),
        source: "Kisan Mitra Intelligent Agronomy Engine",
        quickChips:
          language === "hi"
            ? [
                "टमाटर में पत्ता मुड़ रहा है",
                "क्या आज छिड़काव करें?",
                "1 एकड़ में खाद की मात्रा",
                "सोयाबीन का मंडी भाव",
                "मौसम रिपोर्ट दिखाओ"
              ]
            : [
                "Tomato leaf curl remedy",
                "Should I spray pesticide today?",
                "Fertilizer dose for 1 acre",
                "Soybean live mandi price",
                "Open weather forecast"
              ]
      }
    ]);
  }, [language]);

  // Update speech recognition language when language changes
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = language === "hi" ? "hi-IN" : "en-IN";
    }
  }, [language]);

  // Scroll to latest message
  useEffect(() => {
    if (isOpen && activeTab === "chat") {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, activeTab]);

  // Handle Speech-to-Text Toggle
  const toggleSpeechRecognition = () => {
    if (!speechSupported) {
      alert(
        language === "hi"
          ? "आपके ब्राउज़र में वॉइस रिकॉग्निशन समर्थित नहीं है। कृपया Google Chrome या Edge का उपयोग करें।"
          : "Voice recognition is not supported in this browser. Please use Chrome or Edge."
      );
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current?.start();
      } catch (err) {
        console.warn("Speech start exception:", err);
      }
    }
  };

  // Handle Text-to-Speech
  const speakText = (text, index) => {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    if (speakingMessageIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingMessageIndex(null);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text
      .replace(/[*#_`]/g, "")
      .replace(/⚠️|✅|📊|💡|🧪|🌿|🌐|🌾|🐛|🏛️|💧|🌸|🍂|🟡|🌱/g, "");

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
    utterance.rate = 0.95;

    utterance.onend = () => setSpeakingMessageIndex(null);
    utterance.onerror = () => setSpeakingMessageIndex(null);

    setSpeakingMessageIndex(index);
    window.speechSynthesis.speak(utterance);
  };

  // Send Question to AI
  const handleSendMessage = async (promptToSend) => {
    const query = promptToSend || inputPrompt;
    if (!query.trim() || loading) return;

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }

    const userMessage = {
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt("");
    setLoading(true);

    try {
      const res = await aiService.askKisanAI(query, contextData, language);
      const aiReply = {
        sender: "ai",
        text: res.reply,
        source: res.source,
        timestamp: res.timestamp,
        navigationAction: res.navigationAction,
        quickChips: res.quickChips
      };
      setMessages((prev) => [...prev, aiReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text:
            language === "hi"
              ? "सॉरी, नेटवर्क समस्या के कारण उत्तर नहीं मिल सका। कृपया दोबारा प्रयास करें।"
              : "Unable to process query right now. Please try again.",
          timestamp: new Date().toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit"
          }),
          source: "System"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Handle Plant Doctor Diagnostic
  const handleDoctorDiagnose = () => {
    const diag = aiService.diagnoseCropSymptom(doctorCrop, doctorSymptom, language);
    setDoctorDiagnosis(diag);
  };

  const popularDoctorCrops = [
    "Tomato", "Potato", "Chilli", "Cotton", "Soybean", "Onion", "Wheat", "Paddy", "Garlic", "Turmeric", "Watermelon", "Papaya", "Grapes"
  ];

  const popularSymptoms = [
    "Leaf Curl (पत्ता मुड़ना)",
    "Blight & Black Spots (झुलसा / काला धब्बा)",
    "Flower & Fruit Drop (फूल-फल गिरना)",
    "Yellow Leaves & Mosaic (पत्तियां पीली पड़ना)",
    "Caterpillars & Borers (इल्ली / सुंडी)"
  ];

  return (
    <>
      {/* Floating Action Button (Always Visible) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {!isOpen && (
          <div className="mb-2 mr-1 hidden sm:flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-2xl shadow-lg border border-emerald-200 text-xs font-bold text-emerald-950 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
            <span>
              {language === "hi"
                ? "किसान AI से बोलें या पूछें"
                : "Ask or Speak to Kisan AI"}
            </span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Kisan AI Assistant"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-600 to-teal-500 text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 ring-4 ring-emerald-400/30 relative"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <Bot className="w-7 h-7 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-white flex items-center justify-center">
                <span className="w-2 h-2 bg-amber-600 rounded-full animate-ping"></span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* Floating AI Chat Window Modal */}
      {isOpen && (
        <div
          className={`fixed bg-white shadow-2xl border border-stone-200 z-50 flex flex-col overflow-hidden transition-all duration-300 ${
            isFullscreen
              ? "inset-2 sm:inset-6 rounded-3xl"
              : "bottom-24 right-4 sm:right-6 w-[94vw] sm:w-[440px] h-[610px] max-h-[85vh] rounded-3xl"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-3.5 sm:p-4 shrink-0 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-amber-300">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold flex items-center gap-1.5">
                  <span>{language === "hi" ? "किसान मित्र AI" : "Kisan Mitra AI"}</span>
                  <span className="px-1.5 py-0.2 text-[9px] font-bold bg-amber-400/20 text-amber-200 rounded border border-amber-400/30">
                    Voice & Vision
                  </span>
                </h3>
                <p className="text-[10px] text-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>
                    {language === "hi"
                      ? "62+ फसलें • लाइव मौसम व उपग्रह मृदा नमी"
                      : "62+ Crops • Satellite Soil & Mandi"}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? "Restore size" : "Expand to Fullscreen"}
                className="p-1.5 hover:bg-white/10 rounded-xl text-stone-300 hover:text-white transition"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() =>
                  setMessages([
                    {
                      sender: "ai",
                      text:
                        language === "hi"
                          ? "चैट साफ़ कर दी गई है। आप मुझसे क्या पूछना चाहते हैं?"
                          : "Chat cleared. What would you like to ask?",
                      timestamp: new Date().toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit"
                      }),
                      source: "Kisan Mitra AI"
                    }
                  ])
                }
                title="Reset Chat"
                className="p-1.5 hover:bg-white/10 rounded-xl text-stone-300 hover:text-white transition"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-xl text-stone-300 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="bg-stone-100 p-1 flex items-center border-b border-stone-200 shrink-0 text-xs font-bold">
            <button
              onClick={() => setActiveTab("chat")}
              className={`flex-1 py-1.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
                activeTab === "chat"
                  ? "bg-white text-emerald-800 shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language === "hi" ? "कृषि चैट एवं बोलकर पूछें" : "Chat & Voice Assistant"}</span>
            </button>
            <button
              onClick={() => setActiveTab("doctor")}
              className={`flex-1 py-1.5 rounded-xl transition flex items-center justify-center gap-1.5 ${
                activeTab === "doctor"
                  ? "bg-white text-emerald-800 shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              <Stethoscope className="w-3.5 h-3.5 text-rose-600" />
              <span>{language === "hi" ? "AI रोग निदान (Plant Doctor)" : "AI Plant Doctor"}</span>
            </button>
          </div>

          {/* Farm Context Bar */}
          <div className="bg-emerald-50/90 px-4 py-1.5 border-b border-emerald-100 flex items-center justify-between text-[11px] text-emerald-900 shrink-0">
            <span className="truncate">
              📍 {contextData.district} • 🌾 62 Crops • 🌧️ Rain:{" "}
              {contextData.weather?.today?.rainProbMax ?? 20}% • 🛰️ Soil:{" "}
              {contextData.weather?.soil?.surfaceMoisturePct ?? 36}%
            </span>
            <span className="font-bold text-emerald-700 uppercase tracking-wider text-[9px] shrink-0">
              Live Feed
            </span>
          </div>

          {/* TAB 1: CHAT MODE */}
          {activeTab === "chat" && (
            <>
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-stone-50/50">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-2.5 ${
                      msg.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.sender === "ai" && (
                      <div className="w-7 h-7 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1 shadow-xs">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-xs ${
                        msg.sender === "user"
                          ? "bg-emerald-700 text-white rounded-tr-xs"
                          : "bg-white text-stone-800 border border-stone-200 rounded-tl-xs"
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>

                      {/* 1-Click Navigation Action Button */}
                      {msg.navigationAction && (
                        <div className="mt-3 pt-2 border-t border-stone-100">
                          <Link
                            to={msg.navigationAction.path}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[11px] shadow-sm transition"
                          >
                            <span>{msg.navigationAction.label}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}

                      {/* Quick follow-up chips */}
                      {msg.quickChips && msg.quickChips.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                          {msg.quickChips.map((chip, cIdx) => (
                            <button
                              key={cIdx}
                              onClick={() => handleSendMessage(chip)}
                              className="px-2 py-0.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[10px] font-semibold transition border border-emerald-200"
                            >
                              {chip}
                            </button>
                          ))}
                        </div>
                      )}

                      <div
                        className={`mt-2 pt-1 border-t flex items-center justify-between gap-2 text-[10px] ${
                          msg.sender === "user"
                            ? "border-emerald-600 text-emerald-200"
                            : "border-stone-100 text-stone-400"
                        }`}
                      >
                        <span>{msg.timestamp}</span>
                        {msg.sender === "ai" && (
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => speakText(msg.text, idx)}
                              title="Listen to this response"
                              className="hover:text-emerald-700 transition flex items-center gap-1"
                            >
                              {speakingMessageIndex === idx ? (
                                <VolumeX className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
                              ) : (
                                <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                              )}
                              <span>
                                {speakingMessageIndex === idx ? "Stop" : "Listen"}
                              </span>
                            </button>
                            {msg.source && (
                              <span className="text-[9px] opacity-75 hidden sm:inline truncate max-w-[120px]">
                                • {msg.source}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {msg.sender === "user" && (
                      <div className="w-7 h-7 rounded-xl bg-stone-300 text-stone-700 flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center gap-2 text-xs text-stone-500 bg-white p-3 rounded-2xl border border-stone-200 w-fit shadow-xs">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
                    <span>
                      {language === "hi"
                        ? "कृषि सलाह तैयार की जा रही है..."
                        : "Formulating agronomic advice..."}
                    </span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Live Voice Recording Status Bar */}
              {isListening && (
                <div className="bg-rose-50 px-4 py-2 border-t border-rose-200 flex items-center justify-between text-xs text-rose-700 animate-pulse shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping"></span>
                    <span className="font-bold">
                      {language === "hi"
                        ? "सुन रहा हूँ... बोलिए (Listening...)"
                        : "Listening... speak now"}
                    </span>
                  </div>
                  <button
                    onClick={toggleSpeechRecognition}
                    className="text-[11px] font-bold text-rose-800 underline"
                  >
                    Done
                  </button>
                </div>
              )}

              {/* Input Bar */}
              <div className="p-3 bg-white border-t border-stone-200 shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <button
                    type="button"
                    onClick={toggleSpeechRecognition}
                    title={
                      isListening
                        ? "Stop listening"
                        : "Tap to speak in Hindi or English"
                    }
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition shadow-sm shrink-0 ${
                      isListening
                        ? "bg-rose-600 text-white animate-pulse"
                        : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
                    }`}
                  >
                    {isListening ? (
                      <MicOff className="w-5 h-5" />
                    ) : (
                      <Mic className="w-5 h-5" />
                    )}
                  </button>

                  <input
                    type="text"
                    value={inputPrompt}
                    onChange={(e) => setInputPrompt(e.target.value)}
                    placeholder={
                      language === "hi"
                        ? "बोलें या सवाल लिखें (उदा. टमाटर में पत्ता मुड़ना)..."
                        : "Ask or speak your farming query..."
                    }
                    className="flex-1 bg-stone-100 border-none rounded-2xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />

                  <button
                    type="submit"
                    disabled={!inputPrompt.trim() || loading}
                    className="w-10 h-10 rounded-2xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white flex items-center justify-center transition shadow-sm shrink-0"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </>
          )}

          {/* TAB 2: AI PLANT DOCTOR DIAGNOSTIC MODE */}
          {activeTab === "doctor" && (
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-stone-50">
              <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                  <Stethoscope className="w-4 h-4" />
                  <span>{language === "hi" ? "त्वरित रोग निदान केंद्र" : "Instant Crop Disease Diagnosis"}</span>
                </div>
                <p className="text-[11px] text-stone-500">
                  {language === "hi"
                    ? "फसल और दिखने वाले लक्षण का चयन करें। AI तुरंत ICAR-प्रमाणित रासायनिक व जैविक नुस्खा तैयार करेगा।"
                    : "Select your crop and observed symptom to generate an instant ICAR clinical prescription."}
                </p>

                <div className="space-y-2.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      {language === "hi" ? "फसल चुनें" : "Select Crop"}
                    </label>
                    <select
                      value={doctorCrop}
                      onChange={(e) => setDoctorCrop(e.target.value)}
                      className="w-full text-xs font-semibold px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-800"
                    >
                      {popularDoctorCrops.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-600 mb-1">
                      {language === "hi" ? "लक्षण चुनें" : "Select Symptom"}
                    </label>
                    <select
                      value={doctorSymptom}
                      onChange={(e) => setDoctorSymptom(e.target.value)}
                      className="w-full text-xs font-semibold px-3 py-2 rounded-xl border border-stone-200 bg-stone-50 text-stone-800"
                    >
                      {popularSymptoms.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleDoctorDiagnose}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-xs font-bold shadow-md shadow-rose-700/20 transition flex items-center justify-center gap-2"
                  >
                    <Stethoscope className="w-4 h-4" />
                    <span>{language === "hi" ? "रोग का इलाज देखें" : "Generate Clinical Prescription"}</span>
                  </button>
                </div>
              </div>

              {/* Diagnosis Output Card */}
              {doctorDiagnosis && (
                <div className="bg-white p-4 rounded-2xl border border-rose-200 shadow-md space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping"></span>
                      <h4 className="text-xs font-bold text-stone-900">
                        {doctorDiagnosis.diseaseName}
                      </h4>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                      {doctorDiagnosis.severity} Severity
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100">
                      <p className="font-bold text-blue-900 text-[11px] mb-0.5">
                        🧪 {language === "hi" ? "रासायनिक दवा एवं सही मात्रा" : "Chemical Spray & Exact Dosage"}
                      </p>
                      <p className="text-blue-800 text-[11px] leading-relaxed">
                        {doctorDiagnosis.chemicalRemedy}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
                      <p className="font-bold text-emerald-900 text-[11px] mb-0.5">
                        🌱 {language === "hi" ? "जैविक एवं प्राकृतिक विकल्प" : "Bio-Organic Alternative"}
                      </p>
                      <p className="text-emerald-800 text-[11px] leading-relaxed">
                        {doctorDiagnosis.bioRemedy}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-100">
                      <p className="font-bold text-amber-900 text-[11px] mb-0.5">
                        🛡️ {language === "hi" ? "भविष्य के लिए रोकथाम" : "Preventive Farm Advisory"}
                      </p>
                      <p className="text-amber-800 text-[11px] leading-relaxed">
                        {doctorDiagnosis.preventiveAction}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab("chat");
                      handleSendMessage(
                        language === "hi"
                          ? `${doctorCrop} में ${doctorSymptom} का विस्तृत उपचार बताएं`
                          : `Tell me detailed treatment for ${doctorSymptom} in ${doctorCrop}`
                      );
                    }}
                    className="w-full py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-[11px] font-semibold transition text-center"
                  >
                    {language === "hi" ? "AI चैट में और विस्तार से पूछें →" : "Ask more details in AI Chat →"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};
