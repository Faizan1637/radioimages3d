"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book appointment on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-ink shadow-[0_18px_40px_-12px_rgba(37,211,102,0.8)] md:bottom-8 md:right-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Book on WhatsApp</span>
    </motion.a>
  );
}
