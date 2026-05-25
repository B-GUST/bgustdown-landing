import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-neon-orange selection:text-black">
      {/* Background Animation */}
      <div className="bg-animation">
        <div className="glow-orb top-1/4 left-1/4"></div>
        <div className="glow-orb"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter neon-text">
          bgust<span className="neon-accent">down</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light">
          El motor de conversión de documentos definitivo para la era de la IA. De PDF, DOCX y XLSX a <span className="text-white">Markdown y Datasets NLP</span> en milisegundos.
        </p>
        
        <div className="flex gap-4">
          <a href="#quickstart" className="neon-button px-8 py-3 rounded-md font-bold uppercase tracking-wider">
            Quick Start
          </a>
          <a href="https://github.com/tu-usuario/bgustdown" target="_blank" className="glass-panel px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors">
            GitHub
          </a>
        </div>

        {/* Abstract Animation Representation */}
        <div className="mt-20 flex items-center justify-center gap-8 opacity-70">
          <div className="text-sm font-mono text-gray-500 border border-gray-800 p-3 rounded">.pdf / .docx</div>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-neon-orange to-transparent animate-pulse"></div>
          <div className="text-lg font-bold neon-accent font-mono">bgustdown</div>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-neon-orange to-transparent animate-pulse"></div>
          <div className="text-sm font-mono text-gray-500 border border-gray-800 p-3 rounded">.md / .jsonl</div>
        </div>
      </section>

      {/* Pitch Section */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center"><span className="neon-accent">/</span> El Problema que Resolvemos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Velocidad Extrema</h3>
            <p className="text-gray-400">Escrito 100% en Rust. Sin bloqueos de GIL. Procesa documentos complejos y hojas de cálculo masivas en fracciones de segundo.</p>
          </div>
          <div className="glass-panel p-8 rounded-xl border-t-2 border-t-neon-orange">
            <h3 className="text-xl font-bold mb-4">Inteligencia NLP</h3>
            <p className="text-gray-400">No es solo texto plano. Limpia el ruido semántico y segmenta oraciones preservando el contexto bidireccional, listo para fine-tuning de BERT.</p>
          </div>
          <div className="glass-panel p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Zero Dependencies</h3>
            <p className="text-gray-400">Instalación nativa vía NPM. Sin necesidad de configurar pesados entornos virtuales de Python ni dependencias de sistema complicadas.</p>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section id="quickstart" className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8"><span className="neon-accent">/</span> Primeros Pasos</h2>
          
          <div className="glass-panel p-6 rounded-lg mb-8 font-mono text-sm overflow-x-auto">
            <span className="text-gray-500"># Instala la librería nativa</span><br/>
            <span className="text-neon-orange">npm</span> install bgustdown
          </div>

          <div className="glass-panel p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <span className="text-gray-500">// Extrae, limpia y segmenta en 3 líneas</span><br/>
            <span className="text-blue-400">const</span> {'{ Bgustdown }'} = <span className="text-yellow-200">require</span>(<span className="text-green-400">'bgustdown'</span>);<br/><br/>
            <span className="text-blue-400">async function</span> <span className="text-yellow-200">process</span>() {'{'}<br/>
            &nbsp;&nbsp;<span className="text-blue-400">const</span> client = <span className="text-blue-400">new</span> Bgustdown();<br/>
            &nbsp;&nbsp;<span className="text-blue-400">const</span> md = <span className="text-blue-400">await</span> client.<span className="text-yellow-200">convert</span>(<span className="text-green-400">'./ley.pdf'</span>);<br/>
            &nbsp;&nbsp;<span className="text-blue-400">const</span> dataset = client.<span className="text-yellow-200">prepareTrainingData</span>(md, <span className="text-green-400">'legal'</span>, <span className="text-green-400">'domain'</span>);<br/>
            &nbsp;&nbsp;<span className="text-blue-400">console</span>.<span className="text-yellow-200">log</span>(dataset);<br/>
            {'}'}
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-600 text-sm border-t border-gray-900 mt-20">
        <p>Built for the open-source community by bgust.</p>
        <p className="mt-2 text-xs opacity-50">Inspirado por la arquitectura conceptual de Microsoft MarkItDown (MIT).</p>
      </footer>
    </main>
  );
}
