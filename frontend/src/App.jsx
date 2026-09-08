import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import EnterScreen from './components/EnterScreen';
import Skills from './components/Skills';
import Logbook from './components/LogBook';
import NotFound from './components/NotFound';
import AIChatBot from './components/AIChatBot';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";

function ChatBotWrapper() {
  const location = useLocation();
  const showChatBot = location.pathname !== '/logbook';
  return showChatBot ? <AIChatBot /> : null;
}

function App() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

useEffect(() => {
  const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent);
  const isHome = window.location.pathname === '/';
  const alreadyVisited = sessionStorage.getItem('alreadyVisited');

  if (isBot) {
    setStarted(true);
  } else if (isHome && !alreadyVisited) {
    setStarted(false);
  } else {
    setStarted(true);
  }
  setInitialCheckDone(true);
}, []);

useEffect(() => {
  const warmUpServer = async () => {
    try {
      await fetch("https://portfolio-m60v.onrender.com/health");
      console.log(" Backend warmed up");
    } catch (err) {
      console.error("Backend warm-up failed:", err);
    }
  };

  warmUpServer();
}, []);

useEffect(() => {
  const checkAIHealth = async () => {
    try {
      await fetch(`${import.meta.env.VITE_AI_SERVICE_URL}/health`);
      console.log("AI service health check completed");
    } catch (err) {
      console.error("AI service health check failed:", err);
    }
  };

  checkAIHealth();
}, []);

  const handleStart = () => {
    sessionStorage.setItem('alreadyVisited', 'true');
    setStarted(true);
    setShowLoader(true);
  };

  if (!initialCheckDone) return null;

  return (
    <>
      {/* UI Flow */}
      {!started ? (
        <EnterScreen onEnter={handleStart} />
      ) : showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
        <Router>
          <div className="bg-white dark:bg-black">
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/logbook" element={<Logbook />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatBotWrapper />
            <SpeedInsights />
            <Analytics />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
