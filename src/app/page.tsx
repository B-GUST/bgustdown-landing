"use client";

import React, { useState } from 'react';

const content = {
  es: {
    heroTitle: "INGENIERÍA DE",
    heroSubtitle: "VELOCIDAD IA.",
    heroText: "La infraestructura definitiva en Rust para la ingesta de datos. Convierte documentos complejos en inteligencia semántica lista para LLMs.",
    cta: "Empieza Ahora",
    installTitle: "Vías de Instalación",
    visionTitle: "Nuestra Visión",
    visionText: "bgustdown nace para eliminar los cuellos de botella en los pipelines de IA. Mientras otros ven documentos, nosotros vemos inteligencia semántica pura. Nuestra misión es proporcionar una capa de datos industrial, ultra-rápida y precisa que sirva como el primer eslabón en el entrenamiento de modelos de lenguaje de próxima generación.",
    skillManualTitle: "Manual de la Skill / CLI",
    langBtn: "English Version",
    docs: "Documentación",
    cap: "Capacidades",
    git: "GitHub",
    zenodo: "Archivo Zenodo",
    npm: "Registro NPM",
    crates: "Crates.io (Rust)"
  },
  en: {
    heroTitle: "ENGINEERED FOR",
    heroSubtitle: "AI SPEED.",
    heroText: "The ultimate Rust-powered infrastructure for data ingestion. Transform complex documents into semantic intelligence ready for LLMs.",
    cta: "Get Started",
    installTitle: "Installation Methods",
    visionTitle: "Our Vision",
    visionText: "bgustdown was built to eliminate bottlenecks in AI pipelines. Where others see documents, we see raw semantic intelligence. Our mission is to provide an industrial-grade, ultra-fast, and precise data layer that serves as the foundation for training next-generation language models.",
    skillManualTitle: "Skill / CLI Manual",
    langBtn: "Versión Español",
    docs: "Documentation",
    cap: "Capabilities",
    git: "GitHub",
    zenodo: "Zenodo Archive",
    npm: "NPM Registry",
    crates: "Crates.io (Rust)"
  }
};

const Card = ({ title, children, orangeLine = false }) => (
  <div className={`relative bg-[#0d0d0d] border border-white/5 p-8 rounded-2xl backdrop-blur-xl shadow-2xl transition-all hover:border-orange-500/30 group ${orangeLine ? 'border-t-orange-500 border-t-2' : ''}`}>
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{title}</h3>
    <div className="text-gray-400 leading-relaxed font-light">{children}</div>
  </div>
);

const CodeBlock = ({ children }) => (
  <div className="bg-[#050505] border border-white/10 rounded-xl p-6 font-mono text-sm text-gray-300 overflow-x-auto my-6 shadow-inner relative group">
    <div className="absolute top-2 right-4 text-[10px] text-gray-600 uppercase font-bold tracking-widest group-hover:text-orange-500 transition-colors">Terminal / CLI</div>
    {children}
  </div>
);

export default function Home() {
  const [lang, setLang] = useState('es');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-600 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-900 rounded-full blur-[120px]"></div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-[#050505]/50">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter italic uppercase text-white">BGUST<span className="text-orange-500">DOWN</span></div>
          <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
            <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="text-orange-500 font-bold border border-orange-500/30 px-3 py-1 rounded hover:bg-orange-500/10 transition-all text-[10px] uppercase tracking-widest">
              {t.langBtn}
            </button>
            <a href="#about" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px] pt-1">{t.visionTitle}</a>
            <a href="#install" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px] pt-1">{t.installTitle}</a>
            <a href="#docs" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px] pt-1">{t.docs}</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">v0.1.2 Stable</span>
            <a href="https://github.com/B-GUST/bgustdown" className="px-6 py-2 bg-white text-black text-[10px] font-black rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 uppercase tracking-widest">{t.git}</a>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 pt-52 pb-32 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-8 border border-orange-500/20 bg-orange-500/5 rounded-full">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase">High Performance Data Engineering</span>
        </div>
        <h1 className="text-6xl md:text-[120px] font-black mb-10 tracking-tighter leading-[0.85] bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
          {t.heroTitle} <br/><span className="text-orange-500 italic uppercase font-black">{t.heroSubtitle}</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
          {t.heroText}
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4">
          <a href="#install" className="w-full md:w-auto px-12 py-5 bg-orange-600 text-white font-black rounded-2xl hover:bg-orange-500 shadow-[0_0_40px_rgba(255,85,0,0.4)] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm">
            {t.cta} (v0.1.2)
          </a>
          <a href="https://doi.org/10.5281/zenodo.20090926" className="w-full md:w-auto px-8 py-5 bg-[#111] border border-white/10 rounded-2xl font-mono text-sm text-gray-400 flex items-center justify-center gap-4 hover:border-orange-500/50 transition-colors">
            <span className="text-orange-500">DOI:</span> 10.5281/zenodo.20090926
          </a>
        </div>
      </section>

      <section id="about" className="container mx-auto px-6 py-32 border-t border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter italic"><span className="text-orange-500">/</span> {t.visionTitle}</h2>
          <div className="grid md:grid-cols-3 gap-12 items-start">
             <div className="md:col-span-2">
                <p className="text-2xl text-gray-300 font-light leading-relaxed mb-8 italic">
                  "{t.visionText}"
                </p>
             </div>
             <div className="space-y-6">
                <Card title="Dual-Layer Core" orangeLine>
                  <p className="text-xs uppercase tracking-widest mb-2 text-orange-500 font-bold">Layer 01</p>
                  <p className="text-sm">Universal Markdown Conversion.</p>
                  <p className="text-xs uppercase tracking-widest mt-4 mb-2 text-orange-500 font-bold">Layer 02</p>
                  <p className="text-sm">Semantic NLP Dataset Engine.</p>
                </Card>
             </div>
          </div>
        </div>
      </section>

      <section id="install" className="container mx-auto px-6 py-32 border-t border-white/5 relative z-10 bg-[#070707]/20">
        <div className="max-w-5xl mx-auto text-center mb-16">
           <h2 className="text-5xl font-black uppercase tracking-tighter">{t.installTitle}</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card title="Node.js / NPM">
              <p className="text-xs mb-4 text-gray-500">For web apps & TS pipelines.</p>
              <CodeBlock>npm install bgustdown</CodeBlock>
            </Card>
            <Card title="Rust / Cargo">
              <p className="text-xs mb-4 text-gray-500">For native high-speed ETL.</p>
              <CodeBlock>cargo add bgustdown</CodeBlock>
            </Card>
            <Card title="AI Skill">
              <p className="text-xs mb-4 text-gray-500">For LLM Agents & Plugins.</p>
              <CodeBlock>npx skill add https://github.com/B-GUST/bgustdown</CodeBlock>
            </Card>
            <Card title="Git Source">
              <p className="text-xs mb-4 text-gray-500">For core contributors.</p>
              <CodeBlock>git clone https://github.com/B-GUST/bgustdown.git</CodeBlock>
            </Card>
        </div>
      </section>

      <section id="docs" className="container mx-auto px-6 py-32 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter italic">{t.skillManualTitle}</h2>
          
          <div className="space-y-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <h3 className="text-xs font-black text-orange-500 tracking-[0.4em] uppercase text-white">{lang === 'es' ? "1. Conversión Universal" : "1. Universal Conversion"}</h3>
              </div>
              <CodeBlock>npx bgustdown convert ./file.pdf</CodeBlock>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <h3 className="text-xs font-black text-orange-500 tracking-[0.4em] uppercase">{lang === 'es' ? "2. Preparación Semántica" : "2. Semantic Preparation"}</h3>
              </div>
              <CodeBlock>npx bgustdown prepare ./data.docx</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] py-32 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-12 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-black mb-4 uppercase tracking-tighter italic">BGUST<span className="text-orange-500">DOWN</span></div>
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">© 2026 B-GUST — v0.1.2 (Stable)</p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
            <a href="https://doi.org/10.5281/zenodo.20090926" className="hover:text-orange-500 transition-all">{t.zenodo}</a>
            <a href="https://www.npmjs.com/package/bgustdown" className="hover:text-orange-500 transition-all">{t.npm}</a>
            <a href="https://crates.io/crates/bgustdown" className="hover:text-orange-500 transition-all">{t.crates}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
