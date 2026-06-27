import React from 'react';
import { Grid, ChevronDown, Users, Newspaper } from 'lucide-react';

const AppSwitcher = () => {
  return (
    <div className="relative group cursor-pointer">
      <div className="flex items-center gap-2 hover:bg-slate-100/50 px-3 py-2 rounded-full transition-colors border border-transparent hover:border-slate-200/50">
        <Grid size={18} className="text-slate-600" />
        <span className="text-sm font-bold text-slate-700">Módulos</span>
        <ChevronDown size={14} className="text-slate-400 group-hover:rotate-180 transition-transform" />
      </div>
      
      {/* Dropdown Menu */}
      <div className="absolute top-full right-0 mt-3 w-72 bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-2xl rounded-3xl p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0 z-50">
        
        <a href="https://talent-up-holding.vercel.app" className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-2xl transition-all mb-2 border border-transparent hover:border-slate-100 hover:shadow-sm group/main">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#2563eb] via-[#ec4899] to-[#f59e0b] flex items-center justify-center text-white font-black text-xl shadow-md group-hover/main:scale-105 transition-transform">
            UP
          </div>
          <div>
            <div className="text-[15px] font-black text-slate-900 tracking-tight">TalentUP Ecosistema</div>
            <div className="text-xs font-semibold text-slate-500">Panel Principal</div>
          </div>
        </a>

        <div className="h-px bg-slate-100 mx-4 mb-2"></div>

        <a href="https://talent-up-hr.vercel.app" className="flex items-center gap-4 p-3 hover:bg-hr/5 rounded-2xl transition-all group/item">
          <div className="w-12 h-12 rounded-xl bg-hr/10 border border-hr/20 flex items-center justify-center text-hr group-hover/item:scale-105 group-hover/item:bg-hr group-hover/item:text-white transition-all">
            <Users size={22} />
          </div>
          <div>
            <div className="text-[15px] font-black text-slate-900 tracking-tight">TalentUP <span className="text-hr">HR</span></div>
            <div className="text-xs font-semibold text-slate-500">Gestión de talento</div>
          </div>
        </a>

        <a href="https://talent-up-news.vercel.app" className="flex items-center gap-4 p-3 hover:bg-news/5 rounded-2xl transition-all group/item mt-1">
          <div className="w-12 h-12 rounded-xl bg-news/10 border border-news/20 flex items-center justify-center text-news group-hover/item:scale-105 group-hover/item:bg-news group-hover/item:text-white transition-all">
            <Newspaper size={22} />
          </div>
          <div>
            <div className="text-[15px] font-black text-slate-900 tracking-tight">TalentUP <span className="text-news">News</span></div>
            <div className="text-xs font-semibold text-slate-500">Inteligencia B2B</div>
          </div>
        </a>

      </div>
    </div>
  );
};

export default AppSwitcher;
