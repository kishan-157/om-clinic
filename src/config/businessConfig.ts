/**
 * Central Business Configuration with Full Bilingual (EN & GU) Support
 * Source of Truth: Google Maps Listing (https://maps.app.goo.gl/hCsqL2VLQ2WHY43XA)
 * Business: Om Dental Clinic & Implant Center - Nikol, Ahmedabad
 */

export interface DoctorProfile {
  name: string;
  nameGu: string;
  degree: string;
  degreeGu: string;
  specialty: string;
  specialtyGu: string;
  experienceYears?: number;
  bio: string;
  bioGu: string;
  verified: boolean;
}

export interface DentalTreatment {
  id: string;
  title: string;
  titleGu: string;
  category: 'cosmetic' | 'implants' | 'endodontics' | 'orthodontics' | 'general';
  tagline: string;
  taglineGu: string;
  description: string;
  descriptionGu: string;
  keyBenefits: string[];
  keyBenefitsGu: string[];
  durationEstimate: string;
  durationEstimateGu: string;
  recommendedFor: string;
  recommendedForGu: string;
}

export interface ClinicTiming {
  days: string;
  daysGu: string;
  morning: string;
  morningGu: string;
  evening: string;
  eveningGu: string;
  isClosed?: boolean;
}

export interface BusinessConfig {
  businessName: string;
  businessNameGu: string;
  shortName: string;
  shortNameGu: string;
  tagline: string;
  taglineGu: string;
  subtitle: string;
  subtitleGu: string;
  status: 'verified' | 'unverified';
  phoneDisplay: string;
  whatsappNumber: string; // international digits only, no +
  address: {
    line1: string;
    line1Gu: string;
    line2: string;
    line2Gu: string;
    landmark: string;
    landmarkGu: string;
    area: string;
    areaGu: string;
    city: string;
    cityGu: string;
    state: string;
    stateGu: string;
    pincode: string;
    fullFormatted: string;
    fullFormattedGu: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  doctors: DoctorProfile[];
  timings: ClinicTiming[];
  services: DentalTreatment[];
  videoAssetPath: string;
}

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  businessName: "Om Dental Clinic & Implant Center",
  businessNameGu: "ઓમ ડેન્ટલ ક્લિનિક અને ઇમ્પ્લાન્ટ સેન્ટર",
  shortName: "Om Dental",
  shortNameGu: "ઓમ ડેન્ટલ",
  tagline: "Elevating Dental Wellness in Nikol",
  taglineGu: "નિકોલમાં સ્વસ્થ અને સુંદર હાસ્યની નવી શરૂઆત",
  subtitle: "Advanced dental care for cosmetic precision, comfort and modern technology in Nikol, Ahmedabad.",
  subtitleGu: "નિકોલ, અમદાવાદમાં આધુનિક ટેકનોલોજી, સંપૂર્ણ આરામ અને અનુભવી ડૉક્ટર્સ દ્વારા વિશેષ ડેન્ટલ સારવાર.",
  status: "verified",
  phoneDisplay: "+91 97123 96396",
  whatsappNumber: "919712396396",
  address: {
    line1: "Shop No. A/6, Panchratna Avenue",
    line1Gu: "દુકાન નં. A/6, પંચરત્ન એવન્યુ",
    line2: "Opp. Dipak School, Gangotri Circle Road / Vrundavan Party Plot Rd",
    line2Gu: "દીપક સ્કૂલ સામે, ગંગોત્રી સર્કલ રોડ / વૃંદાવન પાર્ટી પ્લોટ રોડ",
    landmark: "Near Bank of Baroda & Gangotri Circle",
    landmarkGu: "બેંક ઓફ બરોડા અને ગંગોત્રી સર્કલ પાસે",
    area: "Nikol",
    areaGu: "નિકોલ",
    city: "Ahmedabad",
    cityGu: "અમદાવાદ",
    state: "Gujarat",
    stateGu: "ગુજરાત",
    pincode: "380049",
    fullFormatted: "Shop No. A/6, Panchratna Avenue, Opp. Dipak School, Gangotri Circle Rd, Nikol, Ahmedabad, Gujarat 380049",
    fullFormattedGu: "દુકાન નં. A/6, પંચરત્ન એવન્યુ, દીપક સ્કૂલ સામે, ગંગોત્રી સર્કલ રોડ, નિકોલ, અમદાવાદ, ગુજરાત ૩૮૦૦૪૯"
  },
  googleMapsUrl: "https://maps.app.goo.gl/hCsqL2VLQ2WHY43XA",
  googleMapsEmbedQuery: "Om+Dental+Clinic+Panchratna+Avenue+Nikol+Ahmedabad",
  videoAssetPath: "/assets/aistudio/snapgram.io_0509qn3qwe9u_569a635f.mp4",
  doctors: [
    {
      name: "Dr. Harsh N. Patel",
      nameGu: "ડૉ. હર્ષ એન. પટેલ",
      degree: "B.D.S. (Consulting Dental Surgeon)",
      degreeGu: "B.D.S. (કન્સલ્ટિંગ ડેન્ટલ સર્જન)",
      specialty: "Dental Implantology & Cosmetic Smile Design",
      specialtyGu: "ડેન્ટલ ઇમ્પ્લાન્ટ્સ અને કોસ્મેટિક સ્માઇલ ડિઝાઇન",
      bio: "Specializing in high-precision dental implants, painless rotary root canals, and modern cosmetic rehabilitation with a patient-centric, gentle approach.",
      bioGu: "ચોકસાઈપૂર્ણ ડેન્ટલ ઇમ્પ્લાન્ટ્સ, દર્દરહિત રોટરી રુટ કેનાલ અને કુદરતી સ્માઇલ રિહેબિલિટેશનના અનુભવી સર્જન.",
      verified: true
    },
    {
      name: "Dr. Unnati Patel",
      nameGu: "ડૉ. ઉન્નતિ પટેલ",
      degree: "B.D.S. (Consulting Dental Surgeon)",
      degreeGu: "B.D.S. (કન્સલ્ટિંગ ડેન્ટલ સર્જન)",
      specialty: "Aesthetic Dentistry & Preventive Dental Care",
      specialtyGu: "એસ્થેટિક ડેન્ટિસ્ટ્રી અને બાળકોની દાંતની સંભાળ",
      bio: "Dedicated to comprehensive oral health, pain-free cavity management, and delicate smile enhancements for families and children.",
      bioGu: "સમગ્ર પરિવાર અને બાળકો માટે ભયમુક્ત વાતાવરણમાં સચોટ સડો નિવારણ અને સુંદર સ્મિત નિર્માણ.",
      verified: true
    }
  ],
  timings: [
    {
      days: "Monday – Saturday",
      daysGu: "સોમવાર – શનિવાર",
      morning: "10:00 AM – 01:00 PM",
      morningGu: "સવારે ૧૦:૦૦ થી ૦૧:૦૦",
      evening: "05:00 PM – 09:00 PM",
      eveningGu: "સાંજે ૦૫:૦૦ થી ૦૯:૦૦"
    },
    {
      days: "Sunday",
      daysGu: "રવિવાર",
      morning: "10:00 AM – 01:00 PM",
      morningGu: "સવારે ૧૦:૦૦ થી ૦૧:૦૦",
      evening: "By Prior Appointment Only",
      eveningGu: "માત્ર અગાઉથી નક્કી કરેલ મુલાકાત માટે"
    }
  ],
  services: [
    {
      id: "implants",
      title: "Dental Implants",
      titleGu: "ડેન્ટલ ઇમ્પ્લાન્ટ્સ (કાયમી દાંત)",
      category: "implants",
      tagline: "Permanent, natural-feeling tooth restoration with medical-grade titanium",
      taglineGu: "મેડિકલ-ગ્રેડ ટાઇટેનિયમ સાથે કાયમી અને કુદરતી દાંતનું પુનઃસ્થાપન",
      description: "Replace single missing teeth or full arches with biocompatible titanium implants that fuse with the jawbone to restore natural chewing power and facial aesthetics.",
      descriptionGu: "ખોવાયેલા દાંતના સ્થાને હાડકા સાથે એકરૂપ થઈ જતાં ટાઇટેનિયમ ઇમ્પ્લાન્ટ્સ બેસાડી ૧૦૦% કુદરતી ચાવવાની તાકાત અને સુંદરતા મેળવો.",
      keyBenefits: [
        "Permanent osseointegration with bone",
        "Prevents adjacent tooth shifting",
        "Restores 98% natural bite force"
      ],
      keyBenefitsGu: [
        "હાડકા સાથે કાયમી મજબૂત જોડાણ",
        "બાજુના દાંતને હલતા કે વાંકા થતાં અટકાવે",
        "૯૮% કુદરતી ચાવવાની ક્ષમતા પાછી આપે"
      ],
      durationEstimate: "Single sitting for fixture; 3-4 months integration",
      durationEstimateGu: "ઇમ્પ્લાન્ટ ફિક્સિંગ ૧ જ સિટિંગમાં; ૩-૪ મહિનામાં કાયમી",
      recommendedFor: "Missing teeth, loose dentures, fractured roots",
      recommendedForGu: "પડી ગયેલા દાંત, ઢીલા ચોકઠા કે તૂટેલા દાંત માટે"
    },
    {
      id: "rct",
      title: "Single-Sitting Rotary RCT",
      titleGu: "સિંગલ-સીટિંગ રોટરી રુટ કેનાલ",
      category: "endodontics",
      tagline: "Single-sitting, computerized apex-guided painless nerve therapy",
      taglineGu: "કોમ્પ્યુટરાઇઝ્ડ એપેક્સ લોકેટર વડે માત્ર ૧ જ બેઠકમાં દર્દરહિત સારવાર",
      description: "Save deeply decayed or infected teeth without discomfort using high-speed rotary nickel-titanium files and electronic apex locators for microscopic canal accuracy.",
      descriptionGu: "સડાવાળા કે સખત દુખતા દાંતને કાઢ્યા વગર રોટરી ટાઇટેનિયમ ફાઇલ્સથી એક જ બેઠકમાં સાફ કરી કાયમી બચાવો.",
      keyBenefits: [
        "Typically completed in a single session",
        "Micro-motor precision canal shaping",
        "Local anesthesia comfort protocol"
      ],
      keyBenefitsGu: [
        "મોટાભાગે ફક્ત ૧ જ મુલાકાતમાં પૂર્ણ",
        "માઇક્રો-મોટર દ્વારા સૂક્ષ્મ કેનાલ સફાઈ",
        "લોકલ એનેસ્થેસિયાથી દર્દરહિત આરામદાયક સારવાર"
      ],
      durationEstimate: "45 – 60 minutes per tooth",
      durationEstimateGu: "દાંત દીઠ ૪૫ થી ૬૦ મિનિટ",
      recommendedFor: "Severe tooth pain, sensitivity to hot/cold, deep cavities",
      recommendedForGu: "તીવ્ર દાંતનો દુખાવો, ઠંડુ-ગરમ લાગવું, ઊંડો સડો"
    },
    {
      id: "cosmetic",
      title: "Cosmetic Smile Design",
      titleGu: "કોસ્મેટિક સ્માઇલ ડિઝાઇન અને વિનિયર્સ",
      category: "cosmetic",
      tagline: "Handcrafted porcelain veneers, diastema closure and smile symmetry",
      taglineGu: "પોર્સેલિન વિનિયર્સ, દાંત વચ્ચેની જગ્યા પૂરવી અને આકર્ષક સ્મિત",
      description: "Custom aesthetic transformations tailored to your facial harmony. We correct chips, gaps, discolouration, and uneven edges for a bright, confident smile.",
      descriptionGu: "તમારા ચહેરાની સુંદરતા સાથે મેળ ખાતી કસ્ટમ સ્માઇલ ડિઝાઇન. ખાંચા, તૂટેલા ખૂણા અને પીળાશ દૂર કરી આકર્ષક સ્મિત મેળવો.",
      keyBenefits: [
        "Natural shade-matched translucency",
        "Minimal enamel preparation",
        "Digital photo preview before procedure"
      ],
      keyBenefitsGu: [
        "કુદરતી દાંત જેવી મોતી જેવી ચમક",
        "દાંતને નુકસાન કર્યા વગર પાતળા લેમિનેટ્સ",
        "શરૂ કરતાં પહેલાં અપેક્ષિત સ્મિતનું પૂર્વાવલોકન"
      ],
      durationEstimate: "2 – 3 visits",
      durationEstimateGu: "૨ થી ૩ મુલાકાત",
      recommendedFor: "Chipped teeth, gaps between teeth, stained enamel",
      recommendedForGu: "તૂટેલા દાંત, દાંત વચ્ચેની જગ્યા, ડાઘાવાળા દાંત"
    },
    {
      id: "ortho",
      title: "Orthodontics & Clear Aligners",
      titleGu: "અદ્રશ્ય અલાઈનર્સ (તાર વગરના બ્રેસિસ)",
      category: "orthodontics",
      tagline: "Invisible aligners and precision ceramic braces for straighter teeth",
      taglineGu: "કોઈપણ વાયર વગર પારદર્શક અલાઈનર્સથી દાંતને સીધા કરો",
      description: "Discreet orthodontic correction using custom clear aligners or low-profile ceramic braces to correct crowded, rotated, or misaligned teeth at any age.",
      descriptionGu: "પારદર્શક પ્લાસ્ટિક ટ્રે દ્વારા કોઈને ખબર ન પડે તે રીતે વાંકાચૂંકા કે આગળ-પાછળ રહેલા દાંતને સરળતાથી સીધા બનાવો.",
      keyBenefits: [
        "Virtually invisible transparent trays",
        "Removable for meals and brushing",
        "Gentle, continuous tooth movement"
      ],
      keyBenefitsGu: [
        "સામેવાળી વ્યક્તિને દેખાય નહીં તેવી ટ્રે",
        "જમતી વખતે અને બ્રશ કરતી વખતે કાઢી શકાય",
        "દાંત પર ધીમું અને દર્દરહિત સચોટ દબાણ"
      ],
      durationEstimate: "6 – 18 months customized plan",
      durationEstimateGu: "૬ થી ૧૮ મહિનાનો કસ્ટમાઇઝ્ડ પ્લાન",
      recommendedFor: "Crooked teeth, overbite, spacing, bite misalignments",
      recommendedForGu: "વાંકાચૂંકા દાંત, બહાર નીકળેલા દાંત, જગ્યાઓ"
    },
    {
      id: "whitening",
      title: "Professional Teeth Whitening",
      titleGu: "ટીથ વ્હાઇટનિંગ (દાંત સફેદ કરવા)",
      category: "cosmetic",
      tagline: "Professional clinical power bleaching for up to 6–8 shades brighter",
      taglineGu: "દાંતને ૬ થી ૮ શેડ વધુ ચમકદાર અને સફેદ બનાવતી પ્રક્રિયા",
      description: "Safely remove stubborn stains from tea, coffee, and age with clinical-grade enamel-safe whitening gels activated with specialized cold light.",
      descriptionGu: "ચા, કોફી અને તંબાકુના હઠીલા ડાઘાને ઈનેમલ સુરક્ષિત રાખીને ૧ જ કલાકમાં દૂર કરી દાંતને ચમકાવો.",
      keyBenefits: [
        "Fast results in one clinical hour",
        "Enamel-safe desensitizing agents",
        "Long-lasting luminous radiance"
      ],
      keyBenefitsGu: [
        "માત્ર ૧ જ કલાકમાં ત્વરિત પરિણામ",
        "દાંતના ઈનેમલને કોઈ નુકસાન નહીં",
        "લાંબા સમય સુધી જળવાતી કુદરતી ચમક"
      ],
      durationEstimate: "45 minutes",
      durationEstimateGu: "૪૫ મિનિટ",
      recommendedFor: "Dull, yellowed or deeply stained teeth",
      recommendedForGu: "પીળા પડી ગયેલા કે ડાઘાવાળા દાંત માટે"
    },
    {
      id: "crowns",
      title: "Zirconia Crowns & Bridges",
      titleGu: "ઝિર્કોનિયા કેપ અને બ્રિજ (મેタル ફ્રી)",
      category: "general",
      tagline: "Metal-free CAD/CAM computerized crowns for lifetime durability",
      taglineGu: "ધાતુ વગરની CAD/CAM કોમ્પ્યુટરાઇઝ્ડ અત્યંત મજબૂત કેપ",
      description: "Monolithic zirconia and ceramic crowns precision-milled with CAD/CAM technology. Completely metal-free with zero dark margins at the gumline.",
      descriptionGu: "કોમ્પ્યુટર મિલિંગથી તૈયાર થતી ૧૦૦% મેટલ-ફ્રી ઝિર્કોનિયા કેપ જે પેઢા પાસે કાળી લીટી પડવા દેતી નથી અને આજીવન ટકે છે.",
      keyBenefits: [
        "Extreme fracture resistance",
        "Biocompatible with zero allergic response",
        "Flawless tooth color matching"
      ],
      keyBenefitsGu: [
        "અત્યંત મજબૂત અને તૂટવા સામે રક્ષણ",
        "પેઢા માટે ૧૦૦% સુરક્ષિત અને અનુકૂળ",
        "કુદરતી દાંત સાથે અસલી રંગ મેળવણી"
      ],
      durationEstimate: "2 appointments (preparation + cementation)",
      durationEstimateGu: "૨ મુલાકાત (માપ લેવું + કેપ બેસાડવી)",
      recommendedFor: "Post-RCT reinforcement, worn teeth, bridge replacements",
      recommendedForGu: "રુટ કેનાલ પછી દાંતનું રક્ષણ, ઘસાયેલા દાંત માટે"
    },
    {
      id: "pediatric",
      title: "Pediatric & Family Dentistry",
      titleGu: "બાળકો અને પરિવારની દાંતની સંભાળ",
      category: "general",
      tagline: "Gentle, stress-free dental care for children and young adults",
      taglineGu: "બાળકો માટે ભય વગરની પ્રેમાળ અને મૈત્રીપૂર્ણ ડેન્ટલ સારવાર",
      description: "Friendly, compassionate checkups designed to make children feel at ease. We focus on fluoride varnishes, pit & fissure sealants, and cavity prevention.",
      descriptionGu: "બાળકો દાંતના ડૉક્ટરથી ડરે નહીં તેવું વાતાવરણ, સડો અટકાવવા ફ્લોરાઇડ ટ્રીટમેન્ટ અને પીટ-ફિશર સિલન્ટ્સ.",
      keyBenefits: [
        "Playful, anxiety-free atmosphere",
        "Preventive enamel sealants",
        "Early habit and alignment guidance"
      ],
      keyBenefitsGu: [
        "રમૂજી અને ભયમુક્ત વાતાવરણ",
        "સડો અટકાવવા માટે પ્રોટેક્ટિવ સિલન્ટ્સ",
        "દાંતની શરૂઆતની સાચી ગોઠવણનું માર્ગદર્શન"
      ],
      durationEstimate: "30 minutes per routine visit",
      durationEstimateGu: "મુલાકાત દીઠ ૩૦ મિનિટ",
      recommendedFor: "Children aged 2+, preventive school checkups",
      recommendedForGu: "૨ વર્ષથી મોટી ઉંમરના બાળકો અને વિદ્યાર્થીઓ માટે"
    },
    {
      id: "scaling",
      title: "Ultrasonic Scaling & Gum Care",
      titleGu: "અલ્ટ્રાસોનિક દાંતની સફાઈ અને પેઢાની સંભાળ",
      category: "general",
      tagline: "Painless deep tartar removal and periodontal wellness",
      taglineGu: "દર્દ વગર દાંતના કચરા અને પોપડાની સંપૂર્ણ સફાઈ",
      description: "Eliminate stubborn calculus, plaque, and harmful bacteria from beneath the gum line using gentle ultrasonic micro-vibrations and water spray.",
      descriptionGu: "પેઢા અને દાંત વચ્ચે જમા થયેલ ક્ષાર અને બેક્ટેરિયાને અલ્ટ્રાસોનિક વાઇબ્રેશન અને પાણીના સ્પ્રેથી સાફ કરો.",
      keyBenefits: [
        "Stops bleeding gums and halitosis",
        "Preserves bone support around teeth",
        "Polishes surface enamel"
      ],
      keyBenefitsGu: [
        "પેઢામાંથી લોહી નીકળવું અને દુર્ગંધ બંધ કરે",
        "દાંતના મૂળિયા અને હાડકાનું રક્ષણ કરે",
        "દાંતની સપાટીને લીસી અને ચમકદાર બનાવે"
      ],
      durationEstimate: "30 – 45 minutes",
      durationEstimateGu: "૩૦ થી ૪૫ મિનિટ",
      recommendedFor: "Bleeding gums, bad breath, annual preventative hygiene",
      recommendedForGu: "પેઢામાંથી લોહી, શ્વાસની દુર્ગંધ, વાર્ષિક સફાઈ માટે"
    }
  ]
};

export const CLINIC_FAQS = [
  {
    q: "How do I schedule an appointment at Om Dental Clinic?",
    qGu: "ઓમ ડેન્ટલ ક્લિનિકમાં એપોઇન્ટમેન્ટ કેવી રીતે બુક કરવી?",
    a: "You can request an appointment directly through our online booking form or via WhatsApp at +91 97123 96396. Our clinic desk will confirm your preferred morning (10:00 AM – 1:00 PM) or evening (5:00 PM – 9:00 PM) time slot.",
    aGu: "તમે આ વેબસાઇટ પરના ફોર્મ દ્વારા અથવા અમારા વોટ્સએપ નંબર +91 97123 96396 પર મેસેજ કરીને સીધી એપોઇન્ટમેન્ટ વિનંતી મોકલી શકો છો. અમારો સ્ટાફ સવાર (૧૦ થી ૧) કે સાંજ (૫ થી ૯) નો તમારો પસંદગીનો સમય કન્ફર્મ કરી આપશે."
  },
  {
    q: "Is root canal treatment (RCT) painful at Om Dental Clinic?",
    qGu: "શું ઓમ ડેન્ટલ ક્લિનિકમાં રુટ કેનાલ (RCT) દરમિયાન દુખાવો થાય છે?",
    a: "No. With advanced local anesthesia techniques, motorized rotary endodontic systems, and digital apex locators, our root canal treatments are virtually painless and typically completed in a comfortable single sitting.",
    aGu: "ના, બિલકુલ નહીં. આધુનિક એનેસ્થેસિયા પદ્ધતિ, મોટરાઇઝ્ડ રોટરી ફાઇલ્સ અને ડિજિટલ એપેક્સ લોકેટરની મદદથી રુટ કેનાલ સંપૂર્ણપણે દર્દરહિત હોય છે અને મોટાભાગે એક જ મુલાકાતમાં પૂર્ણ થાય છે."
  },
  {
    q: "What is the lifespan of dental implants?",
    qGu: "ડેન્ટલ ઇમ્પ્લાન્ટ્સ કેટલો સમય ટકે છે?",
    a: "When placed with high precision and maintained with routine oral hygiene and annual checkups, medical-grade titanium dental implants are designed to last a lifetime, boasting success rates exceeding 98%.",
    aGu: "જો ઇમ્પ્લાન્ટ યોગ્ય રીતે બેસાડવામાં આવે અને નિયમિત બ્રશિંગ તેમજ વાર્ષિક તપાસ કરવામાં આવે, તો મેડિકલ-ગ્રેડ ટાઇટેનિયમ ઇમ્પ્લાન્ટ્સ આજીવન (લાઇફટાઇમ) ટકે છે અને તેનો સફળતા દર ૯૮% થી વધુ છે."
  },
  {
    q: "Where is the clinic located in Ahmedabad?",
    qGu: "ક્લિનિક અમદાવાદમાં કઈ જગ્યાએ આવેલું છે?",
    a: "We are conveniently located at Shop No. A/6, Panchratna Avenue, opposite Dipak School on Gangotri Circle Road in Nikol, Ahmedabad, Gujarat 380049. Ample parking is available.",
    aGu: "અમારું ક્લિનિક દુકાન નં. A/6, પંચરત્ન એવન્યુ, દીપક સ્કૂલ સામે, ગંગોત્રી સર્કલ રોડ, નિકોલ, અમદાવાદ - ૩૮૦૦૪૯ ખાતે આવેલું છે. ત્યાં વાહન પાર્કિંગની પૂરતી સુવિધા છે."
  },
  {
    q: "Do you offer emergency dental consultations?",
    qGu: "શું દાંતના અસહ્ય દુખાવા માટે ઇમરજન્સી સેવા ઉપલબ્ધ છે?",
    a: "Yes. For severe dental pain, broken teeth, or emergency swelling, message our WhatsApp helpline (+91 97123 96396) for rapid triage and same-day priority appointment slots.",
    aGu: "હા. દાંતના અસહ્ય દુખાવા, દાંત તૂટી જવા કે સોજો આવવા જેવી ઇમરજન્સી સ્થિતિમાં અમારા વોટ્સએપ નંબર (+91 97123 96396) પર તાત્કાલિક સંપર્ક કરો જેથી તે જ દિવસે પ્રાથમિકતાના ધોરણે સમય આપી શકાય."
  }
];

export function buildWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function isClinicOpenNow(lang: 'en' | 'gu' = 'en'): { isOpen: boolean; statusText: string; nextOpeningText: string } {
  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTimeVal = hours * 60 + minutes;

  const morningOpen = 10 * 60; // 10:00 AM
  const morningClose = 13 * 60; // 01:00 PM
  const eveningOpen = 17 * 60; // 05:00 PM
  const eveningClose = 21 * 60; // 09:00 PM

  if (day === 0) {
    if (currentTimeVal >= morningOpen && currentTimeVal < morningClose) {
      return {
        isOpen: true,
        statusText: lang === 'gu' ? "હાલમાં ખુલ્લું છે (રવિવાર)" : "Open Now (Sunday Clinic)",
        nextOpeningText: lang === 'gu' ? "બપોરે ૧:૦૦ વાગ્યે બંધ થશે" : "Closes at 1:00 PM"
      };
    }
    return {
      isOpen: false,
      statusText: lang === 'gu' ? "હાલમાં બંધ છે (રવિવાર બપોર)" : "Closed (Sunday Afternoon)",
      nextOpeningText: lang === 'gu' ? "સોમવારે સવારે ૧૦:૦૦ વાગ્યે ખુલશે" : "Opens Monday at 10:00 AM"
    };
  }

  if (currentTimeVal >= morningOpen && currentTimeVal < morningClose) {
    return {
      isOpen: true,
      statusText: lang === 'gu' ? "હાલમાં ખુલ્લું છે" : "Open Now",
      nextOpeningText: lang === 'gu' ? "સવારનું સત્ર બપોરે ૧:૦૦ વાગ્યા સુધી (સાંજે ૫:૦૦ વાગ્યે ફરી ખુલશે)" : "Morning session until 1:00 PM (Reopens 5:00 PM)"
    };
  }

  if (currentTimeVal >= eveningOpen && currentTimeVal < eveningClose) {
    return {
      isOpen: true,
      statusText: lang === 'gu' ? "હાલમાં ખુલ્લું છે" : "Open Now",
      nextOpeningText: lang === 'gu' ? "સાંજનું સત્ર રાત્રે ૯:૦૦ વાગ્યા સુધી" : "Evening session until 9:00 PM"
    };
  }

  if (currentTimeVal < morningOpen) {
    return {
      isOpen: false,
      statusText: lang === 'gu' ? "હાલમાં બંધ છે" : "Closed Right Now",
      nextOpeningText: lang === 'gu' ? "આજે સવારે ૧૦:૦૦ વાગ્યે ખુલશે" : "Opens today at 10:00 AM"
    };
  }

  if (currentTimeVal >= morningClose && currentTimeVal < eveningOpen) {
    return {
      isOpen: false,
      statusText: lang === 'gu' ? "બપોરનો વિરામ" : "Afternoon Recess",
      nextOpeningText: lang === 'gu' ? "આજે સાંજે ૫:૦૦ વાગ્યે ફરી ખુલશે" : "Reopens this evening at 5:00 PM"
    };
  }

  return {
    isOpen: false,
    statusText: lang === 'gu' ? "આજના દિવસ માટે બંધ છે" : "Closed for Today",
    nextOpeningText: lang === 'gu' ? "આવતીકાલે સવારે ૧૦:૦૦ વાગ્યે ખુલશે" : "Opens tomorrow at 10:00 AM"
  };
}
