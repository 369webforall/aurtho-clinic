// Physician Data
export interface Physician {
  id: string;
  slug: string;
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  education: string[];
  certifications: string[];
  fellowships: string[];
  awards: string[];
  languages: string[];
  image: string;
  locations: string[];
  locationIds: string[];
  phone: string;
  email: string;
  acceptingPatients: boolean;
  rating: number;
  reviewCount: number;
  yearsExperience: number;
  proceduresPerformed: number;
  telehealth: boolean;
  patientRating: number;
  videoUrl?: string;
}

export const physicians: Physician[] = [
  {
    id: "dr-martinez",
    slug: "dr-martinez",
    name: "Dr. Elena Martinez",
    title: "MD, FAAOS",
    specialties: ["Joint Replacement", "Adult Reconstruction", "Revision Surgery"],
    bio: "Dr. Elena Martinez is a nationally recognized leader in adult reconstruction and joint replacement surgery. With over 15 years of experience, she has performed more than 5,000 joint replacement procedures and pioneered minimally invasive techniques that reduce recovery time. Dr. Martinez serves as the Director of the Joint Replacement Center and is actively involved in clinical research on implant longevity and patient-reported outcomes.",
    education: [
      "MD - Johns Hopkins University School of Medicine",
      "BS - Massachusetts Institute of Technology",
    ],
    certifications: [
      "American Board of Orthopaedic Surgery",
      "Subspecialty Certification in Adult Reconstruction",
    ],
    fellowships: [
      "Adult Reconstruction & Joint Replacement - Hospital for Special Surgery",
      "Complex Revision Surgery - Mayo Clinic",
    ],
    awards: [
      "Top Doctor - Castle Connolly (2018-2024)",
      "Patient Choice Award - Vitals (2019-2024)",
      "Excellence in Teaching Award - Orthopedic Residency Program",
      "Research Excellence Award - AAOS Annual Meeting 2022",
    ],
    languages: ["English", "Spanish"],
    image: "/physicians/dr-martinez.jpg",
    locations: ["Main Campus", "Joint Replacement Center"],
    locationIds: ["main-campus", "joint-replacement-center"],
    phone: "(555) 123-4567",
    email: "e.martinez@orthopedic-clinic.com",
    acceptingPatients: true,
    rating: 4.9,
    reviewCount: 342,
    yearsExperience: 15,
    proceduresPerformed: 5000,
    telehealth: true,
    patientRating: 4.9,
  },
  {
    id: "dr-chen",
    slug: "dr-chen",
    name: "Dr. James Chen",
    title: "MD, FAAOS, FAOA",
    specialties: ["Sports Medicine", "Arthroscopic Surgery", "Shoulder & Knee"],
    bio: "Dr. James Chen specializes in arthroscopic and minimally invasive surgery of the shoulder, knee, and elbow. As the Head Team Physician for the Metropolitan City professional sports teams, he brings elite-level sports medicine expertise to every patient. Dr. Chen has authored over 50 peer-reviewed publications and is a sought-after speaker on cartilage restoration and biologic augmentation.",
    education: [
      "MD - Stanford University School of Medicine",
      "BS - University of California, Berkeley",
    ],
    certifications: [
      "American Board of Orthopaedic Surgery",
      "Subspecialty Certification in Sports Medicine",
    ],
    fellowships: [
      "Sports Medicine & Shoulder Surgery - Kerlan-Jobe Orthopaedic Clinic",
      "Cartilage Restoration - Steadman Philippon Research Institute",
    ],
    awards: [
      "Team Physician of the Year - Professional Sports League 2021",
      "Top Sports Medicine Specialist - U.S. News & World Report",
      "AOSSM Excellence in Research Award 2020",
      "Best Doctors in America (2017-2024)",
    ],
    languages: ["English", "Mandarin"],
    image: "/physicians/dr-chen.jpg",
    locations: ["Sports Medicine Center", "Main Campus"],
    locationIds: ["sports-medicine-center", "main-campus"],
    phone: "(555) 123-4569",
    email: "j.chen@orthopedic-clinic.com",
    acceptingPatients: true,
    rating: 4.8,
    reviewCount: 287,
    yearsExperience: 12,
    proceduresPerformed: 3500,
    telehealth: true,
    patientRating: 4.8,
  },
  {
    id: "dr-patel",
    slug: "dr-patel",
    name: "Dr. Priya Patel",
    title: "MD, FAAOS",
    specialties: ["Spine Surgery", "Minimally Invasive Spine", "Complex Spinal Deformity"],
    bio: "Dr. Priya Patel is a fellowship-trained spine surgeon with expertise in minimally invasive techniques, motion preservation, and complex spinal deformity correction. She is committed to exploring non-surgical options first and uses the latest navigation and robotic technology when surgery is needed. Dr. Patel leads the Spine Quality Improvement Initiative and has published extensively on patient-reported outcomes.",
    education: [
      "MD - Harvard Medical School",
      "MPH - Harvard T.H. Chan School of Public Health",
      "BA - Princeton University",
    ],
    certifications: [
      "American Board of Orthopaedic Surgery",
      "Subspecialty Certification in Spine Surgery",
    ],
    fellowships: [
      "Complex Spine Surgery - University of California, San Francisco",
      "Minimally Invasive Spine Surgery - Barrow Neurological Institute",
    ],
    awards: [
      "Top Spine Surgeon - Castle Connolly (2019-2024)",
      "Women in Orthopedics Leadership Award 2021",
      "Spine Research Grant - NIH 2022",
      "Patient Satisfaction Excellence Award 2023",
    ],
    languages: ["English", "Gujarati", "Hindi"],
    image: "/physicians/dr-patel.jpg",
    locations: ["Spine Institute", "Main Campus"],
    locationIds: ["spine-institute", "main-campus"],
    phone: "(555) 123-4570",
    email: "p.patel@orthopedic-clinic.com",
    acceptingPatients: true,
    rating: 4.9,
    reviewCount: 215,
    yearsExperience: 10,
    proceduresPerformed: 2800,
    telehealth: true,
    patientRating: 4.9,
  },
  {
    id: "dr-thompson",
    slug: "dr-thompson",
    name: "Dr. Michael Thompson",
    title: "MD, FAAOS",
    specialties: ["Hand & Upper Extremity", "Microvascular Surgery", "Nerve Reconstruction"],
    bio: "Dr. Michael Thompson is a renowned hand and upper extremity surgeon with specialized training in microvascular reconstruction and nerve surgery. He treats the full spectrum of conditions from carpal tunnel syndrome to complex traumatic injuries requiring free tissue transfer. Dr. Thompson directs the Hand Therapy Certification Program and serves on the editorial board of the Journal of Hand Surgery.",
    education: [
      "MD - Washington University School of Medicine",
      "BS - Duke University",
    ],
    certifications: [
      "American Board of Orthopaedic Surgery",
      "Certificate of Added Qualification in Surgery of the Hand",
    ],
    fellowships: [
      "Hand & Microvascular Surgery - Indiana Hand to Shoulder Center",
      "Peripheral Nerve Surgery - Mayo Clinic",
    ],
    awards: [
      "Top Hand Surgeon - Castle Connolly (2016-2024)",
      "ASSH Pioneer Award 2019",
      "Excellence in Microsurgery - Plastic Surgery Foundation",
      "Humanitarian Service Award - International Mission Work",
    ],
    languages: ["English"],
    image: "/physicians/dr-thompson.jpg",
    locations: ["Hand & Upper Extremity Center", "Main Campus"],
    locationIds: ["hand-upper-extremity", "main-campus"],
    phone: "(555) 123-4571",
    email: "m.thompson@orthopedic-clinic.com",
    acceptingPatients: true,
    rating: 4.9,
    reviewCount: 198,
    yearsExperience: 14,
    proceduresPerformed: 4200,
    telehealth: true,
    patientRating: 4.9,
  },
  {
    id: "dr-williams",
    slug: "dr-williams",
    name: "Dr. Sarah Williams",
    title: "MD, FAAOS",
    specialties: ["Foot & Ankle", "Sports Medicine", "Diabetic Limb Salvage"],
    bio: "Dr. Sarah Williams specializes in comprehensive foot and ankle care, from sports injuries to complex reconstructive surgery and diabetic limb salvage. She is one of few surgeons in the region with expertise in total ankle replacement and charcot reconstruction. Dr. Williams leads the Diabetic Foot Program and is passionate about preventing amputations through early intervention.",
    education: [
      "MD - University of Pennsylvania Perelman School of Medicine",
      "BS - Yale University",
    ],
    certifications: [
      "American Board of Orthopaedic Surgery",
      "Subspecialty Certification in Foot & Ankle Surgery",
    ],
    fellowships: [
      "Foot & Ankle Surgery - Hospital for Special Surgery",
      "Diabetic Limb Salvage - Georgetown University",
    ],
    awards: [
      "Top Foot & Ankle Surgeon - Castle Connolly (2020-2024)",
      "AOFAS Roger A. Mann Award 2021",
      "Diabetic Foot Research Excellence Award 2022",
      "Community Service Award - ADA 2023",
    ],
    languages: ["English", "French"],
    image: "/physicians/dr-williams.jpg",
    locations: ["Foot & Ankle Center", "Sports Medicine Center"],
    locationIds: ["foot-ankle-center", "sports-medicine-center"],
    phone: "(555) 123-4572",
    email: "s.williams@orthopedic-clinic.com",
    acceptingPatients: true,
    rating: 4.8,
    reviewCount: 176,
    yearsExperience: 11,
    proceduresPerformed: 3100,
    telehealth: true,
    patientRating: 4.8,
  },
  {
    id: "dr-kim",
    slug: "dr-kim",
    name: "Dr. David Kim",
    title: "MD, FAAOS",
    specialties: ["Pediatric Orthopedics", "Scoliosis", "Hip Dysplasia", "Cerebral Palsy"],
    bio: "Dr. David Kim is a dedicated pediatric orthopedic surgeon treating children from infancy through adolescence. His expertise includes complex spinal deformities, hip preservation, and neuromuscular conditions. Dr. Kim directs the Pediatric Orthopedic Fellowship Program and is actively involved in research on growing rod technologies and non-operative scoliosis management.",
    education: [
      "MD - Columbia University Vagelos College of Physicians and Surgeons",
      "BA - Cornell University",
    ],
    certifications: [
      "American Board of Orthopaedic Surgery",
      "Subspecialty Certification in Pediatric Orthopedics",
    ],
    fellowships: [
      "Pediatric Orthopedics - Children's Hospital of Philadelphia",
      "Spinal Deformity - Texas Scottish Rite Hospital",
    ],
    awards: [
      "Top Pediatric Orthopedic Surgeon - Castle Connolly (2018-2024)",
      "POSNA Distinguished Achievement Award 2020",
      "Pediatric Spine Research Grant - SRS 2021",
      "Compassionate Doctor Recognition - Patient Voting 2023",
    ],
    languages: ["English", "Korean"],
    image: "/physicians/dr-kim.jpg",
    locations: ["Pediatric Orthopedic Center", "Main Campus"],
    locationIds: ["pediatric-center", "main-campus"],
    phone: "(555) 123-4573",
    email: "d.kim@orthopedic-clinic.com",
    acceptingPatients: true,
    rating: 5.0,
    reviewCount: 143,
    yearsExperience: 13,
    proceduresPerformed: 2500,
    telehealth: true,
    patientRating: 5.0,
  },
];

// Specialties Data
export interface Specialty {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  conditions: string[];
  treatments: Treatment[];
  faqs: FAQ[];
  relatedPhysicians: string[];
  image: string;
  symptoms: string[];
  whenToSee: string[];
  locations: string[];
  physicians: string[];
}

export interface Treatment {
  name: string;
  description: string;
  type: "surgical" | "non-surgical" | "diagnostic";
  recoveryTime?: string;
  successRate?: string;
  technique?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const specialties: Specialty[] = [
  {
    id: "joint-replacement",
    name: "Joint Replacement",
    slug: "joint-replacement",
    description: "Our Joint Replacement Center provides comprehensive care for patients with severe joint arthritis and degenerative conditions. Our fellowship-trained surgeons perform over 1,500 joint replacements annually using the latest minimally invasive techniques, patient-specific instrumentation, and robotic-assisted technology.",
    shortDescription: "Total hip, knee, and shoulder replacement using minimally invasive and robotic-assisted techniques.",
    icon: "🦴",
    image: "/specialties/joint-replacement.jpg",
    symptoms: [
      "Persistent joint pain limiting daily activities",
      "Stiffness and reduced range of motion",
      "Pain that disrupts sleep",
      "Difficulty walking or climbing stairs",
      "Swelling and inflammation",
      "Failure of conservative treatments",
    ],
    conditions: [
      "Osteoarthritis",
      "Rheumatoid Arthritis",
      "Post-Traumatic Arthritis",
      "Avascular Necrosis",
      "Hip Dysplasia",
      "Failed Previous Joint Replacement",
    ],
    treatments: [
      {
        name: "Total Hip Replacement (Anterior Approach)",
        description: "Muscle-sparing anterior approach for faster recovery and reduced dislocation risk.",
        type: "surgical",
        recoveryTime: "4-6 weeks",
      },
      {
        name: "Total Knee Replacement",
        description: "Customized implant positioning using robotic assistance for optimal alignment.",
        type: "surgical",
        recoveryTime: "6-8 weeks",
      },
      {
        name: "Total Shoulder Replacement",
        description: "Anatomic and reverse shoulder arthroplasty for arthritis and rotator cuff tears.",
        type: "surgical",
        recoveryTime: "4-6 months",
      },
      {
        name: "Partial Knee Replacement",
        description: "Unicompartmental replacement preserving healthy bone and ligaments.",
        type: "surgical",
        recoveryTime: "4-6 weeks",
      },
      {
        name: "Revision Joint Replacement",
        description: "Complex revision surgery for failed or worn implants.",
        type: "surgical",
        recoveryTime: "3-6 months",
      },
      {
        name: "Physical Therapy & Rehabilitation",
        description: "Pre-habilitation and post-operative therapy protocols for optimal outcomes.",
        type: "non-surgical",
      },
      {
        name: "Joint Injections",
        description: "Corticosteroid, hyaluronic acid, and PRP injections for pain management.",
        type: "non-surgical",
      },
    ],
    faqs: [
      {
        question: "How long does a joint replacement last?",
        answer: "Modern joint replacements typically last 15-20 years or more. Factors affecting longevity include activity level, weight, and implant type. Our surgeons use the latest materials and techniques to maximize implant lifespan.",
      },
      {
        question: "What is the recovery time for joint replacement?",
        answer: "Most patients walk with assistance the same day as surgery. Full recovery ranges from 6-12 weeks for hip/knee replacement, with continued improvement up to one year. Our enhanced recovery protocols minimize hospital stays and accelerate rehabilitation.",
      },
      {
        question: "Am I a candidate for minimally invasive surgery?",
        answer: "Many patients qualify for minimally invasive approaches. Factors include anatomy, weight, previous surgeries, and severity of arthritis. Your surgeon will evaluate your specific case during consultation.",
      },
      {
        question: "Will I need physical therapy after surgery?",
        answer: "Yes, physical therapy is essential for optimal recovery. Our dedicated orthopedic physical therapists guide you through a structured protocol starting immediately after surgery and continuing for 8-12 weeks.",
      },
    ],
    relatedPhysicians: ["dr-martinez"],
    locations: ["main-campus", "joint-replacement-center"],
    physicians: ["dr-martinez"],
    whenToSee: [
      "Joint pain persists despite 3+ months of conservative treatment",
      "Pain significantly limits work, recreation, or self-care",
      "X-rays show advanced arthritis (bone-on-bone)",
      "Night pain disrupts sleep regularly",
    ],
  },
  {
    id: "sports-medicine",
    name: "Sports Medicine",
    slug: "sports-medicine",
    description: "Our Sports Medicine Center provides elite-level care for athletes of all ages and abilities. From weekend warriors to professional athletes, our team specializes in arthroscopic surgery, cartilage restoration, and comprehensive rehabilitation to return you to peak performance.",
    shortDescription: "Arthroscopic surgery and comprehensive care for athletic injuries of the shoulder, knee, and elbow.",
    icon: "🏃",
    image: "/specialties/sports-medicine.jpg",
    symptoms: [
      "Acute injury during sports or exercise",
      "Chronic pain with activity",
      "Joint instability or giving way",
      "Swelling after activity",
      "Reduced performance or range of motion",
      "Recurrent injuries",
    ],
    conditions: [
      "ACL Tears",
      "Meniscus Tears",
      "Rotator Cuff Tears",
      "Labral Tears (Shoulder/Hip)",
      "Cartilage Injuries (OCD, Chondral Defects)",
      "Patellar Instability",
      "Throwing Injuries (UCL, Internal Impingement)",
      "Stress Fractures",
    ],
    treatments: [
      {
        name: "ACL Reconstruction",
        description: "Anatomic reconstruction using autograft or allograft with accelerated rehabilitation.",
        type: "surgical",
        recoveryTime: "6-9 months",
      },
      {
        name: "Arthroscopic Meniscus Repair",
        description: "Preservation of meniscal tissue using all-inside repair techniques.",
        type: "surgical",
        recoveryTime: "4-6 weeks",
      },
      {
        name: "Rotator Cuff Repair",
        description: "Arthroscopic repair with biologic augmentation for improved healing.",
        type: "surgical",
        recoveryTime: "4-6 months",
      },
      {
        name: "Cartilage Restoration (MACI, OATS, Microfracture)",
        description: "Advanced techniques to restore articular cartilage and delay arthritis.",
        type: "surgical",
        recoveryTime: "6-12 months",
      },
      {
        name: "Shoulder Stabilization (Bankart Repair)",
        description: "Arthroscopic labral repair for recurrent instability.",
        type: "surgical",
        recoveryTime: "4-6 months",
      },
      {
        name: "PRP & Biologic Injections",
        description: "Platelet-rich plasma and stem cell therapies for tendon and ligament healing.",
        type: "non-surgical",
      },
      {
        name: "Sports Physical Therapy",
        description: "Sport-specific rehabilitation with return-to-play testing criteria.",
        type: "non-surgical",
      },
    ],
    faqs: [
      {
        question: "Do I need surgery for my sports injury?",
        answer: "Not always. Many sports injuries respond well to non-surgical treatment including physical therapy, bracing, and biologic injections. Surgery is recommended when conservative measures fail or for specific injuries like complete ACL tears in active individuals.",
      },
      {
        question: "When can I return to sports after surgery?",
        answer: "Return-to-play timelines vary by procedure: ACL reconstruction 6-9 months, meniscus repair 4-6 weeks, rotator cuff repair 4-6 months. Our team uses objective criteria (strength, hop testing, movement analysis) rather than time alone to clear athletes.",
      },
      {
        question: "Do you treat pediatric/adolescent athletes?",
        answer: "Yes, we have specialized expertise in pediatric sports injuries including growth plate injuries, osteochondritis dissecans, and adolescent ACL tears with physeal-sparing techniques.",
      },
    ],
    relatedPhysicians: ["dr-chen"],
    locations: ["sports-medicine-center", "main-campus"],
    physicians: ["dr-chen", "dr-williams"],
    whenToSee: [
      "Acute injury with swelling, instability, or inability to bear weight",
      "Chronic pain limiting sports participation > 2 weeks",
      "Recurrent giving way or instability episodes",
      "Diagnosed meniscus, ACL, or rotator cuff tear",
    ],
  },
  {
    id: "spine-care",
    name: "Spine Care",
    slug: "spine-care",
    description: "Our Spine Institute offers comprehensive surgical and non-surgical treatment for cervical, thoracic, and lumbar spine conditions. We prioritize conservative care first, utilizing advanced diagnostics, interventional procedures, and physical therapy. When surgery is needed, our surgeons employ minimally invasive techniques, navigation, and robotic guidance.",
    shortDescription: "Surgical and non-surgical treatment for spine conditions including herniated discs, stenosis, and deformity.",
    icon: "🦴",
    image: "/specialties/spine-care.jpg",
    symptoms: [
      "Neck or back pain radiating to arms/legs",
      "Numbness, tingling, or weakness",
      "Difficulty walking or balance issues",
      "Bowel/bladder changes (urgent)",
      "Pain worse with certain positions",
      "Chronic pain > 12 weeks",
    ],
    conditions: [
      "Herniated Disc",
      "Spinal Stenosis",
      "Degenerative Disc Disease",
      "Spondylolisthesis",
      "Scoliosis & Kyphosis",
      "Spinal Fractures",
      "Spinal Tumors/Infections",
      "Failed Back Surgery Syndrome",
    ],
    treatments: [
      {
        name: "Minimally Invasive Microdiscectomy",
        description: "Tubular retractor system for disc herniation with 1-inch incision.",
        type: "surgical",
        recoveryTime: "2-4 weeks",
      },
      {
        name: "Laminectomy & Decompression",
        description: "Removal of bone/spurs compressing nerves, often minimally invasive.",
        type: "surgical",
        recoveryTime: "4-6 weeks",
      },
      {
        name: "Spinal Fusion (MIS, ALIF, TLIF, XLIF)",
        description: "Segmental stabilization using navigation and robotic guidance.",
        type: "surgical",
        recoveryTime: "3-6 months",
      },
      {
        name: "Artificial Disc Replacement",
        description: "Motion-preserving alternative to fusion for select patients.",
        type: "surgical",
        recoveryTime: "6-12 weeks",
      },
      {
        name: "Complex Deformity Correction",
        description: "Multi-level osteotomies and instrumentation for scoliosis/kyphosis.",
        type: "surgical",
        recoveryTime: "6-12 months",
      },
      {
        name: "Epidural Steroid Injections",
        description: "Image-guided injections for radicular pain and inflammation.",
        type: "non-surgical",
      },
      {
        name: "Radiofrequency Ablation",
        description: "Facet joint denervation for chronic axial back pain.",
        type: "non-surgical",
      },
      {
        name: "Spine Physical Therapy",
        description: "McKenzie method, core stabilization, and posture retraining.",
        type: "non-surgical",
      },
    ],
    faqs: [
      {
        question: "Will I need spine surgery?",
        answer: "Over 90% of spine conditions improve without surgery. We exhaust conservative options first: physical therapy, medications, injections, and activity modification. Surgery is considered for progressive neurologic deficits, intractable pain, or structural instability.",
      },
      {
        question: "What is minimally invasive spine surgery?",
        answer: "MIS uses small incisions, tubular retractors, and specialized instruments to access the spine with less muscle damage, less blood loss, and faster recovery compared to traditional open surgery. Most procedures can be performed this way.",
      },
      {
        question: "How long is recovery after spine surgery?",
        answer: "Minimally invasive decompression: 2-4 weeks. Fusion procedures: 3-6 months for full bony fusion, though most patients return to light activity at 4-6 weeks. Complex deformity correction: 6-12 months.",
      },
    ],
    relatedPhysicians: ["dr-patel"],
    locations: ["spine-institute", "main-campus"],
    physicians: ["dr-patel"],
    whenToSee: [
      "Radiating arm/leg pain with numbness or weakness",
      "Back/neck pain > 6 weeks despite conservative care",
      "Progressive neurologic symptoms",
      "Bowel/bladder dysfunction (seek immediate care)",
      "Structural deformity or instability on imaging",
    ],
  },
  {
    id: "hand-wrist",
    name: "Hand & Wrist",
    slug: "hand-wrist",
    description: "Our Hand & Upper Extremity Center provides specialized care for the intricate anatomy of the hand, wrist, and elbow. From common conditions like carpal tunnel syndrome to complex microvascular reconstruction, our fellowship-trained surgeons restore function and relieve pain.",
    shortDescription: "Specialized care for carpal tunnel, arthritis, trauma, and nerve conditions of the hand and upper extremity.",
    icon: "🤲",
    image: "/specialties/hand-wrist.jpg",
    symptoms: [
      "Numbness/tingling in fingers",
      "Weakness or dropping objects",
      "Pain with gripping or pinching",
      "Visible deformity or swelling",
      "Stiffness limiting motion",
      "Trauma/laceration to hand/wrist",
    ],
    conditions: [
      "Carpal Tunnel Syndrome",
      "Cubital Tunnel Syndrome",
      "Trigger Finger",
      "Dupuytren's Contracture",
      "Hand/Wrist Arthritis (CMC, STT, MCP)",
      "Tendon/Ligament Injuries",
      "Fractures & Dislocations",
      "Nerve Injuries & Tumors",
      "Congenital Hand Differences",
    ],
    treatments: [
      {
        name: "Carpal Tunnel Release (Endoscopic/Open)",
        description: "Minimally invasive release of transverse carpal ligament.",
        type: "surgical",
        recoveryTime: "2-4 weeks",
      },
      {
        name: "Trigger Finger Release",
        description: "Percutaneous or open A1 pulley release.",
        type: "surgical",
        recoveryTime: "2-3 weeks",
      },
      {
        name: "CMC Arthroplasty (Thumb Arthritis)",
        description: "Suspensionplasty or implant arthroplasty for basilar joint arthritis.",
        type: "surgical",
        recoveryTime: "6-8 weeks",
      },
      {
        name: "Tendon & Nerve Repair",
        description: "Microsurgical repair of lacerated tendons and nerves.",
        type: "surgical",
        recoveryTime: "8-12 weeks",
      },
      {
        name: "Wrist Arthroscopy",
        description: "Diagnostic and therapeutic for TFCC tears, ganglion cysts, arthritis.",
        type: "surgical",
        recoveryTime: "4-6 weeks",
      },
      {
        name: "Free Tissue Transfer (Reconstructive)",
        description: "Microvascular flap coverage for complex defects.",
        type: "surgical",
        recoveryTime: "3-6 months",
      },
      {
        name: "Hand Therapy & Splinting",
        description: "Custom orthoses and specialized rehabilitation by certified hand therapists.",
        type: "non-surgical",
      },
      {
        name: "Ultrasound-Guided Injections",
        description: "Precise corticosteroid and PRP injections for joints and tendon sheaths.",
        type: "non-surgical",
      },
    ],
    faqs: [
      {
        question: "How do I know if I have carpal tunnel syndrome?",
        answer: "Classic symptoms include numbness/tingling in the thumb, index, middle, and ring fingers (especially at night), weakness, and dropping objects. Nerve conduction studies confirm the diagnosis and severity.",
      },
      {
        question: "Can thumb arthritis be treated without surgery?",
        answer: "Yes, early thumb CMC arthritis often responds to splinting, activity modification, NSAIDs, and corticosteroid injections. Surgery (CMC arthroplasty) is highly successful when conservative measures fail.",
      },
      {
        question: "What is a certified hand therapist (CHT)?",
        answer: "A CHT is an occupational or physical therapist with advanced certification requiring 4,000+ hours of hand therapy experience and rigorous examination. Our CHTs work exclusively with our hand surgeons for seamless care.",
      },
    ],
    relatedPhysicians: ["dr-thompson"],
    locations: ["hand-upper-extremity", "main-campus"],
    physicians: ["dr-thompson"],
    whenToSee: [
      "Numbness/tingling not improving with rest/splinting",
      "Inability to perform fine motor tasks",
      "Visible deformity or contracture developing",
      "Acute hand/wrist injury with deformity or numbness",
    ],
  },
  {
    id: "foot-ankle",
    name: "Foot & Ankle",
    slug: "foot-ankle",
    description: "Our Foot & Ankle Center provides comprehensive care from common conditions to complex reconstruction. We offer advanced treatments including total ankle replacement, charcot reconstruction, and diabetic limb salvage—services unavailable at most orthopedic practices.",
    shortDescription: "Expert care for foot and ankle conditions including arthritis, deformity, sports injuries, and diabetic limb salvage.",
    icon: "🦶",
    image: "/specialties/foot-ankle.jpg",
    symptoms: [
      "Pain with weight-bearing",
      "Ankle instability or giving way",
      "Deformity (bunion, hammertoe, flatfoot)",
      "Non-healing wounds (diabetic)",
      "Stiffness limiting motion",
      "Swelling and inflammation",
    ],
    conditions: [
      "Ankle Arthritis",
      "Achilles Tendon Disorders",
      "Bunions & Hammertoes",
      "Flatfoot / Posterior Tibial Tendon Dysfunction",
      "Charcot Neuroarthropathy",
      "Diabetic Foot Ulcers/Infections",
      "Ankle Instability",
      "Stress Fractures",
      "Plantar Fasciitis",
    ],
    treatments: [
      {
        name: "Total Ankle Replacement",
        description: "Motion-preserving alternative to fusion for end-stage arthritis.",
        type: "surgical",
        recoveryTime: "3-6 months",
      },
      {
        name: "Ankle Arthroscopy",
        description: "Minimally invasive treatment for impingement, loose bodies, cartilage lesions.",
        type: "surgical",
        recoveryTime: "4-6 weeks",
      },
      {
        name: "Bunion Correction (Lapiplasty, Minimally Invasive)",
        description: "3D correction addressing root cause with faster recovery.",
        type: "surgical",
        recoveryTime: "6-8 weeks",
      },
      {
        name: "Flatfoot Reconstruction",
        description: "Tendon transfers, osteotomies, and fusions for progressive collapse.",
        type: "surgical",
        recoveryTime: "3-6 months",
      },
      {
        name: "Charcot Reconstruction",
        description: "Complex external/internal fixation for neuroarthropathy.",
        type: "surgical",
        recoveryTime: "6-12 months",
      },
      {
        name: "Diabetic Limb Salvage",
        description: "Multidisciplinary approach preventing amputation.",
        type: "surgical",
        recoveryTime: "Varies",
      },
      {
        name: "Custom Orthotics & Bracing",
        description: "3D-scanned custom orthoses and advanced bracing solutions.",
        type: "non-surgical",
      },
      {
        name: "Shockwave Therapy & Injections",
        description: "ESWT for plantar fasciitis, Achilles tendinopathy; ultrasound-guided injections.",
        type: "non-surgical",
      },
    ],
    faqs: [
      {
        question: "Is ankle replacement as good as fusion?",
        answer: "For the right patient, total ankle replacement provides excellent pain relief while preserving motion, which protects adjacent joints. Modern implants have 10-year survivorship >90%. Patient selection is critical—your surgeon will discuss the best option for you.",
      },
      {
        question: "How are diabetic foot problems managed?",
        answer: "Our multidisciplinary team includes vascular surgery, infectious disease, wound care, and endocrinology. We provide advanced offloading, revascularization, infection control, and reconstruction to prevent amputation. Early referral is key.",
      },
      {
        question: "What is minimally invasive bunion surgery?",
        answer: "Lapiplasty and similar techniques use small incisions and specialized instruments to correct the 3D deformity with less soft tissue disruption, less pain, and faster return to shoes compared to traditional open procedures.",
      },
    ],
    relatedPhysicians: ["dr-williams"],
    locations: ["foot-ankle-center", "main-campus"],
    physicians: ["dr-williams"],
    whenToSee: [
      "Ankle pain limiting walking or activities",
      "Progressive deformity (bunion, flatfoot)",
      "Diabetic foot wound or infection",
      "Recurrent ankle sprains/instability",
      "Non-healing ulcer or Charcot changes",
    ],
  },
  {
    id: "pediatric",
    name: "Pediatric Orthopedics",
    slug: "pediatric",
    description: "Our Pediatric Orthopedic Center provides specialized care for children from birth through adolescence. Children are not small adults—their growing bones require unique expertise. We treat everything from simple fractures to complex congenital conditions and spinal deformities.",
    shortDescription: "Specialized care for children's growing bones: scoliosis, hip dysplasia, fractures, and congenital conditions.",
    icon: "👶",
    image: "/specialties/pediatric.jpg",
    symptoms: [
      "Limping or gait abnormality",
      "Pain with activity",
      "Visible limb deformity",
      "Asymmetry (shoulders, hips, legs)",
      "Developmental delays",
      "Sports injuries in young athletes",
    ],
    conditions: [
      "Adolescent Idiopathic Scoliosis",
      "Developmental Dysplasia of the Hip (DDH)",
      "Clubfoot",
      "Cerebral Palsy Orthopedics",
      "Limb Length Discrepancy",
      "Growth Plate Fractures",
      "Sports Injuries (ACL, Osteochondritis Dissecans)",
      "Congenital Hand/Foot Differences",
      "Bone Dysplasias",
    ],
    treatments: [
      {
        name: "Scoliosis Bracing (Rigo-Cheneau, Boston)",
        description: "Custom 3D-printed braces for curve management.",
        type: "non-surgical",
      },
      {
        name: "Growing Rod Surgery (MAGEC, Traditional)",
        description: "Magnetically controlled growing rods for early-onset scoliosis.",
        type: "surgical",
        recoveryTime: "Ongoing",
      },
      {
        name: "Spinal Fusion for Scoliosis",
        description: "Posterior or anterior fusion with navigation for adolescent curves >45-50°.",
        type: "surgical",
        recoveryTime: "6-12 months",
      },
      {
        name: "Hip Preservation (PAO, Arthroscopy)",
        description: "Periacetabular osteotomy and hip arthroscopy for dysplasia/impingement.",
        type: "surgical",
        recoveryTime: "3-6 months",
      },
      {
        name: "Clubfoot Treatment (Ponseti Method)",
        description: "Serial casting and minimal surgery - gold standard for clubfoot.",
        type: "non-surgical",
      },
      {
        name: "Limb Lengthening/Deformity Correction",
        description: "Internal lengthening nails and circular external fixation.",
        type: "surgical",
        recoveryTime: "6-12 months",
      },
      {
        name: "Pediatric Fracture Care",
        description: "Child-friendly casting, flexible nails, and growth plate management.",
        type: "surgical",
        recoveryTime: "Varies",
      },
      {
        name: "Adaptive Sports Medicine",
        description: "Specialized care for young athletes with disabilities.",
        type: "non-surgical",
      },
    ],
    faqs: [
      {
        question: "When should my child be screened for scoliosis?",
        answer: "School screening typically occurs at ages 10-12. If you notice uneven shoulders, waist asymmetry, or a prominent shoulder blade, schedule an evaluation. Early detection allows for bracing, which can prevent surgery.",
      },
      {
        question: "Is hip dysplasia in infants treatable?",
        answer: "Yes, early detection (newborn screening) allows successful treatment with Pavlik harness in >90% of cases. Later detection may require casting or surgery. Our team follows international DDH treatment guidelines.",
      },
      {
        question: "Are growth plate injuries serious?",
        answer: "Growth plate (physis) fractures require specialized management to prevent growth arrest or angular deformity. Our pediatric surgeons use physeal-sparing techniques and monitor growth long-term.",
      },
    ],
    relatedPhysicians: ["dr-kim"],
    locations: ["pediatric-center", "main-campus"],
    physicians: ["dr-kim"],
    whenToSee: [
      "Limping or gait abnormality > 2 weeks",
      "Visible spinal curvature or asymmetry",
      "Hip click/clunk in infant",
      "Sports injury with swelling/instability",
      "Congenital limb difference noted at birth",
    ],
  },
];

// Locations Data
export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: { day: string; hours: string }[];
  services: string[];
  physicians: string[];
  image: string;
  features: string[];
  parking: string;
  publicTransport: string;
  type: string;
  distance?: string;
}

export const locations: Location[] = [
  {
    id: "main-campus",
    name: "Main Campus - Orthopedic Institute",
    address: "123 Medical Center Drive, Suite 500",
    city: "Metropolitan City",
    state: "MC",
    zip: "10001",
    phone: "(555) 123-4567",
    hours: [
      { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 12:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    services: ["All Specialties", "Surgery Center", "Imaging (MRI/CT/X-ray)", "Physical Therapy", "Urgent Ortho Care"],
    physicians: ["dr-martinez", "dr-chen", "dr-patel", "dr-thompson", "dr-williams", "dr-kim"],
    image: "/locations/main-campus.jpg",
    features: ["On-site Surgery Center", "Advanced Imaging", "Physical Therapy Gym", "Patient Education Center", "Café & Healing Garden"],
    parking: "Free validated parking in adjacent garage (500 spaces)",
    publicTransport: "Metro Red Line - Medical Center Station (2 min walk); Bus Routes 12, 24, 38",
    type: "hospital",
  },
  {
    id: "joint-replacement-center",
    name: "Joint Replacement Center of Excellence",
    address: "4500 Health Sciences Boulevard",
    city: "Metropolitan City",
    state: "MC",
    zip: "10002",
    phone: "(555) 123-4568",
    hours: [
      { day: "Monday - Friday", hours: "7:30 AM - 5:00 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
    services: ["Joint Replacement", "Revision Surgery", "Pre-op Education", "Enhanced Recovery Program", "Robotic Surgery"],
    physicians: ["dr-martinez"],
    image: "/locations/joint-center.jpg",
    features: ["Dedicated Joint OR Suites", "Mako Robotic System", "Pre-hab Gym", "Private Recovery Suites", "Concierge Navigation"],
    parking: "Free surface lot (200 spaces) + valet available",
    publicTransport: "Bus Route 45 - Health Sciences Blvd Stop; Shuttle from Main Campus",
    type: "specialty",
  },
  {
    id: "sports-medicine-center",
    name: "Sports Medicine & Performance Center",
    address: "7800 Athletic Way",
    city: "Metropolitan City",
    state: "MC",
    zip: "10003",
    phone: "(555) 123-4569",
    hours: [
      { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    services: ["Sports Medicine", "Arthroscopic Surgery", "Performance Training", "Return-to-Sport Testing", "Concussion Clinic"],
    physicians: ["dr-chen", "dr-williams"],
    image: "/locations/sports-center.jpg",
    features: ["Turf Field & Track", "Biomechanics Lab", "Anti-Gravity Treadmills", "Blood Flow Restriction", "Team Physician Offices"],
    parking: "Free lot (300 spaces)",
    publicTransport: "Light Rail Green Line - Stadium Station; Bus Route 67",
    type: "specialty",
  },
  {
    id: "spine-institute",
    name: "Spine Institute",
    address: "3200 Neuroscience Parkway",
    city: "Metropolitan City",
    state: "MC",
    zip: "10004",
    phone: "(555) 123-4570",
    hours: [
      { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
    services: ["Spine Surgery", "Pain Management", "Interventional Procedures", "Navigation/Robotic Surgery", "Spine Physical Therapy"],
    physicians: ["dr-patel"],
    image: "/locations/spine-institute.jpg",
    features: ["O-arm Navigation", "Mazor X Robotic System", "Interventional Suite", "Spine-Specific PT", "Multidisciplinary Conference Room"],
    parking: "Validated garage parking",
    publicTransport: "Metro Blue Line - Research Park Station; Shuttle from Main Campus",
    type: "specialty",
  },
  {
    id: "hand-upper-extremity",
    name: "Hand & Upper Extremity Center",
    address: "1500 Microsurgery Lane",
    city: "Metropolitan City",
    state: "MC",
    zip: "10005",
    phone: "(555) 123-4571",
    hours: [
      { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "Closed" },
      { day: "Sunday", hours: "Closed" },
    ],
    services: ["Hand Surgery", "Microvascular Surgery", "Nerve Surgery", "Certified Hand Therapy", "Custom Splinting"],
    physicians: ["dr-thompson"],
    image: "/locations/hand-center.jpg",
    features: ["Microsurgical OR", "Certified Hand Therapists (5)", "Custom Orthotics Lab", "Ultrasound Diagnostics", "Nerve Conduction Lab"],
    parking: "Free lot (100 spaces)",
    publicTransport: "Bus Route 22 - Medical Arts Building",
    type: "specialty",
  },
  {
    id: "foot-ankle-center",
    name: "Foot & Ankle Center",
    address: "2800 Podiatry Plaza",
    city: "Metropolitan City",
    state: "MC",
    zip: "10006",
    phone: "(555) 123-4572",
    hours: [
      { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 12:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    services: ["Foot & Ankle Surgery", "Total Ankle Replacement", "Diabetic Limb Salvage", "Wound Care", "Custom Orthotics"],
    physicians: ["dr-williams"],
    image: "/locations/foot-ankle.jpg",
    features: ["Vascular Lab On-Site", "Wound Care Center", "Pedorthics Lab", "Charcot Multi-disciplinary Clinic", "Limb Salvage OR"],
    parking: "Free validated parking",
    publicTransport: "Bus Route 34 - Wellness District",
    type: "specialty",
  },
  {
    id: "pediatric-center",
    name: "Pediatric Orthopedic Center",
    address: "5500 Children's Health Way",
    city: "Metropolitan City",
    state: "MC",
    zip: "10007",
    phone: "(555) 123-4573",
    hours: [
      { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
    services: ["Pediatric Orthopedics", "Scoliosis Clinic", "Hip Dysplasia Clinic", "Cerebral Palsy Clinic", "Pediatric Fracture Clinic"],
    physicians: ["dr-kim"],
    image: "/locations/pediatric.jpg",
    features: ["Child-Friendly Exam Rooms", "EOS Low-Dose Imaging", "Play Therapy Area", "Family Consultation Suites", "School Liaison Program"],
    parking: "Free lot with family spaces",
    publicTransport: "Metro Yellow Line - Children's Hospital Station; Shuttle from Main Campus",
    type: "specialty",
  },
  {
    id: "urgent-ortho",
    name: "Urgent Ortho Care - Walk-In Clinic",
    address: "900 Express Care Drive",
    city: "Metropolitan City",
    state: "MC",
    zip: "10008",
    phone: "(555) 123-4574",
    hours: [
      { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
      { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
      { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
    ],
    services: ["Acute Injuries", "Fracture Care", "Sprains/Strains", "X-ray On-Site", "Splinting/Casting", "Referral Coordination"],
    physicians: [],
    image: "/locations/urgent-ortho.jpg",
    features: ["No Appointment Needed", "On-Site X-ray", "Casting/Splinting", "Same-Day Specialist Referral", "Extended Hours"],
    parking: "Free surface lot (50 spaces)",
    publicTransport: "Bus Route 77 - Express Care Plaza",
    type: "clinic",
  },
];

// Blog Posts Data
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string | { type: string; content: string }[];
  author: string;
  authorId: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  image: string;
  featured: boolean;
  keyTakeaways?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "hip-replacement-recovery",
    title: "What to Expect During Hip Replacement Recovery: A Week-by-Week Guide",
    slug: "hip-replacement-recovery-guide",
    excerpt: "Understanding the recovery timeline helps set realistic expectations and reduces anxiety. Our enhanced recovery protocol gets you moving faster.",
    content: `Full article content here...`,
    author: "Dr. Elena Martinez",
    authorId: "dr-martinez",
    category: "Joint Replacement",
    tags: ["hip replacement", "recovery", "rehabilitation", "patient education"],
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/blog/hip-recovery.jpg",
    featured: true,
    keyTakeaways: [
      "Most patients walk with assistance the same day as surgery",
      "Full recovery takes 6-12 weeks with continued improvement up to one year",
      "Physical therapy is essential for optimal outcomes",
      "Enhanced recovery protocols minimize hospital stays"
    ],
  },
  {
    id: "acl-prevention",
    title: "ACL Injury Prevention: Evidence-Based Programs for Athletes",
    slug: "acl-injury-prevention-programs",
    excerpt: "Research shows structured prevention programs can reduce ACL injury risk by up to 50%. Learn the key components every athlete should incorporate.",
    content: `Full article content here...`,
    author: "Dr. James Chen",
    authorId: "dr-chen",
    category: "Sports Medicine",
    tags: ["ACL", "injury prevention", "sports performance", "female athletes"],
    publishDate: "2024-01-22",
    readTime: "6 min read",
    image: "/blog/acl-prevention.jpg",
    featured: true,
    keyTakeaways: [
      "Structured prevention programs reduce ACL injury risk by up to 50%",
      "Key components include neuromuscular training, plyometrics, and strength training",
      "Female athletes benefit significantly from targeted programs",
      "Consistency is crucial - programs must be performed 2-3x per week"
    ],
  },
  {
    id: "spine-surgery-myths",
    title: "5 Common Myths About Spine Surgery Debunked",
    slug: "spine-surgery-myths-debunked",
    excerpt: "Misinformation about spine surgery can delay necessary treatment. Our spine specialists separate fact from fiction.",
    content: `Full article content here...`,
    author: "Dr. Priya Patel",
    authorId: "dr-patel",
    category: "Spine Care",
    tags: ["spine surgery", "minimally invasive", "patient education", "myths"],
    publishDate: "2024-02-01",
    readTime: "7 min read",
    image: "/blog/spine-myths.jpg",
    featured: true,
    keyTakeaways: [
      "Over 90% of spine conditions improve without surgery",
      "Minimally invasive techniques reduce muscle damage and speed recovery",
      "Surgery is considered for progressive neurologic deficits or intractable pain",
      "Modern spine surgery has high success rates when properly indicated"
    ],
  },
  {
    id: "carpal-tunnel-ergonomics",
    title: "Carpal Tunnel Syndrome: Workplace Ergonomics That Actually Work",
    slug: "carpal-tunnel-workplace-ergonomics",
    excerpt: "Simple workstation modifications can significantly reduce symptoms and prevent progression. Our hand specialists share evidence-based tips.",
    content: `Full article content here...`,
    author: "Dr. Michael Thompson",
    authorId: "dr-thompson",
    category: "Hand & Wrist",
    tags: ["carpal tunnel", "ergonomics", "workplace health", "prevention"],
    publishDate: "2024-02-10",
    readTime: "5 min read",
    image: "/blog/carpal-tunnel.jpg",
    featured: false,
    keyTakeaways: [
      "Proper keyboard/mouse height and wrist position reduce median nerve pressure",
      "Regular breaks and stretching every 30 minutes prevent symptom progression",
      "Early intervention with splinting and ergonomics can avoid surgery",
      "Nerve conduction studies confirm diagnosis and severity"
    ],
  },
  {
    id: "ankle-replacement-vs-fusion",
    title: "Total Ankle Replacement vs. Fusion: How to Decide",
    slug: "ankle-replacement-vs-fusion-decision-guide",
    excerpt: "Both procedures effectively relieve arthritis pain, but they have different implications for motion and adjacent joints. A decision framework.",
    content: `Full article content here...`,
    author: "Dr. Sarah Williams",
    authorId: "dr-williams",
    category: "Foot & Ankle",
    tags: ["ankle replacement", "ankle fusion", "arthritis", "decision making"],
    publishDate: "2024-02-18",
    readTime: "9 min read",
    image: "/blog/ankle-replacement.jpg",
    featured: false,
    keyTakeaways: [
      "Ankle replacement preserves motion and protects adjacent joints",
      "Fusion provides reliable pain relief but eliminates ankle motion",
      "Patient selection is critical - not everyone is a candidate for replacement",
      "Modern implants have 10-year survivorship >90%"
    ],
  },
  {
    id: "pediatric-scoliosis-screening",
    title: "When Should Your Child Be Screened for Scoliosis?",
    slug: "pediatric-scoliosis-screening-guidelines",
    excerpt: "Early detection is key to successful non-surgical treatment. Current guidelines and what parents should watch for at home.",
    content: `Full article content here...`,
    author: "Dr. David Kim",
    authorId: "dr-kim",
    category: "Pediatric Orthopedics",
    tags: ["scoliosis", "screening", "bracing", "pediatric"],
    publishDate: "2024-03-01",
    readTime: "6 min read",
    image: "/blog/scoliosis-screening.jpg",
    featured: false,
    keyTakeaways: [
      "School screening typically occurs at ages 10-12",
      "Early detection allows bracing which can prevent surgery",
      "Watch for uneven shoulders, waist asymmetry, or prominent shoulder blade",
      "Growth plate management is critical in pediatric patients"
    ],
  },
];

// Patient Resources
export interface PatientResource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "form" | "guide" | "video" | "link" | "portal";
  url: string;
  icon: string;
}

export const patientResources: PatientResource[] = [
  {
    id: "new-patient-forms",
    title: "New Patient Forms",
    description: "Complete registration and medical history forms before your first visit.",
    category: "Forms",
    type: "form",
    url: "/patient-resources/forms/new-patient",
    icon: "📋",
  },
  {
    id: "insurance-verification",
    title: "Insurance Verification Tool",
    description: "Check if your plan is accepted and estimate your out-of-pocket costs.",
    category: "Insurance",
    type: "link",
    url: "/patient-resources/insurance/verify",
    icon: "💳",
  },
  {
    id: "pre-op-guide",
    title: "Pre-Surgery Preparation Guide",
    description: "Everything you need to know before your procedure: medications, fasting, what to bring.",
    category: "Guides",
    type: "guide",
    url: "/patient-resources/guides/pre-op",
    icon: "📖",
  },
  {
    id: "post-op-protocols",
    title: "Post-Operative Recovery Protocols",
    description: "Detailed phase-by-phase rehabilitation guidelines for each procedure type.",
    category: "Guides",
    type: "guide",
    url: "/patient-resources/guides/post-op",
    icon: "🏃",
  },
  {
    id: "patient-portal",
    title: "Patient Portal Login",
    description: "Access test results, message your care team, request refills, and schedule appointments.",
    category: "Digital Tools",
    type: "portal",
    url: "https://portal.orthopedic-clinic.com",
    icon: "🔐",
  },
  {
    id: "joint-replacement-class",
    title: "Joint Replacement Education Class (Video)",
    description: "Watch our comprehensive pre-operative class covering surgery, hospital stay, and recovery.",
    category: "Education",
    type: "video",
    url: "/patient-resources/education/joint-class",
    icon: "▶️",
  },
  {
    id: "spine-exercise-videos",
    title: "Spine Conditioning Exercise Library",
    description: "Video demonstrations of McKenzie exercises, core stabilization, and posture training.",
    category: "Education",
    type: "video",
    url: "/patient-resources/education/spine-exercises",
    icon: "▶️",
  },
  {
    id: "payment-options",
    title: "Payment Plans & Financial Assistance",
    description: "Information on payment options, financing, and financial assistance programs.",
    category: "Billing",
    type: "guide",
    url: "/patient-resources/billing/payment-options",
    icon: "💰",
  },
  {
    id: "faq-general",
    title: "Frequently Asked Questions",
    description: "Answers to common questions about appointments, insurance, surgery, and recovery.",
    category: "General",
    type: "link",
    url: "/patient-resources/faqs",
    icon: "❓",
  },
];

// Insurance Data
export interface InsurancePlan {
  name: string;
  type: "commercial" | "medicare" | "medicaid" | "workers-comp" | "auto";
  accepted: boolean;
  notes?: string;
}

export const insurancePlans: InsurancePlan[] = [
  { name: "Medicare", type: "medicare", accepted: true },
  { name: "Medicare Advantage Plans", type: "medicare", accepted: true, notes: "Most major plans accepted" },
  { name: "Medicaid", type: "medicaid", accepted: true, notes: "State-specific verification required" },
  { name: "Blue Cross Blue Shield", type: "commercial", accepted: true },
  { name: "Aetna", type: "commercial", accepted: true },
  { name: "Cigna", type: "commercial", accepted: true },
  { name: "UnitedHealthcare", type: "commercial", accepted: true },
  { name: "Humana", type: "commercial", accepted: true },
  { name: "Kaiser Permanente", type: "commercial", accepted: true, notes: "Select plans only" },
  { name: "Tricare", type: "commercial", accepted: true },
  { name: "Workers' Compensation", type: "workers-comp", accepted: true },
  { name: "Auto Insurance (PIP/MedPay)", type: "auto", accepted: true },
  { name: "VA Health Benefits", type: "commercial", accepted: true, notes: "Requires authorization" },
];

export function getPhysicianById(id: string): Physician | undefined {
  return physicians.find((p) => p.id === id);
}

export function getSpecialtyBySlug(slug: string): Specialty | undefined {
  return specialties.find((s) => s.slug === slug);
}

export function getLocationById(id: string): Location | undefined {
  return locations.find((l) => l.id === id);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}

export function getPhysiciansBySpecialty(specialtyId: string): Physician[] {
  return physicians.filter((p) => p.specialties.some((s) => s.toLowerCase().includes(specialtyId.replace("-", " "))));
}