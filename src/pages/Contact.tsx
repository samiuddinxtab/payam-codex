import { useApp } from '../context/AppContext';
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  MessageCircle,
  Clock,
} from 'lucide-react';

const phoneNumbers = [
  { number: '9550025666', label: 'Primary' },
  { number: '9550028666', label: 'Secondary' },
  { number: '+91 95334 82794', label: 'WhatsApp' },
  { number: '+91 88011 33877', label: 'Alternate' },
  { number: '+91 99088 44575', label: 'Alternate' },
];

export function Contact() {
  const { t } = useApp();

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 geo-pattern" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 fade-in">
            {t('Contact Us', 'ہم سے رابطہ کریں')}
          </h1>
          <p className="text-white/70 text-lg fade-in-d1 max-w-2xl mx-auto">
            {t(
              'Get in touch with Payam-e-Seerat Trust. We are here to help and answer your questions.',
              'پیام سیرت ٹرسٹ سے رابطہ کریں۔ ہم آپ کی مدد اور سوالات کے جوابات کے لیے حاضر ہیں۔'
            )}
          </p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-16 md:py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Details */}
            <div className="space-y-6">
              {/* Address Card */}
              <div className="bg-white rounded-xl p-6 border border-cream-dark shadow-sm card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">
                      {t('Address', 'پتہ')}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Ali Ahmed Colony<br />
                      Near Ali Ahmed Masjid<br />
                      Golconda, Hyderabad<br />
                      Telangana, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl p-6 border border-cream-dark shadow-sm card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">
                      {t('Email', 'ای میل')}
                    </h3>
                    <a
                      href="mailto:payameseerat@gmail.com"
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      payameseerat@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Website Card */}
              <div className="bg-white rounded-xl p-6 border border-cream-dark shadow-sm card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Globe size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">
                      {t('Website', 'ویب سائٹ')}
                    </h3>
                    <a
                      href="https://payameseerat.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      payameseerat.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-xl p-6 border border-cream-dark shadow-sm card-hover">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg mb-2">
                      {t('Office Hours', 'دفتری اوقات')}
                    </h3>
                    <p className="text-gray-700">
                      {t('Saturday – Thursday: 9:00 AM – 6:00 PM', 'ہفتہ – جمعرات: صبح 9 بجے – شام 6 بجے')}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {t('Friday: Closed', 'جمعہ: بند')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map + Phones */}
            <div className="space-y-6">
              {/* Google Map */}
              <div className="bg-white rounded-xl border border-cream-dark shadow-sm overflow-hidden">
                <div className="aspect-[4/3]">
                  <iframe
                    title="Payam-e-Seerat Trust Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3!2d78.4!3d17.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGolconda%2C+Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="bg-white rounded-xl p-6 border border-cream-dark shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Phone size={22} className="text-primary" />
                  <h3 className="font-bold text-primary text-lg">
                    {t('Phone Numbers', 'فون نمبرز')}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {phoneNumbers.map((phone, i) => (
                    <a
                      key={i}
                      href={phone.label === 'WhatsApp' ? `https://wa.me/${phone.number.replace(/[^0-9]/g, '')}` : `tel:${phone.number.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center gap-3 p-3 rounded-lg bg-cream hover:bg-cream-dark transition-colors border border-cream-dark"
                    >
                      {phone.label === 'WhatsApp' ? (
                        <MessageCircle size={18} className="text-primary shrink-0" />
                      ) : (
                        <Phone size={18} className="text-primary shrink-0" />
                      )}
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{phone.number}</p>
                        <p className="text-xs text-gray-500">{phone.label}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 geo-pattern" />
            <div className="relative z-10">
              <MessageCircle size={40} className="text-gold mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">
                {t('Quick Contact via WhatsApp', 'واٹس ایپ کے ذریعے فوری رابطہ')}
              </h2>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                {t(
                  'Send us a message on WhatsApp for quick responses and inquiries.',
                  'فوری جوابات اور استفسارات کے لیے ہمیں واٹس ایپ پر پیغام بھیجیں۔'
                )}
              </p>
              <a
                href="https://wa.me/919533482794"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-primary-dark font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
              >
                <MessageCircle size={22} />
                {t('Chat on WhatsApp', 'واٹس ایپ پر بات کریں')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
