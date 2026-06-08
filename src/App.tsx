import React, { useRef } from 'react';
import { Heart, Quote, Info, Image as ImageIcon, MessageSquare, BookOpen, ExternalLink, ChevronLeft } from 'lucide-react';

const App: React.FC = () => {
  const donationRef = useRef<HTMLDivElement>(null);

  const scrollToDonation = () => {
    donationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExternalDonate = () => {
    window.location.href = 'https://example.com/donate'; 
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-soft-pink-200" dir="rtl" style={{ fontFamily: '"Varela Round", sans-serif' }}>
      {/* כפתור תרומה צדי קבוע */}
      <div className="fixed left-0 top-1/3 z-[100] flex flex-col items-start pointer-events-none">
        <button
          onClick={scrollToDonation}
          className="pointer-events-auto bg-soft-pink-600 text-white p-5 rounded-r-[2rem] shadow-[4px_0_24px_rgba(232,61,118,0.4)] hover:bg-soft-pink-700 transition-all hover:pr-10 flex flex-col items-center gap-3 group border-y border-r border-white/20"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <Heart className="w-6 h-6 fill-white group-hover:scale-125 transition-transform" />
          <span className="font-bold text-xl tracking-wider py-2">לתרומה מהירה</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[95vh] flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-soft-pink-100/40 to-white">
        <div className="max-w-4xl animate-in fade-in zoom-in-95 duration-1000">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full w-fit mx-auto mb-10 shadow-sm border border-soft-pink-100">
            <Heart className="w-16 h-16 text-soft-pink-500 fill-soft-pink-50" />
          </div>
          <h1 className="text-6xl md:text-[6rem] font-bold tracking-tight mb-8 text-gray-900 leading-[1.1]">
            לכל תינוק מגיעה <br />
            <span className="text-soft-pink-500">התחלה רכה</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 font-normal mb-14 max-w-2xl mx-auto leading-relaxed">
            אנחנו כאן כדי לוודא שאף אמא לא תעמוד חסרת אונים מול מדף ריק. מטרנה, טיטולים ומוצצים באהבה ובכבוד.
          </p>
          <button
            onClick={scrollToDonation}
            className="bg-soft-pink-500 text-white px-16 py-7 rounded-[2.5rem] text-3xl font-bold shadow-[0_25px_50px_rgba(232,61,118,0.25)] hover:bg-soft-pink-600 hover:scale-105 transition-all flex items-center gap-4 mx-auto"
          >
            אני רוצה לעזור לאמא <ChevronLeft className="w-10 h-10" />
          </button>
        </div>
      </section>

      {/* ציטוטים מאמהות */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              "השקט של תיק טיטולים ריק הוא הפחד הכי גדול שהכרתי בחיי.",
              "מוצץ הוא הרבה יותר מפלסטיק הוא רגע של שלווה לילד בוכה ולאמא עייפה.",
              "הידיעה שיש לי מטרנה ללילה אומרת שאני יכולה סוף סוף לישון בשקט."
            ].map((quote, i) => (
              <div key={i} className="bg-soft-pink-50/50 p-12 rounded-[3rem] relative border border-soft-pink-100/30 shadow-sm hover:shadow-lg transition-all">
                <Quote className="w-12 h-12 text-soft-pink-200 mb-6" />
                <p className="text-2xl italic text-gray-700 leading-relaxed font-medium">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* הסבר על הבעיה והעמותה */}
      <section className="py-32 bg-soft-pink-50/20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-8 py-3 bg-white text-soft-pink-600 rounded-full font-bold text-lg mb-10 shadow-sm border border-soft-pink-100">הסיפור שלנו</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-14 text-gray-900 leading-tight">הקושי הוא אמיתי אבל גם הדאגה שלנו</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center text-right">
            <div className="space-y-8 text-2xl text-gray-600 leading-relaxed">
              <p>
                השמחה על תינוק חדש לא צריכה להיות מלווה בחרדה כלכלית. מחירי מוצרי היסוד עלו ומשאירים משפחות רבות ללא מענה בסיסי.
              </p>
              <p>
                עמותת <span className="text-soft-pink-600 font-bold">תינוקות של החיים</span> הוקמה כדי להבטיח שכל תינוק יקבל את המינימום הדרוש לו לבריאות ונוחות.
              </p>
            </div>
            <div className="bg-white p-14 rounded-[3.5rem] shadow-xl shadow-soft-pink-100/50 border border-soft-pink-50">
              <Info className="w-14 h-14 text-soft-pink-500 mb-8" />
              <h3 className="text-3xl font-bold mb-6 text-gray-900">מה אנחנו עושים?</h3>
              <p className="font-normal text-xl text-gray-600 leading-relaxed">
                אנחנו פועלים בפריסה ארצית לאיסוף תרומות וחלוקת מארזי חירום הכוללים מטרנה, טיטולים, מגבונים ומוצצים ישירות לידיים של האימהות.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* תמונות מהשטח */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-5xl font-bold tracking-tight mb-6">רגעים של נתינה</h2>
            <div className="w-24 h-2 bg-soft-pink-300 rounded-full opacity-50"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[4/5] bg-soft-pink-50 rounded-[3rem] overflow-hidden hover:scale-[1.05] transition-all shadow-sm flex items-center justify-center border-2 border-dashed border-soft-pink-100 group">
                <div className="text-center p-8">
                  <ImageIcon className="w-14 h-14 text-soft-pink-200 mx-auto mb-4 group-hover:text-soft-pink-400 transition-colors" />
                  <span className="text-soft-pink-400 font-bold text-lg">פעילות חסויה</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* כפתור אמצעי */}
      <div className="py-24 flex justify-center bg-white border-y border-soft-pink-50">
        <button
          onClick={scrollToDonation}
          className="bg-white border-4 border-soft-pink-500 text-soft-pink-600 px-20 py-6 rounded-full text-3xl font-bold hover:bg-soft-pink-500 hover:text-white transition-all shadow-2xl hover:shadow-soft-pink-300"
        >
          אני רוצה להושיט יד עכשיו
        </button>
      </div>

      {/* תגובות של אמהות */}
      <section className="py-24 bg-soft-pink-50/30 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-20 text-gray-900">הכרת תודה מהלב</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { name: "שרה מ.", text: "החבילה הגיעה בדיוק כשנשארתי עם שני הטיטולים האחרונים. בכיתי מהקלה תודה שאתם קיימים." },
              { name: "אלנה ר.", text: "תודה רבה על המטרנה. זה מוצר כל כך יקר וזה עזר לנו לעבור את החודש בביטחון ובחיוך." }
            ].map((feedback, i) => (
              <div key={i} className="bg-white p-16 rounded-[4rem] shadow-sm border border-soft-pink-100 relative text-right">
                <div className="absolute -top-8 right-16 bg-soft-pink-500 p-5 rounded-[1.5rem] shadow-xl">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
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

      {/* סיפורים אישיים */}
      <section className="py-32 bg-white px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-24 text-center text-gray-900">סיפורים מאחורי החבילות</h2>
          <div className="space-y-24">
            <article className="group">
              <div className="flex gap-10 items-start">
                <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shadow-sm">
                  <BookOpen className="w-10 h-10" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-gray-900">תקווה בתוך קופסה</h3>
                  <p className="text-2xl text-gray-600 leading-relaxed font-normal">
                    כשמריה איבדה את עבודתה היא לא ידעה איך תוכל לעמוד בהוצאות עבור תינוקה בן 4 חודשים. המתנדבת שלנו פגשה אותה עם אספקה לחודש של טיטולים ומגבונים. זה לא היה רק ציוד זו הייתה ההבנה שהיא לא לבד.
                  </p>
                </div>
              </div>
            </article>
            <article className="group">
              <div className="flex gap-10 items-start">
                <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shadow-sm">
                  <Heart className="w-10 h-10" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-bold text-gray-900">לילה של שקט</h3>
                  <p className="text-2xl text-gray-600 leading-relaxed font-normal">
                    דוד וחנה התקשו למצוא את סוג המטרנה הספציפי שהתינוק שלהם היה זקוק לו. דרך רשת התורמים שלנו הצלחנו להשיג שש קופסאות ולהביא אותן לפתח ביתם תוך פחות מ 24 שעות. התינוק משגשג וההורים אסירי תודה.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* כפתור תרומה סופי */}
      <section ref={donationRef} className="py-48 bg-soft-pink-600 text-white px-4 rounded-t-[7rem] shadow-[0_-30px_70px_rgba(232,61,118,0.25)]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-12 backdrop-blur-md border border-white/20">
            <Heart className="w-14 h-14 text-white fill-current animate-pulse" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold mb-12 leading-tight">תהיו הסיבה שתינוק מחייך היום</h2>
          <p className="text-3xl mb-24 opacity-95 leading-relaxed font-normal max-w-3xl mx-auto">
            התרומה שלכם הופכת באופן מיידי למזון וציוד מציל חיים. ביחד נוכל להבטיח שלכל תינוק תהיה התחלה רכה ומלאה באהבה.
          </p>
          <button
            onClick={handleExternalDonate}
            className="bg-white text-soft-pink-600 px-20 py-10 rounded-[3rem] text-4xl font-bold shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all flex items-center gap-6 mx-auto group"
          >
            השלימו את התרומה עכשיו <ExternalLink className="w-12 h-12 group-hover:-translate-x-3 transition-transform" />
          </button>
          <div className="mt-24 pt-12 border-t border-white/20 flex flex-col md:flex-row justify-center items-center gap-12 text-xl font-medium">
            <span className="flex items-center gap-3"><Info className="w-7 h-7" /> תשלום מאובטח ב SSL</span>
            <span className="flex items-center gap-3"><Heart className="w-7 h-7" /> מוכר לצרכי מס סעיף 46</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-soft-pink-700 text-white/90 text-center px-4">
        <p className="text-xl font-bold mb-2">תינוקות של החיים</p>
        <p className="font-normal opacity-90 text-sm">מחזקים אימהות בונים עתיד לתינוקות</p>
        <div className="w-16 h-0.5 bg-white/20 mx-auto my-6 rounded-full"></div>
        <p className="text-xs opacity-60">© 2026 כל הזכויות שמורות לעמותת תינוקות של החיים ע"ר</p>
      </footer>
    </div>
  );
};

export default App;
