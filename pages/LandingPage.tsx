
import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';

interface LandingPageProps {
  onNext: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNext }) => {
  return (
    <div className="relative">
      {/* Cinematic Glows */}
      <div className="fixed top-[-15%] right-[-10%] w-[70%] h-[70%] bg-indigo-600/10 rounded-full bg-glow pointer-events-none" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-violet-600/10 rounded-full bg-glow pointer-events-none" />

      {/* Hero Section */}
      <Section className="text-center min-h-[80vh] flex flex-col justify-center">
        <div className="reveal-text">
          <span className="inline-block py-1.5 px-4 glass text-[10px] font-bold tracking-[0.3em] text-indigo-400 rounded-full mb-8 border-indigo-500/20 uppercase">
            TAPLA • AI-POWERED CAREER HUB
          </span>
        </div>
        
        <h1 className="text-5xl md:text-[5.5rem] font-black mb-8 tracking-tighter leading-[0.9] reveal-text">
          Хватит <br />
          <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-500 bg-clip-text text-transparent">гадать.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Мы построили систему, которая заменяет тысячи часов бессмысленного поиска работы на <span className="text-zinc-100 font-medium">чистую ясность.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Button size="lg" onClick={onNext} className="group px-10 h-16 text-lg border-beam">
            Начать путь
            <span className="ml-3 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Button>
          <Button variant="ghost" size="lg" className="text-zinc-500 hover:text-indigo-400 transition-colors">
            Смотреть концепт
          </Button>
        </div>
      </Section>

      {/* Bento Grid Section */}
      <Section className="py-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Новые правила игры</h2>
          <p className="text-zinc-500">Мир изменился. Твои инструменты тоже должны.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-min md:auto-rows-[240px]">
          {/* Main Bento Card - AI Acceleration */}
          <div className="md:col-span-4 md:row-span-2 bento-card glass p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between border-beam relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="M12 2v8"/><path d="m4.93 4.93 4.24 4.24"/><path d="M2 12h8"/><path d="m4.93 19.07 4.24-4.24"/><path d="M12 22v-8"/><path d="m19.07 19.07-4.24-4.24"/><path d="M22 12h-8"/><path d="m19.07 4.93-4.24 4.24"/></svg>
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                <span className="font-bold text-xs">AI</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ускорение в 10 раз</h3>
              <p className="text-zinc-400 max-w-sm text-base md:text-lg leading-relaxed">
                Используй нейросети, чтобы твое резюме всегда было первым. Мы даем не просто теорию, а готовые промты.
              </p>
            </div>
            <div className="mt-8 space-y-3 relative z-10">
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-indigo-400">
                <span>Продуктивность</span>
                <span>+900%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400 w-[85%] rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              </div>
            </div>
          </div>

          {/* Clarity Card - FIXED & BEAUTIFIED */}
          <div className="md:col-span-2 md:row-span-1 bento-card glass p-8 rounded-[2.5rem] flex flex-col justify-between border-indigo-500/10 group overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 group-hover:scale-110 transition-transform">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-400"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </div>
              <span className="text-[10px] font-black text-indigo-500/50 uppercase tracking-tighter">Roadmap</span>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 text-white group-hover:text-indigo-300 transition-colors">Ясность</h4>
              <p className="text-sm text-zinc-500 leading-snug">
                Точный трек развития на <span className="text-zinc-300">12 месяцев</span> вперед без лишнего шума.
              </p>
            </div>
          </div>
          
          {/* 100% Practice Card - FIXED & BEAUTIFIED */}
          <div className="md:col-span-2 md:row-span-1 bento-card glass p-8 rounded-[2.5rem] flex flex-col justify-between border-emerald-500/10 group overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="text-emerald-400 font-black text-2xl tracking-tighter group-hover:scale-110 transition-transform origin-left">100%</div>
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-1 text-white group-hover:text-emerald-300 transition-colors">Практика</h4>
              <p className="text-sm text-zinc-500 leading-snug">
                Ноль воды. Только задачи, которые реально <span className="text-zinc-300">встречаются в работе</span>.
              </p>
            </div>
          </div>

          {/* Premium Networking */}
          <div className="md:col-span-3 md:row-span-1 bento-card glass p-8 rounded-[2.5rem] flex items-center gap-6 group">
             <div className="w-16 h-16 shrink-0 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-2xl group-hover:bg-violet-500/20 transition-all">
               💎
             </div>
             <div>
               <h4 className="font-bold text-lg">Премиум нетворкинг</h4>
               <p className="text-sm text-zinc-500">Доступ к закрытым чатам лидеров IT-рынка Азербайджана.</p>
             </div>
          </div>

          {/* Fast Start */}
          <div className="md:col-span-3 md:row-span-1 bento-card glass p-8 rounded-[2.5rem] flex items-center gap-6 group">
             <div className="w-16 h-16 shrink-0 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl group-hover:bg-amber-500/20 transition-all">
               ⚡
             </div>
             <div>
               <h4 className="font-bold text-lg">Быстрый старт</h4>
               <p className="text-sm text-zinc-500">Твой первый оффер возможен уже через <span className="text-zinc-300">14 дней</span> интенсивной работы.</p>
             </div>
          </div>
        </div>
      </Section>

      {/* Market Logic */}
      <Section className="pt-32">
        <div className="glass-dark p-12 md:p-20 rounded-[3rem] border-white/5 relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
          <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-tight">Твое будущее <br className="md:hidden" /> не ждет.</h2>
          <Button size="lg" onClick={onNext} className="bg-white text-black hover:scale-105 px-12 h-16 text-xl shadow-[0_20px_40px_rgba(255,255,255,0.15)]">
            Занять свое место
          </Button>
          <p className="mt-8 text-zinc-500 text-sm font-medium tracking-wide uppercase">Ограниченный доступ • Группа 2025</p>
        </div>
      </Section>

      <footer className="py-20 text-center opacity-30 text-[10px] font-bold tracking-[0.4em] uppercase">
        Tapla System 2025 • High Performance Only
      </footer>
    </div>
  );
};

export default LandingPage;
