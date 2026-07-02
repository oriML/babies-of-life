import React, { useRef, useEffect, useState } from "react";
import {
  Heart,
  BookOpen,
  ChevronLeft,
  AlertCircle,
  Sun,
  Calendar,
  PlusCircle,
} from "lucide-react";

const CurveDivider: React.FC<{ color: string }> = ({ color }) => (
  <div className="absolute left-0 bottom-[-1px] w-full overflow-hidden leading-[0] z-20">
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="relative block w-full h-[60px] md:h-[100px]"
    >
      <path
        fill={color}
        d="M0,0 L360,0 C720,120 720,120 1080,0 L1440,0 L1440,120 L0,120 Z"
      ></path>
    </svg>
  </div>
);

const WaveDivider: React.FC<{ color: string; position: "top" | "bottom" }> = ({
  color,
  position,
}) => (
  <div
    className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 ${position === "top" ? "top-[-1px]" : "bottom-[-1px]"}`}
  >
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="relative block w-full h-[50px] md:h-[100px]"
    >
      <path
        fill={color}
        d="M0,160L48,176C96,192,192,208,288,186.7C384,165,480,107,576,112C672,117,768,181,864,181.3C960,181,1056,117,1152,96C1248,75,1344,96,1392,106.7L1440,117L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  </div>
);

const App: React.FC = () => {
  const donationRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  useEffect(() => {
    const handleIntersect = () => {
      const isHeroVisible = heroRef.current
        ? heroRef.current.getBoundingClientRect().top < window.innerHeight &&
          heroRef.current.getBoundingClientRect().bottom > 0
        : false;
      const isFooterVisible = footerRef.current
        ? footerRef.current.getBoundingClientRect().top < window.innerHeight &&
          footerRef.current.getBoundingClientRect().bottom > 0
        : false;

      setShowFloatingButton(!isHeroVisible && !isFooterVisible);
    };

    window.addEventListener("scroll", handleIntersect);
    handleIntersect();

    return () => window.removeEventListener("scroll", handleIntersect);
  }, []);

  const scrollToDonation = () => {
    donationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExternalDonate = (amount?: number) => {
    const baseUrl = "https://bit.ly/4x5dsGE";
    window.location.href = amount ? `${baseUrl}?amount=${amount}` : baseUrl;
  };

  return (
    <div
      className="min-h-screen bg-white text-gray-800 selection:bg-soft-pink-200 overflow-x-hidden text-center md:text-right"
      dir="rtl"
      style={{ fontFamily: '"Varela Round", sans-serif' }}
    >
      {/* 1. Floating Action Button */}
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-[100] transition-all duration-500 transform ${
          showFloatingButton
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <button
          onClick={scrollToDonation}
          className="group relative flex items-center bg-soft-pink-600 text-white shadow-[8px_0_30px_rgba(232,61,118,0.3)] hover:bg-soft-pink-700 transition-all duration-300 rounded-r-full p-4 overflow-hidden"
        >
          <div className="relative z-10 flex items-center gap-3">
            <Heart className="w-8 h-8 fill-white group-hover:scale-110 transition-transform duration-300" />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold text-xl pr-1 text-right">
              אני רוצה לעזור להם
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>

      {/* 2. Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-soft-pink-100/40 to-white overflow-hidden"
      >
        <div className="max-w-4xl animate-in fade-in zoom-in-95 duration-1000 z-50 relative">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-full w-fit mx-auto mb-10 shadow-sm border border-soft-pink-100 text-center">
            <Heart className="w-16 h-16 text-soft-pink-500 fill-soft-pink-50 mx-auto" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900 leading-[1.1] text-center">
            אף תינוק לא צריך <br />
            <span className="text-soft-pink-500 italic">ללכת לישון רעב</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-10 text-center">
            התרומה שלך מעניקה לאמא את הביטחון שהתינוק שלה יקבל את המזון שהוא
            חייב.
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 font-normal mb-14 max-w-2xl mx-auto leading-relaxed text-center">
            יש אמהות שלא יודעות איך יספקו את הבקבוק הבא. בתוך רגעים, התרומה שלך
            הופכת לתמ"ל, חיתולים ומוצרים חיוניים שמגיעים בזמן. כדי שהתינוק יאכל,
            והאמא תדע שהיא לא לבד.
          </p>
          <button
            onClick={scrollToDonation}
            className="bg-soft-pink-500 text-white px-16 py-7 rounded-[2.5rem] text-3xl font-bold shadow-[0_25px_50px_rgba(232,61,118,0.25)] hover:bg-soft-pink-600 hover:scale-105 transition-all flex items-center gap-4 mx-auto relative z-50"
          >
            אני רוצה לעזור לאמא ולתינוק <ChevronLeft className="w-10 h-10" />
          </button>
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-soft-pink-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse z-0"></div>
        <CurveDivider color="#ffffff" />
      </section>

      {/* 3. Description Section */}
      <section className="relative py-32 bg-white px-4">
        <div className="max-w-6xl mx-auto relative z-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center md:text-right">
              <div className="inline-block px-6 py-2 bg-soft-pink-100 text-soft-pink-700 rounded-full font-bold text-sm mx-auto md:mx-0">
                סיפורם של המתנדבים בעמותת עולל
              </div>
              <h2 className="text-5xl font-bold leading-tight text-gray-900 text-center md:text-right">
                למה אנחנו פועלים בתינוקות של החיים
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed font-light text-center md:text-right">
                כשאנחנו מגיעים למשפחות אנחנו רואים עד כמה הציוד הזה קריטי. אנחנו
                שם כדי להעניק להן את השקט הנפשי שהתינוק שלהן יקבל את כל מה שהוא
                צריך.
              </p>
              <div className="bg-soft-pink-50 p-8 rounded-[2.5rem] border border-soft-pink-100 shadow-sm text-center md:text-right">
                <p className="text-xl font-medium text-soft-pink-800 leading-relaxed">
                  "אנחנו יודעים שכל קופסת תמ"ל שאנחנו מוסרים מספקת כ 26 בקבוקי
                  חלב זה שקט של מספר ימים עבור תינוק ואמא שמחכים לנו."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-soft-pink-50/30 p-8 rounded-[3rem] shadow-sm border border-soft-pink-100 text-center space-y-4">
                <span className="text-5xl font-bold text-soft-pink-500 block text-center">
                  20
                </span>
                <p className="text-lg font-bold text-gray-800 leading-tight text-center">
                  פניות חדשות בכל יום
                </p>
              </div>
              <div className="bg-soft-pink-50/30 p-8 rounded-[3rem] shadow-sm border border-soft-pink-100 text-center space-y-4">
                <span className="text-5xl font-bold text-soft-pink-500 block text-center">
                  50%
                </span>
                <p className="text-lg font-bold text-gray-800 leading-tight text-center">
                  עלייה בביקוש לתמ"ל רפואי
                </p>
              </div>
              <div className="bg-white p-8 rounded-[3rem] shadow-md border border-soft-pink-100 text-center space-y-4 col-span-2">
                <p className="text-xl text-gray-600 font-medium text-center">
                  אנחנו שומעים את קולן של מאות אימהות בכל חודש
                </p>
              </div>
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
        <WaveDivider color="#fff5f7" position="bottom" />
      </section>

      {/* 4. Stories from the Field - War Edition */}
      <section className="relative py-40 bg-[#fff5f7] px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-16 text-center relative z-20">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-gray-900 text-center">
              סיפורים מהמלחמה
            </h2>
            <p className="text-xl text-soft-pink-600 font-medium text-center">
              מאז ה 7.10 הלב שלנו פוגש גבורה ושברון לב בכל יום
            </p>
            <div className="w-24 h-1.5 bg-soft-pink-300 mx-auto rounded-full opacity-50"></div>
          </div>

          <article className="group flex flex-col md:flex-row gap-8 items-start bg-white p-10 rounded-[3.5rem] shadow-sm border border-soft-pink-50 text-center md:text-right hover:shadow-lg transition-all">
            <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shrink-0 mx-auto md:mx-0">
              <BookOpen className="w-10 h-10" />
            </div>
            <div className="space-y-4 text-center md:text-right">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                השקט של שוהם הקטנה
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                פגשנו את נעמי באשדוד אמא לשישה שסוחבת על גבה עול בלתי יאומן. היא
                בהריון מתקדם והמלחמה השאירה אותם ללא פרנסה. כשמסרנו לה את התמ"ל
                והטיטולים עבור שוהם התינוקת ראינו איך האבן נגולה מעל ליבה.
              </p>
            </div>
          </article>

          <article className="group flex flex-col md:flex-row gap-8 items-start bg-white p-10 rounded-[3.5rem] shadow-sm border border-soft-pink-50 text-center md:text-right hover:shadow-lg transition-all">
            <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shrink-0">
              <Heart className="w-10 h-10" />
            </div>
            <div className="space-y-4 text-center md:text-right">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                יד מושטת לגליה
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                גליה עברה לאשדוד באמצע המלחמה פצועה אחרי ניתוח. עזרנו להם עם
                מטרנות וטיטולים בדיוק ברגעים שהכל נראה אבוד. היום גליה הודתה לנו
                עם דמעות של נחת בעיניים.
              </p>
            </div>
          </article>

          <article className="group flex flex-col md:flex-row gap-8 items-start bg-white p-10 rounded-[3.5rem] shadow-sm border border-soft-pink-50 text-center md:text-right hover:shadow-lg transition-all">
            <div className="bg-soft-pink-100 p-6 rounded-[2rem] text-soft-pink-600 group-hover:bg-soft-pink-500 group-hover:text-white transition-all shrink-0">
              <AlertCircle className="w-10 h-10" />
            </div>
            <div className="space-y-4 text-center md:text-right">
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                התקווה של עטרה
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed font-light">
                עטרה היא אמא חד הורית גיבורה מאשדוד שמתמודדת עם השלכות של גידול
                בראש. הבאנו לה ארגז חירום והכנסנו אותה לפרויקט שלנו. זה השקט
                שלה.
              </p>
            </div>
          </article>

          <div className="pt-12 text-center">
            <button
              onClick={scrollToDonation}
              className="bg-soft-pink-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-soft-pink-600 transition-all shadow-xl"
            >
              אנחנו רוצים להיות שותפים
            </button>
          </div>
        </div>
        <WaveDivider color="#ffffff" position="bottom" />
      </section>

      {/* 4.1 Additional Heart-to-Heart Stories */}
      <section className="relative py-32 bg-white px-4">
        <div className="max-w-6xl mx-auto space-y-16 relative z-20 text-center md:text-right">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              עוד רגעים שאנחנו לא שוכחים
            </h2>
            <p className="text-lg text-gray-500 text-center">
              כל פניה היא עולם ומלואו של תקווה ושובע
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "הבית של מזל ודוד",
                text: "מזל ודוד איבדו הכל בשריפה. בתוך השכול מזל פנתה אלינו כדי שלפחות לתינוק יהיה את השובע שלו. אנחנו כאן כדי לתת לה אותו בכבוד.",
              },
              {
                title: "ההודעה של אבישג",
                text: "בשתיים בלילה קיבלנו הודעה מאבישג. בתוך גירושין קשים היא רק רצתה לדעת שיהיה לה מטרנה למחר. המתנדבים שלנו נרתמו מיד.",
              },
              {
                title: "המאבק של מוטי",
                text: "מוטי מגדל לבדו תינוק בן חודשיים. התפקיד שלנו הוא להסיר ממנו את הדאגה לאוכל וציוד כדי שיוכל להתמקד רק בטיפול ובאהבה.",
              },
              {
                title: "הגבורה של ליפז",
                text: "ליפז עברה התעללות קשה והתינוקת שלה זקוקה לטיפול מיוחד. אנחנו שם כדי לספק לה ביטחון תזונתי.",
              },
              {
                title: "הכוחות של מירי",
                text: "מירי מתמודדת עם אי ספיקת כליות ומשפחה גדולה. לספק להם אוכל וביגוד לתינוקות זה לא רק עזרה זה אוויר לנשימה.",
              },
              {
                title: "הבקשה של אמה",
                text: "אמה מנתניה מטפלת במסירות בתינוקת שלה. הידיעה שלתינוקת שלה לא יחסר דבר היא כל מה שהיא צריכה.",
              },
            ].map((story, i) => (
              <div
                key={i}
                className="bg-soft-pink-50/30 p-8 rounded-[3rem] border border-soft-pink-100 flex flex-col h-full hover:shadow-md transition-shadow text-center md:text-right"
              >
                <h3 className="text-2xl font-bold mb-4 text-soft-pink-600 text-center md:text-right">
                  {story.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light text-center md:text-right">
                  {story.text}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-12 flex justify-center text-center">
            <button
              onClick={scrollToDonation}
              className="bg-white border-2 border-soft-pink-500 text-soft-pink-600 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-soft-pink-500 hover:text-white transition-all shadow-md"
            >
              אני רוצה לעזור לעוד אמא
            </button>
          </div>
        </div>
        <WaveDivider color="#fff5f7" position="bottom" />
      </section>

      {/* 4.2 Celebrities Section */}
      <section className="relative py-32 bg-[#fff5f7] px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-16 relative z-20 text-center md:text-right">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-bold text-gray-900 text-center">
              סלבס נרתמים למען התינוקות
            </h2>
            <p className="text-xl text-soft-pink-600 font-medium text-center">
              הלב הגדול של ישראל מגיע לשטח כדי להבטיח שכל תינוק ילך לישון שבע
            </p>
            <div className="w-24 h-1.5 bg-soft-pink-300 mx-auto rounded-full opacity-50 text-center"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white transition-all hover:scale-[1.02]">
              <img
                src={`${import.meta.env.BASE_URL}selebs-photos/don.jpeg`}
                alt="דון לני גבאי ויאנה יוסף מתנדבות"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white text-center md:text-right">
                <p className="text-xl font-bold">דון לני גבאי ויאנה יוסף</p>
                <p className="text-sm opacity-80">במבצע אריזה וחלוקה</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white transition-all hover:scale-[1.02]">
              <img
                src={`${import.meta.env.BASE_URL}selebs-photos/jaki.jpeg`}
                alt="ג'קי אזולאי ואודליה סויסה מתנדבות"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white text-center md:text-right">
                <p className="text-xl font-bold">ג'קי אזולאי ואודליה סויסה</p>
                <p className="text-sm opacity-80">מביאות חיוך ושובע לבתים</p>
              </div>
            </div>
            <div className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-xl border-4 border-white transition-all hover:scale-[1.02]">
              <img
                src={`${import.meta.env.BASE_URL}selebs-photos/rinat.jpeg`}
                alt="סלבס מתנדבים מהעיתונות"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white text-center md:text-right">
                <p className="text-xl font-bold">נתינה ללא גבולות</p>
                <p className="text-sm opacity-80">תיעוד מתוך כתבה בעיתון</p>
              </div>
            </div>
          </div>

          <div className="pt-12 flex justify-center text-center">
            <button
              onClick={scrollToDonation}
              className="bg-soft-pink-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-soft-pink-600 transition-all shadow-xl"
            >
              אני רוצה להירתם
            </button>
          </div>
        </div>
        <WaveDivider color="#ffffff" position="bottom" />
      </section>

      {/* Gallery Section */}
      <section className="relative py-40 bg-white px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto space-y-24 relative z-20 text-center">
          <div className="space-y-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              הפעילות שלנו בשטח
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="aspect-video bg-white rounded-[2.5rem] border border-soft-pink-100 flex items-center justify-center group overflow-hidden hover:shadow-xl transition-all shadow-sm"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}org-activity (${i}).jpeg`}
                    alt={`פעילות עמותה ${i}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12 text-center">
            <h2 className="text-4xl font-bold text-gray-900 text-center">
              קולות של אמהות רגועות
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-[9/16] bg-white rounded-[2rem] border border-gray-100 flex flex-col overflow-hidden group shadow-sm hover:shadow-xl transition-all"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}whatsapp-screenshot (${i}).jpeg`}
                    alt={`צילום מסך וואטסאפ ${i}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            <div className="pt-16 flex justify-center text-center">
              <button
                onClick={scrollToDonation}
                className="bg-white border-2 border-soft-pink-500 text-soft-pink-600 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-soft-pink-500 hover:text-white transition-all shadow-md"
              >
                אני רוצה לעזור לעוד אמא
              </button>
            </div>
          </div>
        </div>
        <WaveDivider color="#f96894" position="bottom" />
      </section>

      {/* 5. The Choice Section */}
      <section className="relative py-48 bg-[#f96894] text-white px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-20">
          <AlertCircle className="w-20 h-20 mx-auto opacity-80" />
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-center">
            איך אנחנו יכולים לבחור מי ילך לישון שבע?
          </h2>
          <p className="text-2xl md:text-3xl font-light leading-relaxed opacity-95 text-center">
            השאיפה שלנו היא שלא אצטרך לבחור לעולם. אנחנו רוצים שלכל תינוק יהיה
            את השובע שלו ולכל אמא יהיה את השקט שלה. בעזרתכם אנחנו יכולים להבטיח
            שלמתוק של עוד אמא לא יחסר דבר הלילה.
          </p>
          <p className="text-2xl font-bold italic border-t border-white/20 pt-10 text-center">
            בואו נדאג שכל תינוק יקבל את מה שהוא צריך כדי לגדול בנחת.
          </p>
        </div>
        <WaveDivider color="#ffffff" position="bottom" />
      </section>

      {/* 6. Action Section */}
      <section
        ref={donationRef}
        className="relative py-40 bg-white px-4 overflow-hidden text-center"
      >
        <div className="max-w-6xl mx-auto relative z-20 text-center">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900 text-center">
              עזרו לנו להעניק להם שובע
            </h2>
            <p className="text-2xl text-gray-500 text-center">
              בחרו איך אתם רוצים לעזור לעוד תינוק ללכת לישון שבע
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "מארז שקט מיידי",
                text: "להבטיח לתינוק ימים של שובע ולתת לאמא רגע של נשימה",
                price: 158,
                icon: <Sun className="w-10 h-10" />,
                btn: "אני נותן לתינוק שובע",
              },
              {
                title: "מארז שובע לשבועיים",
                text: "לוודא שלמתוק שלה לא יחסר דבר במשך שבועיים",
                price: 237,
                icon: <Calendar className="w-10 h-10" />,
                btn: "אני נותן שבועיים של שקט",
                popular: true,
              },
              {
                title: "תמיכה מקיפה לחודש שלם",
                text: "להעניק לתינוק ולאמא את כל הביטחון שהם צריכים",
                price: 360,
                icon: <PlusCircle className="w-10 h-10" />,
                btn: "אני נותן ביטחון מלא",
              },
            ].map((pkg, i) => (
              <div
                key={i}
                className={`bg-white border-2 ${pkg.popular ? "border-soft-pink-500 shadow-2xl scale-105 z-10" : "border-soft-pink-100"} rounded-[3.5rem] p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all hover:-translate-y-2 group relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-6 bg-soft-pink-500 text-white px-8 py-2 rounded-full font-bold shadow-lg">
                    הנפוץ ביותר
                  </div>
                )}
                <div
                  className={`w-20 h-20 ${pkg.popular ? "bg-soft-pink-500 text-white" : "bg-soft-pink-50 text-soft-pink-500"} rounded-full flex items-center justify-center mb-8 group-hover:bg-soft-pink-600 group-hover:text-white transition-colors`}
                >
                  {pkg.icon}
                </div>
                <h3 className="text-3xl font-bold mb-4 text-center">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 mb-8 text-lg leading-relaxed text-center">
                  {pkg.text}
                </p>
                <div className="text-4xl font-bold text-soft-pink-600 mb-10 text-center">
                  ₪{pkg.price}
                </div>
                <button
                  onClick={() => handleExternalDonate(pkg.price)}
                  className="w-full bg-soft-pink-500 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-soft-pink-600 transition-colors"
                >
                  {pkg.btn}
                </button>
              </div>
            ))}
          </div>
          <div className="bg-soft-pink-50 p-12 rounded-[4rem] text-center max-w-2xl mx-auto border border-soft-pink-100 shadow-sm mb-12">
            <h4 className="text-2xl font-bold mb-6 text-center">
              רוצים לעזור לנו בסכום אחר?
            </h4>
            <p className="text-gray-600 mb-10 text-lg text-center">
              כל עזרה שלכם מאפשרת לנו להעניק לעוד תינוק את השובע שלו
            </p>
            <button
              onClick={() => handleExternalDonate()}
              className="bg-white border-2 border-soft-pink-500 text-soft-pink-600 px-12 py-4 rounded-2xl font-bold text-xl hover:bg-soft-pink-500 hover:text-white transition-all shadow-md mx-auto"
            >
              אני רוצה לתרום סכום אחר
            </button>
          </div>
        </div>
        <WaveDivider color="#c7245a" position="bottom" />
      </section>

      {/* 7. Footer */}
      <footer
        ref={footerRef}
        className="relative bg-[#c7245a] text-white px-4 pt-16 pb-12 overflow-hidden text-center"
      >
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-20">
          <div className="bg-white p-4 rounded-3xl mb-8 shadow-xl text-center">
            <Heart className="w-10 h-10 text-soft-pink-600 fill-soft-pink-100 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 w-full mb-12 items-center text-center">
            <div className="space-y-4 text-center">
              <h4 className="text-3xl font-bold text-center">
                תינוקות של החיים
              </h4>
              <p className="text-xl opacity-90 leading-relaxed max-w-md mx-auto text-center">
                אנחנו כאן כדי לוודא שכל תינוק ילך לישון שבע ושכל אמא תהיה רגועה.
                ביחד אנחנו נותנים להם התחלה רכה.
              </p>
              <div className="pt-4 border-t border-white/20 mt-4">
                <p className="text-sm font-medium opacity-80 text-center italic">
                  דף זה הוקם ומנוהל על ידי מתנדב שותף בעמותה המקדיש את זמנו למען
                  התינוקות.
                </p>
              </div>
            </div>
            <div className="space-y-6 text-center">
              <h4 className="text-xl font-bold text-center">
                הצטרפו אלינו למשימה
              </h4>
              <button
                onClick={scrollToDonation}
                className="bg-white text-soft-pink-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-soft-pink-50 transition-all shadow-lg mx-auto"
              >
                אני רוצה לעזור
              </button>
              <p className="text-sm opacity-60 text-center">
                הפעילות מתבצעת בשיתוף עמותת עולל עזרה ואהבה ע"ר | סעיף 46 מוכר
                לצרכי מס
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-white/10 mb-8 text-center"></div>
          <p className="text-xs opacity-50 text-center">
            © 2026 כל הזכויות שמורות למען התינוקות
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
