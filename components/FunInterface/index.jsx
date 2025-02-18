import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const getRandomPosition = () => ({
  top: `${Math.random() * 70}vh`,
  left: `${Math.random() * 70}vw`,
});

const FunInterface = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });
  const [showModal, setShowModal] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleNoHover = () => {
    setNoButtonPosition(getRandomPosition());
  };

  const handleYesClick = () => {
    setShowModal(true);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("9065956504");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSent = () => {
    setShowModal(false);
    setShowConfetti(true);
    setShowThankYou(true);
    setTimeout(() => {
      setShowConfetti(false);
      setShowThankYou(false);
    }, 5000);
  };

  return (
    <div className="relative min-h-[90vh]  text-white p-8 overflow-hidden">
      <h1 className="text-4xl font-bold text-center  mt-32">
        Send <span className="text-purple-600">Funds</span>{" "}
      </h1>

      {/* Yes Button */}
      <button
        onClick={handleYesClick}
        className="fixed top-1/2 left-1/4  transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-purple-700 transition-colors"
      >
        Yes
      </button>

      {/* No Button */}
      <button
        onMouseEnter={handleNoHover}
        style={{
          position: "fixed",
          ...noButtonPosition,
          transition: "all 0.3s ease",
        }}
        className="bg-purple-600 text-white px-8 py-3 rounded-lg text-xl hover:bg-purple-700"
      >
        No
      </button>

      {/* Account Details Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.9 }}
              className="bg-white text-gray-800 p-6 rounded-lg w-96 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl text-purple-600 font-bold mb-6 flex items-center">
                <span className="mr-2">💳</span> Account Details
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Account Number:</span>
                  <span>
                    9065956504{" "}
                    <button
                      onClick={copyToClipboard}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors relative group"
                    >
                      <Copy className="h-4 w-4 text-purple-600" />
                      {copied && (
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                          Copied!
                        </span>
                      )}
                    </button>
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium">Bank Name:</span>
                  <span>Opay</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-medium">Account Name:</span>
                  <span>Chukwudubem Daniel</span>
                </div>

                <button
                  onClick={handleSent}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg mt-4 hover:bg-purple-700 transition-colors"
                >
                  Sent
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

          {/* Thank You Message */}
          <AnimatePresence>
      {showThankYou && (
        <motion.div    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <motion.div   initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100
                }
              }}
              exit={{ 
                scale: 0.8, 
                opacity: 0, 
                y: -50,
                transition: {
                  duration: 0.7
                }
              }} className="bg-white bg-opacity-90 text-purple-600 px-12 py-6 rounded-lg transform animate-thank-you">
            <h2 className="text-4xl font-bold text-center">Thank You! 🎉</h2>
            <p className="text-xl text-center mt-2">
              Your payment is on it's way{" "}
            </p>
          </motion.div>
        </motion.div>
      )}    </AnimatePresence>

      {/* Flower Petals Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(120)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
                animation: `fall ${Math.random() * 2 + 1}s linear forwards`,
                backgroundColor: "#9333ea",
                width: "10px",
                height: "10px",
                borderRadius: Math.random() > 0.5 ? "50%" : "0",
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }
        .animate-fall {
          position: absolute;
        }
            .custom-gradient {
    background: linear-gradient(180deg, 
      rgb(0, 0, 0) 0%,
      rgba(17, 0, 32, 0.95) 35%,
      rgba(25, 0, 47, 0.85) 100%
    );
  }
      `}</style>
    </div>
  );
};

export default FunInterface;
