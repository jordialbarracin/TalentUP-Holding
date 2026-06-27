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
               <a href="#ecosistema" className="hover:text-slate-900 transition-colors">Productos</a>
               <a href="https://talent-up-news.vercel.app" className="hover:text-slate-900 transition-colors">Noticias</a>
            </div>
            <div className="flex items-center gap-4">
              <AppSwitcher />
              <a href="https://talent-up-hr.vercel.app" className="hidden md:flex bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-0.5">
                Probar Gratis
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
            <span className="text-sm font-bold text-slate-700 tracking-tight">TalentUP Holding</span>
          </div>
          <h1 className="text-6xl md:text-[84px] font-black tracking-tighter text-slate-900 mb-8 leading-[1.05]">
            Innovación en software para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-[#3b82f6] to-[#0284c7]">empresas.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto font-medium">
            Descubre nuestra suite de aplicaciones especializadas. Construimos soluciones independientes enfocadas en transformar la gestión del talento, las ventas y la información en el entorno corporativo.
          </p>
        </div>

        {/* Ecosystem Bento Grid */}
        <div id="ecosistema" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Nuestros Productos</h2>
          <p className="text-xl text-slate-500">Aplicaciones especializadas para cada área de tu empresa.</p>
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
               <p className="text-slate-500 text-lg max-w-sm leading-relaxed">El portfolio de aplicaciones especializadas del Ecosistema TalentUP. Todo el ciclo de vida corporativo, cubierto.</p>
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



export default App;
