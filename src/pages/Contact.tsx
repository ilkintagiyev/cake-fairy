import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';
import Main from '../layout/Main';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajınız göndərildi! Tezliklə əlaqə saxlayacağıq.", {
      style: { borderRadius: '15px', background: '#1e293b', color: '#fff' }
    });
  };

  return (
    <Main>
        <div className="pt-24 bg-white">
    
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-black text-slate-900 mb-4">Bizimlə Əlaqə</h1>
          <p className="text-slate-500 max-w-lg mx-auto italic">
            Sifarişinizlə bağlı sualınız var və ya özəl bir layihə düşünürsünüz? Yazın, kömək edək.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: <FiPhone />, title: "Zəng edin", info: "+994 50 123 45 67", sub: "Hər gün 09:00 - 22:00" },
                { icon: <FiMail />, title: "E-poçt", info: "info@cakestudio.az", sub: "24 saat ərzində cavab" },
                { icon: <FiMapPin />, title: "Ünvan", info: "Nizami küç. 42", sub: "Bakı, Azərbaycan" },
                { icon: <FiClock />, title: "İş saatları", info: "Bazar ertəsi - Bazar", sub: "09:00 - 21:00" },
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-3xl border border-slate-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300">
                  <div className="text-rose-600 text-2xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-700 font-medium text-sm">{item.info}</p>
                  <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
                </div>
              ))}
            </div>

           
            <div className="h-80 w-full rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48623.01160803734!2d49.82226875!3d40.395303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d40a035a3bd%3A0xa8c2c62c906322ad!2sBaku!5e0!3m2!1sen!2saz!4v1700000000000" 
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>

      
          <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl">
            <h3 className="text-3xl font-serif font-bold mb-8">Mesaj Göndərin</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Adınız</label>
                  <input type="text" required className="w-full bg-slate-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-rose-500 transition-all outline-none" placeholder="Elvin..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400">E-poçt</label>
                  <input type="email" required className="w-full bg-slate-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-rose-500 transition-all outline-none" placeholder="mail@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Mövzu</label>
                <select className="w-full bg-slate-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-rose-500 transition-all outline-none appearance-none">
                  <option>Sifariş haqqında</option>
                  <option>Təklif və iradlar</option>
                  <option>Korporativ əməkdaşlıq</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Mesajınız</label>
                <textarea rows={4} required className="w-full bg-slate-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-rose-500 transition-all outline-none resize-none" placeholder="Burada yazın..."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-rose-600 hover:bg-rose-700 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl shadow-rose-900/40">
                <FiSend /> Göndər
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
    </Main>
  );
};

export default Contact;