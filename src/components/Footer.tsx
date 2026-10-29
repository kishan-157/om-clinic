import React from 'react';
import { ShieldCheck, ArrowUp, ExternalLink } from 'lucide-react';
import { BusinessConfig } from '../config/businessConfig';
import { Language, translations } from '../translations';

interface Props {
  config: BusinessConfig;
  lang: Language;
  onOpenBooking: () => void;
  onOpenConfig: () => void;
}

export const Footer: React.FC<Props> = ({ config, lang, onOpenBooking, onOpenConfig }) => {
  const currentYear = new Date().getFullYear();
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a2540] text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 to-sky-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md">
                OM
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-display">
                  {lang === 'gu' ? config.businessNameGu : config.businessName}
                </span>
                <span className="text-[11px] font-semibold text-sky-300">
                  {lang === 'gu' ? 'નિકોલ, અમદાવાદ' : 'Nikol, Ahmedabad'}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs max-w-sm leading-relaxed">
              {t.aboutText}
            </p>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>
                {lang === 'gu' ? 'પ્રમાણિત ગૂગલ મેપ્સ ડેન્ટલ પ્રેક્ટિસ' : 'Verified Google Maps Clinical Practice'}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider block font-mono text-[11px]">
              {t.treatmentsTitle}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors">
                  {lang === 'gu' ? 'ડેન્ટલ ઇમ્પ્લાન્ટ્સ' : 'Dental Implants'}
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors">
                  {lang === 'gu' ? 'સિંગલ-સીટિંગ રોટરી RCT' : 'Rotary Root Canal (RCT)'}
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors">
                  {lang === 'gu' ? 'કોસ્મેટિક સ્માઇલ ડિઝાઇન' : 'Cosmetic Smile Design'}
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors">
                  {lang === 'gu' ? 'અદ્રશ્ય અલાઈનર્સ' : 'Clear Dental Aligners'}
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors">
                  {lang === 'gu' ? 'ઝિર્કોનિયા કેપ અને બ્રિજ' : 'Zirconia Metal-Free Crowns'}
                </a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-sky-300 transition-colors">
                  {lang === 'gu' ? 'બાળકોની ડેન્ટલ કેર' : 'Pediatric Dentistry'}
                </a>
              </li>
            </ul>
          </div>

          {/* Practice Info */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider block font-mono text-[11px]">
              {t.practiceTitle}
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#experience" className="hover:text-sky-300 transition-colors">
                  {navT.experience}
                </a>
              </li>
              <li>
                <a href="#precision-tech" className="hover:text-sky-300 transition-colors">
                  {navT.technology}
                </a>
              </li>
              <li>
                <a href="#smile-gallery" className="hover:text-sky-300 transition-colors">
                  {navT.smileGallery}
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-sky-300 transition-colors">
                  {lang === 'gu' ? 'ડૉ. હર્ષ એન. પટેલ' : 'Dr. Harsh N. Patel'}
                </a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-sky-300 transition-colors">
                  {lang === 'gu' ? 'ડૉ. ઉન્નતિ પટેલ' : 'Dr. Unnati Patel'}
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-sky-300 transition-colors">
                  {navT.faqs}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <span className="font-bold text-white uppercase tracking-wider block font-mono text-[11px]">
              {t.contactTitle}
            </span>
            <p className="text-slate-300">
              {lang === 'gu' ? `${config.address.line1Gu}, ${config.address.areaGu}` : `${config.address.line1}, ${config.address.area}`}
            </p>
            <p className="font-mono text-white font-bold text-sm">
              {config.phoneDisplay}
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 rounded-full bg-sky-500 hover:bg-sky-400 text-[#0a2540] font-bold text-xs text-center transition-colors cursor-pointer shadow-xs"
              >
                {navT.bookAppointment}
              </button>
              <button
                type="button"
                onClick={onOpenConfig}
                className="text-[11px] text-slate-400 hover:text-white text-left underline cursor-pointer"
              >
                {translations[lang].topbar.settings}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {currentYear} {lang === 'gu' ? config.businessNameGu : config.businessName}. {t.rightsReserved}
          </div>

          <div className="flex items-center gap-6">
            <a
              href={config.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors flex items-center gap-1 font-medium"
            >
              <span>{lang === 'gu' ? 'ગૂગલ મેપ્સ લિસ્ટિંગ' : 'Google Maps Listing'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors font-medium cursor-pointer"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Medical disclaimer */}
        <div className="mt-4 text-[10px] text-slate-400 text-center leading-relaxed">
          {t.disclaimer}
        </div>
      </div>
    </footer>
  );
};
