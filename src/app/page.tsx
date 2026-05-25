import React from 'react';

const Card = ({ title, children, orangeLine = false }) => (
  <div className="relative bg-[#0d0d0d] border border-white/5 p-8 rounded-2xl backdrop-blur-xl shadow-2xl transition-all hover:border-orange-500/30 group ${orangeLine ? 'border-t-orange-500 border-t-2' : ''}">
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
            <a href="#install" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px]">Instalación</a>
            <a href="#docs" className="hover:text-orange-500 transition-colors uppercase tracking-[0.2em] text-[10px]">Documentación</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">v0.1.1 Stable</span>
            <a href="https://github.com/B-GUST/bgustdown" className="px-6 py-2 bg-white text-black text-[10px] font-black rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 uppercase tracking-widest">GitHub</a>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-6 pt-52 pb-32 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-8 border border-orange-500/20 bg-orange-500/5 rounded-full">
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase">High Performance Data Engineering</span>
        </div>
        <h1 className="text-6xl md:text-[120px] font-black mb-10 tracking-tighter leading-[0.85] bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
          ENGINEERED FOR <br/><span className="text-orange-500 italic uppercase font-black">AI SPEED.</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed mb-16 px-4">
          La infraestructura definitiva en <span className="text-white border-b border-orange-500/50">Rust</span>. Convierte documentos complejos en inteligencia semántica lista para LLMs.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center px-4">
          <a href="#install" className="w-full md:w-auto px-12 py-5 bg-orange-600 text-white font-black rounded-2xl hover:bg-orange-500 shadow-[0_0_40px_rgba(255,85,0,0.4)] transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm">
            Empieza Ahora (v0.1.1)
          </a>
          <div className="w-full md:w-auto px-8 py-5 bg-[#111] border border-white/10 rounded-2xl font-mono text-sm text-gray-400 flex items-center gap-4 shadow-2xl">
            <span className="text-orange-500">$</span> npm install bgustdown
          </div>
        </div>
      </section>

      <section id="install" className="container mx-auto px-6 py-32 border-t border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-12 uppercase tracking-tighter italic">Vías de <span className="text-orange-500">Instalación</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-orange-500 font-bold uppercase text-xs tracking-widest">// Estandarizado (Skill)</h3>
              <p className="text-gray-400 text-sm font-light">Para agentes IA que utilicen el sistema de plugins y skills nativos.</p>
              <CodeBlock>npx skill add https://github.com/B-GUST/bgustdown</CodeBlock>
            </div>
            <div className="space-y-6">
              <h3 className="text-orange-500 font-bold uppercase text-xs tracking-widest">// Código Fuente (Contribuyentes)</h3>
              <p className="text-gray-400 text-sm font-light">Para clonar el motor en Rust, ejecutar benchmarks o realizar pull requests.</p>
              <CodeBlock>git clone https://github.com/B-GUST/bgustdown.git</CodeBlock>
            </div>
          </div>
        </div>
      </section>

      <section id="docs" className="container mx-auto px-6 py-32 border-t border-white/5 relative z-10 bg-[#070707]/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter italic">Manual de <span className="text-orange-500">Uso Oficial</span></h2>
          
          <div className="space-y-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <h3 className="text-xs font-black text-orange-500 tracking-[0.4em] uppercase text-white">1. Conversión a Markdown</h3>
              </div>
              <p className="text-xl text-gray-300 mb-6 font-light leading-relaxed italic">Transforma cualquier archivo PDF, DOCX o XLSX en un Markdown estructurado listo para tu RAG.</p>
              <CodeBlock>npx bgustdown convert ./documento.pdf</CodeBlock>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <h3 className="text-xs font-black text-orange-500 tracking-[0.4em] uppercase">2. Preparación Semántica</h3>
              </div>
              <p className="text-xl text-gray-300 mb-6 font-light leading-relaxed italic">Segmenta y limpia el texto automáticamente para tareas de entrenamiento (NLP).</p>
              <CodeBlock>npx bgustdown prepare ./legal_text.docx</CodeBlock>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <h3 className="text-xs font-black text-orange-500 tracking-[0.4em] uppercase">3. Integración en Node.js</h3>
              </div>
              <CodeBlock>
                {`const { Bgustdown } = require('bgustdown');\n`}
                {`const client = new Bgustdown();\n\n`}
                {`// Convierte documentos en milisegundos\n`}
                {`const md = await client.convert('archivo.pdf');`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#050505] py-32 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-12 md:mb-0 text-center md:text-left">
            <div className="text-3xl font-black mb-4 uppercase tracking-tighter italic">BGUST<span className="text-orange-500">DOWN</span></div>
            <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">© 2026 B-GUST — v0.1.1 (NPM/GitHub/Zenodo)</p>
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
