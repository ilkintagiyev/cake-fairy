import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  color: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Zərif Dadların Ünvanı",
    subtitle: "Hər tikədə bir sevgi hekayəsi, hər tortda bir sənət əsəri.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1200",
    color: "bg-rose-50"
  },
  {
    id: 2,
    title: "Özəl Günləriniz Üçün",
    subtitle: "Toy, ad günü və bütün şirin anlarınızda yanınızdayıq.",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=1200",
    color: "bg-amber-50"
  },
  {
    id: 3,
    title: "Təbii və Təravətli",
    subtitle: "Yalnız ən keyfiyyətli kənd məhsulları və premium şokoladlar.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1200",
    color: "bg-emerald-50"
  }
];

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[100vh] lg:h-[90vh] w-full overflow-hidden bg-slate-50 pt-[150px] lg:pt-0">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.7,0,0.3,1)] ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
          }`}
        >
          {/* Arxa fon rəngi */}
          <div className={`absolute inset-0 ${slide.color} opacity-60`} />
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 py-12 lg:py-0">
            
            {/* Mətn Content-i */}
            <div className="w-full lg:w-1/2 z-10 space-y-4 md:space-y-8 text-center lg:text-left">
              <div className="overflow-hidden">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-serif font-black text-slate-900 leading-[1.1] transition-transform duration-700 delay-300 ${
                  index === current ? 'translate-y-0' : 'translate-y-full'
                }`}>
                  {slide.title}
                </h1>
              </div>
              
              <p className={`text-base md:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 transition-all duration-700 delay-500 ${
                index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                {slide.subtitle}
              </p>

              <div className={`flex justify-center lg:justify-start gap-4 transition-all duration-700 delay-700 ${
                index === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <button 
                  onClick={() => navigate("/category")} 
                  className="cursor-pointer px-6 py-3 md:px-8 md:py-4 border-2 border-slate-900 text-slate-900 font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all text-sm md:text-base"
                >
                  Menyunu Gör
                </button>
              </div>
            </div>

            {/* Şəkil Content-i */}
            <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[550px] relative px-4 sm:px-0">
              <div className={`absolute inset-0 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-[1500ms] ease-out ${
                index === current ? 'translate-x-0 rotate-0 scale-100' : 'translate-x-10 lg:translate-x-20 rotate-3 scale-90'
              }`}>
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover transform scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>
              
              {/* Balaca üzən element (yalnız böyük ekranlarda) */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-28 md:h-28 bg-white p-3 md:p-4 rounded-2xl shadow-lg hidden md:block animate-bounce">
                <div className="w-full h-full bg-rose-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl md:text-3xl">🍰</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* İndikatorlar (Nöqtələr) */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 md:h-2 transition-all duration-300 rounded-full ${
              i === current ? 'w-8 md:w-12 bg-rose-600' : 'w-1.5 md:w-2 bg-slate-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;