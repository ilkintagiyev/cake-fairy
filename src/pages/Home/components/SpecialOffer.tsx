import { useNavigate } from "react-router-dom";

const SpecialOffer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3.5rem] bg-slate-900 min-h-[500px] md:min-h-[450px] flex items-center shadow-2xl">
        
        {/* Arxa Fon Şəkli və Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1535254973040-607b474cb8c2?q=80&w=1200" 
            className="w-full h-full object-cover opacity-40 md:opacity-30"
            alt="Bakery background"
          />
          {/* Mobildə altdan yuxarıya, desktopda soldan sağa gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent md:bg-gradient-to-r md:from-slate-900 md:via-slate-900/90 md:to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between px-6 py-12 md:px-20 gap-12">
          
          {/* Mətn Hissəsi */}
          <div className="max-w-xl space-y-6 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.2] md:leading-[1.1]">
              Xəyallarınızdakı Tortu <br className="hidden md:block" /> 
              <span className="text-rose-500 italic">Bizimlə Yaradın</span>
            </h2>
            
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Sizin təxəyyülünüz, bizim ustalığımız. Toy və özəl günlər üçün tamamilə unikal, fərdi dizaynlı sənət əsərləri.
            </p>
            
            <div className="pt-4">
              <button 
                onClick={() => navigate("/consultation")} 
                className="w-[250px]  cursor-pointer bg-white text-slate-900 px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold hover:bg-rose-600 hover:text-white transition-all duration-500 shadow-xl active:scale-95 text-sm md:text-base"
              >
                Konsultasiya Alın
              </button>
            </div>
          </div>

          {/* Vizual Element (Yalnız Böyük Ekranlarda) */}
          <div className="hidden lg:flex relative items-center justify-center w-72 h-72 xl:w-80 xl:h-80">
            {/* Animasiyalı halqalar */}
            <div className="absolute inset-0 bg-rose-600/20 rounded-full animate-pulse scale-110" />
            <div className="absolute inset-0 border border-white/10 rounded-full scale-125 border-dashed animate-[spin_10s_linear_infinite]" />
            
            {/* Dairəvi Şəkil */}
            <div className="relative w-full h-full rounded-full border-[8px] border-white/5 overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1562233237-10673398a65f?q=80&w=600" 
                className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-1000" 
                alt="Cake Detail"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;