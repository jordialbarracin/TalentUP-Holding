import React from 'react';
import { ArrowRight, Users, TrendingUp, Target, Newspaper, Layers } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-500/20 text-slate-900 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="up-orb bg-hr-light/20 w-[600px] h-[600px] -top-[200px] -left-[100px]" />
        <div className="up-orb bg-crm-light/10 w-[500px] h-[500px] top-[30%] -right-[150px] animation-delay-2000" />
        <div className="up-orb bg-brand-500/10 w-[700px] h-[700px] -bottom-[300px] left-[10%]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 pt-8 px-6 max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg">
            <Layers className="text-white" size={20} />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">TalentUP</span>
        </div>
        <button className="bg-white border border-slate-200 text-slate-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm">
          Join Waitlist
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Ecosistema B2B en construcción
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            El sistema operativo para tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-hr via-crm to-brand-500">empresa.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto">
            TalentUP unifica Recursos Humanos, Ventas, Reclutamiento e Inteligencia en una única plataforma con una experiencia de usuario que enamora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold shadow-xl shadow-slate-900/20 transition-all flex items-center justify-center gap-2">
              Solicitar Acceso Anticipado <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full font-bold shadow-sm transition-all">
              Conocer más
            </button>
          </div>
        </div>

        {/* Ecosystem Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* TalentUP HR */}
          <div className="lg:col-span-2 bento-card bento-hover p-8 group overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-hr/10 flex items-center justify-center mb-6">
              <Users className="text-hr" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              TalentUP <span className="text-hr">HR</span>
            </h3>
            <p className="text-slate-500 mb-6 max-w-md relative z-10">
              Gestión de ausencias, control horario, desempeño y portal del empleado. Todo lo que tu equipo necesita en un solo lugar.
            </p>
            <a href="https://talent-up-hr.vercel.app" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-hr hover:text-hr-dark transition-colors relative z-10">
              Explorar producto <ArrowRight size={16} />
            </a>
            
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500 pointer-events-none z-0">
               <Users size={200} />
            </div>
          </div>

          {/* TalentUP CRM */}
          <div className="bento-card bento-hover p-8 group overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-crm/10 flex items-center justify-center mb-6">
              <TrendingUp className="text-crm" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              TalentUP <span className="text-crm">CRM</span>
            </h3>
            <p className="text-slate-500 mb-6 relative z-10">
              Ventas, pipeline y relaciones con clientes. Potencia tus ingresos.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full relative z-10">
              Próximamente
            </div>
            
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500 pointer-events-none z-0">
               <TrendingUp size={150} />
            </div>
          </div>

          {/* TalentUP ATS */}
          <div className="bento-card bento-hover p-8 group overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-ats/10 flex items-center justify-center mb-6">
              <Target className="text-ats" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              TalentUP <span className="text-ats">ATS</span>
            </h3>
            <p className="text-slate-500 mb-6 relative z-10">
              Atracción de talento, ofertas de empleo y embudos de contratación.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full relative z-10">
              Próximamente
            </div>
            
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500 pointer-events-none z-0">
               <Target size={150} />
            </div>
          </div>

          {/* TalentUP News */}
          <div className="lg:col-span-2 bento-card bento-hover p-8 group overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-news/10 flex items-center justify-center mb-6">
              <Newspaper className="text-news" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              TalentUP <span className="text-news">News</span>
            </h3>
            <p className="text-slate-500 mb-6 max-w-md relative z-10">
              Actualidad, reportes e inteligencia artificial aplicada al sector de los recursos humanos. Mantente un paso por delante.
            </p>
            <a href="https://jordialbarracin.github.io/TalentUP/" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-news hover:text-news-dark transition-colors relative z-10">
              Leer noticias <ArrowRight size={16} />
            </a>
            
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-500 pointer-events-none z-0">
               <Newspaper size={200} />
            </div>
          </div>

        </div>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <Layers className="text-white" size={16} />
            </div>
            <span className="font-bold text-slate-900 tracking-tight">TalentUP Ecosystem</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 TalentUP Holding. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
