
import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { PathVisualization } from '../components/PathVisualization';
import { PriceTier } from '../types';

const tiers: PriceTier[] = [
  {
    id: 'basic',
    name: 'Старт',
    price: 49,
    features: ['Доступ ко всем модулям', 'Чек-листы по карьере', 'Комьюнити Tapla'],
    ctaText: 'Выбрать базовый'
  },
  {
    id: 'anchor',
    name: 'Прорыв',
    price: 79,
    features: ['Всё в Старте', 'Разбор CV экспертом', '3 сессии с ментором', 'Доступ к вакансиям партнёров'],
    isAnchor: true,
    ctaText: 'Начать прорыв'
  },
  {
    id: 'vip',
    name: 'AI-Интегратор',
    price: 99,
    features: ['Всё в Прорыве', 'Личный AI-ассистент', 'Библиотека промтов', 'Приоритетный саппорт'],
    ctaText: 'Стать VIP'
  }
];

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen relative overflow-x-hidden">
      {/* Dynamic Background Accents */}
      <div className="fixed top-[10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Premium Header */}
      <header className="sticky top-0 z-50 glass-dark border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-black tracking-tighter text-xl flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white text-xs rotate-3 group-hover:rotate-0 transition-transform">T</div>
            TAPLA<span className="text-indigo-500">.</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end gap-1">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-[0.2em]">Система готова к запуску</span>
              <div className="w-32 h-1 bg-zinc-900 rounded-full overflow-hidden">
                <div className="w-[15%] h-full bg-gradient-to-r from-indigo-500 to-violet-500 animate-pulse" />
              </div>
            </div>
            <div className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-xs font-bold hover:border-indigo-500/50 transition-colors cursor-pointer">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Hero */}
      <Section className="text-center pt-20 pb-10">
        <div className="reveal-text inline-block mb-4">
          <span className="text-indigo-400 font-bold text-[10px] uppercase tracking-[0.4em] bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Личный кабинет • Шаг 2
          </span>
        </div>
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-[0.85]">
          Твой план <br />
          <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-500 bg-clip-text text-transparent italic">на результат.</span>
        </h1>
        <p className="text-zinc-500 max-w-xl mx-auto text-lg md:text-xl font-light">
          Мы проанализировали рынок Азербайджана и создали <span className="text-white font-medium">прямой трек</span> из точки А в точку Б.
        </p>
      </Section>

      {/* Interactive Path Visualization */}
      <Section className="py-0">
        <div className="glass p-8 md:p-12 rounded-[3rem] border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><circle cx="12" cy="12" r="10"/><path d="M12 2v20"/><path d="M2 12h20"/></svg>
          </div>
          <PathVisualization />
        </div>
      </Section>

      {/* Results Bento Grid (Same premium style as Page A) */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Что ты получишь на выходе</h2>
          <p className="text-zinc-500 mt-2">Реальные активы для твоей новой карьеры.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-min md:auto-rows-[220px]">
          {/* Main Card */}
          <div className="md:col-span-3 md:row-span-2 bento-card glass p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between border-beam group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">AI-Профиль 2025</h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Полностью упакованное портфолио и CV, адаптированное под алгоритмы международных компаний.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-indigo-400">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping"></span>
              Готовность к офферу: 100%
            </div>
          </div>

          {/* Practicality Card */}
          <div className="md:col-span-3 md:row-span-1 bento-card glass p-8 rounded-[2.5rem] flex items-center gap-6 border-emerald-500/10 hover:border-emerald-500/30">
            <div className="text-4xl">🛠️</div>
            <div>
              <h4 className="font-bold text-xl text-white">Hard Skills</h4>
              <p className="text-sm text-zinc-500">Владение инструментами, которые реально просят на интервью.</p>
            </div>
          </div>

          {/* Network Card */}
          <div className="md:col-span-3 md:row-span-1 bento-card glass p-8 rounded-[2.5rem] flex items-center gap-6 border-violet-500/10 hover:border-violet-500/30">
            <div className="text-4xl">🤝</div>
            <div>
              <h4 className="font-bold text-xl text-white">Доступ к лидам</h4>
              <p className="text-sm text-zinc-500">Прямой выход на HR и тимлидов топовых компаний Азербайджана.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Anti-Hype / Efficiency Section */}
      <Section className="bg-zinc-950/40">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center tracking-tight">Мы удалили всё лишнее</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Бесконечные лекции 'ни о чем'",
              "Старые методы поиска через знакомых",
              "Страх перед будущим и AI",
              "Ощущение, что ты не на своем месте"
            ].map((text, i) => (
              <div key={i} className="group p-6 glass rounded-2xl border-white/5 hover:border-red-500/20 transition-all flex items-center gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 font-bold group-hover:scale-110 transition-transform">
                  ✕
                </div>
                <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Refined Pricing Section */}
      <Section id="pricing" className="pb-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Начни сейчас.</h2>
          <p className="text-zinc-500 text-lg">Выбери формат, который подходит твоему амбициям.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              className={`relative flex flex-col p-10 rounded-[3rem] transition-all duration-700 hover:translate-y-[-12px] ${
                tier.isAnchor 
                  ? 'glass-dark border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border-beam scale-105 z-10' 
                  : 'glass border-white/5 opacity-90'
              }`}
            >
              {tier.isAnchor && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-xl">
                  Популярный выбор
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-lg font-bold text-zinc-400 mb-2 uppercase tracking-widest">{tier.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black tracking-tighter">{tier.price}</span>
                  <span className="text-2xl text-zinc-600 font-medium tracking-tighter">₼</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {tier.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-400 group cursor-default">
                    <div className="mt-1 w-4 h-4 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[8px] text-indigo-400 font-bold group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      ✓
                    </div>
                    <span className="group-hover:text-zinc-200 transition-colors">{feat}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={tier.isAnchor ? 'primary' : 'outline'} 
                fullWidth
                size="lg"
                className={`h-16 text-lg font-bold tracking-tight rounded-2xl ${
                  tier.isAnchor 
                    ? 'bg-white text-black shadow-[0_20px_40px_rgba(255,255,255,0.1)]' 
                    : 'border-zinc-800 text-zinc-300 hover:border-indigo-500/30'
                }`}
              >
                {tier.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* Global Footer */}
      <footer className="py-20 border-t border-white/5 glass-dark">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="flex flex-col items-center md:items-start gap-4">
             <div className="text-2xl font-black tracking-tighter">TAPLA<span className="text-indigo-500">.</span></div>
             <p className="text-zinc-600 text-sm max-w-xs text-center md:text-left">Профессиональная трансформация для нового поколения Азербайджана.</p>
           </div>
           
           <div className="flex gap-16">
             <div className="flex flex-col gap-4">
               <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Продукт</span>
               <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Программа</a>
               <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Тарифы</a>
               <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Кейсы</a>
             </div>
             <div className="flex flex-col gap-4">
               <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Помощь</span>
               <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">FAQ</a>
               <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Поддержка</a>
               <a href="#" className="text-zinc-400 hover:text-white transition-colors text-sm">Telegram</a>
             </div>
           </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40">
           <div className="text-[10px] tracking-[0.3em] font-medium uppercase">© 2025 TAPLA AZ • Все права защищены</div>
           <div className="flex gap-6 text-[9px] font-bold uppercase tracking-widest">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
