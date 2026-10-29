/**
 * Comprehensive Bilingual Translations (English & Gujarati)
 * Source of Truth: Om Dental Clinic & Implant Center (Nikol, Ahmedabad)
 * Mapped from verified Google Maps Profile: https://maps.app.goo.gl/hCsqL2VLQ2WHY43XA
 */

export type Language = 'en' | 'gu';

export interface Translations {
  topbar: {
    area: string;
    openNow: string;
    closed: string;
    morningEvening: string;
    emergencyCall: string;
    settings: string;
  };
  nav: {
    treatments: string;
    technology: string;
    experience: string;
    doctors: string;
    smileGallery: string;
    faqs: string;
    location: string;
    bookAppointment: string;
    watchReel: string;
  };
  hero: {
    badge: string;
    slide1Title: string;
    slide1Highlight: string;
    slide1Subtitle: string;
    slide2Title: string;
    slide2Highlight: string;
    slide2Subtitle: string;
    slide3Title: string;
    slide3Highlight: string;
    slide3Subtitle: string;
    bookCta: string;
    whatsappCta: string;
    watchReelCta: string;
    quickStats: {
      experience: string;
      experienceLabel: string;
      patients: string;
      patientsLabel: string;
      success: string;
      successLabel: string;
      singleSitting: string;
      singleSittingLabel: string;
    };
  };
  trustStrip: {
    sterilization: string;
    sterilizationDesc: string;
    digitalRvg: string;
    digitalRvgDesc: string;
    expertCare: string;
    expertCareDesc: string;
    transparentFees: string;
    transparentFeesDesc: string;
  };
  experience: {
    kicker: string;
    title: string;
    subtitle: string;
    cards: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    allTab: string;
    implantsTab: string;
    rctTab: string;
    cosmeticTab: string;
    orthoTab: string;
    generalTab: string;
    enquireBtn: string;
    bookSlotBtn: string;
    estDuration: string;
  };
  tech: {
    kicker: string;
    title: string;
    subtitle: string;
    pillars: {
      title: string;
      subtitle: string;
      desc: string;
    }[];
    equipment: {
      title: string;
      desc: string;
    }[];
  };
  smileGallery: {
    kicker: string;
    title: string;
    subtitle: string;
    slideInstruction: string;
    beforeLabel: string;
    afterLabel: string;
    procedure: string;
    timeline: string;
    benefits: string;
  };
  journey: {
    kicker: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
  };
  doctors: {
    kicker: string;
    title: string;
    subtitle: string;
    verifiedDoctor: string;
    requestSlot: string;
    philosophyTitle: string;
    philosophyText: string;
  };
  booking: {
    kicker: string;
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    treatment: string;
    preferredDate: string;
    timeSlot: string;
    morningLabel: string;
    eveningLabel: string;
    notes: string;
    notesPlaceholder: string;
    policyNotice: string;
    reviewBtn: string;
    reviewTitle: string;
    editInfo: string;
    sendWhatsappBtn: string;
    backBtn: string;
    launchedTitle: string;
    launchedDesc: string;
    reopenWhatsapp: string;
    copyText: string;
    newBooking: string;
    errors: {
      nameRequired: string;
      phoneRequired: string;
      phoneValid: string;
      dateRequired: string;
      datePast: string;
    };
  };
  faqs: {
    kicker: string;
    title: string;
    subtitle: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    addressTitle: string;
    directionsBtn: string;
    hoursTitle: string;
    callNow: string;
    openInMap: string;
    verifiedProfile: string;
  };
  footer: {
    aboutText: string;
    treatmentsTitle: string;
    practiceTitle: string;
    contactTitle: string;
    rightsReserved: string;
    backToTop: string;
    disclaimer: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    topbar: {
      area: "Nikol, Ahmedabad",
      openNow: "Open Now",
      closed: "Closed Right Now",
      morningEvening: "Morning: 10AM–1PM · Evening: 5PM–9PM",
      emergencyCall: "Helpline: +91 97123 96396",
      settings: "Clinic Settings"
    },
    nav: {
      treatments: "Treatments",
      technology: "Precision Tech",
      experience: "Why Om Dental",
      doctors: "Specialist Doctors",
      smileGallery: "Smile Gallery",
      faqs: "FAQs",
      location: "Location & Hours",
      bookAppointment: "Book Appointment",
      watchReel: "Watch Reel"
    },
    hero: {
      badge: "OM DENTAL CLINIC & IMPLANT CENTER · NIKOL, AHMEDABAD",
      slide1Title: "Elevating",
      slide1Highlight: "Dental Wellness",
      slide1Subtitle: "Experience advanced dental care with computerized precision, painless technology, and gentle comfort by certified specialists in Nikol.",
      slide2Title: "Don't Let Missing Teeth",
      slide2Highlight: "Hold You Back",
      slide2Subtitle: "Restore 100% chewing strength and lifelong smile aesthetics with biocompatible titanium implants placed with microscopic accuracy.",
      slide3Title: "Straight Teeth with",
      slide3Highlight: "Invisible Aligners",
      slide3Subtitle: "Transform your smile discreetly without metal wires or braces using custom US-grade transparent dental aligners.",
      bookCta: "Book Consultation",
      whatsappCta: "WhatsApp Enquiry",
      watchReelCta: "Watch Visual Reel",
      quickStats: {
        experience: "10+ Years",
        experienceLabel: "Clinical Practice in Nikol",
        patients: "5,000+",
        patientsLabel: "Smiles Restored Successfully",
        success: "98%+",
        successLabel: "Implant Success Rate",
        singleSitting: "1-Sitting",
        singleSittingLabel: "Painless Rotary Root Canal"
      }
    },
    trustStrip: {
      sterilization: "Class-B Autoclave",
      sterilizationDesc: "Hospital-grade vacuum sterilization for 100% infection-free safety",
      digitalRvg: "Digital RVG Radiography",
      digitalRvgDesc: "Instant low-radiation internal tooth imaging and diagnostic precision",
      expertCare: "Certified Dental Surgeons",
      expertCareDesc: "Experienced implantologists and cosmetic smile architects",
      transparentFees: "Transparent Guidance",
      transparentFeesDesc: "Clear treatment roadmaps with ethical recommendations"
    },
    experience: {
      kicker: "THE OM DENTAL DIFFERENCE",
      title: "Experience the Best Dental Clinic in Nikol, Ahmedabad for Complete Oral Care",
      subtitle: "We believe dentistry should be gentle, transparent, and built on scientific precision. Step into a calm environment designed to eliminate anxiety.",
      cards: [
        {
          title: "Pain-Managed Rotary Dentistry",
          desc: "We use micro-motorized nickel-titanium instruments and computerized apex locators so root canals and restorations are completed comfortably in a single sitting."
        },
        {
          title: "Biocompatible Titanium Implants",
          desc: "Permanently replace missing teeth with medical-grade titanium fixtures that integrate with bone, preserving natural jaw contour and chewing power."
        },
        {
          title: "Aesthetic Cosmetic Architecture",
          desc: "From porcelain veneers and diastema gap closures to teeth whitening, we design smiles that complement your natural facial harmony."
        },
        {
          title: "Hospital-Grade Autoclaving",
          desc: "Every single handpiece and diagnostic tool undergoes multi-cycle Class-B vacuum sterilization before every patient visit."
        }
      ]
    },
    services: {
      kicker: "CLINICAL SPECIALTIES",
      title: "Comprehensive Dental Treatments",
      subtitle: "From routine checkups and preventative cleaning to full-mouth implant rehabilitation, our doctors provide gentle, specialized care.",
      allTab: "All Treatments",
      implantsTab: "Dental Implants",
      rctTab: "Root Canal (RCT)",
      cosmeticTab: "Cosmetic & Whitening",
      orthoTab: "Clear Aligners",
      generalTab: "Preventive Care",
      enquireBtn: "WhatsApp Enquiry",
      bookSlotBtn: "Book This Treatment",
      estDuration: "Est. Duration:"
    },
    tech: {
      kicker: "CLINICAL PRECISION & COMFORT",
      title: "Precision Dental Arsenal",
      subtitle: "Cutting-edge digital tools and strict sterilization protocols guarantee sub-millimeter accuracy and patient peace of mind.",
      pillars: [
        {
          title: "COMFORT",
          subtitle: "Gentle Touch Dentistry",
          desc: "Relaxing ambience, painless anesthetic delivery, and compassionate bedside manner that eliminates dental fear."
        },
        {
          title: "PRECISION",
          subtitle: "Digital Diagnostics",
          desc: "High-definition RVG digital sensors, electronic apex locators, and CAD/CAM milled crowns for lasting accuracy."
        },
        {
          title: "PERSONALIZED CARE",
          subtitle: "Tailored Roadmaps",
          desc: "Custom treatment roadmaps with clear options, honest recommendations, and zero unnecessary procedures."
        }
      ],
      equipment: [
        {
          title: "Digital RVG Sensor X-Rays",
          desc: "Instant high-definition imaging of root canals and bone structure with up to 90% less radiation than conventional films."
        },
        {
          title: "Rotary Endodontics & Apex Locators",
          desc: "Computerized torque control and audio-guided canal depth measurement for single-visit root canal success."
        },
        {
          title: "Class-B Vacuum Autoclave",
          desc: "Multi-cycle steam sterilization killing 100% of micro-organisms across all handpieces and instruments."
        }
      ]
    },
    smileGallery: {
      kicker: "BEFORE & AFTER CLINICAL GALLERY",
      title: "Smile Transformations",
      subtitle: "Explore authentic treatment results achieved through cosmetic veneers, dental implants, and invisible aligners.",
      slideInstruction: "Slide horizontally or use arrow keys to compare before and after results.",
      beforeLabel: "INITIAL PRESENTATION",
      afterLabel: "AFTER TREATMENT",
      procedure: "PROCEDURE",
      timeline: "TIMELINE",
      benefits: "BENEFITS"
    },
    journey: {
      kicker: "HOW IT WORKS",
      title: "Your Treatment Journey at Om Dental",
      subtitle: "A seamless, stress-free four-step patient process from first scan to your permanent confident smile.",
      steps: [
        {
          number: "01",
          title: "Digital Scan & Consultation",
          desc: "Comprehensive oral checkup, low-radiation digital RVG scan, and thorough diagnostic review with Dr. Harsh Patel."
        },
        {
          number: "02",
          title: "Transparent Treatment Blueprint",
          desc: "We discuss all clinical options, procedure timelines, and transparent estimates before beginning any work."
        },
        {
          number: "03",
          title: "Gentle Precision Treatment",
          desc: "Painless procedure execution using motorized rotary tools, biocompatible materials, and soothing operatory comfort."
        },
        {
          number: "04",
          title: "Follow-Up & Lifetime Smile Care",
          desc: "Routine follow-up reviews, oral hygiene guidance, and long-term checkups to keep your smile healthy for life."
        }
      ]
    },
    doctors: {
      kicker: "VERIFIED DENTAL SURGEONS",
      title: "Meet Our Specialist Doctors",
      subtitle: "Led by Dr. Harsh N. Patel and Dr. Unnati Patel, our clinical team brings clinical mastery and empathetic care to Nikol, Ahmedabad.",
      verifiedDoctor: "Verified Dental Surgeon",
      requestSlot: "Request Appointment",
      philosophyTitle: "Our Clinical Philosophy",
      philosophyText: "We believe in conservative, tooth-preserving dentistry. We will never recommend a crown when a conservative filling suffices, nor recommend extractions when a tooth can be gently saved."
    },
    booking: {
      kicker: "DIRECT RECEPTION DESK",
      title: "Schedule Your Consultation",
      subtitle: "Reserve a morning or evening consultation at our Nikol clinic. Submitting prepares a formatted WhatsApp request for prompt confirmation.",
      fullName: "Patient Full Name",
      fullNamePlaceholder: "e.g. Ramesh Shah",
      phone: "Mobile / WhatsApp Number",
      phonePlaceholder: "+91 98765 43210",
      treatment: "Requested Dental Service",
      preferredDate: "Preferred Date",
      timeSlot: "Preferred Time Slot",
      morningLabel: "Morning Session (10:00 AM – 01:00 PM)",
      eveningLabel: "Evening Session (05:00 PM – 09:00 PM)",
      notes: "Symptoms or Special Notes (Optional)",
      notesPlaceholder: "e.g. Toothache on chewing, or interested in invisible braces...",
      policyNotice: "Appointment Request Notice: Submitting compiles your details and opens WhatsApp with a prefilled message for our reception desk. Appointments are confirmed once verified by our clinic staff.",
      reviewBtn: "Review Booking Details",
      reviewTitle: "Review Appointment Details",
      editInfo: "Edit Information",
      sendWhatsappBtn: "Open WhatsApp to Send Request",
      backBtn: "Back to Form",
      launchedTitle: "WhatsApp Launched",
      launchedDesc: "Please tap 'Send' inside WhatsApp to dispatch your appointment request. Our reception team at Om Dental Clinic (+91 97123 96396) will verify slot availability and confirm back.",
      reopenWhatsapp: "Re-open WhatsApp",
      copyText: "Copy Message Text",
      newBooking: "New Request",
      errors: {
        nameRequired: "Please enter your full name.",
        phoneRequired: "Please provide your mobile or WhatsApp contact number.",
        phoneValid: "Please enter a valid 10-digit mobile number.",
        dateRequired: "Please choose your preferred consultation date.",
        datePast: "Consultation date cannot be in the past."
      }
    },
    faqs: {
      kicker: "HELP & GUIDANCE",
      title: "Frequently Asked Questions",
      subtitle: "Clear answers to common questions about root canals, implants, consultation timings, and clinic protocols."
    },
    contact: {
      kicker: "VISIT OUR PRACTICE",
      title: "Location, Hours & Directions",
      subtitle: "Conveniently located at Panchratna Avenue opposite Dipak School on Gangotri Circle Road in Nikol, Ahmedabad.",
      addressTitle: "Clinic Address",
      directionsBtn: "Get Directions in Google Maps",
      hoursTitle: "Consultation Hours",
      callNow: "Call / WhatsApp Direct",
      openInMap: "Open Full Map",
      verifiedProfile: "Verified Google Business Profile"
    },
    footer: {
      aboutText: "Advanced dental implants, computerized single-sitting rotary root canals, clear aligners, and aesthetic smile design in Nikol, Ahmedabad.",
      treatmentsTitle: "Treatments",
      practiceTitle: "Practice",
      contactTitle: "Contact Desk",
      rightsReserved: "All rights reserved. Om Dental Clinic & Implant Center.",
      backToTop: "Back to Top",
      disclaimer: "Disclaimer: Clinical information provided for patient guidance. Individual treatments depend on thorough in-person examination by our registered dental surgeons."
    }
  },

  gu: {
    topbar: {
      area: "નિકોલ, અમદાવાદ",
      openNow: "હાલમાં ખુલ્લું છે",
      closed: "હાલમાં બંધ છે",
      morningEvening: "સવાર: ૧૦:૦૦ થી ૧:૦૦ · સાંજ: ૫:૦૦ થી ૯:૦૦",
      emergencyCall: "હેલ્પલાઇન: +91 97123 96396",
      settings: "ક્લિનિક સેટિંગ્સ"
    },
    nav: {
      treatments: "દાંતની સારવાર",
      technology: "આધુનિક ટેકનોલોજી",
      experience: "ઓમ ડેન્ટલ શા માટે",
      doctors: "નિષ્ણાત ડૉક્ટર્સ",
      smileGallery: "સ્માઇલ ગેલેરી",
      faqs: "પ્રશ્નોત્તરી",
      location: "સ્થળ અને સમય",
      bookAppointment: "એપોઇન્ટમેન્ટ બુક કરો",
      watchReel: "વિડીયો જુઓ"
    },
    hero: {
      badge: "ઓમ ડેન્ટલ ક્લિનિક અને ઇમ્પ્લાન્ટ સેન્ટર · નિકોલ, અમદાવાદ",
      slide1Title: "સ્વસ્થ અને સુંદર",
      slide1Highlight: "હાસ્યની નવી શરૂઆત",
      slide1Subtitle: "નિકોલમાં અદ્યતન ડિજિટલ મશીનરી, દર્દરહિત સારવાર અને પ્રમાણિત દાંતના નિષ્ણાતો દ્વારા ઉત્તમ સારવાર મેળવો.",
      slide2Title: "તૂટેલા કે ખોવાયેલા દાંતથી",
      slide2Highlight: "ચિંતા કરશો નહીં",
      slide2Subtitle: "કુદરતી દાંત જેવા મજબૂત ટાઇટેનિયમ ડેન્ટલ ઇમ્પ્લાન્ટ્સ સાથે આજીવન ચાવવાની શક્તિ અને આકર્ષક સ્મિત પાછું મેળવો.",
      slide3Title: "તાર વગર સીધા દાંત",
      slide3Highlight: "અદ્રશ્ય અલાઈનર્સ",
      slide3Subtitle: "કોઈપણ ધાતુના તાર કે બ્રેસિસ વગર પારદર્શક અલાઈનર્સ દ્વારા કોઈપણ ઉંમરે દાંતને એકસરખા અને સીધા બનાવો.",
      bookCta: "એપોઇન્ટમેન્ટ બુક કરો",
      whatsappCta: "વોટ્સએપ પૂછપરછ",
      watchReelCta: "ક્લિનિક વિડીયો જુઓ",
      quickStats: {
        experience: "૧૦+ વર્ષ",
        experienceLabel: "નિકોલમાં અનુભવી સેવા",
        patients: "૫,૦૦૦+",
        patientsLabel: "સફળતાપૂર્વક સ્વસ્થ કરેલા દર્દીઓ",
        success: "૯૮%+",
        successLabel: "ઇમ્પ્લાન્ટ સફળતા દર",
        singleSitting: "૧-બેઠક",
        singleSittingLabel: "દર્દરહિત રોટરી રુટ કેનાલ"
      }
    },
    trustStrip: {
      sterilization: "ક્લાસ-બી ઓટોક્લેવ",
      sterilizationDesc: "હોસ્પિટલ કક્ષાનું વેક્યુમ સ્ટરિલાઇઝેશન ૧૦૦% ઈન્ફેક્શન મુક્ત સુરક્ષા માટે",
      digitalRvg: "ડિજિટલ RVG એક્સ-રે",
      digitalRvgDesc: "ખૂબ જ ઓછા રેડિયેશન સાથે દાંતનું ત્વરિત ડિજિટલ નિદાન",
      expertCare: "પ્રમાણિત દાંતના સર્જન",
      expertCareDesc: "અનુભવી ઇમ્પ્લાન્ટોલોજિસ્ટ અને કોસ્મેટિક સ્માઇલ નિષ્ણાત",
      transparentFees: "પારદર્શક સલાહ",
      transparentFeesDesc: "કોઈપણ બિનજરૂરી ખર્ચ વગર સચોટ અને પ્રામાણિક સારવાર યોજના"
    },
    experience: {
      kicker: "ઓમ ડેન્ટલ ક્લિનિકની વિશેષતા",
      title: "સંપૂર્ણ દાંતની સંભાળ માટે નિકોલ, અમદાવાદનું સર્વશ્રેષ્ઠ ડેન્ટલ ક્લિનિક",
      subtitle: "અમારું માનવું છે કે દાંતની સારવાર દર્દરહિત, શાંત અને વિજ્ઞાન આધારિત હોવી જોઈએ. દાંતના ભયને દૂર કરતું શાંત વાતાવરણ અનુભવો.",
      cards: [
        {
          title: "દર્દરહિત રોટરી રુટ કેનાલ",
          desc: "કોમ્પ્યુટરાઇઝ્ડ એપેક્સ લોકેટર અને ફ્લેક્સિબલ નિકલ-ટાઇટેનિયમ ફાઇલ્સથી રુટ કેનાલ માત્ર એક જ બેઠકમાં આરામથી પૂર્ણ થાય છે."
        },
        {
          title: "ટાઇટેનિયમ ડેન્ટલ ઇમ્પ્લાન્ટ્સ",
          desc: "હાડકા સાથે ભળી જતા બાયો-કમ્પેટીબલ ટાઇટેનિયમ ઇમ્પ્લાન્ટ્સ વડે કાયમી ધોરણે કુદરતી દાંત જેવી મજબૂતાઈ મેળવો."
        },
        {
          title: "કોસ્મેટિક સ્માઇલ ડિઝાઇનિંગ",
          desc: "પોર્સેલિન વિનિયર્સ, દાંત વચ્ચેની જગ્યા (ડાયસ્ટેમા) પૂરવી અને ટીથ વ્હાઇટનિંગ દ્વારા ચહેરાને અનુરૂપ તેજસ્વી સ્મિત પ્રાપ્ત કરો."
        },
        {
          title: "૧૦૦% સ્ટરિલાઇઝેશન પ્રોટોકોલ",
          desc: "દરેક દર્દી માટે ઉપયોગમાં લેવાતા તમામ સાધનોનું મલ્ટિ-સ્ટેજ ક્લાસ-બી વેક્યુમ મશીન દ્વારા સંપૂર્ણ જંતુમુક્તિકરણ થાય છે."
        }
      ]
    },
    services: {
      kicker: "ક્લિનિકલ સારવાર",
      title: "વિશેષ ડેન્ટલ સારવાર અને સેવાઓ",
      subtitle: "રૂટિન સફાઈથી લઈને સંપૂર્ણ મોઢાના ઇમ્પ્લાન્ટ્સ સુધી, અમારા ડૉક્ટર્સ નિકોલમાં સંવેદનશીલ અને નિષ્ણાત સારવાર આપે છે.",
      allTab: "બધી સારવાર",
      implantsTab: "ડેન્ટલ ઇમ્પ્લાન્ટ્સ",
      rctTab: "રુટ કેનાલ (RCT)",
      cosmeticTab: "સ્માઇલ ડિઝાઇન અને વ્હાઇટનિંગ",
      orthoTab: "અદ્રશ્ય અલાઈનર્સ",
      generalTab: "સામાન્ય અને નિવારક",
      enquireBtn: "વોટ્સએપ પૂછપરછ",
      bookSlotBtn: "આ સારવાર બુક કરો",
      estDuration: "અંદાજિત સમય:"
    },
    tech: {
      kicker: "ચોકસાઈ અને આરામ",
      title: "અદ્યતન ડેન્ટલ ટેકનોલોજી",
      subtitle: "ડિજિટલ સાધનો અને કડક સ્ટરિલાઇઝેશન પ્રક્રિયાઓ મિલીમીટર કક્ષાની ચોકસાઈ અને દર્દીની શાંતિ સુનિશ્ચિત કરે છે.",
      pillars: [
        {
          title: "આરામ અને શાંતિ",
          subtitle: "સહાનુભૂતિપૂર્ણ સારવાર",
          desc: "શાંત વાતાવરણ, દર્દરહિત એનેસ્થેસિયા પદ્ધતિ અને ભયમુક્ત સારવારનો અનુભવ."
        },
        {
          title: "સચોટતા અને ચોકસાઈ",
          subtitle: "ડિજિટલ ડાયગ્નોસ્ટિક્સ",
          desc: "હાઈ-ડેફિનેશન RVG ડિજિટલ સેન્સર્સ, ઈલેક્ટ્રોનિક એપેક્સ લોકેટર્સ અને CAD/CAM ઝિર્કોનિયા કેપ્સ."
        },
        {
          title: "વૈયક્તિક કાળજી",
          subtitle: "પારદર્શક સારવાર નકશો",
          desc: "દરેક દર્દી માટે સ્પષ્ટ વિકલ્પો, પ્રામાણિક ભલામણો અને કોઈ બિનજરૂરી પ્રક્રિયા નહીં."
        }
      ],
      equipment: [
        {
          title: "ડિજિટલ RVG સેન્સર એક્સ-રે",
          desc: "સામાન્ય એક્સ-રે કરતાં ૯૦% ઓછા રેડિયેશન સાથે દાંત અને હાડકાનું ત્વરિત હાઇ-ડેફિનેશન ચિત્ર."
        },
        {
          title: "રોટરી એન્ડોડોન્ટિક્સ અને એપેક્સ લોકેટર",
          desc: "કોમ્પ્યુટરાઇઝ્ડ ટોર્ક કંટ્રોલ સાથે એક જ વિઝિટમાં સુરક્ષિત અને દર્દરહિત રુટ કેનાલ સફળતા."
        },
        {
          title: "ક્લાસ-બી વેક્યુમ ઓટોક્લેવ",
          desc: "બધા જ સાધનો અને હેન્ડપીસમાંથી ૧૦૦% સૂક્ષ્મજીવો અને વાયરસનો નાશ કરતી સુરક્ષિત પદ્ધતિ."
        }
      ]
    },
    smileGallery: {
      kicker: "પહેલાં અને પછીના પરિણામો",
      title: "સ્માઇલ ટ્રાન્સફોર્મેશન ગેલેરી",
      subtitle: "કોસ્મેટિક વિનિયર્સ, ડેન્ટલ ઇમ્પ્લાન્ટ્સ અને અદ્રશ્ય અલાઈનર્સ દ્વારા પ્રાપ્ત થયેલા અસલી પરિણામો જુઓ.",
      slideInstruction: "પહેલાં અને પછીના પરિણામની સરખામણી કરવા માટે સ્લાઇડરને ડાબે-જમણે ખસેડો.",
      beforeLabel: "સારવાર પહેલાં",
      afterLabel: "સારવાર પછી",
      procedure: "પ્રક્રિયા",
      timeline: "સમયગાળો",
      benefits: "લાભો"
    },
    journey: {
      kicker: "સારવાર પ્રક્રિયા",
      title: "ઓમ ડેન્ટલમાં તમારી સારવારનો પ્રવાસ",
      subtitle: "પ્રથમ સ્કેનિંગથી લઈને કાયમી સુંદર સ્મિત સુધીના સરળ અને ચિંતામુક્ત ૪ તબક્કા.",
      steps: [
        {
          number: "૦૧",
          title: "ડિજિટલ સ્કેન અને નિદાન",
          desc: "સંપૂર્ણ મૌખિક તપાસ, ઓછા રેડિયેશનવાળા ડિજિટલ RVG સ્કેન અને ડૉ. હર્ષ પટેલ સાથે વિસ્તૃત ચર્ચા."
        },
        {
          number: "૦૨",
          title: "પારદર્શક સારવાર યોજના",
          desc: "કોઈપણ પ્રક્રિયા શરૂ કરતા પહેલા સારવારના તમામ વિકલ્પો, સમય અને યોગ્ય અંદાજિત ખર્ચની સમજૂતી."
        },
        {
          number: "૦૩",
          title: "દર્દરહિત સચોટ સારવાર",
          desc: "મોટરાઇઝ્ડ રોટરી ટૂલ્સ અને ઉચ્ચ ગુણવત્તાવાળા બાયો-કમ્પેટીબલ મટિરિયલ્સ સાથે દર્દરહિત સારવાર."
        },
        {
          number: "૦૪",
          title: "ફોલો-અપ અને આજીવન કાળજી",
          desc: "નિયમિત ફોલો-અપ તપાસ અને તમારા સ્મિતને આજીવન ચમકદાર અને સ્વસ્થ રાખવા માટે માર્ગદર્શન."
        }
      ]
    },
    doctors: {
      kicker: "પ્રમાણિત દાંતના નિષ્ણાતો",
      title: "અમારા નિષ્ણાત ડેન્ટલ સર્જન્સ",
      subtitle: "ડૉ. હર્ષ એન. પટેલ અને ડૉ. ઉન્નતિ પટેલની આગેવાની હેઠળ અમારું ક્લિનિક નિકોલમાં વિશ્વસનીય સારવાર આપે છે.",
      verifiedDoctor: "પ્રમાણિત ડેન્ટલ સર્જન",
      requestSlot: "એપોઇન્ટમેન્ટ વિનંતી",
      philosophyTitle: "અમારો ક્લિનિકલ સિદ્ધાંત",
      philosophyText: "અમે કુદરતી દાંતને બચાવવામાં માનીએ છીએ. જ્યાં સુધી કુદરતી દાંતને બચાવી શકાય ત્યાં સુધી અમે ક્યારેય દાંત કાઢવાની કે બિનજરૂરી કેપ બેસાડવાની સલાહ આપતા નથી."
    },
    booking: {
      kicker: "ઓનલાઇન રીસેપ્શન ડેસ્ક",
      title: "તમારી એપોઇન્ટમેન્ટ બુક કરો",
      subtitle: "નિકોલ ક્લિનિક માટે સવાર કે સાંજનો અનુકૂળ સમય પસંદ કરો. ફોર્મ સબમિટ કરવાથી વોટ્સએપ પર સીધો મેસેજ તૈયાર થશે.",
      fullName: "દર્દીનું પૂરું નામ",
      fullNamePlaceholder: "દા.ત. રમેશભાઈ શાહ",
      phone: "મોબાઇલ / વોટ્સએપ નંબર",
      phonePlaceholder: "+91 98765 43210",
      treatment: "જરૂરી ડેન્ટલ સારવાર",
      preferredDate: "પસંદગીની તારીખ",
      timeSlot: "પસંદગીનો સમય",
      morningLabel: "સવારનું સત્ર (૧૦:૦૦ થી ૦૧:૦૦)",
      eveningLabel: "સાંજનું સત્ર (૦૫:૦૦ થી ૦૯:૦૦)",
      notes: "લક્ષણો અથવા વિશેષ નોંધ (મરજિયાત)",
      notesPlaceholder: "દા.ત. ચાવતી વખતે નીચેના દાઢમાં દુખાવો છે, અથવા તાર વગરના બ્રેસિસ વિશે પૂછવું છે...",
      policyNotice: "એપોઇન્ટમેન્ટ નોંધ: આ ફોર્મ સબમિટ કરવાથી વિગતો સાથે વોટ્સએપ ખૂલશે. અમારા ક્લિનિક સ્ટાફ દ્વારા ઉપલબ્ધતા ચકાસ્યા બાદ સમય કન્ફર્મ કરવામાં આવશે.",
      reviewBtn: "વિગતો ચકાસો",
      reviewTitle: "એપોઇન્ટમેન્ટ વિગતોની ચકાસણી",
      editInfo: "વિગતો સુધારો",
      sendWhatsappBtn: "વોટ્સએપ દ્વારા વિનંતી મોકલો",
      backBtn: "ફોર્મ પર પાછા જાઓ",
      launchedTitle: "વોટ્સએપ ખૂલ્યું છે",
      launchedDesc: "કૃપા કરીને વોટ્સએપમાં 'Send' બટન દબાવો. ઓમ ડેન્ટલ ક્લિનિક (+91 97123 96396) ની રીસેપ્શન ટીમ તમને સમય કન્ફર્મ કરી આપશે.",
      reopenWhatsapp: "વોટ્સએપ ફરીથી ખોલો",
      copyText: "મેસેજ કોપી કરો",
      newBooking: "નવી વિનંતી",
      errors: {
        nameRequired: "કૃપા કરીને તમારું પૂરું નામ લખો.",
        phoneRequired: "કૃપા કરીને તમારો મોબાઇલ અથવા વોટ્સએપ નંબર લખો.",
        phoneValid: "કૃપા કરીને માન્ય ૧૦ આંકડાનો મોબાઇલ નંબર લખો.",
        dateRequired: "કૃપા કરીને મુલાકાતની તારીખ પસંદ કરો.",
        datePast: "ભૂતકાળની તારીખ પસંદ કરી શકાતી નથી."
      }
    },
    faqs: {
      kicker: "માહિતી અને માર્ગદર્શન",
      title: "વારંવાર પૂછાતા પ્રશ્નો (FAQs)",
      subtitle: "રુટ કેનાલ, ડેન્ટલ ઇમ્પ્લાન્ટ્સ, ક્લિનિકના સમય અને સારવાર અંગેના સામાન્ય પ્રશ્નોના જવાબો."
    },
    contact: {
      kicker: "અમારા ક્લિનિકની મુલાકાત લો",
      title: "સરનામું, સમય અને રસ્તો",
      subtitle: "પંચરત્ન એવન્યુ, દીપક સ્કૂલ સામે, ગંગોત્રી સર્કલ રોડ, નિકોલ, અમદાવાદ ખાતે સરળતાથી પહોંચી શકાય તેવું લોકેશન.",
      addressTitle: "ક્લિનિકનું સરનામું",
      directionsBtn: "ગૂગલ મેપ્સમાં રસ્તો જુઓ",
      hoursTitle: "કન્સલ્ટેશન સમય",
      callNow: "સીધો ફોન / વોટ્સએપ",
      openInMap: "સંપૂર્ણ નકશો ખોલો",
      verifiedProfile: "પ્રમાણિત ગૂગલ બિઝનેસ પ્રોફાઇલ"
    },
    footer: {
      aboutText: "નિકોલ, અમદાવાદમાં આધુનિક ડેન્ટલ ઇમ્પ્લાન્ટ્સ, સિંગલ-સીટિંગ રોટરી રુટ કેનાલ, અદ્રશ્ય અલાઈનર્સ અને સ્માઇલ ડિઝાઇનની વિશ્વસનીય સારવાર.",
      treatmentsTitle: "સારવાર",
      practiceTitle: "ક્લિનિક માહિતી",
      contactTitle: "સંપર્ક ડેસ્ક",
      rightsReserved: "સર્વાધિકાર સુરક્ષિત. ઓમ ડેન્ટલ ક્લિનિક અને ઇમ્પ્લાન્ટ સેન્ટર.",
      backToTop: "ટોચ પર જાઓ",
      disclaimer: "ડિસ્ક્લેમર: વેબસાઇટ પર આપેલી માહિતી દર્દીના પ્રાથમિક માર્ગદર્શન માટે છે. દરેક દર્દીની વાસ્તવિક સારવાર ક્લિનિકમાં વ્યક્તિગત તપાસ પર આધારિત રહે છે."
    }
  }
};
