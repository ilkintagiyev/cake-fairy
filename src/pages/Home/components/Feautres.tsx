
const Features = () => {
  const items = [
    { icon: "🚚", title: "Sürətli Çatdırılma", desc: "Bakı daxili 2 saat ərzində." },
    { icon: "🌿", title: "100% Təbii", desc: "Heç bir qatqı maddəsi yoxdur." },
    { icon: "💳", title: "Təhlükəsiz Ödəniş", desc: "Kartla və ya qapıda ödəniş." },
    { icon: "✨", title: "Özəl Dizayn", desc: "Sizin xəyalınızdakı tortu yaradırıq." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4 md:gap-8 py-12 md:py-20 border-t border-slate-100">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="flex flex-col items-center text-center group cursor-default transition-all duration-300"
          >
            {/* İkon Konteyneri */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-3xl md:text-4xl mb-4 md:mb-6 transition-all duration-500 group-hover:bg-rose-50 group-hover:rotate-6 group-hover:scale-110">
              {item.icon}
            </div>

            {/* Mətnlər */}
            <div className="space-y-1 md:space-y-2">
              <h4 className="font-serif text-sm md:text-base lg:text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-[11px] md:text-sm text-slate-500 leading-relaxed max-w-[160px] md:max-w-none mx-auto">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;