import React from 'react';
import { ArrowRight, Users, TrendingUp, Target, Newspaper, Layers, CheckCircle2, ChevronRight, PlayCircle, BarChart3, Briefcase, Activity } from 'lucide-react';
import Logo from './components/ui/Logo';
import AppSwitcher from './components/ui/AppSwitcher';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-brand-500/20 text-slate-900 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bg-[#4F46E5]/10 w-[600px] h-[600px] rounded-full blur-3xl -top-[200px] -left-[100px] animate-pulse duration-[3000ms]" />
        <div className="absolute bg-[#F97316]/10 w-[500px] h-[500px] rounded-full blur-3xl top-[30%] -right-[150px]" />
        <div className="absolute bg-[#3b82f6]/10 w-[700px] h-[700px] rounded-full blur-3xl -bottom-[300px] left-[10%]" />
      </div>

      {/* Premium Floating Navbar */}
      <nav className="fixed top-6 w-full z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-full h-20 flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center gap-3 cursor-pointer group hover:scale-105 transition-transform">
               <Logo appName="" className="text-2xl" />
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
               <a href="#ecosistema" className="hover:text-slate-900 transition-colors">Ecosistema</a>
               <a href="#vision" className="hover:text-slate-900 transition-colors">Nuestra Visión</a>
               <a href="#contacto" className="hover:text-slate-900 transition-colors">Compañía</a>
            </div>
            <div className="flex items-center gap-4">
              <AppSwitcher />
              <button className="hidden md:block bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-0.5">
                Solicitar Demo
              </button>
            </div>
          </div>
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

        {/* Realistic Ecosystem Mockup */}
        <div className="relative max-w-6xl mx-auto mb-40 z-10 perspective-1000">
           <EcosystemMockup />
        </div>

        {/* Ecosystem Bento Grid */}
        <div id="ecosistema" className="text-center max-w-3xl mx-auto mb-16 pt-10">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Todo conectado. Sin fricción.</h2>
          <p className="text-xl text-slate-500">Un módulo para cada área de tu empresa, diseñados para hablar el mismo idioma.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* TalentUP HR */}
          <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-[#4F46E5]/10 p-10 group overflow-hidden relative transition-all duration-500 hover:ring-1 hover:ring-[#4F46E5]/20 cursor-pointer">
            <div className="relative z-10">
               <div className="w-16 h-16 rounded-2xl bg-[#4F46E5]/10 shadow-sm border border-[#4F46E5]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                 <Users className="text-[#4F46E5]" size={32} />
               </div>
               <h3 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
                 TalentUP <span className="text-[#4F46E5]">HR</span>
               </h3>
               <p className="text-slate-500 text-lg mb-8 max-w-md leading-relaxed">
                 El núcleo de tu equipo. Gestión de ausencias, control horario preciso, evaluación de desempeño y portal del empleado. Todo integrado en una interfaz que tus empleados amarán usar.
               </p>
               <div className="flex gap-4 mb-8">
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-200"><CheckCircle2 size={16} className="text-[#4F46E5]"/> Control Horario</span>
                  <span className="inline-flex items-center gap-2 text-[13px] font-bold tracking-wide text-slate-600 bg-slate-50 px-4 py-2 rounded-full border border-slate-200"><CheckCircle2 size={16} className="text-[#4F46E5]"/> Desempeño</span>
               </div>
               <a href="https://talent-up-hr.vercel.app" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-lg bg-[#4F46E5] text-white hover:bg-[#4338CA] transition-all shadow-xl shadow-[#4F46E5]/20 group-hover:-translate-y-1 group-hover:shadow-2xl">
                 Explorar TalentUP HR <ArrowRight size={20} />
               </a>
            </div>
            <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
               <Users size={320} className="text-[#4F46E5]" />
            </div>
          </div>

          {/* TalentUP CRM */}
          <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-[#F97316]/10 p-10 group overflow-hidden relative transition-all duration-500 hover:ring-1 hover:ring-[#F97316]/20 flex flex-col cursor-pointer">
            <div className="relative z-10 flex flex-col h-full">
               <div className="w-16 h-16 rounded-2xl bg-[#F97316]/10 shadow-sm border border-[#F97316]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                 <TrendingUp className="text-[#F97316]" size={32} />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                 TalentUP <span className="text-[#F97316]">CRM</span>
               </h3>
               <p className="text-slate-500 text-lg mb-6 leading-relaxed flex-1">
                 Ventas, pipeline y relaciones con clientes. Potencia tus ingresos conectando ventas con comisiones en HR.
               </p>
               <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#F97316] uppercase tracking-widest bg-[#F97316]/10 px-4 py-2.5 rounded-xl mt-auto w-fit">
                 Próximamente
               </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
               <TrendingUp size={240} className="text-[#F97316]" />
            </div>
          </div>

          {/* TalentUP ATS */}
          <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-[#9333ea]/10 p-10 group overflow-hidden relative transition-all duration-500 hover:ring-1 hover:ring-[#9333ea]/20 flex flex-col cursor-pointer">
            <div className="relative z-10 flex flex-col h-full">
               <div className="w-16 h-16 rounded-2xl bg-[#9333ea]/10 shadow-sm border border-[#9333ea]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                 <Target className="text-[#9333ea]" size={32} />
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                 TalentUP <span className="text-[#9333ea]">ATS</span>
               </h3>
               <p className="text-slate-500 text-lg mb-6 leading-relaxed flex-1">
                 Atracción de talento, portales de empleo y embudos de contratación con IA para filtrar candidatos automáticamente.
               </p>
               <div className="inline-flex items-center justify-center gap-2 text-xs font-bold text-[#9333ea] uppercase tracking-widest bg-[#9333ea]/10 px-4 py-2.5 rounded-xl mt-auto w-fit">
                 Próximamente
               </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
               <Target size={240} className="text-[#9333ea]" />
            </div>
          </div>

          {/* TalentUP News */}
          <div className="lg:col-span-2 bg-white rounded-[32px] border border-slate-200/60 shadow-sm hover:shadow-2xl hover:shadow-[#3b82f6]/10 p-10 group overflow-hidden relative transition-all duration-500 hover:ring-1 hover:ring-[#3b82f6]/20 cursor-pointer">
            <div className="relative z-10">
               <div className="w-16 h-16 rounded-2xl bg-[#3b82f6]/10 shadow-sm border border-[#3b82f6]/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                 <Newspaper className="text-[#3b82f6]" size={32} />
               </div>
               <h3 className="text-3xl font-black text-slate-900 mb-4 flex items-center gap-3">
                 TalentUP <span className="text-[#3b82f6]">News</span>
               </h3>
               <p className="text-slate-500 text-lg mb-8 max-w-md leading-relaxed">
                 La actualidad y reportes de inteligencia artificial aplicada al sector de los recursos humanos. Decisiones estratégicas basadas en datos de mercado.
               </p>
               <a href="https://talent-up-news.vercel.app/" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-all shadow-xl shadow-[#3b82f6]/20 group-hover:-translate-y-1 group-hover:shadow-2xl">
                 Leer Publicaciones <ChevronRight size={20} />
               </a>
            </div>
            <div className="absolute right-0 bottom-0 opacity-[0.03] transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 group-hover:opacity-10 transition-all duration-700 pointer-events-none z-0">
               <Newspaper size={320} className="text-[#3b82f6]" />
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
                   <li><a href="https://talent-up-hr.vercel.app" className="hover:text-[#4F46E5] transition-colors">TalentUP HR</a></li>
                   <li><a href="#" className="hover:text-[#F97316] transition-colors flex items-center gap-2">TalentUP CRM <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full font-bold">PRONTO</span></a></li>
                   <li><a href="#" className="hover:text-[#9333ea] transition-colors flex items-center gap-2">TalentUP ATS <span className="text-[10px] bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full font-bold">PRONTO</span></a></li>
                   <li><a href="https://talent-up-news.vercel.app/" className="hover:text-[#3b82f6] transition-colors">TalentUP News</a></li>
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
          </div>
        </div>
      </footer>
    </div>
  );
}

function EcosystemMockup() {
  return (
    <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 bg-[#FAFAFA] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] flex flex-col w-full transform rotate-x-12 hover:rotate-x-0 transition-transform duration-1000 ease-out perspective-[2000px] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] select-none">
       
       {/* Window Header */}
       <div className="h-12 border-b border-slate-200/60 bg-white flex items-center px-4 gap-2 z-20">
          <div className="flex gap-2">
             <div className="w-3 h-3 rounded-full bg-slate-300"></div>
             <div className="w-3 h-3 rounded-full bg-slate-300"></div>
             <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          </div>
          <div className="mx-auto w-64 h-7 bg-slate-50 rounded-md border border-slate-200/50 flex items-center justify-center shadow-inner">
             <span className="text-[10px] text-slate-400 font-semibold tracking-wide">ecosistema.talentup.com</span>
          </div>
          <div className="w-12"></div>
       </div>
       
       {/* App Body */}
       <div className="flex flex-1 overflow-hidden h-[500px]">
          
          {/* Sidebar */}
          <div className="w-56 bg-white border-r border-slate-200/60 p-4 flex flex-col gap-2 z-10">
             <div className="h-8 w-32 bg-slate-100 rounded mb-6"></div>
             <div className="flex items-center gap-3 px-3 py-2.5 bg-slate-900 text-white rounded-xl shadow-sm">
                <BarChart3 size={16} className="shrink-0" />
                <span className="text-sm font-bold">Resumen Global</span>
             </div>
             <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors mt-2">
                <Users size={16} className="shrink-0 text-[#4F46E5]" />
                <span className="text-sm font-semibold">TalentUP HR</span>
             </div>
             <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
                <TrendingUp size={16} className="shrink-0 text-[#F97316]" />
                <span className="text-sm font-semibold">TalentUP CRM</span>
             </div>
             <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
                <Target size={16} className="shrink-0 text-[#9333ea]" />
                <span className="text-sm font-semibold">TalentUP ATS</span>
             </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6 bg-[#FAFAFA] overflow-hidden flex flex-col gap-6">
            
            {/* Top KPIs */}
            <div className="grid grid-cols-3 gap-6">
               <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-5 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#F97316]/10 rounded-bl-[2rem] flex items-start justify-end p-3"><TrendingUp size={18} className="text-[#F97316]"/></div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Ingresos MRR (CRM)</h4>
                  <span className="text-3xl font-black text-slate-800">€24.5K</span>
                  <span className="text-xs font-bold text-emerald-500 mt-2 flex items-center gap-1">+12.5% este mes</span>
               </div>
               
               <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-5 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#4F46E5]/10 rounded-bl-[2rem] flex items-start justify-end p-3"><Users size={18} className="text-[#4F46E5]"/></div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Plantilla Activa (HR)</h4>
                  <span className="text-3xl font-black text-slate-800">142</span>
                  <span className="text-xs font-bold text-emerald-500 mt-2 flex items-center gap-1">+4 incorporaciones</span>
               </div>

               <div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-5 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#9333ea]/10 rounded-bl-[2rem] flex items-start justify-end p-3"><Target size={18} className="text-[#9333ea]"/></div>
                  <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Candidatos (ATS)</h4>
                  <span className="text-3xl font-black text-slate-800">89</span>
                  <span className="text-xs font-bold text-slate-400 mt-2 flex items-center gap-1">En 3 procesos abiertos</span>
               </div>
            </div>

            {/* Bottom Section */}
            <div className="flex-1 flex gap-6">
               
               {/* Cross-Module Activity */}
               <div className="flex-[1.5] bg-white rounded-2xl border border-slate-200/60 shadow-sm flex flex-col">
                  <div className="px-5 py-4 border-b border-slate-100 flex items-center gap-2">
                     <Activity size={16} className="text-slate-400" />
                     <h3 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest">Actividad del Ecosistema</h3>
                  </div>
                  <div className="p-5 flex flex-col gap-4">
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#4F46E5]/10 flex items-center justify-center text-[#4F46E5] shrink-0 mt-0.5"><Users size={14}/></div>
                        <div>
                           <p className="text-[13px] font-bold text-slate-800">Contrato firmado <span className="font-normal text-slate-500">en TalentUP HR</span></p>
                           <p className="text-[11px] text-slate-500 mt-0.5">Carlos Ruiz ha firmado el contrato de confidencialidad.</p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 ml-auto">Hace 5m</span>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#F97316]/10 flex items-center justify-center text-[#F97316] shrink-0 mt-0.5"><TrendingUp size={14}/></div>
                        <div>
                           <p className="text-[13px] font-bold text-slate-800">Oportunidad ganada <span className="font-normal text-slate-500">en TalentUP CRM</span></p>
                           <p className="text-[11px] text-slate-500 mt-0.5">La cuenta "TechCorp" se ha cerrado por €5.000/mes.</p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 ml-auto">Hace 1h</span>
                     </div>
                     <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#9333ea]/10 flex items-center justify-center text-[#9333ea] shrink-0 mt-0.5"><Briefcase size={14}/></div>
                        <div>
                           <p className="text-[13px] font-bold text-slate-800">Entrevista agendada <span className="font-normal text-slate-500">en TalentUP ATS</span></p>
                           <p className="text-[11px] text-slate-500 mt-0.5">Entrevista técnica con Laura Gómez para Senior Dev.</p>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 ml-auto">Hace 2h</span>
                     </div>
                  </div>
               </div>

               {/* Growth Chart area */}
               <div className="flex-1 bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 flex flex-col relative overflow-hidden justify-end">
                  <div className="absolute top-6 left-6">
                     <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1">Crecimiento Q3</h4>
                     <span className="text-2xl font-black text-slate-800">+24%</span>
                  </div>
                  <div className="flex items-end gap-3 h-32 mt-12 w-full">
                     <div className="flex-1 bg-slate-100 rounded-t-md h-[40%]"></div>
                     <div className="flex-1 bg-slate-200 rounded-t-md h-[55%]"></div>
                     <div className="flex-1 bg-slate-300 rounded-t-md h-[70%]"></div>
                     <div className="flex-1 bg-slate-800 rounded-t-md h-[95%] relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                     </div>
                  </div>
               </div>

            </div>

          </div>
       </div>
    </div>
  );
}

export default App;
