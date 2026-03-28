/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, Instagram } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <main className="min-h-screen bg-[#4A1018] flex flex-col items-center justify-between py-12 px-6 text-center selection:bg-white/20">
      {/* Top Logo Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
          {/* Decorative background for logo */}
          <div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>
          <div className="relative border border-white/20 p-4 rounded-sm">
             <div className="text-3xl font-serif tracking-tighter flex items-center justify-center border border-white/40 w-12 h-12">
                <span className="relative -left-1">R</span>
                <span className="relative -right-1 opacity-60">R</span>
             </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-4xl w-full flex flex-col items-center gap-12">
        
        {/* Header Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-white/30"></div>
            <div className="w-2 h-2 rotate-45 border border-white/50"></div>
            <div className="h-[1px] w-12 bg-white/30"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif tracking-[0.2em] uppercase font-medium">
            Rebecca Rieger
          </h1>
          <div className="space-y-1">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 font-light">
              Advocacia e Consultoria Jurídica
            </p>
            <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60">
              OAB/MS N. 26.833
            </p>
          </div>
          
          <div className="h-[1px] w-48 mx-auto bg-white/20 mt-8"></div>
        </motion.section>

        {/* Title Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-white/50">
            Proposta de
          </p>
          <h2 className="text-5xl md:text-8xl font-serif font-black tracking-tighter uppercase leading-none">
            Consultoria
          </h2>
          <div className="space-y-2">
            <p className="text-lg md:text-2xl font-serif italic text-white/90">
              Implantação e Assessoria em Contratações Públicas
            </p>
            <p className="text-[10px] md:text-xs tracking-widest text-white/40 uppercase">
              Lei 14.133/2021 &bull; Nova Lei de Licitações e Contratos
            </p>
          </div>
        </motion.section>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-[1px] w-16 bg-white/20"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-white/40"></div>
          <div className="h-[1px] w-16 bg-white/20"></div>
        </div>

        {/* Specialization Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="space-y-4 max-w-xl"
        >
          <p className="text-sm md:text-base font-serif italic text-white/70 tracking-wide">
            Especialista em Licitações e Contratos Administrativos
          </p>
          <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed tracking-wider">
            Assessoria jurídica para empresas que querem crescer no mercado público
          </p>
        </motion.section>

      </div>

      {/* Footer Contact Section */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="w-full max-w-5xl mt-20"
      >
        <div className="h-[1px] w-full bg-white/10 mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/60">
          <a href="tel:67981621752" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={14} className="opacity-50" />
            (67) 98162-1752
          </a>
          <div className="hidden md:block h-4 w-[1px] bg-white/20"></div>
          <a href="mailto:rebeccariegersoares@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={14} className="opacity-50" />
            rebeccariegersoares@gmail.com
          </a>
          <div className="hidden md:block h-4 w-[1px] bg-white/20"></div>
          <a href="https://instagram.com/rebecca_riegeradv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Instagram size={14} className="opacity-50" />
            @rebecca_riegeradv
          </a>
        </div>
      </motion.footer>
    </main>
  );
}
