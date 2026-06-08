import React, { useRef, useEffect, useState } from 'react';
import { Heart, BookOpen, ChevronLeft, AlertCircle, Sun, Calendar, PlusCircle } from 'lucide-react';

const App: React.FC = () => {
  const donationRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [showFloatingButton, setShowFloatingButton] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFloatingButton(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToDonation = () => {
    donationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExternalDonate = (amount?: number) => {
    const baseUrl = 'https://example.com/donate'; 
    window.location.href = amount ? `${baseUrl}?amount=${amount}` : baseUrl;
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-soft-pink-200" dir="rtl" style={{ fontFamily: '"Varela Round", sans-serif' }}>
      {/* 1. Floating Action Button */}
      <div 
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-[100] transition-all duration-500 transform ${
          showFloatingButton ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <button
          onClick={scrollToDonation}
          className="group relative flex items-center bg-soft-pink-600 text-white shadow-[8px_0_30px_rgba(232,61,118,0.3)] hover:bg-soft-pink-700 transition-all duration-300 rounded-r-full p-4 overflow-hidden"
        >
          <div className="relative z-10 flex items-center gap-3">
            <Heart className="w-8 h-8 fill-white group-hover:scale-110 transition-transform duration-300" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-xl pr-1">
              עזרו לי להשביע אותם
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>

      {/* 2. Hero Section */}
      <section className="relative h-[95vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-soft-pink-100/40 to-white overflow-hidden">
        <div className="max-w-4xl animate-in fade-in zoom-in-95 duration-1000 z-10">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full w-fit mx-auto mb-10 shadow-sm border border-soft-pink-100">
            <Heart className="w-16 h-16 text-soft-pink-500 fill-soft-pink-50" />
          </div>
          <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            לעזור לעוד תינוק <br />
            <span className="text-soft-pink-500">לישון שבע ורגוע</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-normal mb-14 max-w-3xl mx-auto leading-relaxed">
            עזרו לי לאפשר לעוד תינוק ללכת לישון שבע, לעוד אמא להיות רגועה שלמתוק שלה לא חסר דבר. הם צריכים אותי ואותך — כדי שהלילה שלהם יהיה שקט ומלא באהבה.
          </p>
          <button
            onClick={scrollToDonation}
            className="bg-soft-pink-500 text-white px-16 py-7 rounded-[2.5rem] text-3xl font-bold shadow-[0_25px_50px_rgba(232,61,118,0.25)] hover:bg-soft-pink-600 hover:scale-105 transition-all flex items-center gap-4 mx-auto"
          >
            אני רוצה לתת לתינוק לישון שבע <ChevronLeft className="w-10 h-10" />
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-soft-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </section>

      {/* 3. The Mission */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl font-bold leading-tight text-gray-900">המשימה שלי: שקט נפשי לכל אמא</h2>
            <p className="text-2xl text-gray-600 leading-relaxed font-light">
              כשאני מגיע עם מארז של אוכל וציוד חיוני, אני לא רק מביא מוצרים. אני מביא את הידיעה שלמתוק שלה לא חסר דבר. אני רואה את הרוגע שמתפשט על פניה של האמא כשהיא יודעת שהיא יכולה להשביע את התינוק שלה בכבוד ובביטחון.
            </p>
            <div className="bg-soft-pink-50 p-10 rounded-[3rem] border border-soft-pink-100 shadow-inner">
              <p className="text-2xl font-medium text-soft-pink-800 leading-relaxed">
                "כל קופסת תמ"ל שאני מעביר היא הבטחה לשקט ושובע. זה המעט שאנחנו יכולים לעשות כדי שכל תינוק יקבל את מה שמגיע לו."
              </p>
            </div>
            <div className="pt-8">
              <button 
                onClick={scrollToDonation}
                className="bg-white border-2 border-soft-pink-500 text-soft-pink-600 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-soft-pink-500 hover:text-white transition-all shadow-md"
              >
                אני רוצה לעזור לעוד אמא
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stories from the Field */}
      <section className="py-24 bg-soft-pink-50/20 px-4">
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">רגעים של נחת בשטח</h2>
            <div className="w-24 h-1.5 bg-soft-pink-300 mx-auto rounded-full opacity-50"></div>
          </div>
          
          <article className="group flex flex-col md:flex-row gap-8 items-start bg-white p-10 rounded-[3.5rem] shadow-sm border border-soft-pink-50 text-right">
            <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shrink-0">
              <BookOpen className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">החיוך של התינוק של חנה</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                כשפגשתי את חנה, ראיתי אמא שרק רצתה להעניק לתינוק שלה את הכי טוב. כשהבאתי לה את הציוד, ראיתי איך היא נרגעת — היא ידעה שהתינוק שלה ילך לישון שבע הלילה. זה הרגע שבשבילו אני עושה הכל.
              </p>
            </div>
          </article>

          <article className="group flex flex-col md:flex-row gap-8 items-start bg-white p-10 rounded-[3.5rem] shadow-sm border border-soft-pink-50 text-right">
            <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shrink-0">
              <Heart className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">להיות רגועה שלא חסר דבר</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                ביוקר המחיה של היום, המשימה להעניק ביטחון תזונתי לתינוק הפכה לאתגר. אני כאן כדי להגיד לאותן אמהות — יש לכן על מי להישען. המתוק שלכן יקבל את כל מה שהוא צריך.
              </p>
            </div>
          </article>

          <div className="pt-12">
            <button 
              onClick={scrollToDonation}
              className="bg-soft-pink-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-soft-pink-600 transition-all shadow-xl"
            >
              אני רוצה להיות שותף
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="space-y-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">הפעילות שלי בשטח</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-soft-pink-50/50 rounded-[2.5rem] border border-soft-pink-100 flex items-center justify-center group overflow-hidden hover:shadow-xl transition-all">
                  <img src={`/org-activity (${i}).jpeg`} alt={`פעילות עמותה ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900">קולות של אמהות רגועות</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[9/16] bg-white rounded-[2rem] border border-gray-200 flex flex-col overflow-hidden group shadow-sm hover:shadow-xl transition-all">
                  <div className="h-full w-full overflow-hidden">
                    <img src={`/whatsapp-screenshot (${i}).jpeg`} alt={`צילום מסך וואטסאפ ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-16 flex justify-center">
            <button 
              onClick={scrollToDonation}
              className="bg-white border-2 border-soft-pink-500 text-soft-pink-600 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-soft-pink-500 hover:text-white transition-all shadow-md"
            >
              אני רוצה לעזור לעוד אמא
            </button>
          </div>
        </div>
      </section>

      {/* 5. The Choice Section */}
      <section className="py-32 bg-soft-pink-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <AlertCircle className="w-20 h-20 mx-auto opacity-80" />
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">איך אני יכול לבחור מי ילך לישון שבע?</h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-95">
            השאיפה שלי היא שלא אצטרך לבחור לעולם. אני רוצה שלכל תינוק יהיה את השובע שלו, ולכל אמא יהיה את השקט שלה. בעזרתכם, אני יכול להבטיח שלמתוק של עוד אמא לא יחסר דבר הלילה.
          </p>
          <div className="pt-8">
            <p className="text-2xl font-bold italic border-t border-white/20 pt-10">
              בואו נדאג שכל תינוק יקבל את מה שהוא צריך כדי לגדול בנחת.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Action Section */}
      <section ref={donationRef} className="py-32 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">עזרו לי להעניק להם שובע</h2>
            <p className="text-2xl text-gray-500">בחרו איך אתם רוצים לעזור לעוד תינוק ללכת לישון שבע</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-2 border-soft-pink-100 rounded-[3.5rem] p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-soft-pink-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-soft-pink-500 transition-colors"><Sun className="w-10 h-10 text-soft-pink-500 group-hover:text-white" /></div>
              <h3 className="text-3xl font-bold mb-4">מארז שקט מיידי</h3>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">להבטיח לתינוק ימים של שובע ולתת לאמא רגע של נשימה</p>
              <div className="text-4xl font-bold text-soft-pink-600 mb-10">₪198</div>
              <button onClick={() => handleExternalDonate(198)} className="w-full bg-soft-pink-500 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-600 transition-colors">אני נותן לתינוק שובע</button>
            </div>

            <div className="bg-white border-4 border-soft-pink-500 rounded-[3.5rem] p-10 flex flex-col items-center text-center shadow-2xl relative scale-105 z-10">
              <div className="absolute -top-6 bg-soft-pink-500 text-white px-8 py-2 rounded-full font-bold">חודש של שקט נפשי</div>
              <div className="w-20 h-20 bg-soft-pink-500 rounded-full flex items-center justify-center mb-8"><Calendar className="w-10 h-10 text-white" /></div>
              <h3 className="text-3xl font-bold mb-4">מארז שובע חודשי</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">לוודא שלמתוק שלה לא יחסר דבר במשך חודש שלם</p>
              <div className="text-4xl font-bold text-soft-pink-600 mb-10">₪360</div>
              <button onClick={() => handleExternalDonate(360)} className="w-full bg-soft-pink-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-700 transition-colors">אני נותן חודש של שקט</button>
            </div>

            <div className="bg-white border-2 border-soft-pink-100 rounded-[3.5rem] p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-soft-pink-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-soft-pink-500 transition-colors"><PlusCircle className="w-10 h-10 text-soft-pink-500 group-hover:text-white" /></div>
              <h3 className="text-3xl font-bold mb-4">תמיכה מקיפה</h3>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">להעניק לתינוק ולאמא את כל הביטחון שהם צריכים כדי לגדול בנחת</p>
              <div className="text-4xl font-bold text-soft-pink-600 mb-10">₪558</div>
              <button onClick={() => handleExternalDonate(558)} className="w-full bg-soft-pink-500 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-600 transition-colors">אני נותן ביטחון מלא</button>
            </div>
          </div>

          <div className="bg-soft-pink-50 p-12 rounded-[4rem] text-center max-w-2xl mx-auto border border-soft-pink-100">
            <h4 className="text-2xl font-bold mb-6">רוצים לעזור לי בסכום אחר?</h4>
            <p className="text-gray-600 mb-10 text-lg">כל עזרה שלכם מאפשרת לי להעניק לעוד תינוק את השובע שלו</p>
            <button onClick={() => handleExternalDonate()} className="bg-white border-2 border-soft-pink-500 text-soft-pink-600 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-soft-pink-500 hover:text-white transition-all">עזרה בכל סכום</button>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer ref={footerRef} className="bg-soft-pink-700 text-white px-4 pt-16 pb-12 rounded-t-[5rem] overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="bg-white p-4 rounded-3xl mb-8 shadow-xl"><Heart className="w-10 h-10 text-soft-pink-600 fill-soft-pink-100" /></div>
          <div className="grid md:grid-cols-2 gap-12 w-full mb-12 items-center">
            <div className="space-y-4">
              <h4 className="text-3xl font-bold">תינוקות של החיים</h4>
              <p className="text-xl opacity-90 leading-relaxed max-w-md mx-auto">
                אני כאן כדי לוודא שכל תינוק ילך לישון שבע ושכל אמא תהיה רגועה. ביחד אנחנו נותנים להם התחלה רכה.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold">הצטרפו אלי למשימה</h4>
              <button onClick={scrollToDonation} className="bg-white text-soft-pink-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-soft-pink-50 transition-all">עזרו לי להשביע אותם</button>
              <p className="text-sm opacity-60">הפעילות מתבצעת בשיתוף עמותת עולל עזרה ואהבה ע"ר | סעיף 46 מוכר לצרכי מס</p>
            </div>
          </div>
          <div className="w-full h-px bg-white/10 mb-8"></div>
          <p className="text-xs opacity-50">© 2026 כל הזכויות שמורות למען התינוקות</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
