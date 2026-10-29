import React from 'react';
import { ShieldCheck, Stethoscope, Calendar } from 'lucide-react';
import { BusinessConfig } from '../config/businessConfig';
import { Language, translations } from '../translations';

interface Props {
  config: BusinessConfig;
  lang: Language;
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<Props> = ({ config, lang, onBookWithDoctor }) => {
  const t = translations[lang].doctors;

  return (
    <section id="doctors" className="py-24 bg-[#f8fafc] border-b border-slate-100 relative">
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

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {config.doctors.map((doc, idx) => {
            const displayName = lang === 'gu' ? doc.nameGu : doc.name;
            const displayDegree = lang === 'gu' ? doc.degreeGu : doc.degree;
            const displaySpecialty = lang === 'gu' ? doc.specialtyGu : doc.specialty;
            const displayBio = lang === 'gu' ? doc.bioGu : doc.bio;

            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? 'reveal-left' : 'reveal-right'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-100 text-[#0b3b60] flex items-center justify-center shadow-xs">
                      <Stethoscope className="w-8 h-8 text-sky-700" />
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>{t.verifiedDoctor}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0a2540]">{displayName}</h3>
                  <span className="text-xs font-mono font-bold text-sky-700 block mt-1">{displayDegree}</span>
                  <span className="text-sm font-semibold text-slate-700 block mt-0.5">{displaySpecialty}</span>

                  <p className="text-xs md:text-sm text-slate-600 mt-4 leading-relaxed">
                    {displayBio}
                  </p>

                  {/* Clinical Focus List */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      {lang === 'gu' ? 'મુખ્ય કુશળતા' : 'KEY CLINICAL EXPERTISE'}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {idx === 0 ? (
                        <>
                          <span className="text-xs bg-[#f0f7fc] border border-sky-100 px-3 py-1 rounded-full text-sky-900 font-medium">
                            {lang === 'gu' ? 'ડેન્ટલ ઇમ્પ્લાન્ટ્સ' : 'Dental Implantology'}
                          </span>
                          <span className="text-xs bg-[#f0f7fc] border border-sky-100 px-3 py-1 rounded-full text-sky-900 font-medium">
                            {lang === 'gu' ? 'સિંગલ-સીટિંગ રોટરી RCT' : 'Single-Sitting Rotary RCT'}
                          </span>
                          <span className="text-xs bg-[#f0f7fc] border border-sky-100 px-3 py-1 rounded-full text-sky-900 font-medium">
                            {lang === 'gu' ? 'સ્માઇલ ડિઝાઇનિંગ' : 'Smile Architecture'}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="text-xs bg-[#f0f7fc] border border-sky-100 px-3 py-1 rounded-full text-sky-900 font-medium">
                            {lang === 'gu' ? 'એસ્થેટિક ડેન્ટિસ્ટ્રી' : 'Aesthetic Dentistry'}
                          </span>
                          <span className="text-xs bg-[#f0f7fc] border border-sky-100 px-3 py-1 rounded-full text-sky-900 font-medium">
                            {lang === 'gu' ? 'બાળકોની દાંતની સારવાર' : 'Pediatric Care'}
                          </span>
                          <span className="text-xs bg-[#f0f7fc] border border-sky-100 px-3 py-1 rounded-full text-sky-900 font-medium">
                            {lang === 'gu' ? 'નિવારક દાંત સંભાળ' : 'Preventive Oral Wellness'}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-500 font-medium">
                    {lang === 'gu' ? 'નિકોલ ક્લિનિક મુલાકાત' : 'Nikol Clinic Consultation'}
                  </span>
                  <button
                    type="button"
                    onClick={() => onBookWithDoctor(displayName)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0b3b60] hover:bg-sky-800 text-white text-xs font-bold transition-all cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{t.requestSlot}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Philosophy */}
        <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-white border border-sky-100 text-center text-xs text-slate-600 leading-relaxed shadow-xs">
          <p>
            <strong className="text-[#0a2540]">{t.philosophyTitle}:</strong> {t.philosophyText}
          </p>
        </div>
      </div>
    </section>
  );
};
