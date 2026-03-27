import React from 'react';
import { FiAward, FiHeart, FiTruck, FiUsers } from 'react-icons/fi';
import Main from '../layout/Main';

const stats = [
  { label: 'İllik Təcrübə', value: '10+', icon: <FiAward /> },
  { label: 'Xoşbəxt Müştəri', value: '50K+', icon: <FiUsers /> },
  { label: 'Şirniyyat Növü', value: '120+', icon: <FiHeart /> },
  { label: 'Sürətli Çatdırılma', value: '24/7', icon: <FiTruck /> },
];

const About: React.FC = () => {
  return (
  <Main>
      <div className="pt-24">
    
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1600" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Kitchen" 
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-4 italic">Hekayəmiz</h1>
          <p className="text-rose-100 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            2015-ci ildən bəri un və şəkəri sənət əsərinə çeviririk.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 bg-rose-50 text-rose-600 rounded-full text-sm font-bold tracking-widest uppercase">
            Biz kimik?
          </div>
          <h2 className="text-4xl font-serif font-bold text-slate-900 leading-tight">
            Keyfiyyət bizim üçün sadəcə bir söz deyil, <span className="text-rose-600 italic">vəzifədir.</span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            Cake Studio kiçik bir ailə müəssisəsi kimi fəaliyyətə başlamışdır. Bu gün biz Azərbaycanın ən qabaqcıl konditer şəbəkələrindən biriyik. Hər bir məhsulumuzda yalnız ən təzə kənd yumurtaları, premium Belçika şokoladları və təbii meyvələrdən istifadə edirik.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="text-rose-600 text-2xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800" 
              className="w-full h-full object-cover" 
              alt="Pastry Chef" 
            />
          </div>
       
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block border border-slate-50 animate-bounce-slow">
            <p className="text-slate-800 font-serif italic text-xl">"Hər tort bir təbəssümdür."</p>
            <p className="text-rose-600 font-bold mt-2">— Master Chef Aliyeva</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <h2 className="text-4xl font-serif font-bold italic">Dəyərlərimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Təbiilik", desc: "Heç bir süni dadlandırıcı və ya konservant istifadə etmirik." },
              { title: "Sənətkarlıq", desc: "Hər bir bəzək əl işidir və fərdi yanaşma ilə hazırlanır." },
              { title: "Təzəlik", desc: "Məhsullarımız vitrinə deyil, birbaşa sifarişlə sizin süfrənizə gəlir." }
            ].map((value, i) => (
              <div key={i} className="space-y-4 p-8 border border-slate-800 rounded-3xl hover:border-rose-500/30 transition-colors group">
                <div className="text-rose-500 text-5xl font-serif opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </Main>
  );
};

export default About;