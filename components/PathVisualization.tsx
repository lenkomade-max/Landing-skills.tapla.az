
import React from 'react';

const steps = [
  { 
    title: "Точка А: Аудит", 
    description: "Разбираем твои текущие навыки и убираем психологические барьеры. Мы нормализуем страх перед новым.",
    icon: "🎯",
    color: "from-indigo-500 to-indigo-300"
  },
  { 
    title: "Стратегия", 
    description: "Выбираем направление, где твои таланты принесут максимум денег и удовольствия. Анализ рынка 2025.",
    icon: "🗺️",
    color: "from-violet-500 to-violet-300"
  },
  { 
    title: "AI-Погружение", 
    description: "Осваиваем нейросети. Делаем тебя специалистом, который стоит в 5 раз дороже обычного кандидата.",
    icon: "🤖",
    color: "from-emerald-500 to-emerald-300"
  },
  { 
    title: "Точка Б: Вход", 
    description: "Прямой выход на работодателей. Подготовка к интервью и получение оффера мечты.",
    icon: "🚀",
    color: "from-white to-zinc-400"
  },
];

export const PathVisualization: React.FC = () => {
  return (
    <div className="relative mt-8 py-10">
      {/* Dynamic Background Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-900 overflow-hidden">
        <div className="w-full h-1/4 bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent animate-pulse" />
      </div>
      
      <div className="space-y-16">
        {steps.map((step, index) => (
          <div key={index} className={`flex items-start md:items-center gap-10 md:gap-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
            {/* Empty space for desktop layout */}
            <div className="hidden md:block w-1/2" />
            
            {/* Step Node */}
            <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl glass-dark flex items-center justify-center border border-white/10 shadow-xl group cursor-pointer hover:border-indigo-500/50 transition-all duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              <span className="text-2xl group-hover:scale-120 transition-transform">{step.icon}</span>
              
              {/* Connection Indicator */}
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[8px] font-bold">
                0{index + 1}
              </div>

              {index === 0 && (
                <div className="absolute inset-0 rounded-2xl animate-ping bg-indigo-500/20 pointer-events-none" />
              )}
            </div>

            {/* Step Content */}
            <div className={`flex-1 group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right md:items-end'} flex flex-col`}>
              <div className={`max-w-sm p-8 rounded-[2rem] glass border-white/5 hover:border-white/10 transition-all duration-500 shadow-2xl relative overflow-hidden`}>
                <div className={`absolute top-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-24 h-[1px] bg-gradient-to-r ${step.color} opacity-50`} />
                
                <h3 className="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Start/End Glows */}
      <div className="absolute top-0 left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full blur-md opacity-50" />
      <div className="absolute bottom-0 left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full blur-md opacity-50" />
    </div>
  );
};
