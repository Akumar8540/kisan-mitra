import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { useAuth } from "../../context/AuthContext";
import { aiService } from "../../services/aiService";
import { weatherService } from "../../services/weatherService";
import { marketService } from "../../services/marketService";
import {
  Bot,
  Mic,
  MicOff,
  Send,
  Volume2,
  VolumeX,
  Sparkles,
  RefreshCw,
  User,
  ShieldCheck,
  Sprout,
  TrendingUp,
  CloudRain,
  BookOpen,
  FlaskConical,
  CheckCircle2,
  Info,
  ArrowRight,
  Stethoscope,
  Maximize2
} from "lucide-react";

export const AIAssistantPage = () => {
  const { language, t } = useLanguage();
  const { currentUser, role } = useAuth();

  const [messages, setMessages] = useState([]);
  const [inputPrompt, setInputPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speakingMessageIndex, setSpeakingMessageIndex] = useState(null);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [weather, setWeather] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState("Nashik");

  // Plant Doctor Quick Panel
  const [showDoctorModal, setShowDoctorModal] = useState(false);
  const [doctorCrop, setDoctorCrop] = useState("Tomato");
  const [doctorSymptom, setDoctorSymptom] = useState("Leaf Curl (पत्ता मुड़ना)");
  const [doctorDiagnosis, setDoctorDiagnosis] = useState(null);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Available districts for context switching
  const districts = [
    "Nashik", "Jaipur", "Indore", "Guntur", "Kolar", "Agra", "Kanpur", "Unjha", "Pune", "Solapur", "Ludhiana"
  ];

  useEffect(() => {
    // Check Web Speech Recognition
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
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
    }

    // Load weather safely
    if (weatherService && typeof weatherService.getWeatherData === "function") {
      weatherService
        .getWeatherData(selectedDistrict)
        .then((data) => {
          if (data) setWeather(data);
        })
        .catch((err) => console.warn("Weather load notice:", err));
    }

    // Initial Message
    const welcome =
      language === "hi"
        ? "राम-राम किसान भाई! मैं आपका डिजिटल कृषि सलाहकार 'किसान मित्र AI' हूँ।\n\nआप मुझसे बोलकर या लिखकर फसलों में लगने वाले रोग, सही खाद व कीटनाशक की मात्रा, आज के मंडी भाव या मौसम के आधार पर खेती से जुड़े कोई भी सवाल पूछ सकते हैं।\n\nनीचे दिए गए माइक्रोफ़ोन (माइक) बटन पर क्लिक करके सीधे बोलिए!"
        : "Namaste! I am Kisan Mitra AI, your dedicated agronomy and agricultural economics assistant.\n\nYou can speak directly to me using the microphone button or type questions about pest control, fertilizer dosages, today's APMC mandi rates, or weather-based spraying decisions.\n\nTap the microphone below to start speaking!";

    setMessages([
      {
        sender: "ai",
        text: welcome,
        timestamp: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
        source: "Kisan Mitra Intelligent Agronomy Engine",
        quickChips: [
          language === "hi" ? "टमाटर में पत्ता मुड़ना" : "Tomato leaf curl",
          language === "hi" ? "क्या आज छिड़काव करें?" : "Safe to spray today?",
          language === "hi" ? "1 एकड़ में खाद की मात्रा" : "Fertilizer per acre",
          language === "hi" ? "सोयाबीन मंडी भाव" : "Soybean APMC rate",
          language === "hi" ? "फसल कैटलॉग दिखाओ" : "Open crop catalog"
        ]
      }
    ]);
  }, [language, selectedDistrict]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleSpeech = () => {
    if (!speechSupported) {
      alert("Voice recognition is not supported in this browser. Please use Chrome or Edge.");
      return;
    }
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current?.start();
      } catch (e) {
        console.warn(e);
      }
    }
  };

  const speakText = (text, index) => {
    if (!("speechSynthesis" in window)) return;
    if (speakingMessageIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingMessageIndex(null);
      return;
    }
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*#_`]/g, "").replace(/⚠️|✅|📊|💡|🧪|🌿|🌐|🌾|🐛|🏛️|💧|🌸|🍂|🟡|🌱/g, "");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
    utterance.rate = 0.95;
    utterance.onend = () => setSpeakingMessageIndex(null);
    utterance.onerror = () => setSpeakingMessageIndex(null);
    setSpeakingMessageIndex(index);
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async (queryToSend) => {
    const q = queryToSend || inputPrompt;
    if (!q.trim() || loading) return;

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }

    const userMsg = {
      sender: "user",
      text: q,
      timestamp: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt("");
    setLoading(true);

    try {
      const context = {
        district: selectedDistrict,
        crop: "Soybean",
        weather: weather
      };
      const res = await aiService.askKisanAI(q, context, language);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: res.reply,
          source: res.source,
          timestamp: res.timestamp,
          navigationAction: res.navigationAction,
          quickChips: res.quickChips
        }
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, could not process query. Please retry.",
          source: "System",
          timestamp: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

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

  const quickChips =
    language === "hi"
      ? [
          { text: "क्या आज कीटनाशक छिड़कना सुरक्षित है?", icon: CloudRain },
          { text: "आज का सोयाबीन व प्याज का मंडी भाव क्या है?", icon: TrendingUp },
          { text: "1 एकड़ में यूरिया और DAP की मात्रा कितनी डालें?", icon: FlaskConical },
          { text: "टमाटर में पत्ता मुड़ रहा है क्या करें?", icon: Sprout },
          { text: "फसल एक्सपोर्ट (APEDA) के लिए क्या नियम हैं?", icon: ShieldCheck }
        ]
      : [
          { text: "Is it safe to spray chemical pesticides today?", icon: CloudRain },
          { text: "What are today's APMC mandi prices for Soybean?", icon: TrendingUp },
          { text: "What is the recommended fertilizer NPK dosage per acre?", icon: FlaskConical },
          { text: "Tomato leaf curl remedy and dosage?", icon: Sprout },
          { text: "What are APEDA agricultural export compliance rules?", icon: ShieldCheck }
        ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white p-6 sm:p-8 rounded-3xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400/20 text-amber-200 border border-amber-400/30 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Multimodal Voice AI Station
            </span>
            <span className="text-xs text-emerald-300">
              Google Gemini & ICAR 62-Crop Grounded
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight flex items-center gap-2.5">
            <Bot className="w-8 h-8 text-amber-300" />
            <span>{language === "hi" ? "किसान मित्र AI कृषि केंद्र" : "Kisan Mitra AI Agronomy Station"}</span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 max-w-2xl">
            {language === "hi"
              ? "अपनी आवाज़ में बोलकर या लिखकर पूछें। रियल-टाइम मौसम, उपग्रह मृदा नमी, मंडी भाव, खाद की संतुलित मात्रा और 62+ फसलों की वैज्ञानिक सलाह तुरंत प्राप्त करें।"
              : "Ask questions by voice or text. Receive real-time meteorological advisories, satellite soil moisture telemetry, live mandi rates, and ICAR dosage protocols across 62+ crops."}
          </p>

          <div className="pt-2">
            <button
              onClick={() => setShowDoctorModal(true)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-rose-600/90 hover:bg-rose-600 text-white text-xs font-bold shadow-md transition"
            >
              <Stethoscope className="w-4 h-4" />
              <span>{language === "hi" ? "AI रोग निदान (Plant Doctor Tool)" : "Open AI Plant Doctor Tool"}</span>
            </button>
          </div>
        </div>

        {/* District Selector for Hyperlocal Grounding */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-xs shrink-0 w-full sm:w-auto">
          <label className="block text-emerald-200 font-bold uppercase tracking-wider text-[10px] mb-1">
            📍 Hyperlocal District Context
          </label>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full bg-emerald-950 text-white font-semibold rounded-xl px-3 py-2 border border-emerald-700 focus:outline-none"
          >
            {districts.map((d) => (
              <option key={d} value={d}>
                {d} Mandi & Weather
              </option>
            ))}
          </select>
          {weather && (
            <div className="mt-2 text-[11px] text-stone-200 flex items-center justify-between gap-3">
              <span>Temp: <strong>{Math.round(weather.current.temperature)}°C</strong></span>
              <span>Rain: <strong>{weather.today.rainProbMax}%</strong></span>
              <span>Soil: <strong>{weather.soil?.surfaceMoisturePct ?? 35}%</strong></span>
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="bg-white rounded-3xl border border-stone-200 shadow-sm flex flex-col h-[650px] overflow-hidden">
        {/* Messages Stream */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-stone-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "ai" && (
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-800 to-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-5 h-5 text-amber-300" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.sender === "user"
                    ? "bg-emerald-700 text-white rounded-tr-xs"
                    : "bg-white text-stone-800 border border-stone-200 rounded-tl-xs"
                }`}
              >
                <div className="whitespace-pre-line prose-xs">{msg.text}</div>

                {/* 1-Click Navigation Action Button */}
                {msg.navigationAction && (
                  <div className="mt-3 pt-2.5 border-t border-stone-100">
                    <Link
                      to={msg.navigationAction.path}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm transition"
                    >
                      <span>{msg.navigationAction.label}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}

                {/* Dynamic Quick Chips */}
                {msg.quickChips && msg.quickChips.length > 0 && (
                  <div className="mt-3 pt-2 border-t border-stone-100 flex flex-wrap gap-1.5">
                    {msg.quickChips.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        onClick={() => handleSend(chip)}
                        className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition border border-emerald-200"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}

                <div
                  className={`mt-3 pt-2 border-t flex flex-wrap items-center justify-between gap-2 text-[11px] ${
                    msg.sender === "user"
                      ? "border-emerald-600/60 text-emerald-200"
                      : "border-stone-100 text-stone-400"
                  }`}
                >
                  <span>{msg.timestamp}</span>
                  {msg.sender === "ai" && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => speakText(msg.text, idx)}
                        title="Listen aloud"
                        className="hover:text-emerald-700 font-semibold transition flex items-center gap-1.5 px-2 py-0.5 rounded-lg hover:bg-stone-100"
                      >
                        {speakingMessageIndex === idx ? (
                          <VolumeX className="w-4 h-4 text-rose-600 animate-pulse" />
                        ) : (
                          <Volume2 className="w-4 h-4 text-emerald-600" />
                        )}
                        <span>{speakingMessageIndex === idx ? "Stop Voice" : "Listen (आवाज़ सुनें)"}</span>
                      </button>
                      {msg.source && (
                        <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md border border-stone-200">
                          {msg.source}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {msg.sender === "user" && (
                <div className="w-9 h-9 rounded-2xl bg-stone-200 text-stone-700 flex items-center justify-center shrink-0 font-bold">
                  <User className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-200 w-fit text-xs text-stone-600 shadow-xs">
              <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
              <span>
                {language === "hi"
                  ? "किसान मित्र AI उत्तर तैयार कर रहा है..."
                  : "Kisan Mitra AI is processing your agronomic query..."}
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-3 bg-white border-t border-stone-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Suggested:
          </span>
          {quickChips.map((chip, cIdx) => {
            const Icon = chip.icon;
            return (
              <button
                key={cIdx}
                onClick={() => handleSend(chip.text)}
                className="px-3 py-1.5 rounded-2xl bg-stone-50 hover:bg-emerald-50 hover:text-emerald-800 text-xs text-stone-700 border border-stone-200 whitespace-nowrap transition flex items-center gap-1.5 shrink-0"
              >
                <Icon className="w-3.5 h-3.5 text-emerald-600" />
                <span>{chip.text}</span>
              </button>
            );
          })}
        </div>

        {/* Voice Listening Wave Indicator */}
        {isListening && (
          <div className="bg-rose-50 px-6 py-2.5 border-t border-rose-200 flex items-center justify-between text-xs text-rose-700 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-600 animate-ping"></div>
              <span className="font-extrabold text-sm">
                {language === "hi"
                  ? "🎤 आवाज़ सुन रहा हूँ... बोलिए (Listening to your speech...)"
                  : "🎤 Listening to your voice... speak now"}
              </span>
            </div>
            <button
              onClick={toggleSpeech}
              className="px-3 py-1 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition"
            >
              Stop & Send
            </button>
          </div>
        )}

        {/* Voice & Text Input Bar */}
        <div className="p-4 bg-white border-t border-stone-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-3"
          >
            <button
              type="button"
              onClick={toggleSpeech}
              title={isListening ? "Stop listening" : "Click and speak in Hindi or English"}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition shadow-sm shrink-0 ${
                isListening
                  ? "bg-rose-600 text-white ring-4 ring-rose-200 animate-pulse"
                  : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200"
              }`}
            >
              {isListening ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
            </button>

            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder={
                language === "hi"
                  ? "माइक दबाकर बोलें या लिखें (उदा. टमाटर में पत्ता मुड़ना, खाद की मात्रा, आज का भाव)..."
                  : "Tap mic to speak or type your agricultural question..."
              }
              className="flex-1 bg-stone-100 border-none rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            />

            <button
              type="submit"
              disabled={!inputPrompt.trim() || loading}
              className="px-5 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 disabled:opacity-40 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition shadow-sm shrink-0"
            >
              <span>{language === "hi" ? "पूछें" : "Send"}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* AI Plant Doctor Modal */}
      {showDoctorModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-stone-200 space-y-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2.5 text-rose-700">
                <Stethoscope className="w-6 h-6" />
                <h3 className="text-lg font-bold text-stone-900">
                  {language === "hi" ? "AI प्लांट डॉक्टर (सटीक रोग निदान)" : "AI Plant Doctor Diagnostic Desk"}
                </h3>
              </div>
              <button
                onClick={() => setShowDoctorModal(false)}
                className="p-1.5 rounded-xl hover:bg-stone-100 text-stone-400 hover:text-stone-700"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {language === "hi" ? "प्रभावित फसल चुनें" : "Select Affected Crop"}
                </label>
                <select
                  value={doctorCrop}
                  onChange={(e) => setDoctorCrop(e.target.value)}
                  className="w-full text-xs font-medium px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50"
                >
                  {popularDoctorCrops.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {language === "hi" ? "दिखने वाला लक्षण चुनें" : "Select Observed Symptom"}
                </label>
                <select
                  value={doctorSymptom}
                  onChange={(e) => setDoctorSymptom(e.target.value)}
                  className="w-full text-xs font-medium px-3.5 py-2.5 rounded-xl border border-stone-200 bg-stone-50"
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
                className="w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white text-xs font-bold shadow-md shadow-rose-700/20 transition flex items-center justify-center gap-2"
              >
                <Stethoscope className="w-4 h-4" />
                <span>{language === "hi" ? "क्लिनिकल प्रिस्क्रिप्शन बनाएं" : "Generate Clinical Prescription"}</span>
              </button>

              {doctorDiagnosis && (
                <div className="bg-stone-50 p-4 rounded-2xl border border-rose-200 space-y-3 mt-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-stone-900 text-sm">{doctorDiagnosis.diseaseName}</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800">
                      {doctorDiagnosis.severity} Severity
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-100">
                      <p className="font-bold text-blue-900 text-xs mb-1">
                        🧪 {language === "hi" ? "रासायनिक दवा एवं सही मात्रा" : "Chemical Spray Remedy"}
                      </p>
                      <p className="text-blue-800 leading-relaxed">{doctorDiagnosis.chemicalRemedy}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                      <p className="font-bold text-emerald-900 text-xs mb-1">
                        🌱 {language === "hi" ? "जैविक एवं प्राकृतिक विकल्प" : "Bio-Organic Alternative"}
                      </p>
                      <p className="text-emerald-800 leading-relaxed">{doctorDiagnosis.bioRemedy}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
                      <p className="font-bold text-amber-900 text-xs mb-1">
                        🛡️ {language === "hi" ? "भविष्य के लिए रोकथाम" : "Preventative Cultural Action"}
                      </p>
                      <p className="text-amber-800 leading-relaxed">{doctorDiagnosis.preventiveAction}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowDoctorModal(false);
                      handleSend(
                        language === "hi"
                          ? `${doctorCrop} में ${doctorSymptom} का विस्तृत उपचार बताएं`
                          : `Provide full treatment for ${doctorSymptom} in ${doctorCrop}`
                      );
                    }}
                    className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs transition text-center"
                  >
                    {language === "hi" ? "इस समस्या को AI चैट में पूछें →" : "Send to AI Chat →"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
