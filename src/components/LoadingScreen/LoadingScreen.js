"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [showLoader, setShowLoader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const hasVisited = sessionStorage.getItem("visited");

    if (!hasVisited) {
      setShowLoader(true);
      sessionStorage.setItem("visited", "true");

      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader">
            <div className="loader-spinner"></div>
            <p>Airport Golden Tulip Hotel...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}