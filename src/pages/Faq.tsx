import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import Main from '../layout/Main';

const faqData = [
  {
    question: "Tortları neçə gün öncədən sifariş etməliyəm?",
    answer: "Standart tortlar üçün 24 saat, fərdi dizaynlı və toy tortları üçün isə ən azı 3-5 gün öncədən sifariş verməyiniz tövsiyə olunur."
  },
  {
    question: "Çatdırılma xidmətiniz varmı?",
    answer: "Bəli, Bakı daxili bütün ünvanlara çatdırılma mövcuddur. 50 AZN üzəri sifarişlərdə çatdırılma tamamilə pulsuzdur."
  },
  {
    question: "Tortların tərkibini dəyişmək mümkündür?",
    answer: "Əlbəttə! Allergiya və ya dad seçiminə görə şəkərsiz, qlütensiz və ya fərqli meyvə tərkibli seçimlər edə bilərsiniz."
  },
  {
    question: "Ödənişi necə edə bilərəm?",
    answer: "Ödənişi həm onlayn (kartla), həm də qapıda nağd və ya terminal vasitəsilə həyata keçirmək mümkündür."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
   <Main>
     <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-black text-slate-900 mb-4 tracking-tight">
            Suallarınız Var?
          </h2>
          <p className="text-slate-500 italic">Ən çox verilən suallara burada cavab tapın.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-3xl transition-all duration-300 ${
                  isOpen ? 'border-rose-200 bg-rose-50/30' : 'border-slate-100 bg-white'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                >
                  <span className={`font-bold text-lg ${isOpen ? 'text-rose-600' : 'text-slate-800'}`}>
                    {item.question}
                  </span>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'bg-rose-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-8 pb-8 text-slate-600 leading-relaxed italic">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
   </Main>
  );
};

export default FAQ;