/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, Instagram, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // SUBSTITUA PELO SEU URL DO GOOGLE APPS SCRIPT
    const SCRIPT_URL = "SEU_URL_AQUI";

    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Necessário para Google Apps Script
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Como usamos no-cors, não conseguimos ler a resposta JSON, 
      // mas se não deu erro de rede, assumimos sucesso.
      setStatus("success");
      setFormData({ nome: "", telefone: "", email: "", mensagem: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <main className="text-center selection:bg-white/20">
      {/* Hero Section - Full Viewport Height */}
      <section className="min-h-screen bg-[#4A1018] flex flex-col items-center justify-center py-12 px-6 relative">
        {/* Top Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
            {/* Decorative background for logo */}
            <div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>
            <img 
              src="//public/logo.png" 
              alt="Rebecca Rieger Logo" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/logo/200/200";
              }}
              className="relative w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Header Section */}
        <motion.div 
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
          
          <h1 className="text-4xl md:text-6xl font-serif tracking-[0.2em] uppercase font-medium text-white">
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
          <p className="text-sm md:text-base font-serif italic text-white/70 tracking-wide mt-4">
            Especialista em Licitações e Contratos Administrativos
          </p>
          <p className="text-xs md:text-sm text-white/50 font-light leading-relaxed tracking-wider">
            Assessoria jurídica para empresas que querem crescer no mercado público
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Role para ver mais</p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* About Me Section - Lighter Background */}
      <section className="bg-[#5D1A22] py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left"
        >
          {/* Profile Image Container */}
          <div className="w-full md:w-1/2 max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src="/Rebecca.jpg" 
                alt="Rebecca Rieger" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/rebecca-rieger/800/800";
                }}
                className="relative w-full aspect-square object-cover border border-white/10 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Decorative frame element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-white/20"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-white/20"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-serif tracking-widest uppercase text-white/90">
                Quem sou eu
              </h2>
              <div className="h-[1px] w-24 bg-white/20 mx-auto md:mx-0"></div>
            </div>
            
            <div className="space-y-6 text-sm md:text-base text-white/70 font-light leading-relaxed tracking-wide">
              <p>
                Rebecca Rieger Soares de Almeida é advogada, graduada em Direito pela Universidade Católica Dom Bosco (UCDB) e pós-graduada em Licitações e Contratações Públicas pelo Centro de Ensino Renato Saraiva (CERS).
              </p>
              <p>
                Há mais de oito anos atua de forma especializada em licitações e contratos administrativos, reunindo experiência no Tribunal de Contas do Estado de Mato Grosso do Sul (TCE/MS) e na advocacia privada. 
              </p>
              <p>
                Presta assessoramento jurídico a empresas que atuam ou desejam atuar no mercado de contratações públicas, com enfoque em segurança jurídica, estratégia competitiva e acompanhamento técnico em todas as etapas das licitações e da execução contratual.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Areas of Expertise Section - Dark Background */}
      <section className="bg-[#4A1018] py-24 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif tracking-widest uppercase text-white/90">
              Áreas de Atuação
            </h2>
            <div className="h-[1px] w-24 mx-auto bg-white/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Assessoria em Licitações e Contratos",
                description: "Suporte jurídico estratégico para empresas em licitações públicas e contratos administrativos, com foco em segurança, conformidade e resultados."
              },
              {
                title: "Representação em Licitações",
                description: "Atuação em licitações presenciais e eletrônicas, com acompanhamento técnico em todas as etapas do certame."
              },
              {
                title: "Análise de Editais",
                description: "Exame detalhado de editais, com identificação de riscos, exigências irregulares e oportunidades estratégicas."
              },
              {
                title: "Impugnações e Esclarecimentos",
                description: "Elaboração de impugnações e pedidos de esclarecimento para garantir maior segurança e competitividade na disputa."
              },
              {
                title: "Recursos Administrativos",
                description: "Produção de recursos, contrarrazões e pedidos de reconsideração com fundamentação técnica e jurídica."
              },
              {
                title: "Defesa em Processos Sancionatórios e de Responsabilização",
                description: "Atuação na defesa de empresas em processos de penalização e responsabilização administrativa."
              },
              {
                title: "Reequilíbrio Contratual",
                description: "Pedidos de reequilíbrio econômico-financeiro e revisão contratual para preservação da execução e da viabilidade do contrato."
              },
              {
                title: "Atuação perante Órgãos de Controle",
                description: "Representações e acompanhamento de demandas junto aos órgãos de controle e fiscalização."
              },
              {
                title: "Medidas Judiciais",
                description: "Atuação em mandados de segurança e demais medidas judiciais relacionadas a licitações e contratos administrativos."
              },
              {
                title: "Defesas Judiciais",
                description: "Defesa de interesses em ações cíveis e criminais envolvendo licitações públicas e contratos administrativos."
              },
              {
                title: "Pareceres Jurídicos",
                description: "Elaboração de pareceres técnicos para orientar decisões com segurança jurídica e respaldo especializado."
              },
              {
                title: "Treinamentos e Capacitações",
                description: "Cursos, treinamentos e capacitações voltados à prática das licitações e contratos administrativos."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors space-y-3 group"
              >
                <h3 className="text-lg font-serif text-white/90 group-hover:text-white transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-white/50 font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section - Lighter Background */}
      <section className="bg-[#5D1A22] py-24 px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-widest uppercase">
              <span className="block text-white/60 text-xl md:text-2xl mb-2">Entrar em</span>
              <span className="text-white">Contato</span>
            </h2>
            <div className="h-[2px] w-16 bg-white/20 mx-auto"></div>
            
            <div className="space-y-4">
              <a 
                href="mailto:rebeccariegersoares@gmail.com" 
                className="text-lg md:text-xl font-medium text-white hover:text-white/80 transition-colors"
              >
                rebeccariegersoares@gmail.com
              </a>
              <p className="text-sm md:text-base text-white/50 max-w-lg mx-auto font-light leading-relaxed">
                Você merece um atendimento personalizado. Nosso maior propósito é contribuir para fazer o melhor por você e para seu negócio.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Nome" 
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Telefone" 
                required
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
              <input 
                type="email" 
                placeholder="E-mail" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
              <textarea 
                placeholder="Mensagem" 
                rows={6}
                required
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                className="w-full bg-white/5 border border-white/10 p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full bg-white/10 hover:bg-white/20 disabled:bg-white/5 text-white uppercase tracking-[0.3em] text-xs py-5 transition-all font-medium border border-white/10 flex items-center justify-center gap-3"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Enviando...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={16} className="text-green-400" />
                  Mensagem Enviada!
                </>
              ) : status === "error" ? (
                "Erro ao enviar. Tente novamente."
              ) : (
                "Enviar Mensagem"
              )}
            </button>
          </form>

          {/* Social Links Mini Footer */}
          <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-[10px] tracking-[0.2em] uppercase text-white/40 border-t border-white/5">
            <a href="tel:67981621752" className="hover:text-white transition-colors">(67) 98162-1752</a>
            <div className="hidden md:block h-3 w-[1px] bg-white/10"></div>
            <a href="https://instagram.com/rebecca_riegeradv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@rebecca_riegeradv</a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
