import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const SplashScreen = ({ finishLoading }) => {
    const [count, setCount] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    // Status text logic
    const statusMessages = ["Initializing...", "Loading Modules...", "Preparing Assets...", "Welcome."];
    const [status, setStatus] = useState(statusMessages[0]);

    useEffect(() => {
        const duration = 2500; // Increased to 2.5s for better pacing
        const steps = 100;
        const intervalTime = duration / steps;

        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev < 100) {
                    const newCount = prev + 1;

                    // Update status based on percentage
                    if (newCount > 30 && newCount < 70) setStatus(statusMessages[1]);
                    if (newCount >= 70 && newCount < 100) setStatus(statusMessages[2]);
                    if (newCount === 100) setStatus(statusMessages[3]);

                    return newCount;
                }
                clearInterval(interval);
                return 100;
            });
        }, intervalTime);

        const timeout = setTimeout(() => {
            finishLoading();
        }, duration + 800);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [finishLoading]);

    // Staggered letters
    const letters = "JOLO.".split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090E16] overflow-hidden"
            initial={{ y: 0 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
            }}
        >
            {/* Animated Background Grid */}
            <div className="absolute inset-0 z-0">
                <svg className="w-full h-full opacity-10" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#090E16] to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
            </div>

            {/* Main Content */}
            <div className="z-10 flex flex-col items-center">

                {/* Staggered Text Reveal */}
                <div className="overflow-hidden mb-8">
                    <motion.div
                        className="flex"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className="text-6xl md:text-9xl font-bold text-white font-mono tracking-tighter"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Dynamic Status Text & Counter */}
                <div className="w-[300px] flex flex-col gap-2">
                    <div className="flex justify-between items-end mb-1">
                        <motion.span
                            key={status} // Key changing triggers animation
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white/60 text-sm font-mono uppercase tracking-widest"
                        >
                            {status}
                        </motion.span>
                        <span className="text-white text-xl font-bold font-mono">{count}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-violet-500 to-purple-400"
                            initial={{ width: "0%" }}
                            animate={{ width: `${count}%` }}
                        />
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default SplashScreen;
