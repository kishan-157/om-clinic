import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { BusinessConfig, buildWhatsAppLink } from '../config/businessConfig';
import { Language, translations } from '../translations';

interface Props {
  config: BusinessConfig;
  lang: Language;
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<Props> = ({ config, lang, onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const t = translations[lang].services;

  const categories = [
    { id: 'all', label: t.allTab },
    { id: 'implants', label: t.implantsTab },
    { id: 'endodontics', label: t.rctTab },
    { id: 'cosmetic', label: t.cosmeticTab },
    { id: 'orthodontics', label: t.orthoTab },
    { id: 'general', label: t.generalTab }
  ];

  const filteredServices = activeCategory === 'all'
    ? config.services
    : config.services.filter((s) => s.category === activeCategory);

  return (
    <section id="treatments" className="py-24 bg-[#f8fafc] relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-700">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a2540] mt-3 text-balance">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white rounded-full border border-sky-100 shadow-xs mt-8 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0b3b60] text-white shadow-xs'
                    : 'text-slate-600 hover:text-sky-900 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, sIdx) => {
            const displayTitle = lang === 'gu' ? service.titleGu : service.title;
            const displayTagline = lang === 'gu' ? service.taglineGu : service.tagline;
            const displayDesc = lang === 'gu' ? service.descriptionGu : service.description;
            const displayBenefits = lang === 'gu' ? service.keyBenefitsGu : service.keyBenefits;
            const displayDuration = lang === 'gu' ? service.durationEstimateGu : service.durationEstimate;

            const whatsappEnquiryLink = buildWhatsAppLink(
              config.whatsappNumber,
              lang === 'gu'
                ? `નમસ્તે ડૉ. હર્ષ પટેલ, મારે ઓમ ડેન્ટલ ક્લિનિકમાં *${displayTitle}* સારવાર અને ખર્ચ વિશે માહિતી મેળવવી છે.`
                : `Hello Dr. Harsh Patel, I would like more information and guidance regarding *${displayTitle}* at Om Dental Clinic.`
            );

            return (
              <div
                key={service.id}
                className="group p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between reveal-on-scroll"
                style={{ transitionDelay: `${(sIdx % 3) * 120}ms` }}
              >
                <div>
                  {/* Service Top Meta */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-bold text-sky-700 uppercase tracking-wider bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      {service.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      <span>{displayDuration.split(';')[0]}</span>
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-[#0a2540] group-hover:text-sky-700 transition-colors">
                    {displayTitle}
                  </h3>
                  <p className="text-xs text-sky-800 font-medium mt-1">
                    {displayTagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed">
                    {displayDesc}
                  </p>

                  {/* Clinical Benefits List */}
                  <div className="mt-5 space-y-1.5 pt-4 border-t border-slate-100">
                    {displayBenefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={whatsappEnquiryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 hover:text-emerald-800 font-bold py-2 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t.enquireBtn}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onBookService(service.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-full bg-[#0b3b60] hover:bg-sky-700 text-white transition-all cursor-pointer shadow-xs"
                  >
                    <span>{t.bookSlotBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
