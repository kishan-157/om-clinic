import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  MessageCircle,
  Navigation,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { BusinessConfig, buildWhatsAppLink, isClinicOpenNow } from '../config/businessConfig';
import { Language, translations } from '../translations';

interface Props {
  config: BusinessConfig;
  lang: Language;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<Props> = ({ config, lang, onOpenBooking }) => {
  const t = translations[lang].contact;
  const status = isClinicOpenNow(lang);

  const displayAddress1 = lang === 'gu' ? config.address.line1Gu : config.address.line1;
  const displayAddress2 = lang === 'gu' ? config.address.line2Gu : config.address.line2;
  const displayLandmark = lang === 'gu' ? config.address.landmarkGu : config.address.landmark;
  const displayArea = lang === 'gu' ? config.address.areaGu : config.address.area;
  const displayCity = lang === 'gu' ? config.address.cityGu : config.address.city;
  const displayState = lang === 'gu' ? config.address.stateGu : config.address.state;

  const whatsappUrl = buildWhatsAppLink(
    config.whatsappNumber,
    lang === 'gu'
      ? `નમસ્તે ડૉ. હર્ષ પટેલ, મારે ઓમ ડેન્ટલ ક્લિનિક નિકોલ ખાતે આવવા માટે રસ્તો અને મુલાકાત સમય જાણવો છે.`
      : `Hello Dr. Harsh Patel, I would like directions and consultation timings for Om Dental Clinic in Nikol.`
  );

  return (
    <section id="contact" className="py-24 bg-[#f8fafc] relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-700">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a2540] mt-3 text-balance">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Location & Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address, Hours & Contact Details */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between reveal-left">
            {/* Address Card */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0a2540]">{t.addressTitle}</h3>
                  <p className="text-xs text-sky-800 font-semibold mt-0.5">
                    {displayArea}, {displayCity}
                  </p>
                  <p className="text-sm text-slate-600 mt-2 font-medium leading-relaxed">
                    {displayAddress1}<br />
                    {displayAddress2}<br />
                    {displayLandmark}<br />
                    {displayArea}, {displayCity}, {displayState} — {config.address.pincode}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2">
                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0b3b60] text-white font-bold text-xs hover:bg-sky-800 transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-sky-300" />
                  <span>{t.directionsBtn}</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0b3b60] flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0a2540]">{t.hoursTitle}</h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {lang === 'gu' ? 'નિયમિત અને વીકએન્ડ સમય' : 'Regular & weekend schedule'}
                    </p>
                  </div>
                </div>

                {/* Real-time Status Badge */}
                <div className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  status.isOpen
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  {status.statusText}
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                {config.timings.map((tm, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#f8fafc] border border-sky-100 flex flex-col gap-1">
                    <span className="font-bold text-[#0a2540]">
                      {lang === 'gu' ? tm.daysGu : tm.days}
                    </span>
                    <div className="flex items-center justify-between text-slate-600 font-mono font-medium">
                      <span>{lang === 'gu' ? `સવાર: ${tm.morningGu}` : `Morning: ${tm.morning}`}</span>
                      <span>{lang === 'gu' ? `સાંજ: ${tm.eveningGu}` : `Evening: ${tm.evening}`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact & Quick Booking */}
            <div className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase font-mono font-bold block">
                    {t.callNow}
                  </span>
                  <a
                    href={`tel:${config.phoneDisplay.replace(/\s+/g, '')}`}
                    className="text-base font-extrabold text-[#0a2540] hover:text-sky-700 transition-colors font-mono"
                  >
                    {config.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{translations[lang].hero.whatsappCta}</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0b3b60] hover:bg-sky-800 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{translations[lang].hero.bookCta}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Frame (Light Border) */}
          <div className="lg:col-span-7 flex flex-col reveal-right">
            <div className="h-full min-h-[380px] lg:min-h-full rounded-3xl overflow-hidden border border-slate-200/80 bg-white shadow-md relative flex flex-col">
              {/* Map Header Bar */}
              <div className="px-6 py-4 bg-[#f8fafc] border-b border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#0a2540] font-bold">
                  <MapPin className="w-4 h-4 text-sky-600" />
                  <span>{lang === 'gu' ? `${config.businessNameGu} - ગૂગલ મેપ્સ` : `${config.businessName} on Google Maps`}</span>
                </div>
                <a
                  href={config.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:text-sky-900 flex items-center gap-1 text-[11px] font-bold"
                >
                  <span>{t.openInMap}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Map Iframe (Natural light map) */}
              <div className="relative flex-1 w-full min-h-[340px]">
                <iframe
                  title="Om Dental Clinic Location Map"
                  src="https://maps.google.com/maps?q=Om+Dental+Clinic+Panchratna+Avenue+Nikol+Ahmedabad&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 absolute inset-0 opacity-95 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Verified Listing Footer Note */}
              <div className="px-6 py-3.5 bg-white border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{t.verifiedProfile}</span>
                </span>
                <span className="font-mono text-slate-600">
                  {lang === 'gu' ? 'અમદાવાદ, ગુજરાત ૩૮૦૦૪૯' : 'Ahmedabad, Gujarat 380049'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
