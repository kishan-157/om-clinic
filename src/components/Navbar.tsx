import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Settings, MapPin, Clock, Globe, Phone } from 'lucide-react';
import { BusinessConfig, isClinicOpenNow } from '../config/businessConfig';
import { Language, translations } from '../translations';

interface Props {
  config: BusinessConfig;
  lang: Language;
  onToggleLang: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<Props> = ({
  config,
  lang,
  onToggleLang,
  onOpenBooking,
  onOpenConfig
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState(isClinicOpenNow(lang));

  const t = translations[lang].nav;
  const topT = translations[lang].topbar;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const timer = setInterval(() => {
      setStatus(isClinicOpenNow(lang));
    }, 60000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, [lang]);

  const navLinks = [
    { label: t.treatments, href: '#treatments' },
    { label: t.experience, href: '#experience' },
    { label: t.technology, href: '#precision-tech' },
    { label: t.doctors, href: '#doctors' },
    { label: t.smileGallery, href: '#smile-gallery' },
    { label: t.faqs, href: '#faqs' },
    { label: t.location, href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar: Light clinical banner matching thedentalwellnesscentre.in */}
      <div className="bg-[#f0f7fc] border-b border-sky-100 py-2 px-4 text-xs text-slate-600">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Location & Real-time Status */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-800 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              <span>{lang === 'gu' ? config.address.areaGu : config.address.area}, {lang === 'gu' ? config.address.cityGu : config.address.city}</span>
            </span>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-sky-600" />
              <span className={status.isOpen ? 'text-emerald-700 font-semibold' : 'text-slate-600'}>
                {status.statusText}
              </span>
              <span className="text-slate-500">({status.nextOpeningText})</span>
            </span>
          </div>

          {/* Bilingual Language Switcher & Direct Call */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* High-Visibility Language Switcher */}
            <div className="flex items-center p-0.5 rounded-lg bg-white border border-sky-200 shadow-xs">
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#0b3b60] text-white shadow-xs'
                    : 'text-slate-600 hover:text-sky-900'
                }`}
                title="Switch to English"
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('gu')}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  lang === 'gu'
                    ? 'bg-[#0b3b60] text-white shadow-xs'
                    : 'text-slate-600 hover:text-sky-900'
                }`}
                title="ગુજરાતી ભાષામાં બદલો"
              >
                ગુજરાતી
              </button>
            </div>

            <a
              href={`tel:${config.phoneDisplay.replace(/\s+/g, '')}`}
              className="font-mono text-slate-800 text-xs font-bold hidden md:flex items-center gap-1 hover:text-sky-700 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>{config.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={onOpenConfig}
              className="text-[11px] text-slate-500 hover:text-sky-700 transition-colors hidden lg:flex items-center gap-1 cursor-pointer"
              title="View & Edit Verified Business Source"
            >
              <Settings className="w-3 h-3 text-slate-400" />
              <span>{topT.settings}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar (Pristine White with Soft Shadow) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100'
            : 'bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 text-lg sm:text-xl font-bold tracking-tight text-[#0a2540] whitespace-nowrap shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0b3b60] to-[#0284c7] text-white flex items-center justify-center font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
              OM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg text-[#0a2540] leading-tight">
                {lang === 'gu' ? config.shortNameGu : config.shortName}
              </span>
              <span className="text-[11px] font-semibold text-sky-600 tracking-wide uppercase">
                {lang === 'gu' ? 'ઇમ્પ્લાન્ટ સેન્ટર · નિકોલ' : 'Clinic & Implant Center'}
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-sky-700 transition-colors whitespace-nowrap shrink-0 relative py-1 hover:border-b-2 hover:border-sky-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0b3b60] hover:bg-[#082d49] text-white font-bold text-xs md:text-sm shadow-md shadow-sky-900/15 transition-all hover:scale-102 active:scale-98 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-sky-300" />
              <span>{t.bookAppointment}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-sky-700 rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs text-slate-700 font-semibold flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-sky-600" />
                <span>{lang === 'gu' ? 'ભાષા પસંદ કરો:' : 'Select Language:'}</span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => onToggleLang('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg cursor-pointer ${
                    lang === 'en' ? 'bg-[#0b3b60] text-white' : 'text-slate-600'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLang('gu')}
                  className={`px-3 py-1 text-xs font-bold rounded-lg cursor-pointer ${
                    lang === 'gu' ? 'bg-[#0b3b60] text-white' : 'text-slate-600'
                  }`}
                >
                  ગુજરાતી
                </button>
              </div>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-sky-700 rounded-lg hover:bg-sky-50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#0b3b60] text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookAppointment}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConfig();
                }}
                className="w-full py-2 rounded-xl text-xs text-slate-500 border border-slate-200 flex items-center justify-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5 text-slate-400" />
                <span>{topT.settings}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
