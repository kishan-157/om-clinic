import React, { useState, useEffect } from 'react';
import { BusinessConfig, DEFAULT_BUSINESS_CONFIG } from './config/businessConfig';
import { Language } from './translations';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ServicesSection } from './components/ServicesSection';
import { PrecisionTechSection } from './components/PrecisionTechSection';
import { JourneySection } from './components/JourneySection';
import { DoctorsSection } from './components/DoctorsSection';
import { AppointmentBookingSection } from './components/AppointmentBookingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ClinicConfigModal } from './components/ClinicConfigModal';

const STORAGE_KEY = 'om_dental_clinic_config_v1';
const LANG_STORAGE_KEY = 'om_dental_clinic_lang_v1';

export default function App() {
  const [config, setConfig] = useState<BusinessConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_BUSINESS_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return DEFAULT_BUSINESS_CONFIG;
  });

  const [lang, setLang] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
      if (savedLang === 'gu' || savedLang === 'en') {
        return savedLang;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Smooth scroll animations triggered on scroll up/down like thedentalwellnesscentre.in
  useEffect(() => {
    const handleScrollReveal = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .stagger-item'
      );
      
      const windowHeight = window.innerHeight;
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Element enters viewport trigger
        if (rect.top <= windowHeight * 0.88 && rect.bottom >= 0) {
          el.classList.add('is-visible');
        }
      });
    };

    // Run once on mount and attach scroll listener
    handleScrollReveal();
    window.addEventListener('scroll', handleScrollReveal, { passive: true });
    
    // Also use IntersectionObserver for performant edge triggers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1
      }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .stagger-item'
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();
    const timeout = setTimeout(observeElements, 300);

    return () => {
      window.removeEventListener('scroll', handleScrollReveal);
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [lang]);

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  };

  const handleSaveConfig = (newConfig: BusinessConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleResetDefaults = () => {
    setConfig(DEFAULT_BUSINESS_CONFIG);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setIsConfigModalOpen(false);
  };

  const scrollToBooking = (serviceId?: string) => {
    const el = document.getElementById('book-appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    if (serviceId) {
      const select = document.getElementById('serviceId') as HTMLSelectElement | null;
      if (select) {
        select.value = serviceId;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }
  };

  const handleBookWithDoctor = (doctorName: string) => {
    scrollToBooking();
    const notesInput = document.getElementById('notes') as HTMLTextAreaElement | null;
    if (notesInput) {
      notesInput.value = lang === 'gu'
        ? `ખાસ કરીને ${doctorName} સાથે કન્સલ્ટેશન સમય જોઈએ છે.`
        : `Requesting consultation specifically with ${doctorName}.`;
      notesInput.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* 1. Primary Sticky Top Bar with Bilingual Language Switcher */}
      <Navbar
        config={config}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenBooking={() => scrollToBooking()}
        onOpenConfig={() => setIsConfigModalOpen(true)}
      />

      {/* Main Page Flow inspired by thedentalwellnesscentre.in */}
      <main className="flex-1">
        {/* 2. Hero with Dynamic Slides & 3D Realistic Dental Anatomy Visualizer */}
        <HeroSection
          config={config}
          lang={lang}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* 3. The Om Dental Experience & Core Values */}
        <ExperienceSection
          config={config}
          lang={lang}
        />

        {/* 4. Comprehensive Dental Treatments & Specialities */}
        <ServicesSection
          config={config}
          lang={lang}
          onBookService={(serviceId) => scrollToBooking(serviceId)}
        />

        {/* 5. Precision Technology, Clinical Pillars & Smile Transformation Slider */}
        <PrecisionTechSection
          config={config}
          lang={lang}
        />

        {/* 6. Step-by-Step Treatment Journey */}
        <JourneySection
          lang={lang}
          onOpenBooking={() => scrollToBooking()}
        />

        {/* 7. Verified Specialist Doctors (Dr. Harsh Patel & Dr. Unnati Patel) */}
        <DoctorsSection
          config={config}
          lang={lang}
          onBookWithDoctor={handleBookWithDoctor}
        />

        {/* 8. Validated Appointment Request Flow */}
        <AppointmentBookingSection
          config={config}
          lang={lang}
        />

        {/* 9. Clinical FAQs */}
        <FaqSection lang={lang} />

        {/* 10. Verified Location, Map Embed & Timings */}
        <ContactSection
          config={config}
          lang={lang}
          onOpenBooking={() => scrollToBooking()}
        />
      </main>

      {/* 11. Quiet Footer */}
      <Footer
        config={config}
        lang={lang}
        onOpenBooking={() => scrollToBooking()}
        onOpenConfig={() => setIsConfigModalOpen(true)}
      />

      {/* 12. Floating WhatsApp Widget with Bilingual Quick Actions */}
      <FloatingWhatsApp
        config={config}
        lang={lang}
        onOpenBooking={() => scrollToBooking()}
      />

      {/* 13. Clinic Configuration Drawer */}
      <ClinicConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
