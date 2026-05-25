import React from 'react';

const Card = ({ title, children, orangeLine = false }) => (
  <div className="relative bg-[#0d0d0d] border border-white/5 p-8 rounded-2xl backdrop-blur-xl shadow-2xl transition-all hover:border-orange-500/30 group ${orangeLine ? 'border-t-orange-500 border-t-2' : ''}">
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors uppercase tracking-tight">{title}</h3>
    <div className="text-gray-400 leading-relaxed font-light">{children}</div>
  </div>
);

const CodeBlock = ({ children }) => (
  <div className="bg-[#050505] border border-white/10 rounded-xl p-6 font-mono text-sm text-gray-300 overflow-x-auto my-6 shadow-inner relative group">
    <div className="absolute top-2 right-4 text-[10px] text-gray-600 uppercase font-bold tracking-widest group-hover:text-orange-500 transition-colors">Terminal / JS</div>
    {children}
  </div>
);

export default function Home() {
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
            <a href="#about" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px]">Visión</a>
            <a href="#docs" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px]">Instalación</a>
            <a href="#cli" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px]">Manual Skill</a>
          </div>
          <a href="https://github.com/B-GUST/bgustdown" className="px-6 py-2 bg-white text-black text-[10px] font-black rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 uppercase tracking-widest">GitHub Repo</a>
        </div>
      </nav>

      <section className="container mx-auto px-6 pt-52 pb-32 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-8 border border-orange-500/20 bg-orange-500/5 rounded-full">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase underline-offset-4 decoration-orange-500/50">Official Documentation</span>
        </div>
        <h1 className="text-6xl md:text-[120px] font-black mb-10 tracking-tighter leading-[0.85] bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
          DOCUMENT <br/><span className="text-orange-500 italic uppercase">ENGINEERING.</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
          La infraestructura definitiva en <span className="text-white border-b border-orange-500/50">Rust</span> para la ingesta de datos. Convierte documentos complejos en inteligencia semántica lista para LLMs y Fine-Tuning.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4">
          <a href="#docs" className="w-full md:w-auto px-12 py-5 bg-orange-600 text-white font-black rounded-2xl hover:bg-orange-500 shadow-[0_0_40px_rgba(255,85,0,0.4)] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm">
            Empieza Ahora
          </a>
          <div className="w-full md:w-auto px-8 py-5 bg-[#111] border border-white/10 rounded-2xl font-mono text-sm text-gray-400 flex items-center gap-4">
            <span className="text-orange-500">$</span> npm install bgustdown
          </div>
        </div>
      </section>

      <section id="about" className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Dual-Purpose <span className="text-orange-500">Core</span></h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-6">
              bgustdown no es solo un convertidor. Es un motor de datos de doble capa diseñado para eliminar los cuellos de botella en la era de la IA.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span><span className="text-orange-500 font-bold uppercase text-xs">Capa 1:</span> Conversión ultra-rápida a Markdown limpio.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                <span><span className="text-orange-500 font-bold uppercase text-xs">Capa 2:</span> Inteligencia semántica para preparación de datasets (BERT/BETO).</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <Card title="Velocidad Rust" orangeLine>
              <p>Basado en Tokio y Rust nativo. Procesa PDFs y Excels masivos en milisegundos, superando las limitaciones del GIL de Python.</p>
            </Card>
            <Card title="Capa de Datos Industrial">
              <p>Uso de Apache Arrow para el manejo eficiente de tablas y grandes volúmenes de datos estructurados en memoria.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="docs" className="container mx-auto px-6 py-32 border-t border-white/5 relative z-10 bg-[#070707]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter italic">Guía de <span className="text-orange-500">Integración</span></h2>
          
          <div className="space-y-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <h3 className="text-xs font-black text-orange-500 tracking-[0.4em] uppercase">Uso como Librería (NPM)</h3>
              </div>
              <p className="text-gray-400 mb-6 font-light leading-relaxed">Instala bgustdown para integrarlo directamente en tus aplicaciones de Node.js o TypeScript.</p>
              <CodeBlock>npm install bgustdown</CodeBlock>
              <CodeBlock>
                {`const { Bgustdown } = require('bgustdown');\n`}
                {`const client = new Bgustdown();\\n\\n`}
                {`// Convierte y limpia semánticamente\\n`}
                {`const markdown = await client.convert('mi-archivo.pdf');`}
              </CodeBlock>
            </div>

            <div id="cli">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <h3 className="text-xs font-black text-orange-500 tracking-[0.4em] uppercase">Uso como AI Skill / CLI</h3>
              </div>
              <p className="text-gray-400 mb-6 font-light leading-relaxed">
                bgustdown es "AI-native". Puedes instalarlo globalmente o clonar el repo en tu carpeta de skills para que tu agente IA pueda procesar archivos locales.
              </p>
              <CodeBlock>npm install -g bgustdown</CodeBlock>
              
              <div className="mt-10 space-y-8">
                <div className="border-l-2 border-orange-500/30 pl-6">
                  <h4 className="text-white font-bold mb-2 uppercase text-sm">1. Conversión Rápida</h4>
                  <p className="text-sm text-gray-500 mb-3 italic">Convierte cualquier documento a Markdown para alimentar el contexto de un LLM.</p>
                  <CodeBlock>npx bgustdown convert ./documento.pdf</CodeBlock>
                </div>
                <div className="border-l-2 border-orange-500/30 pl-6">
                  <h4 className="text-white font-bold mb-2 uppercase text-sm">2. Preparación de Datasets</h4>
                  <p className="text-sm text-gray-500 mb-3 italic">Genera una lista de oraciones limpias y segmentadas en JSON para fine-tuning.</p>
                  <CodeBlock>npx bgustdown prepare ./ley_constitucional.docx</CodeBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] py-32 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-12 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-black mb-4 uppercase tracking-tighter italic">BGUST<span className="text-orange-500">DOWN</span></div>
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">© 2026 B-GUST — ENGINEERING EXCELLENCE</p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
            <a href="https://zenodo.org" className="hover:text-orange-500 transition-colors underline decoration-orange-500/20 underline-offset-8">Zenodo Archive</a>
            <a href="https://orcid.org" className="hover:text-orange-500 transition-colors underline decoration-orange-500/20 underline-offset-8">ORCID Record</a>
            <a href="https://www.npmjs.com/package/bgustdown" className="hover:text-orange-500 transition-colors underline decoration-orange-500/20 underline-offset-8">NPM Registry</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
