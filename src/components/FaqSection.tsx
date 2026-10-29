import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CLINIC_FAQS } from '../config/businessConfig';
import { Language, translations } from '../translations';

interface Props {
  lang: Language;
}

export const FaqSection: React.FC<Props> = ({ lang }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const t = translations[lang].faqs;

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-700">
            {t.kicker}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0a2540] mt-3 text-balance">
            {t.title}
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion List in Light Medical Cards */}
        <div className="space-y-4">
          {CLINIC_FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const question = lang === 'gu' ? faq.qGu : faq.q;
            const answer = lang === 'gu' ? faq.aGu : faq.a;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-sky-300 overflow-hidden transition-all shadow-xs reveal-on-scroll"
                style={{ transitionDelay: `${(idx % 4) * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:bg-sky-50/50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-[#0a2540] pr-4">
                    {question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-sky-700 border-sky-300 bg-sky-50' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
