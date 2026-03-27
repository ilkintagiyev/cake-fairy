const Features = () => {
  const items = [
    { icon: "🚚", title: "Sürətli Çatdırılma", desc: "Bakı daxili 2 saat ərzində." },
    { icon: "🌿", title: "100% Təbii", desc: "Heç bir qatqı maddəsi yoxdur." },
    { icon: "💳", title: "Təhlükəsiz Ödəniş", desc: "Kartla və ya qapıda ödəniş." },
    { icon: "✨", title: "Özəl Dizayn", desc: "Sizin xəyalınızdakı tortu yaradırıq." }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-t border-slate-100">
      {items.map((item, i) => (
        <div key={i} className="text-center group cursor-default">
          <div className="text-4xl mb-4 transition-transform group-hover:scale-125 duration-300">
            {item.icon}
          </div>
          <h4 className="font-bold text-slate-800">{item.title}</h4>
          <p className="text-sm text-slate-500">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features