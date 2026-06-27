import React from 'react';
import { ArrowRight, Users, TrendingUp, Target, Newspaper, Layers, CheckCircle2, ChevronRight, PlayCircle } from 'lucide-react';
import Logo from './components/ui/Logo';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-brand-500/20 text-slate-900 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="up-orb bg-hr-light/20 w-[600px] h-[600px] -top-[200px] -left-[100px]" />
        <div className="up-orb bg-crm-light/10 w-[500px] h-[500px] top-[30%] -right-[150px] animation-delay-2000" />
        <div className="up-orb bg-brand-500/10 w-[700px] h-[700px] -bottom-[300px] left-[10%]" />
      </div>

      {/* Premium Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group hover:scale-105 transition-transform">
             <Logo appName="" className="text-2xl" />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
             <a href="#ecosistema" className="hover:text-slate-900 transition-colors">Ecosistema</a>
             <a href="#vision" className="hover:text-slate-900 transition-colors">Nuestra Visión</a>
             <a href="#contacto" className="hover:text-slate-900 transition-colors">Compañía</a>
          </div>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-0.5">
            Solicitar Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md mb-8 hover:scale-105 transition-transform cursor-pointer">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-bold text-slate-700 tracking-tight">Ecosistema B2B Enterprise v2.0</span>
          </div>
          <h1 className="text-6xl md:text-[84px] font-black tracking-tighter text-slate-900 mb-8 leading-[1.05]">
            El sistema operativo para tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-hr via-crm to-brand-500">crecimiento.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            TalentUP unifica Recursos Humanos, Ventas, Reclutamiento e Inteligencia en una única plataforma diseñada obsesivamente para la productividad.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold text-lg shadow-xl shadow-slate-900/20 transition-all flex items-center justify-center gap-2 hover:scale-105">
              Solicitar Acceso Anticipado <ArrowRight size={20} />
            </button>
            <button className="w-full sm:w-auto h-14 px-8 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-full font-bold text-lg shadow-sm transition-all flex items-center justify-center gap-2 hover:scale-105">
              <PlayCircle size={20} className="text-slate-400"/> Ver Ecosistema en Acción
            </button>
          </div>
        </div>

        {/* Dashboard Preview / Mockup (Abstract representation) */}
        <div className="relative max-w-5xl mx-auto mb-32 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white p-2">
           <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-slate-50 opacity-50"></div>
           <div className="relative rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 aspect-[16/9] flex flex-col shadow-inner">
              {/* Fake Window Header */}
              <div className="h-14 border-b border-slate-200/60 bg-white/50 backdrop-blur flex items-center px-6 gap-2">
                 <div className="flex gap-2 mr-4">
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-200"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-200"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-slate-200"></div>
                 </div>
                 <div className="mx-auto bg-white rounded-lg h-8 w-72 border border-slate-200/60 flex items-center justify-center shadow-sm">
                    <span className="text-[11px] text-slate-400 font-semibold tracking-wider">talentup.com/dashboard</span>
                 </div>
                 <div className="ml-auto w-16"></div> {/* Spacer for symmetry */}
              </div>
              {/* Fake Content */}
              <div className="flex-1 p-8 flex gap-6">
                 {/* Sidebar */}
                 <div className="w-56 space-y-4">
                    <div className="h-10 bg-slate-200/50 rounded-xl w-full"></div>
                    <div className="h-10 bg-hr/10 rounded-xl w-4/5 border border-hr/20"></div>
                    <div className="h-10 bg-slate-200/50 rounded-xl w-full"></div>
                    <div className="h-10 bg-slate-200/50 rounded-xl w-5/6"></div>
                 </div>
                 {/* Main Area */}
                 <div className="flex-1 flex flex-col gap-6">
                    <div className="flex gap-6 h-36">
                       <div className="bg-white border border-slate-200 rounded-2xl flex-1 shadow-sm p-5 flex flex-col justify-between">
                          <div className="w-10 h-10 rounded-full bg-hr/10"></div>
                          <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                       </div>
                       <div className="bg-white border border-slate-200 rounded-2xl flex-1 shadow-sm p-5 flex flex-col justify-between">
                          <div className="w-10 h-10 rounded-full bg-crm/10"></div>
                          <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                       </div>
                       <div className="bg-white border border-slate-200 rounded-2xl flex-1 shadow-sm p-5 flex flex-col justify-between">
                          <div className="w-10 h-10 rounded-full bg-ats/10"></div>
                          <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                       </div>
                    </div>
                    <div className="flex-1 bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col gap-4">
                       <div className="h-6 bg-slate-100 rounded-md w-48 mb-2"></div>
                       <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Ecosystem Bento Grid */}
        <div id="ecosistema" className="text-center max-w-3xl mx-auto mb-16 pt-10">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Todo conectado. Sin fricción.</h2>
          <p className="text-xl text-slate-500">Un módulo para cada área de tu empresa, diseñados para hablar el mismo idioma.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* TalentUP HR */}
          <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-200 shadow-bento hover:shadow-2xl p-10 group overflow-hidden relative transition-all duration-500 hover:ring-2 hover:ring-hr/50">
            <div className="absolute inset-0 bg-gradient-to-br from-hr/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
               <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                 <Users className="text-hr" size={32} />
               </div>
               <h3 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
                 TalentUP <span className="text-hr">HR</span>
               </h3>
               <p className="text-slate-500 text-lg mb-8 max-w-md leading-relaxed">
                 El núcleo de tu equipo. Gestión de ausencias, control horario preciso, evaluación de desempeño y portal del empleado. Todo integrado en una interfaz que tus empleados amarán usar.
               </p>
               <div className="flex gap-4 mb-8">
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-200"><CheckCircle2 size={16} className="text-hr"/> Control Horario</span>
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-200"><CheckCircle2 size={16} className="text-hr"/> Desempeño</span>
               </div>
               <a href="https://talent-up-hr.vercel.app" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-lg bg-hr text-white hover:bg-hr-dark transition-all shadow-xl shadow-hr/20 hover:-translate-y-1 hover:shadow-2xl">
                 Explorar TalentUP HR <ArrowRight size={20} />
               </a>
            </div>
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
               <Users size={320} />
            </div>
          </div>

          {/* TalentUP CRM */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-bento hover:shadow-2xl p-10 group overflow-hidden relative transition-all duration-500 hover:ring-2 hover:ring-crm/50 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-crm/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
               <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                 <TrendingUp className="text-crm" size={32} />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                 TalentUP <span className="text-crm">CRM</span>
               </h3>
               <p className="text-slate-500 text-lg mb-6 leading-relaxed flex-1">
                 Ventas, pipeline y relaciones con clientes. Potencia tus ingresos conectando ventas con comisiones en HR.
               </p>
               <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-crm uppercase tracking-widest bg-crm/10 px-4 py-2.5 rounded-xl mt-auto w-fit">
                 En Desarrollo
               </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
               <TrendingUp size={240} />
            </div>
          </div>

          {/* TalentUP ATS */}
          <div className="bg-white rounded-[32px] border border-slate-200 shadow-bento hover:shadow-2xl p-10 group overflow-hidden relative transition-all duration-500 hover:ring-2 hover:ring-ats/50 flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-ats/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex flex-col h-full">
               <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                 <Target className="text-ats" size={32} />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                 TalentUP <span className="text-ats">ATS</span>
               </h3>
               <p className="text-slate-500 text-lg mb-6 leading-relaxed flex-1">
                 Atracción de talento, portales de empleo y embudos de contratación con IA para filtrar candidatos automáticamente.
               </p>
               <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-ats uppercase tracking-widest bg-ats/10 px-4 py-2.5 rounded-xl mt-auto w-fit">
                 En Desarrollo
               </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
               <Target size={240} />
            </div>
          </div>

          {/* TalentUP News */}
          <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-200 shadow-bento hover:shadow-2xl p-10 group overflow-hidden relative transition-all duration-500 hover:ring-2 hover:ring-news/50">
            <div className="absolute inset-0 bg-gradient-to-br from-news/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
               <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                 <Newspaper className="text-news" size={32} />
               </div>
               <h3 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
                 TalentUP <span className="text-news">News</span>
               </h3>
               <p className="text-slate-500 text-lg mb-8 max-w-md leading-relaxed">
                 La actualidad y reportes de inteligencia artificial aplicada al sector de los recursos humanos. Decisiones estratégicas basadas en datos de mercado.
               </p>
               <a href="https://jordialbarracin.github.io/TalentUP/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-lg bg-news text-white hover:bg-news-dark transition-all shadow-xl shadow-news/20 hover:-translate-y-1 hover:shadow-2xl">
                 Leer Publicaciones <ChevronRight size={20} />
               </a>
            </div>
            <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
               <Newspaper size={320} />
            </div>
          </div>

        </div>

      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
             <div className="md:col-span-2">
               <div className="flex items-center gap-3 mb-6">
                 <Logo appName="" className="text-2xl" />
               </div>
               <p className="text-slate-500 text-lg max-w-sm leading-relaxed">El sistema operativo definitivo para escalar empresas modernas. Todo integrado, cero burocracia.</p>
             </div>
             <div>
                <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Productos</h4>
                <ul className="space-y-4 text-[15px] font-medium text-slate-500">
                   <li><a href="https://talent-up-hr.vercel.app" className="hover:text-hr transition-colors">TalentUP HR</a></li>
                   <li><a href="#" className="hover:text-crm transition-colors flex items-center gap-2">TalentUP CRM <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full font-bold">PRONTO</span></a></li>
                   <li><a href="#" className="hover:text-ats transition-colors flex items-center gap-2">TalentUP ATS <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full font-bold">PRONTO</span></a></li>
                   <li><a href="https://jordialbarracin.github.io/TalentUP/" className="hover:text-news transition-colors">TalentUP News</a></li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">Empresa</h4>
                <ul className="space-y-4 text-[15px] font-medium text-slate-500">
                   <li><a href="#" className="hover:text-slate-900 transition-colors">Sobre Nosotros</a></li>
                   <li><a href="#" className="hover:text-slate-900 transition-colors">Contacto</a></li>
                   <li><a href="#" className="hover:text-slate-900 transition-colors">Privacidad</a></li>
                   <li><a href="#" className="hover:text-slate-900 transition-colors">Términos</a></li>
                </ul>
             </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
             <p className="text-slate-400 text-[15px] font-medium">© {new Date().getFullYear()} TalentUP Holding. Todos los derechos reservados.</p>
             <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer flex items-center justify-center text-slate-400 hover:text-slate-600">in</div>
                <div className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer flex items-center justify-center text-slate-400 hover:text-slate-600">tw</div>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
