# Om Dental Clinic & Implant Center — Production Business Website

A business website for **Om Dental Clinic & Implant Center** in Nikol, Ahmedabad, inspired by modern clinical design references and verified from the Google Maps business listing.

---

## 1. Verified Source of Truth (Google Maps)

- **Business Name:** Om Dental Clinic & Implant Center
- **Google Maps Listing:** [https://maps.app.goo.gl/hCsqL2VLQ2WHY43XA](https://maps.app.goo.gl/hCsqL2VLQ2WHY43XA)
- **Address:** Shop No. A/6, Panchratna Avenue, Opp. Dipak School, Gangotri Circle Road / Vrundavan Party Plot Road, Nikol, Ahmedabad, Gujarat 380049
- **Landmark:** Near Bank of Baroda & Gangotri Circle
- **Specialist Surgeons:**
  - **Dr. Harsh N. Patel** (B.D.S., Dental Surgeon & Implantologist)
  - **Dr. Unnati Patel** (B.D.S., Dental Surgeon & Aesthetic Dentistry)
- **Contact Telephone / WhatsApp:** `+91 97123 96396` (International WhatsApp format: `919712396396`)
- **Verified Timings:**
  - **Monday to Saturday:**
    - Morning: 10:00 AM – 01:00 PM
    - Evening: 05:00 PM – 09:00 PM
  - **Sunday:** 10:00 AM – 01:00 PM (Prior Appointment)
- **Clinical Specialties:**
  - Biocompatible Titanium Dental Implants
  - Single-Sitting Computerized Rotary Root Canal (RCT)
  - Cosmetic Smile Design & Porcelain Veneers
  - Clear Dental Aligners & Ceramic Orthodontics
  - Zirconia CAD/CAM Metal-Free Crowns & Bridges
  - Ultrasonic Scaling & Periodontal Gum Therapy
  - Child-Friendly Pediatric Dentistry

---

## 2. Key Features & Design Signatures

1. **Instant On-the-Spot Bilingual Switcher (English & Gujarati / ગુજરાતી):**
   - High-visibility language toggle situated right at the top bar (`[ English | ગુજરાતી ]`) and mobile drawer.
   - 1-click on-the-spot conversion of every section: Navigation, Hero slides, The Experience difference, Treatments, Technology pillars, 4-Step Treatment Journey, Doctor profiles, Form inputs, Validation errors, FAQs, Address, Timings, and compiled WhatsApp message.
   - Preserves user language preference across reloads via `localStorage`.

2. **Sections Inspired by Reference Site (thedentalwellnesscentre.in):**
   - **Dynamic Animated Hero Slider:** 3 rotating propositions (*Elevating Dental Wellness*, *Don't Let Missing Teeth Hold You Back*, *Straight Teeth with Invisible Aligners*).
   - **The Om Dental Experience:** 4 core clinical standards (Pain-Managed Rotary Dentistry, Biocompatible Titanium Implants, Aesthetic Cosmetic Architecture, 100% Class-B Autoclaving).
   - **4-Step Treatment Journey:** Digital Scan & Consultation -> Transparent Treatment Blueprint -> Gentle Precision Treatment -> Follow-Up & Lifetime Smile Care.

3. **3D Interactive Holographic Tooth Visualizer:**
   - HTML5 Canvas vector engine with 3D rotation, scanning laser HUD beam, and view modes: *Hologram*, *X-Ray Micro*, and *Ceramic CAD*.
   - Interactive anatomical inspection nodes (Enamel Crown, Pulp Chamber, Root Canal Apex).

4. **Interactive Before/After Smile Transformation Slider:**
   - Smooth horizontal drag handle and keyboard arrow navigation.
   - Case studies: Aesthetic Smile Makeover, Single Tooth Implant, and Invisible Orthodontic Alignment.

5. **Validated Appointment Request Flow:**
   - Patient name, validated phone number, requested service, preferred date (past dates blocked), and preferred time slot (morning 10 AM–1 PM or evening 5 PM–9 PM).
   - Review and confirmation step.
   - Directly compiles and opens prefilled WhatsApp message in the user's chosen language (English or Gujarati): `https://wa.me/919712396396?text=...`.
   - Explains that the appointment is a request until confirmed by clinic staff.
   - One-tap clipboard copy fallback.
4. **Live Clinic Status Indicator:**
   - Automatically determines whether the clinic is currently Open, in Afternoon Recess, or Closed based on local time and verified hours.
5. **Interactive Clinic Configuration Drawer:**
   - Allows administrators or clients to customize phone, address, timings, or doctors live with localStorage persistence, JSON export, and reset to verified defaults.
6. **Brand Video Reel Modal:**
   - Embedded local video playback (`/assets/aistudio/snapgram.io_0509qn3qwe9u_569a635f.mp4`).
7. **Floating WhatsApp Widget:**
   - Complies with the 15% mobile sticky height cap and includes quick-action routing (Book, Inquire, Emergency triage).

---

## 3. GitHub Upload & Push Instructions

To push this project to a new GitHub repository:

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Stage all files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Om Dental Clinic & Implant Center production website"

# 4. Add your GitHub remote repository URL
git remote add origin https://github.com/YOUR_USERNAME/om-dental-clinic.git

# 5. Rename branch to main
git branch -M main

# 6. Push to GitHub
git push -u origin main
```

---

## 4. Vercel Deployment Instructions

Deploying this application to Vercel is seamless:

1. Log in to [Vercel](https://vercel.com).
2. Click **Add New Project** and select your GitHub repository (`om-dental-clinic`).
3. Vercel will automatically detect the Vite build settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. Your site will be live on a production `*.vercel.app` URL in less than 60 seconds with SSL and global CDN distribution.

---

## 5. Verification & Testing Checklist

- [x] **Verified Business Data:** Mapped from Google Maps listing (`https://maps.app.goo.gl/hCsqL2VLQ2WHY43XA`).
- [x] **No Fake Reviews or Claims:** Ethical medical copy; zero invented testimonials or certifications.
- [x] **Top Bar Contract:** Clean 3-zone layout with wordmark, concise single-line links, and primary CTA.
- [x] **Responsive Mobile Layout:** Tested for mobile, tablet, and desktop viewports (320px to 1440px+).
- [x] **Touch Drag Handlers:** Touch-enabled for both 3D canvas and Before/After comparison slider.
- [x] **WhatsApp Integration:** Correct `wa.me/919712396396?text=...` URI encoding without invalid `+` characters.
- [x] **Date Validation:** Past dates blocked (`min` attribute and JS validation).
- [x] **Reduced Motion Support:** Respects `prefers-reduced-motion: reduce`.
- [x] **Zero Broken Assets:** SVG/Canvas procedural graphics and verified local video player.
- [x] **Build & Lint Verification:** `tsc --noEmit` and `vite build` completed with 0 errors.
