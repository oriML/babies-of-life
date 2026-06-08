import React, { useRef, useEffect, useState } from 'react';
import { Heart, Quote, Image as ImageIcon, MessageSquare, BookOpen, ChevronLeft, AlertCircle, Sun, Calendar, PlusCircle, Smartphone, Camera } from 'lucide-react';

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
      {/* 1. Floating Donation Button */}
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
              לתרומה מהירה
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
            כמתנדב, אני רואה <br />
            <span className="text-soft-pink-500">את הכוח שבנתינה</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-normal mb-14 max-w-3xl mx-auto leading-relaxed">
            אנחנו כאן כדי לוודא שלכל תינוק תהיה גישה למזון וציוד חיוני. בכל 3-4 שעות, אנחנו דואגים שהביטחון התזונתי של הקטנטנים יישמר והתפתחותם תהיה תקינה.
          </p>
          <button
            onClick={scrollToDonation}
            className="bg-soft-pink-500 text-white px-16 py-7 rounded-[2.5rem] text-3xl font-bold shadow-[0_25px_50px_rgba(232,61,118,0.25)] hover:bg-soft-pink-600 hover:scale-105 transition-all flex items-center gap-4 mx-auto"
          >
            עזרו לי להשיג להם אוכל <ChevronLeft className="w-10 h-10" />
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-soft-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </section>

      {/* 3. Description Section (Volunteer Perspective) */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-2 bg-soft-pink-100 text-soft-pink-700 rounded-full font-bold text-sm">סיפורו של פעיל בעמותת עולל</div>
              <h2 className="text-5xl font-bold leading-tight text-gray-900">למה אני פועל בתינוקות של החיים</h2>
              <p className="text-2xl text-gray-600 leading-relaxed font-light">
                כשאני מגיע למשפחות, אני רואה עד כמה הציוד הזה קריטי. מחסור בתחליפי חלב ובציוד בסיסי הוא אתגר עצום עבור אימהות, ואנחנו שם כדי להעניק להן את השקט הנפשי הדרוש.
              </p>
              <div className="bg-soft-pink-50 p-8 rounded-[2.5rem] border border-soft-pink-100">
                <p className="text-xl font-medium text-soft-pink-800">
                  "אני יודע שכל קופסת תמ"ל שאני מוסר מספקת כ-26 בקבוקי חלב — זה שקט של מספר ימים עבור תינוק ואמא שמחכים לנו."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-soft-pink-50 text-center space-y-4">
                <span className="text-5xl font-bold text-soft-pink-500">20</span>
                <p className="text-lg font-bold text-gray-800 leading-tight">פניות חדשות שאנו פוגשים ביום</p>
              </div>
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-soft-pink-50 text-center space-y-4">
                <span className="text-5xl font-bold text-soft-pink-500">50%</span>
                <p className="text-lg font-bold text-gray-800 leading-tight">עלייה בביקוש לתמ"ל רפואי</p>
              </div>
              <div className="bg-white p-8 rounded-[3rem] shadow-xl border border-soft-pink-50 text-center space-y-4 col-span-2">
                <p className="text-xl text-gray-600 font-medium text-center">אני שומע את קולן של מאות אימהות בכל חודש</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stories of Help Section (Volunteer POV) */}
      <section className="py-24 bg-soft-pink-50/20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">מהיומן שלי בשטח</h2>
            <div className="w-24 h-1.5 bg-soft-pink-300 mx-auto rounded-full opacity-50"></div>
          </div>
          
          <article className="group flex flex-col md:flex-row gap-8 items-start bg-white p-10 rounded-[3.5rem] shadow-sm border border-soft-pink-50">
            <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shrink-0">
              <BookOpen className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">המפגש שלי עם חנה</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                פגשתי את חנה כשהיא ניסתה למשוך את הקופסה האחרונה שנשארה לה. כשהגעתי אליה עם המארז החודשי, היא פשוט התמוטטה ובכתה מהקלה. באותו רגע הבנתי שוב שאנחנו מביאים איתנו הרבה יותר מאוכל — אנחנו מביאים תקווה.
              </p>
            </div>
          </article>

          <article className="group flex flex-col md:flex-row gap-8 items-start bg-white p-10 rounded-[3.5rem] shadow-sm border border-soft-pink-50">
            <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shrink-0">
              <ImageIcon className="w-10 h-10" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">המאבק שכולנו רואים</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                אני פוגש משפחות עובדות שלא מצליחות לעמוד ביוקר המחיה. כשהנוטרילון התייקר ב-50%, זה הפך עבורן למשימה בלתי אפשרית. התפקיד שלי הוא לוודא שהן יודעות שהן לא לבד בזה.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="space-y-12">
            <div className="flex items-center gap-4 border-r-4 border-soft-pink-500 pr-6">
              <Camera className="w-8 h-8 text-soft-pink-600" />
              <h2 className="text-4xl font-bold text-gray-900">רגעים מהפעילות שלי</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-video bg-soft-pink-50/50 rounded-[2.5rem] border border-soft-pink-100 flex items-center justify-center group overflow-hidden hover:shadow-xl transition-all">
                  <img src={`/org-activity (${i}).jpeg`} alt={`פעילות עמותה ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="flex items-center gap-4 border-r-4 border-soft-pink-500 pr-6">
              <Smartphone className="w-8 h-8 text-soft-pink-600" />
              <h2 className="text-4xl font-bold text-gray-900">הודעות שאני מקבל</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[9/16] bg-white rounded-[2rem] border border-gray-200 flex flex-col overflow-hidden group shadow-sm hover:shadow-xl transition-all">
                  <div className="h-full w-full overflow-hidden">
                    <img src={`/whatsapp-screenshot (${i}).jpeg`} alt={`צילום מסך וואטסאפ ${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-lg font-light italic">הודעות אמיתיות שקיבלתי (פרטים מזהים הוסרו לשמירה על פרטיות)</p>
          </div>
        </div>
      </section>

      {/* 5. Dilemma Section (Volunteer POV) */}
      <section className="py-32 bg-soft-pink-600 text-white px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <AlertCircle className="w-20 h-20 mx-auto opacity-80" />
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">איך אני יכול לבחור למי להגיד "כן" ולמי "לא"?</h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-95">
            זו השאלה שמלווה אותי בכל בוקר מול עשרות הפניות. אני רוצה להצליח להגיע לכל תינוק ולספק לו את הציוד החיוני שהוא צריך, מבלי לסרב לאף אמא שפונה אלינו.
          </p>
          <div className="pt-8">
            <p className="text-xl italic opacity-80">
              העזרה שלכם מאפשרת לי להמשיך ולספק את האוכל והביטחון התזונתי הזה.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Donate Section */}
      <section ref={donationRef} className="py-32 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">עזרו לי לספק להם מארזי סיוע</h2>
            <p className="text-2xl text-gray-500">בחרו את הדרך שלכם לעזור לי להעניק ביטחון תזונתי</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border-2 border-soft-pink-100 rounded-[3.5rem] p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-soft-pink-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-soft-pink-500 transition-colors"><Sun className="w-10 h-10 text-soft-pink-500 group-hover:text-white" /></div>
              <h3 className="text-3xl font-bold mb-4">מארז קייצי</h3>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">סיוע מיידי באוכל וציוד לימים החמים</p>
              <div className="text-4xl font-bold text-soft-pink-600 mb-10">₪198</div>
              <button onClick={() => handleExternalDonate(198)} className="w-full bg-soft-pink-500 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-600 transition-colors">תרומת מארז קייצי</button>
            </div>

            <div className="bg-white border-4 border-soft-pink-500 rounded-[3.5rem] p-10 flex flex-col items-center text-center shadow-2xl relative scale-105 z-10">
              <div className="absolute -top-6 bg-soft-pink-500 text-white px-8 py-2 rounded-full font-bold">הנפוץ ביותר</div>
              <div className="w-20 h-20 bg-soft-pink-500 rounded-full flex items-center justify-center mb-8"><Calendar className="w-10 h-10 text-white" /></div>
              <h3 className="text-3xl font-bold mb-4">מארז חודשי</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">כל מה שתינוק צריך לחודש שלם של שקט וביטחון</p>
              <div className="text-4xl font-bold text-soft-pink-600 mb-10">₪360</div>
              <button onClick={() => handleExternalDonate(360)} className="w-full bg-soft-pink-600 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-700 transition-colors">תרומת חודש של ביטחון</button>
            </div>

            <div className="bg-white border-2 border-soft-pink-100 rounded-[3.5rem] p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-soft-pink-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-soft-pink-500 transition-colors"><PlusCircle className="w-10 h-10 text-soft-pink-500 group-hover:text-white" /></div>
              <h3 className="text-3xl font-bold mb-4">תמיכה במקסימום</h3>
              <p className="text-gray-500 mb-8 text-lg leading-relaxed">שילוב של מארז קייצי ותמיכה חודשית מלאה באוכל</p>
              <div className="text-4xl font-bold text-soft-pink-600 mb-10">₪558</div>
              <button onClick={() => handleExternalDonate(558)} className="w-full bg-soft-pink-500 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-600 transition-colors">תרומת תמיכה מקסימלית</button>
            </div>
          </div>

          <div className="bg-soft-pink-50 p-12 rounded-[4rem] text-center max-w-2xl mx-auto border border-soft-pink-100">
            <h4 className="text-2xl font-bold mb-6">רוצים לעזור לי בסכום אחר?</h4>
            <p className="text-gray-600 mb-10 text-lg">כל שקל שאתם נותנים עוזר לי להשיג אוכל וציוד חיוני לעוד תינוק</p>
            <button onClick={() => handleExternalDonate()} className="bg-white border-2 border-soft-pink-500 text-soft-pink-600 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-soft-pink-500 hover:text-white transition-all">תרומה בכל סכום</button>
          </div>
        </div>
      </section>

      {/* 7. Gratitude Section */}
      <section className="py-32 bg-soft-pink-50/30 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-20 text-center">
            <MessageSquare className="w-14 h-14 text-soft-pink-200 mb-6" />
            <h2 className="text-5xl font-bold text-gray-900">הכרת תודה שאני מקבל</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: "שרה מ.", text: "הגעתי למצב שלא ידעתי מאיפה אקנה את הקופסה הבאה. כשהמתנדב הגיע עם הציוד, פשוט הרגשתי שאני יכולה לנשום שוב." },
              { name: "אלנה ר.", text: "העלייה במחירים פשוט חנקה אותי. תודה לכם שעוזרים לנו לעבור את התקופה הזו בביטחון ובחיוך." }
            ].map((feedback, i) => (
              <div key={i} className="bg-white p-14 rounded-[4rem] shadow-sm border border-soft-pink-100 relative text-right group hover:shadow-lg transition-all">
                <Quote className="absolute -top-4 right-16 w-12 h-12 text-soft-pink-500 opacity-20" />
                <p className="text-2xl text-gray-700 mb-10 italic leading-relaxed font-medium">"{feedback.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1.5 bg-soft-pink-300 rounded-full"></div>
                  <p className="font-bold text-soft-pink-600 text-2xl">{feedback.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer ref={footerRef} className="bg-soft-pink-700 text-white px-4 pt-16 pb-12 rounded-t-[5rem] overflow-hidden relative">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="bg-white p-4 rounded-3xl mb-8 shadow-xl"><Heart className="w-10 h-10 text-soft-pink-600 fill-soft-pink-100" /></div>
          <div className="grid md:grid-cols-3 gap-12 w-full mb-12 items-start">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold">עולל עזרה ואהבה</h4>
              <p className="text-sm opacity-80 leading-relaxed max-w-xs mx-auto">מלווים אימהות ומבטיחים ביטחון תזונתי וציוד חיוני לכל תינוק.</p>
            </div>
            <div className="space-y-4 border-x border-white/10 px-6">
              <h4 className="text-lg font-bold">צרו קשר</h4>
              <p className="text-sm opacity-80">טלפון: 050-0000000</p>
              <p className="text-sm opacity-80">אימייל: info@olel.org.il</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-bold">קישורים חשובים</h4>
              <button onClick={scrollToDonation} className="text-sm opacity-80 hover:opacity-100 transition-opacity">תרומה מהירה</button>
              <p className="text-sm opacity-80">תקנון העמותה</p>
            </div>
          </div>
          <div className="w-full h-px bg-white/10 mb-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 opacity-60 text-xs">
            <p>© 2026 כל הזכויות שמורות לעמותת עולל עזרה ואהבה ע"ר</p>
            <p>התרומות מוכרות לצרכי מס לפי סעיף 46</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
