import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  FileText,
  CheckCircle,
  AlertCircle,
  Copy,
  ExternalLink,
  Send,
  Sparkles,
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { BusinessConfig, buildWhatsAppLink } from '../config/businessConfig';
import { Language, translations } from '../translations';

interface Props {
  config: BusinessConfig;
  lang: Language;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  serviceId: string;
  preferredDate: string;
  timeSlot: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  phoneNumber?: string;
  serviceId?: string;
  preferredDate?: string;
  timeSlot?: string;
}

export const AppointmentBookingSection: React.FC<Props> = ({ config, lang }) => {
  const t = translations[lang].booking;
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    serviceId: 'implants',
    preferredDate: '',
    timeSlot: '11:00',
    notes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [step, setStep] = useState<'form' | 'review' | 'sent'>('form');
  const [copied, setCopied] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');
  const [generatedMessageText, setGeneratedMessageText] = useState('');

  const selectedService = config.services.find((s) => s.id === formData.serviceId) || config.services[0];
  const serviceTitle = lang === 'gu' ? selectedService.titleGu : selectedService.title;

  const timeSlots = [
    { id: '10:00', label: lang === 'gu' ? '૧૦:૦૦ AM (સવાર)' : '10:00 AM (Morning)', session: 'Morning' },
    { id: '10:30', label: lang === 'gu' ? '૧૦:૩૦ AM (સવાર)' : '10:30 AM (Morning)', session: 'Morning' },
    { id: '11:00', label: lang === 'gu' ? '૧૧:૦૦ AM (સવાર)' : '11:00 AM (Morning)', session: 'Morning' },
    { id: '11:30', label: lang === 'gu' ? '૧૧:૩૦ AM (સવાર)' : '11:30 AM (Morning)', session: 'Morning' },
    { id: '12:00', label: lang === 'gu' ? '૧૨:૦૦ PM (બપોર)' : '12:00 PM (Morning)', session: 'Morning' },
    { id: '12:30', label: lang === 'gu' ? '૧૨:૩૦ PM (બપોર)' : '12:30 PM (Morning)', session: 'Morning' },
    { id: '17:00', label: lang === 'gu' ? '૦૫:૦૦ PM (સાંજ)' : '05:00 PM (Evening)', session: 'Evening' },
    { id: '17:30', label: lang === 'gu' ? '૦૫:૩૦ PM (સાંજ)' : '05:30 PM (Evening)', session: 'Evening' },
    { id: '18:00', label: lang === 'gu' ? '૦૬:૦૦ PM (સાંજ)' : '06:00 PM (Evening)', session: 'Evening' },
    { id: '18:30', label: lang === 'gu' ? '૦૬:૩૦ PM (સાંજ)' : '06:30 PM (Evening)', session: 'Evening' },
    { id: '19:00', label: lang === 'gu' ? '૦૭:૦૦ PM (સાંજ)' : '07:00 PM (Evening)', session: 'Evening' },
    { id: '19:30', label: lang === 'gu' ? '૦૭:૩૦ PM (સાંજ)' : '07:30 PM (Evening)', session: 'Evening' },
    { id: '20:00', label: lang === 'gu' ? '૦૮:૦૦ PM (સાંજ)' : '08:00 PM (Evening)', session: 'Evening' },
    { id: '20:30', label: lang === 'gu' ? '૦૮:૩૦ PM (સાંજ)' : '08:30 PM (Evening)', session: 'Evening' }
  ];

  const selectedTimeSlotObj = timeSlots.find((slot) => slot.id === formData.timeSlot);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = t.errors.nameRequired;
    }

    const cleanedPhone = formData.phoneNumber.replace(/[\s-]/g, '');
    if (!cleanedPhone) {
      newErrors.phoneNumber = t.errors.phoneRequired;
    } else if (!/^(?:\+?91)?[6-9]\d{9}$/.test(cleanedPhone) && cleanedPhone.length < 10) {
      newErrors.phoneNumber = t.errors.phoneValid;
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = t.errors.dateRequired;
    } else {
      const chosen = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (chosen < today) {
        newErrors.preferredDate = t.errors.datePast;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedDate = new Date(formData.preferredDate).toLocaleDateString(
      lang === 'gu' ? 'gu-IN' : 'en-IN',
      {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    );

    const msg = lang === 'gu'
      ? [
          `*નવી એપોઇન્ટમેન્ટ વિનંતી - ${config.businessNameGu}*`,
          ``,
          `👤 *દર્દીનું નામ:* ${formData.fullName.trim()}`,
          `📱 *મોબાઇલ નંબર:* ${formData.phoneNumber.trim()}`,
          `🦷 *પસંદગીની સારવાર:* ${serviceTitle}`,
          `📅 *પસંદ કરેલ તારીખ:* ${formattedDate}`,
          `⏰ *સમય સ્લોટ:* ${selectedTimeSlotObj?.label || formData.timeSlot}`,
          formData.notes.trim() ? `📝 *લક્ષણો / નોંધ:* ${formData.notes.trim()}` : null,
          ``,
          `_સ્થળ:_ ${config.address.areaGu}, ${config.address.cityGu}`,
          `_કૃપા કરીને આ સમયની ઉપલબ્ધતા કન્ફર્મ કરશો. આભાર!_`
        ]
          .filter(Boolean)
          .join('\n')
      : [
          `*Appointment Request - ${config.businessName}*`,
          ``,
          `👤 *Patient Name:* ${formData.fullName.trim()}`,
          `📱 *Contact Phone:* ${formData.phoneNumber.trim()}`,
          `🦷 *Requested Service:* ${serviceTitle}`,
          `📅 *Preferred Date:* ${formattedDate}`,
          `⏰ *Preferred Slot:* ${selectedTimeSlotObj?.label || formData.timeSlot}`,
          formData.notes.trim() ? `📝 *Notes/Symptoms:* ${formData.notes.trim()}` : null,
          ``,
          `_Location:_ ${config.address.area}, ${config.address.city}`,
          `_Please confirm availability for this slot. Thank you!_`
        ]
          .filter(Boolean)
          .join('\n');

    setGeneratedMessageText(msg);
    const link = buildWhatsAppLink(config.whatsappNumber, msg);
    setGeneratedWhatsAppUrl(link);
    setStep('review');
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessageText);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      serviceId: 'implants',
      preferredDate: '',
      timeSlot: '11:00',
      notes: ''
    });
    setErrors({});
    setStep('form');
  };

  return (
    <section id="book-appointment" className="py-24 relative bg-gradient-to-b from-[#f8fafc] via-[#f0f7fc] to-white text-slate-800 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 reveal-on-scroll">
          <span className="text-xs uppercase font-mono font-bold tracking-widest text-sky-700">
            {t.kicker}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0a2540] mt-2">
            {t.title}
          </h2>
          <p className="text-sm md:text-base text-slate-600 mt-3 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Card Enclosure */}
        <div className="bg-white border border-sky-100 rounded-3xl p-6 md:p-10 shadow-xl reveal-scale">
          {step === 'form' && (
            <form onSubmit={handleProceedToReview} noValidate className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Patient Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.fullName} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder={t.fullNamePlaceholder}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all ${
                        errors.fullName ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-sky-600'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Mobile / WhatsApp Number */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.phone} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                      }}
                      placeholder={t.phonePlaceholder}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all ${
                        errors.phoneNumber ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-sky-600'
                      }`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="serviceId" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {t.treatment} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="serviceId"
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-all appearance-none cursor-pointer"
                  >
                    {config.services.map((s) => (
                      <option key={s.id} value={s.id} className="bg-white text-slate-900">
                        {lang === 'gu' ? s.titleGu : s.title} — {lang === 'gu' ? s.taglineGu.slice(0, 45) : s.tagline.slice(0, 45)}...
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.preferredDate} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="preferredDate"
                      type="date"
                      min={todayStr}
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
                      }}
                      className={`w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all ${
                        errors.preferredDate ? 'border-rose-400 focus:border-rose-500' : 'border-slate-200 focus:border-sky-600'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeSlot" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t.timeSlot} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Clock className="w-4 h-4" />
                    </div>
                    <select
                      id="timeSlot"
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-all appearance-none cursor-pointer"
                    >
                      <optgroup label={t.morningLabel}>
                        {timeSlots.filter((slot) => slot.session === 'Morning').map((slot) => (
                          <option key={slot.id} value={slot.id} className="bg-white text-slate-900">
                            {slot.label}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label={t.eveningLabel}>
                        {timeSlots.filter((slot) => slot.session === 'Evening').map((slot) => (
                          <option key={slot.id} value={slot.id} className="bg-white text-slate-900">
                            {slot.label}
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label htmlFor="notes" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {t.notes}
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3.5 pointer-events-none text-slate-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <textarea
                    id="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.notesPlaceholder}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-600 transition-all"
                  />
                </div>
              </div>

              {/* Notice */}
              <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-xs text-sky-900 flex items-start gap-2.5 leading-relaxed font-medium">
                <Sparkles className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>{t.policyNotice}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0b3b60] hover:bg-[#082d49] text-white font-bold text-sm shadow-md shadow-sky-900/15 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>{t.reviewBtn}</span>
                  <ArrowRight className="w-4 h-4 text-sky-300" />
                </button>
              </div>
            </form>
          )}

          {step === 'review' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#0a2540]">{t.reviewTitle}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 underline cursor-pointer"
                >
                  {t.editInfo}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block font-semibold">{t.fullName}</span>
                  <span className="font-bold text-[#0a2540] text-base">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-semibold">{t.phone}</span>
                  <span className="font-bold text-[#0a2540] text-base">{formData.phoneNumber}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-semibold">{t.treatment}</span>
                  <span className="font-bold text-sky-800 text-base">{serviceTitle}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-semibold">{t.preferredDate} & {t.timeSlot}</span>
                  <span className="font-bold text-[#0a2540] text-base">
                    {new Date(formData.preferredDate).toLocaleDateString(
                      lang === 'gu' ? 'gu-IN' : 'en-IN',
                      {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      }
                    )} • {selectedTimeSlotObj?.label}
                  </span>
                </div>
                {formData.notes && (
                  <div className="md:col-span-2 pt-2 border-t border-slate-200">
                    <span className="text-xs text-slate-500 block font-semibold">{t.notes}</span>
                    <span className="text-slate-700">{formData.notes}</span>
                  </div>
                )}
              </div>

              {/* WhatsApp Message Preview Box */}
              <div className="bg-[#f0f9ff] rounded-2xl p-5 border border-sky-200">
                <div className="flex items-center justify-between text-xs text-slate-600 mb-2 font-bold">
                  <span className="flex items-center gap-1.5 text-sky-800">
                    <Send className="w-3.5 h-3.5" />
                    <span>{lang === 'gu' ? 'વોટ્સએપ મેસેજ પૂર્વાવલોકન' : 'PREVIEW OF WHATSAPP MESSAGE'}</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyText}
                    className="flex items-center gap-1 text-slate-700 hover:text-sky-900 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <span className="text-emerald-700 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" /> {lang === 'gu' ? 'કોપી થયું!' : 'Copied!'}
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Copy className="w-3.5 h-3.5" /> {t.copyText}
                      </span>
                    )}
                  </button>
                </div>
                <pre className="text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto bg-white p-3 rounded-xl border border-sky-100">
                  {generatedMessageText}
                </pre>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-50 text-xs font-bold cursor-pointer"
                >
                  {t.backBtn}
                </button>
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setStep('sent')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.sendWhatsappBtn}</span>
                </a>
              </div>
            </div>
          )}

          {step === 'sent' && (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#0a2540]">{t.launchedTitle}</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                  {t.launchedDesc}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t.reopenWhatsapp}</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyText}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold cursor-pointer"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? (lang === 'gu' ? 'કોપી થઈ ગયું!' : 'Copied!') : t.copyText}</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-700 hover:text-slate-900 text-xs font-bold cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t.newBooking}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
