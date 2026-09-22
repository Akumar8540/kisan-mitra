import React, { useState, useEffect, useRef } from "react";
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
  MessageSquare
} from "lucide-react";

export const KisanAIAssistant = () => {
  const { language } = useLanguage();
  const { currentUser, role } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
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

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize initial welcome message and speech recognition
  useEffect(() => {
    // Check Web Speech Recognition support
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      setSpeechSupported(true);
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = language === "hi" ? "hi-IN" : "en-IN";

      recognition.onstart = () => {
        setIsListening(true);
      };

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

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    // Load initial district weather for context
    weatherService
      .getWeatherData("Nashik")
      .then((wData) => {
        setContextData((prev) => ({ ...prev, weather: wData }));
      })
      .catch((e) => console.warn(e));

    // Welcome message
    const welcome =
      language === "hi"
        ? "राम-राम किसान भाई! मैं आपका डिजिटल कृषि सहायक 'किसान मित्र AI' हूँ। आप मुझसे सीधे बोलकर या लिखकर फसलों की बीमारी, मौसम, खाद की मात्रा, या मंडी भाव के बारे में पूछ सकते हैं। आप मुझसे क्या जानना चाहते हैं?"
        : "Namaste! I am Kisan Mitra AI, your digital agronomy and market intelligence guide. You can speak to me directly using the microphone or type your question about crop health, fertilizer dosage, weather advisories, or APMC mandi rates. How can I help you today?";

    setMessages([
      {
        sender: "ai",
        text: welcome,
        timestamp: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit"
        }),
        source: "Kisan Mitra Intelligent Agronomy Engine"
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
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

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

  // Handle Text-to-Speech (Speak answer back)
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
    // Clean markdown asterisks and icons for natural speech
    const cleanText = text
      .replace(/[*#_`]/g, "")
      .replace(/⚠️|✅|📊|💡|🧪|🌿|🌐|🌾|🐛|🏛️/g, "");

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = language === "hi" ? "hi-IN" : "en-IN";
    utterance.rate = 0.95;

    utterance.onend = () => {
      setSpeakingMessageIndex(null);
    };

    utterance.onerror = () => {
      setSpeakingMessageIndex(null);
    };

    setSpeakingMessageIndex(index);
    window.speechSynthesis.speak(utterance);
  };

  // Send Question to AI
  const handleSendMessage = async (promptToSend) => {
    const query = promptToSend || inputPrompt;
    if (!query.trim() || loading) return;

    // Stop listening if recording
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
        timestamp: res.timestamp
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
              : "Unable to process right now. Please try again.",
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

  const quickPrompts =
    language === "hi"
      ? [
          "क्या आज कीटनाशक का छिड़काव करना सुरक्षित है?",
          "सोयाबीन और प्याज का आज का मंडी भाव क्या है?",
          "1 एकड़ में यूरिया और DAP की सही मात्रा कितनी है?",
          "पीला मोज़ेक वायरस का तुरंत उपचार क्या है?",
          "फसल एक्सपोर्ट (APEDA) के लिए क्या नियम हैं?"
        ]
      : [
          "Is it safe to spray pesticides today based on rain forecast?",
          "What are today's APMC mandi prices for Soybean & Onion?",
          "What is the recommended fertilizer NPK dosage for 1 acre?",
          "How to control Yellow Mosaic Virus in soybean crops?",
          "What are the APEDA export guidelines and quality criteria?"
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
        <div className="fixed bottom-24 right-4 sm:right-6 w-[94vw] sm:w-[420px] h-[580px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-stone-200 z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-4 shrink-0 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-amber-300">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-sm font-extrabold flex items-center gap-1.5">
                  <span>
                    {language === "hi" ? "किसान मित्र AI" : "Kisan Mitra AI"}
                  </span>
                  <span className="px-1.5 py-0.2 text-[9px] font-bold bg-amber-400/20 text-amber-200 rounded border border-amber-400/30">
                    Voice AI
                  </span>
                </h3>
                <p className="text-[11px] text-emerald-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>
                    {language === "hi"
                      ? "सक्रिय • लाइव कृषि व मौसम डेटा"
                      : "Active • Live Farm & Weather"}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
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

          {/* Farm Context Bar */}
          <div className="bg-emerald-50/80 px-4 py-1.5 border-b border-emerald-100 flex items-center justify-between text-[11px] text-emerald-900 shrink-0">
            <span className="truncate">
              📍 {contextData.district} • 🌾 {contextData.crop} • 🌧️ Rain:{" "}
              {contextData.weather?.today?.rainProbMax ?? 20}%
            </span>
            <span className="font-bold text-emerald-700 uppercase tracking-wider text-[9px] shrink-0">
              Live Grounding
            </span>
          </div>

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
                  <div className="w-7 h-7 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 text-xs font-bold mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[84%] rounded-2xl p-3.5 text-xs leading-relaxed shadow-xs ${
                    msg.sender === "user"
                      ? "bg-emerald-700 text-white rounded-tr-xs"
                      : "bg-white text-stone-800 border border-stone-200 rounded-tl-xs"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

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
              <div className="flex items-center gap-2 text-xs text-stone-500 bg-white p-3 rounded-2xl border border-stone-200 w-fit">
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

          {/* Quick Prompt Suggestions */}
          <div className="px-3 py-2 bg-white border-t border-stone-100 shrink-0 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.slice(0, 3).map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 rounded-xl bg-stone-100 hover:bg-emerald-50 hover:text-emerald-800 text-[11px] text-stone-600 whitespace-nowrap transition shrink-0 border border-stone-200"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Live Voice Recording Status Bar */}
          {isListening && (
            <div className="bg-rose-50 px-4 py-2 border-t border-rose-200 flex items-center justify-between text-xs text-rose-700 animate-pulse">
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
                    ? "बोलें या सवाल लिखें (उदा. खाद, भाव, मौसम)..."
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
        </div>
      )}
    </>
  );
};
