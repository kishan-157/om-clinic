import React, { useState } from 'react';
import { MessageCircle, X, Calendar, HelpCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { BusinessConfig, buildWhatsAppLink } from '../config/businessConfig';
import { Language } from '../translations';

interface Props {
  config: BusinessConfig;
  lang: Language;
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<Props> = ({ config, lang, onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const costEnquiryUrl = buildWhatsAppLink(
    config.whatsappNumber,
    lang === 'gu'
      ? `નમસ્તે ડૉ. હર્ષ અને ઓમ ડેન્ટલ ટીમ, મારે ડેન્ટલ ઇમ્પ્લાન્ટ્સ, રુટ કેનાલ અથવા અલાઈનર્સની સારવાર અને અંદાજિત ખર્ચ વિશે માહિતી મેળવવી છે.`
      : `Hello Dr. Harsh & Om Dental team, I would like to inquire about dental treatment options and costs.`
  );

  const emergencyUrl = buildWhatsAppLink(
    config.whatsappNumber,
    lang === 'gu'
      ? `*ઇમરજન્સી ડેન્ટલ મદદ:* નમસ્તે ઓમ ડેન્ટલ ક્લિનિક, મને દાંતમાં અસહ્ય દુખાવો / સોજો છે અને મારે તાત્કાલિક સારવારની જરૂર છે.`
      : `*EMERGENCY DENTAL REQUEST:* Hello Om Dental Clinic, I am experiencing acute tooth pain / swelling and need urgent care.`
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Quick Action Drawer */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2.5rem)] rounded-2xl bg-neutral-950 border border-emerald-500/30 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-white">
                {lang === 'gu' ? 'ઓમ ડેન્ટલ વોટ્સએપ ડેસ્ક' : 'Om Dental WhatsApp Desk'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-neutral-400 hover:text-white"
              aria-label="Close WhatsApp options"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-neutral-400 mt-2">
            {lang === 'gu'
              ? 'નિકોલ ક્લિનિકમાં એપોઇન્ટમેન્ટ અને તાત્કાલિક પૂછપરછ માટે સીધો સંપર્ક:'
              : 'Direct chat with reception for appointments and quick enquiries at our Nikol clinic:'}
          </p>

          <div className="space-y-2 mt-3">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full p-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/5 hover:border-emerald-500/30 text-left transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                    {lang === 'gu' ? 'એપોઇન્ટમેન્ટ બુક કરો' : 'Book Dental Consultation'}
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {lang === 'gu' ? 'સવાર કે સાંજનો સમય વિનંતી કરો' : 'Request morning or evening slot'}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-1" />
            </button>

            <a
              href={costEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full p-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/5 hover:border-emerald-500/30 text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                    {lang === 'gu' ? 'સારવાર માહિતી અને ખર્ચ' : 'Treatment Cost & Info'}
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {lang === 'gu' ? 'ઇમ્પ્લાન્ટ્સ, RCT અથવા અલાઈનર્સ' : 'Inquire about Implants, RCT or Aligners'}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-1" />
            </a>

            <a
              href={emergencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full p-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/5 hover:border-emerald-500/30 text-left transition-all flex items-center justify-between group"
            >
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-emerald-300">
                    {lang === 'gu' ? 'દાંતનો અસહ્ય દુખાવો (ઇમરજન્સી)' : 'Emergency Dental Pain'}
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    {lang === 'gu' ? 'તાત્કાલિક પ્રાથમિકતા સારવાર' : 'Immediate triage for severe toothache'}
                  </div>
                </div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-1" />
            </a>
          </div>

          <div className="mt-3 pt-2.5 border-t border-white/5 text-center text-[10px] text-neutral-500 font-mono">
            {config.phoneDisplay} • {lang === 'gu' ? 'નિકોલ, અમદાવાદ' : 'Nikol, Ahmedabad'}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs md:text-sm shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Open WhatsApp conversation"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-neutral-950 fill-neutral-950" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full border-2 border-emerald-500" />
        </div>
        <span className="hidden sm:inline">
          {lang === 'gu' ? 'વોટ્સએપ સંપર્ક' : 'WhatsApp Help'}
        </span>
      </button>
    </div>
  );
};
