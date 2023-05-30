import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Section({ children }) {
  const ref = useRef(null);
  const [isInView, entry] = useInView({ triggerOnce: true });

  return (
    <section ref={ref}>
      <motion.span
        initial={{ transform: "translateX(-200px)", opacity: 0 }}
        animate={{ transform: "none", opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.17, 0.55, 0.55, 1] }}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
        }}
      >
        {children}
      </motion.span>
    </section>
  );
}
