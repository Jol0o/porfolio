import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const IMG_FALLBACK =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'><rect width='100%' height='100%' fill='#1e1033'/><text x='50%' y='50%' fill='#a78bfa' font-family='sans-serif' font-size='20' text-anchor='middle' dominant-baseline='middle'>Preview coming soon</text></svg>`
  );

export default function ProjectModal({ project, onClose }) {
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);

  // Focus the close button when modal opens.
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Close on Escape key.
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Trap focus inside the modal.
  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    el.addEventListener("keydown", trap);
    return () => el.removeEventListener("keydown", trap);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal panel */}
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative z-10 w-full max-w-2xl bg-[#0d1220] border border-violet-800/50 rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/30"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.25, ease: [0, 0.71, 0.2, 1.01] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-3 right-3 z-20 text-gray-400 hover:text-white bg-black/40 hover:bg-black/70 rounded-full p-1.5 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project image */}
        <div className="w-full aspect-video overflow-hidden bg-[#090E16]">
          <img
            src={project.img}
            alt={project.alt || project.name}
            loading="lazy"
            decoding="async"
            onError={(e) => { if (e.currentTarget.src !== IMG_FALLBACK) e.currentTarget.src = IMG_FALLBACK; }}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 id="modal-title" className="text-xl font-bold text-white mb-2">
            {project.name}
          </h2>

          {project.description && (
            <p className="text-gray-300 text-sm leading-7 mb-4">
              {project.description}
            </p>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tool.map((t) => (
              <span key={t} className="text-xs font-semibold bg-violet-800/70 text-violet-200 rounded-lg px-2 py-1">
                {t}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="flex-1 text-center text-sm font-semibold py-2 px-4 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition"
            >
              View Live ↗
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center text-sm font-semibold py-2 px-4 rounded-lg border border-violet-600 text-violet-300 hover:bg-violet-900/50 transition"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
