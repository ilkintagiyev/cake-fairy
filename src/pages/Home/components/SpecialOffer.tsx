import { useNavigate } from "react-router-dom";

const SpecialOffer: React.FC = () => {

  const navigate = useNavigate();

  return (
   <section className="max-w-7xl mx-auto px-6 py-15">
      <div className="relative overflow-hidden rounded-[3rem] bg-slate-900 min-h-[450px] flex items-center shadow-2xl">
        
      
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1535254973040-607b474cb8c2?q=80&w=1200" 
            className="w-full h-full object-cover opacity-30"
            alt="Bakery background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

    
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between px-12 md:px-20 gap-10">
          
    
          <div className="max-w-xl space-y-6 text-center md:text-left">
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-[1.1]">
              Xəyallarınızdakı Tortu <br /> 
              <span className="text-rose-500 italic">Bizimlə Yaradın</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Sizin təxəyyülünüz, bizim ustalığımız. Toy və özəl günlər üçün tamamilə unikal, fərdi dizaynlı sənət əsərləri.
            </p>
            <div className="pt-4">
              <button onClick={() => navigate("/consultation")} className="cursor-pointer bg-white text-slate-900 px-10 py-4 rounded-full font-bold hover:bg-rose-600 hover:text-white transition-all duration-500 shadow-xl active:scale-95">
                Konsultasiya Alın
              </button>
            </div>
          </div>

        
          <div className="hidden lg:flex relative items-center justify-center w-80 h-80">
  
            <div className="absolute inset-0 bg-rose-600/20 rounded-full animate-pulse scale-110" />
            <div className="absolute inset-0 border border-white/10 rounded-full scale-125 border-dashed animate-spin-slow" />
           
            <div className="relative w-full h-full rounded-full border-[10px] border-white/5 overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1562233237-10673398a65f?q=80&w=600" 
                className="w-full h-full object-cover scale-110" 
                alt="Cake Detail"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialOffer