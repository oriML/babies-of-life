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
              עזרו לי להשיג להם אוכל
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
            תינוק שבוכה מרעב <br />
            <span className="text-soft-pink-500">לא יכול לחכות</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-normal mb-14 max-w-3xl mx-auto leading-relaxed">
            אני פוגש אמהות שלא מסוגלות לעמוד מול התינוק שלהן שבוכה מרעב. הן רואות את הבקבוק הריק ואין להן איך למלא אותו. אני כאן כדי לבקש ממכם — אל תתנו להן להישאר לבד.
          </p>
          <button
            onClick={scrollToDonation}
            className="bg-soft-pink-500 text-white px-16 py-7 rounded-[2.5rem] text-3xl font-bold shadow-[0_25px_50px_rgba(232,61,118,0.25)] hover:bg-soft-pink-600 hover:scale-105 transition-all flex items-center gap-4 mx-auto"
          >
            אני רוצה להשביע תינוק עכשיו <ChevronLeft className="w-10 h-10" />
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-soft-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </section>

      {/* 3. The Mission (Volunteer Perspective) */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl font-bold leading-tight text-gray-900">אני לא אוסף תרומות לעמותה — אני אוסף אוכל לתינוקות</h2>
            <p className="text-2xl text-gray-600 leading-relaxed font-light">
              כשאני דופק על הדלת, אני לא מייצג ארגון. אני מייצג את התקווה של אמא שחיכתה כל היום לנס. היא יודעת שהתינוק שלה צריך לאכול כל 3-4 שעות, והיא סופרת כל דקה שעוברת כשהוא רעב.
            </p>
            <div className="bg-soft-pink-50 p-10 rounded-[3rem] border border-soft-pink-100 shadow-inner">
              <p className="text-2xl font-medium text-soft-pink-800 leading-relaxed">
                "אין דבר קשה יותר מלראות אמא חסרת אונים מול בכי של רעב. העזרה שלכם הופכת באופן מיידי לקופסת אוכל שמחזירה את החיוך לבית."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stories from the Field */}
      <section className="py-24 bg-soft-pink-50/20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">רגעים שקרעו לי את הלב</h2>
            <div className="w-24 h-1.5 bg-soft-pink-300 mx-auto rounded-full opacity-50"></div>
          </div>
          
          <article className="group flex flex-col md:flex-row gap-8 items-start bg-white p-10 rounded-[3.5rem] shadow-sm border border-soft-pink-50">
            <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shrink-0">
              <BookOpen className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">השתיקה של חנה</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                מצאתי את חנה יושבת בחושך ומנסה להרגיע את התינוק שלה עם מים, כי המטרנה נגמרה לה יומיים קודם. היא פשוט לא יכלה לשאת את המחשבה שהוא רעב ואין לה איך לעזור לו. כשהגשתי לה את המארז, היא פשוט בכתה עלי.
              </p>
            </div>
          </article>

          <article className="group flex flex-col md:flex-row gap-8 items-start bg-white p-10 rounded-[3.5rem] shadow-sm border border-soft-pink-50">
            <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shrink-0">
              <AlertCircle className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">כשיוקר המחיה הופך לרעב</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                משפחות רגילות לגמרי מוצאות את עצמן קורסות. כשהמחיר של האוכל לתינוק עולה ב-50%, האמא נאלצת לבחור בין חשמל לבין להשביע את התינוק שלה. זה מצב שאסור לנו להשלים איתו.
              </p>
            </div>
          </article>
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
            <h2 className="text-4xl font-bold text-gray-900">קולות שאני לא יכול להתעלם מהם</h2>
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
        </div>
      </section>

      {/* 5. How Can I Choose Section */}
      <section className="py-32 bg-soft-pink-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <AlertCircle className="w-20 h-20 mx-auto opacity-80" />
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">איך אני יכול להגיד לאמא "אין לי איך לעזור"?</h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-95">
            הדילמה הכי קשה שלי היא כשאני פוגש תינוק רעב ואין לי קופסת אוכל לתת לו. הלב שלי נשבר כשאני צריך לבחור איזה תינוק יקבל אוכל היום ואיזה ימשיך לבכות. אני מבקש מכם — עזרו לי לא להגיד "לא" לאף אחד.
          </p>
          <div className="pt-8">
            <p className="text-2xl font-bold italic border-t border-white/20 pt-10">
              כל קופסה שאתם נותנים היא 26 בקבוקים של שובע ושקט.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Action Section (Help me feed them) */}
      <section ref={donationRef} className="py-32 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">עזרו לי להשביע תינוק רעב</h2>
            <p className="text-2xl text-gray-500">בחרו את הדרך שלכם להחזיר את החיוך לאמא ולתינוק</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-2 border-soft-pink-100 rounded-[3.5rem] p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-soft-pink-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-soft-pink-500 transition-colors"><Sun className="w-10 h-10 text-soft-pink-500 group-hover:text-white" /></div>
              <h3 className="text-3xl font-bold mb-4">מארז סיוע מיידי</h3>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">להשביע תינוק בימים הקרובים ולהחזיר את השקט לאמא</p>
              <div className="text-4xl font-bold text-soft-pink-600 mb-10">₪198</div>
              <button onClick={() => handleExternalDonate(198)} className="w-full bg-soft-pink-500 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-600 transition-colors">אני רוצה להשביע תינוק</button>
            </div>

            <div className="bg-white border-4 border-soft-pink-500 rounded-[3.5rem] p-10 flex flex-col items-center text-center shadow-2xl relative scale-105 z-10">
              <div className="absolute -top-6 bg-soft-pink-500 text-white px-8 py-2 rounded-full font-bold">חודש שלם של שקט</div>
              <div className="w-20 h-20 bg-soft-pink-500 rounded-full flex items-center justify-center mb-8"><Calendar className="w-10 h-10 text-white" /></div>
              <h3 className="text-3xl font-bold mb-4">מארז שובע חודשי</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">להבטיח שתינוק לא יבכה מרעב במשך חודש שלם</p>
              <div className="text-4xl font-bold text-soft-pink-600 mb-10">₪360</div>
              <button onClick={() => handleExternalDonate(360)} className="w-full bg-soft-pink-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-700 transition-colors">אני נותן חודש של שובע</button>
            </div>

            <div className="bg-white border-2 border-soft-pink-100 rounded-[3.5rem] p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-soft-pink-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-soft-pink-500 transition-colors"><PlusCircle className="w-10 h-10 text-soft-pink-500 group-hover:text-white" /></div>
              <h3 className="text-3xl font-bold mb-4">תמיכה מקסימלית</h3>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">לוודא שלתינוק ולאמא יש את כל מה שצריך כדי לגדול בביטחון</p>
              <div className="text-4xl font-bold text-soft-pink-600 mb-10">₪558</div>
              <button onClick={() => handleExternalDonate(558)} className="w-full bg-soft-pink-500 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-600 transition-colors">תרומה להצלת תינוק רעב</button>
            </div>
          </div>

          <div className="bg-soft-pink-50 p-12 rounded-[4rem] text-center max-w-2xl mx-auto border border-soft-pink-100">
            <h4 className="text-2xl font-bold mb-6">רוצים לעזור לי בסכום אחר?</h4>
            <p className="text-gray-600 mb-10 text-lg">כל שקל שאתם נותנים עוזר לי לקנות עוד קופסת אוכל לתינוק שצריך אותה עכשיו</p>
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
                אני כאן כדי לוודא ששום תינוק לא יבכה מרעב ושום אמא לא תעמוד חסרת אונים. ביחד אנחנו מצילים חיים.
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
