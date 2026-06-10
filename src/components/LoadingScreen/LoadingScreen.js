"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoadingScreen.css";

export default function LoadingScreen() {
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === "undefined") return false;
    return !sessionStorage.getItem("visited");
  });

  useEffect(() => {
    if (showLoader) {
      sessionStorage.setItem("visited", "true");

      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="loading-screen"
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