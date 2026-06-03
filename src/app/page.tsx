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
    crates: "Crates.io (Rust)",
    demoTitle: "Demostración Interactiva de Datos & ETL",
    demoSubtitle: "Mucho más que un convertidor de texto. Optimización de tokens, estandarización de esquemas y preprocesamiento OCR en tiempo récord.",
    tabTerminal: "Simulador ETL (Rust Core)",
    tabTokens: "Compresión de Tokens",
    tabBinarization: "Binarización OCR (Fase 4)",
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
    crates: "Crates.io (Rust)",
    demoTitle: "Interactive Data & ETL Demo",
    demoSubtitle: "Much more than a text converter. Token optimization, schema standardization, and OCR preprocessing in record time.",
    tabTerminal: "ETL Simulator (Rust Core)",
    tabTokens: "Token Compression",
    tabBinarization: "OCR Binarization (Phase 4)",
  }
};

interface CardProps {
  title: string;
  children: React.ReactNode;
  orangeLine?: boolean;
}

const Card = ({ title, children, orangeLine = false }: CardProps) => (
  <div className={`relative bg-[#0d0d0d] border border-white/5 p-8 rounded-2xl backdrop-blur-xl shadow-2xl transition-all hover:border-orange-500/30 group ${orangeLine ? 'border-t-orange-500 border-t-2' : ''}`}>
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{title}</h3>
    <div className="text-gray-400 leading-relaxed font-light">{children}</div>
  </div>
);

interface CodeBlockProps {
  children: React.ReactNode;
  terminalLabel?: string;
}

const CodeBlock = ({ children, terminalLabel = "Terminal / CLI" }: CodeBlockProps) => (
  <div className="bg-[#050505] border border-white/10 rounded-xl p-6 font-mono text-sm text-gray-300 overflow-x-auto my-6 shadow-inner relative group">
    <div className="absolute top-2 right-4 text-[10px] text-gray-600 uppercase font-bold tracking-widest group-hover:text-orange-500 transition-colors">{terminalLabel}</div>
    {children}
  </div>
);

export default function Home() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const [demoTab, setDemoTab] = useState<'terminal' | 'tokens' | 'binarization'>('terminal');
  const [sliderVal, setSliderVal] = useState<number>(50);
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 font-sans">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-600 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-900 rounded-full blur-[120px]"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-[#050505]/50">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter italic uppercase text-white">BGUST<span className="text-orange-500">DOWN</span></div>
          <div className="hidden md:flex gap-10 text-sm font-medium text-gray-400">
            <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="text-orange-500 font-bold border border-orange-500/30 px-3 py-1 rounded hover:bg-orange-500/10 transition-all text-[10px] uppercase tracking-widest">
              {t.langBtn}
            </button>
            <a href="#about" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px] pt-1">{t.visionTitle}</a>
            <a href="#demo" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px] pt-1">{lang === 'es' ? "DEMO ETL" : "ETL DEMO"}</a>
            <a href="#install" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px] pt-1">{t.installTitle}</a>
            <a href="#docs" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px] pt-1">{t.docs}</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">v0.1.4 Stable</span>
            <a href="https://github.com/B-GUST/bgustdown" className="px-6 py-2 bg-white text-black text-[10px] font-black rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 uppercase tracking-widest">{t.git}</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
            {t.cta} (v0.1.4)
          </a>
          <a href="https://doi.org/10.5281/zenodo.20090926" className="w-full md:w-auto px-8 py-5 bg-[#111] border border-white/10 rounded-2xl font-mono text-sm text-gray-400 flex items-center justify-center gap-4 hover:border-orange-500/50 transition-colors">
            <span className="text-orange-500">DOI:</span> 10.5281/zenodo.20090926
          </a>
        </div>
      </section>

      {/* Vision Section */}
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
                <Card title="Context Optimization" orangeLine>
                  <p className="text-xs uppercase tracking-widest mb-2 text-orange-500 font-bold">Reduction</p>
                  <p className="text-sm">Saves up to 70% context tokens for LLM inferences.</p>
                  <p className="text-xs uppercase tracking-widest mt-4 mb-2 text-orange-500 font-bold">Standardization</p>
                  <p className="text-sm">Formats data to clean JSONL and Apache Arrow ETL pipelines.</p>
                </Card>
             </div>
          </div>
        </div>
      </section>

      {/* NEW Interactive Demo & ETL Section */}
      <section id="demo" className="container mx-auto px-6 py-32 border-t border-white/5 relative z-10 bg-[#070707]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{t.demoTitle}</h2>
            <p className="text-gray-400 font-light mt-4 max-w-3xl mx-auto">{t.demoSubtitle}</p>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button 
              onClick={() => setDemoTab('terminal')}
              className={`px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs border transition-all ${demoTab === 'terminal' ? 'bg-orange-600 border-orange-500 text-white shadow-[0_0_20px_rgba(255,85,0,0.3)]' : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'}`}
            >
              {t.tabTerminal}
            </button>
            <button 
              onClick={() => setDemoTab('tokens')}
              className={`px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs border transition-all ${demoTab === 'tokens' ? 'bg-orange-600 border-orange-500 text-white shadow-[0_0_20px_rgba(255,85,0,0.3)]' : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'}`}
            >
              {t.tabTokens}
            </button>
            <button 
              onClick={() => setDemoTab('binarization')}
              className={`px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs border transition-all ${demoTab === 'binarization' ? 'bg-orange-600 border-orange-500 text-white shadow-[0_0_20px_rgba(255,85,0,0.3)]' : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'}`}
            >
              {t.tabBinarization}
            </button>
          </div>

          {/* Tab Contents */}
          <div className="bg-[#0b0b0b] border border-white/5 rounded-3xl p-8 shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-between">
            {demoTab === 'terminal' && (
              <div className="flex flex-col justify-between h-full font-mono text-xs md:text-sm text-gray-400">
                <div>
                  <div className="text-orange-500 font-bold mb-4 uppercase tracking-widest text-[10px]">&gt; PIPELINE DE EXTRACCIÓN Y LIMPIEZA DE DATOS</div>
                  <div className="text-white">$ bgustdown convert ./noisy_invoice.pdf --standardize</div>
                  <div className="text-gray-500 mt-2">[10:02:11.45] CARGANDO CAPAS VECTORIALES DEL PDF... OK</div>
                  <div className="text-gray-500">[10:02:11.48] EJECUTANDO LIMPIEZA DE FORMATOS Y CARACTERES ESPECIALES... OK</div>
                  <div className="text-gray-500">[10:02:11.52] EXTRRAYENDO TABLAS ESTRUCTURADAS A RECORD BATCHES DE APACHE ARROW... OK</div>
                  <div className="text-orange-400">[10:02:11.55] NORMALIZANDO VALORES NUMÉRICOS Y FECHAS A ISO-8601... OK</div>
                  <div className="text-green-500 font-bold mt-2">[SUCCESS] CONVERSIÓN EN RUST TERMINADA EN 12.8ms. FORMATO LIMPIO A continuación:</div>
                </div>

                <div className="mt-6 border-t border-white/5 pt-6 text-gray-300">
                  <span className="text-orange-500 font-bold uppercase tracking-widest text-[10px] block mb-2">OUTPUT MARKDOWN GENERADO (NORMALIZADO):</span>
                  <pre className="bg-black/40 p-4 rounded-xl overflow-x-auto text-[11px] md:text-xs">
{`# Factura de Compra
* **Proveedor:** INTELLIDEEP LABS LTD. (ID: 884729)
* **Fecha:** 2026-06-03
* **Moneda:** USD

| Artículo | Cantidad | Precio Unitario | Total Normalizado |
| :--- | :--- | :--- | :--- |
| NLP Core Tokenizer | 1 | 120.50 | 120.50 |
| Dual-Engine Compiler | 2 | 800.00 | 1600.00 |`}
                  </pre>
                </div>
              </div>
            )}

            {demoTab === 'tokens' && (
              <div className="flex flex-col justify-around items-center h-full space-y-8">
                <div className="text-center">
                  <div className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-2">EFICIENCIA DE CONTEXTO</div>
                  <h3 className="text-2xl font-bold text-white uppercase">{lang === 'es' ? "Comparativa de consumo de tokens en LLMs" : "LLM Token Consumption Comparison"}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl">
                  {/* Raw PDF Card */}
                  <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-red-500 font-bold uppercase tracking-widest mb-1">{lang === 'es' ? "Documento Crudo / Sucio" : "Raw / Dirty Document"}</div>
                      <div className="text-4xl font-black text-white">14,250 <span className="text-xs font-light text-gray-500">Tokens</span></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                      {lang === 'es' 
                        ? "Incluye encabezados redundantes, tags HTML sucios, layouts anidados y espacios en blanco. Causa alucinaciones e incrementa costos de API." 
                        : "Includes redundant headers, messy HTML tags, nested layouts, and empty spaces. Causes hallucinations and increases API costs."}
                    </p>
                  </div>

                  {/* bgustdown Card */}
                  <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 flex flex-col justify-between shadow-[0_0_30px_rgba(34,197,94,0.1)] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-500 text-black font-black uppercase text-[8px] px-3 py-1 tracking-widest rounded-bl-lg">73% Ahorro</div>
                    <div>
                      <div className="text-xs text-green-500 font-bold uppercase tracking-widest mb-1">{lang === 'es' ? "Markdown Estandarizado (bgustdown)" : "Standardized Markdown (bgustdown)"}</div>
                      <div className="text-4xl font-black text-white">3,800 <span className="text-xs font-light text-gray-500">Tokens</span></div>
                    </div>
                    <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                      {lang === 'es' 
                        ? "Estructura optimizada, libre de ruidos, tablas compactas representadas en Arrow y texto limpio. Inferencia rápida, precisa y económica." 
                        : "Optimized structure, noise-free, compact tables represented in Arrow, and clean text. Fast, precise, and cost-effective inference."}
                    </p>
                  </div>
                </div>

                <div className="text-center text-xs text-gray-500 max-w-xl">
                  {lang === 'es' 
                    ? "Permite enviar un 3x más de documentos dentro del mismo límite de contexto del LLM de tu agente autónomo." 
                    : "Allows sending 3x more documents within the same LLM context window of your autonomous agent."}
                </div>
              </div>
            )}

            {demoTab === 'binarization' && (
              <div className="flex flex-col justify-between h-full space-y-6">
                <div>
                  <div className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-2">Binariazación de Imagen para OCR (Fase 4)</div>
                  <p className="text-xs text-gray-400">
                    {lang === 'es' 
                      ? "Mueve el control deslizante para observar cómo el preprocesador limpia sombras y arrugas de una captura de cámara para hacer legible el texto para el OCR." 
                      : "Drag the slider to see how the preprocessor cleans shadows and wrinkles from a camera scan to make text readable for the OCR."}
                  </p>
                </div>

                <div className="relative w-full max-w-2xl mx-auto h-64 border border-white/10 rounded-2xl overflow-hidden bg-white text-black font-mono">
                  {/* Clean Binarized Text Layer (Background) */}
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center p-6 bg-white select-none">
                    <div className="w-full text-center space-y-2">
                      <div className="text-lg font-bold text-black border-b-2 border-black pb-2 uppercase tracking-wide">BGUSTDOWN FACTURA ORIGINAL</div>
                      <div className="text-xs text-black">NÚMERO DE FACTURA: #8472901-A</div>
                      <div className="text-xs text-black">FECHA: 2026-06-03 — HORA: 10:40:15</div>
                      <div className="text-xs text-black font-bold">TOTAL A PAGAR: $1,720.50 USD</div>
                    </div>
                  </div>

                  {/* Noisy/Shadow Layer (Foreground, clipped by slider) */}
                  <div 
                    className="absolute top-0 left-0 h-full overflow-hidden bg-[#222] select-none flex flex-col justify-center items-center p-6 transition-all"
                    style={{ width: `${sliderVal}%`, borderRight: '2px solid rgb(249, 115, 22)' }}
                  >
                    <div className="w-[600px] text-center space-y-2 opacity-50 filter blur-[0.6px] text-white">
                      <div className="text-lg font-bold border-b-2 border-white/20 pb-2 uppercase tracking-wide">BGUSTDOWN FACTURA ORIGINAL</div>
                      <div className="text-xs">NÚMERO DE FACTURA: #8472901-A</div>
                      <div className="text-xs">FECHA: 2026-06-03 — HORA: 10:40:15</div>
                      <div className="text-xs font-bold">TOTAL A PAGAR: $1,720.50 USD</div>
                    </div>
                    {/* Shadow simulation */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-black/30 pointer-events-none"></div>
                  </div>
                </div>

                {/* Slider Input */}
                <div className="w-full max-w-md mx-auto flex items-center gap-4">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">{lang === 'es' ? "Procesada (Sauvola)" : "Clean (Sauvola)"}</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={sliderVal} 
                    onChange={(e) => setSliderVal(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest">{lang === 'es' ? "Foto Sucia" : "Dirty Photo"}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Installation Section */}
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

      {/* Skill Manual Section */}
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

      {/* Footer */}
      <footer className="bg-[#050505] py-32 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-12 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-black mb-4 uppercase tracking-tighter italic">BGUST<span className="text-orange-500">DOWN</span></div>
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">© 2026 B-GUST — v0.1.4 (Stable)</p>
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
