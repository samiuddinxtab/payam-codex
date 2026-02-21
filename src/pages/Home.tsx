import { useApp } from '../context/AppContext';
import {
  BookOpen,
  Building2,
  GraduationCap,
  Users,
  Megaphone,
  Printer,
  ClipboardCheck,
  Heart,
  ArrowRight,
  Star,
  Target,
  Shield,
  BookHeart,
} from 'lucide-react';

const missionItems = [
  {
    icon: BookOpen,
    en: 'Promote Islamic Education',
    ur: 'اسلامی تعلیم کا فروغ',
    descEn: 'Establishing and managing maktabs and madrasas for quality Islamic education.',
    descUr: 'معیاری اسلامی تعلیم کے لیے مکاتب اور مدارس کا قیام اور انتظام۔',
  },
  {
    icon: BookHeart,
    en: 'Support Quran Learning',
    ur: 'قرآنی تعلیم کی مدد',
    descEn: 'Making Quran education accessible to every child in the community.',
    descUr: 'ہر بچے کے لیے قرآنی تعلیم کو قابل رسائی بنانا۔',
  },
  {
    icon: Shield,
    en: 'Moral Upbringing',
    ur: 'اخلاقی تربیت',
    descEn: 'Strengthening moral character and Islamic values in youth.',
    descUr: 'نوجوانوں میں اخلاقی کردار اور اسلامی اقدار کو مضبوط بنانا۔',
  },
  {
    icon: Target,
    en: 'Community Service',
    ur: 'خدمت خلق',
    descEn: 'Serving the community through organized departments and welfare programs.',
    descUr: 'منظم شعبوں اور فلاحی پروگراموں کے ذریعے معاشرے کی خدمت۔',
  },
];

const departments = [
  { icon: BookOpen, ur: 'شعبہ مکاتب', en: 'Maktab Department', descEn: 'Basic Quran education and foundational Islamic teaching across hundreds of maktabs.', descUr: 'سینکڑوں مکاتب میں بنیادی قرآنی تعلیم اور اسلامی تربیت۔' },
  { icon: Building2, ur: 'شعبہ مدارس', en: 'Madrasa Department', descEn: 'Supporting city madrasas with Quran education expansion.', descUr: 'شہری مدارس کی مدد اور قرآنی تعلیم کی توسیع۔' },
  { icon: GraduationCap, ur: 'شعبہ کورس', en: 'Courses Department', descEn: 'Structured Islamic courses and educational programs.', descUr: 'منظم اسلامی کورسز اور تعلیمی پروگرام۔' },
  { icon: Users, ur: 'شعبہ تنظیم اطفال', en: "Children's Organization", descEn: "Children's Islamic development, events and structured learning.", descUr: 'بچوں کی اسلامی نشوونما، تقریبات اور منظم تعلیم۔' },
  { icon: Megaphone, ur: 'شعبہ دعوت', en: 'Dawah Department', descEn: 'Outreach activities and Islamic awareness campaigns.', descUr: 'دعوتی سرگرمیاں اور اسلامی آگاہی مہمات۔' },
  { icon: Printer, ur: 'شعبہ نشرواشاعت', en: 'Publications Department', descEn: 'Quran printing, Islamic books distribution and educational material.', descUr: 'قرآن کی طباعت، اسلامی کتب کی تقسیم اور تعلیمی مواد۔' },
  { icon: ClipboardCheck, ur: 'شعبہ امتحان', en: 'Examination Department', descEn: 'Student testing and academic evaluation systems.', descUr: 'طلبہ کے امتحانات اور تعلیمی جانچ کے نظام۔' },
  { icon: Heart, ur: 'شعبہ تعاون مالی', en: 'Financial Support', descEn: 'Sponsorship programs for teachers, students and operations.', descUr: 'اساتذہ، طلبہ اور آپریشنز کے لیے کفالت کے پروگرام۔' },
];

const stats = [
  { value: '150+', en: 'Maktabs', ur: 'مکاتب' },
  { value: '200+', en: 'Teachers', ur: 'اساتذہ' },
  { value: '5000+', en: 'Students', ur: 'طلبہ' },
  { value: '8', en: 'Departments', ur: 'شعبہ جات' },
];

export function Home() {
  const { isUrdu, setPage, t } = useApp();

  return (
    <div>
      {/* ====== HERO SECTION ====== */}
      <section className="bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 fade-in tracking-tight">
            Payam-e-Seerat Trust
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-urdu text-gold mb-5 fade-in-d1">
            پیام سیرت ٹرسٹ
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-1 fade-in-d1 font-medium">
            Religious Educational &amp; Welfare Trust
          </p>
          <p className="text-white/50 mb-10 fade-in-d2">
            Golconda, Hyderabad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-d2">
            <button
              onClick={() => setPage('departments')}
              className="bg-gold hover:bg-gold-light text-primary-dark font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              {t('Explore Departments', 'شعبہ جات دیکھیں')}
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setPage('support')}
              className="border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              {t('Support the Mission', 'مشن کی مدد کریں')}
              <Heart size={20} />
            </button>
          </div>
        </div>
        {/* Decorative bottom curve */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path d="M0 60L1440 60L1440 0C1200 50 240 50 0 0L0 60Z" fill="#faf8f2" />
          </svg>
        </div>
      </section>

      {/* ====== MISSION SECTION ====== */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              {t('Our Mission', 'ہمارا مشن')}
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center card-hover shadow-sm border border-cream-dark"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-2 text-lg">
                  {isUrdu ? item.ur : item.en}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {isUrdu ? item.descUr : item.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATS STRIP ====== */}
      <section className="bg-primary text-white py-14 geo-pattern">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 font-medium text-lg">
                  {isUrdu ? stat.ur : stat.en}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== DEPARTMENTS PREVIEW ====== */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              {t('Our Departments', 'ہمارے شعبہ جات')}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              {t(
                'Organized departments working together to serve Islamic education and community welfare.',
                'اسلامی تعلیم اور فلاح عامہ کے لیے مل کر کام کرنے والے منظم شعبے۔'
              )}
            </p>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {departments.map((dept, i) => (
              <button
                key={i}
                onClick={() => setPage('departments')}
                className="bg-white rounded-xl p-5 text-start card-hover shadow-sm border border-cream-dark group"
              >
                <div className="w-12 h-12 bg-gold/15 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gold/25 transition-colors">
                  <dept.icon size={24} className="text-gold-dark" />
                </div>
                <h3 className="font-urdu text-primary font-bold text-lg mb-1 leading-relaxed">
                  {dept.ur}
                </h3>
                <p className="text-sm text-gray-500 font-normal leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {isUrdu ? dept.descUr : dept.descEn}
                </p>
                <div className="flex items-center gap-1 text-primary-light text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  {t('View Details', 'تفصیلات دیکھیں')}
                  <ArrowRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ====== DONATION CTA STRIP ====== */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 text-center">
          <Star size={40} className="text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('Support Islamic Education', 'اسلامی تعلیم کی مدد کریں')}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            {[
              { en: 'Sponsor a Teacher', ur: 'استاد کی کفالت کریں', icon: '👨‍🏫' },
              { en: 'Print Islamic Books', ur: 'اسلامی کتب چھپوائیں', icon: '📚' },
              { en: 'Support Quran Education', ur: 'قرآنی تعلیم کی مدد', icon: '📖' },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-5">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="font-semibold">{isUrdu ? item.ur : item.en}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setPage('support')}
            className="bg-gold hover:bg-gold-light text-primary-dark font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            {t('Donate Now', 'ابھی عطیہ دیں')}
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
