import {
  Stethoscope,
  Baby,
  Scissors,
  Bone,
  HeartPulse,
  Ambulance,
  Activity,
  HeartHandshake,
  Syringe,
  Microscope,
  Users,
  Thermometer,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Mail,
  Globe,
  type LucideIcon,
} from "lucide-react";

export const hospital = {
  name: "Kify Hospital",
  tagline: "Your Health. Our Responsibility.",
  phone: "85000 23456",
  phoneRaw: "8500023456",
  secondaryPhone: "99498 23456",
  email: "kify@kifyhospital.com",
  website: "www.kifyhospital.com",
  address: "Near Nune Ganuga, Danavaipeta, Rajahmundry - 533103, Andhra Pradesh, India",
  shortAddress: "Danavaipeta, Rajahmundry",
  hours: "Mon - Sat: 9:00 AM - 8:30 PM",
  emergency: "24/7 Emergency Available",
  youtube: "https://youtube.com/@kifyhospital",
  instagram: "https://instagram.com/kifyhospital",
  facebook: "https://facebook.com/kifyhospital",
  whatsapp: "https://whatsapp.com/channel/0029Va9VbUeDp2QCjVfFO43a",
  googleMaps: "https://g.page/KifyHospital",
} as const;

export const stats = [
  { value: 17, suffix: "+", label: "Years of Healing" },
  { value: 50, suffix: "+", label: "Expert Doctors" },
  { value: 25, suffix: "+", label: "Specialities" },
  { value: 200000, suffix: "+", label: "Patients Treated" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
] as const;

export const departments = [
  {
    name: "General Medicine",
    icon: Stethoscope,
    description: "Comprehensive primary care, preventive health screenings, and management of acute and chronic illnesses.",
    tags: ["Preventive Care", "Chronic Disease", "Health Screening"],
    slug: "general-medicine",
  },
  {
    name: "Pediatrics",
    icon: Baby,
    description: "Complete child healthcare from newborn to adolescent, including immunizations and developmental assessments.",
    tags: ["Newborn Care", "Growth Tracking", "Child Wellness"],
    slug: "pediatrics",
  },
  {
    name: "General Surgery",
    icon: Scissors,
    description: "Advanced surgical procedures including laparoscopic surgery, day care surgery, and post-operative care.",
    tags: ["Laparoscopy", "Day Care Surgery", "Post-Op Care"],
    slug: "general-surgery",
  },
  {
    name: "Orthopedics",
    icon: Bone,
    description: "Expert care for bone, joint, and spine conditions including joint replacement and fracture management.",
    tags: ["Joint Replacement", "Fracture Care", "Spine Health"],
    slug: "orthopedics",
  },
  {
    name: "Gynecology",
    icon: HeartPulse,
    description: "Comprehensive women's health services including maternity care, wellness exams, and advanced treatments.",
    tags: ["Maternity", "Women's Wellness", "Advanced Care"],
    slug: "gynecology",
  },
  {
    name: "Emergency Care",
    icon: Ambulance,
    description: "Round-the-clock emergency response with fully equipped trauma unit and ICU support.",
    tags: ["24/7 Response", "Trauma Unit", "ICU Support"],
    slug: "emergency-care",
  },
  {
    name: "Diabetology",
    icon: Activity,
    description: "Specialized diabetes management including sugar control, foot care, and lifestyle counseling.",
    tags: ["Sugar Control", "Foot Care", "Counseling"],
    slug: "diabetology",
  },
  {
    name: "Dental Clinic",
    icon: HeartHandshake,
    description: "Quality dental care with personalized treatment plans, advanced technology, and exceptional patient care.",
    tags: ["Root Canal", "Braces", "Dental Implants"],
    slug: "dental-clinic",
  },
  {
    name: "Vaccination",
    icon: Syringe,
    description: "Complete immunization services for children and adults including travel vaccines and flu shots.",
    tags: ["Child Immunization", "Travel Vaccines", "Flu Shots"],
    slug: "vaccination",
  },
] as const;

export const services = [
  {
    name: "24/7 Emergency & ICU",
    icon: Ambulance,
    description: "Round-the-clock emergency response with fully equipped ICU and ventilator support.",
    slug: "emergency-icu",
  },
  {
    name: "Diagnostic Laboratory",
    icon: Microscope,
    description: "Advanced diagnostic services with NABL-aligned laboratory for accurate results.",
    slug: "diagnostic-laboratory",
  },
  {
    name: "Mother & Child Care",
    icon: Baby,
    description: "Comprehensive maternity and neonatal care with specialized NICU facility.",
    slug: "mother-child-care",
  },
  {
    name: "Advanced Surgery",
    icon: Scissors,
    description: "State-of-the-art operation theatres with laminar airflow technology.",
    slug: "advanced-surgery",
  },
  {
    name: "Cardiac Care",
    icon: HeartPulse,
    description: "Expert cardiac evaluation, monitoring, and treatment for heart conditions.",
    slug: "cardiac-care",
  },
  {
    name: "Preventive Health",
    icon: Stethoscope,
    description: "Comprehensive health checkups and preventive care programs for all ages.",
    slug: "preventive-health",
  },
] as const;

export const doctors = [
  {
    name: "Dr. Subrahmanyam Karuturi",
    qualification: "MD, FRCP (London), FACP (USA)",
    specialty: "Internal Medicine & Diabetology",
    experience: "30+",
    languages: ["English", "Telugu", "Hindi"],
    description: "Fellow of Royal College of Physicians (London), Fellow of American College of Physicians (USA), Member of American Diabetes Association.",
    image: "/dr-subrahmanyam.png",
  },
  {
    name: "Dr. Tejaswi Karuturi",
    qualification: "DCH (Pediatrics)",
    specialty: "Pediatrics & Neonatology",
    experience: "15+",
    languages: ["English", "Telugu"],
    description: "Consultant Pediatrician specializing in child healthcare, newborn care, and developmental assessments.",
    image: "/dr-tejaswi.png",
  },
] as const;

export const facilities = [
  {
    name: "Modern Operation Theatres",
    description: "State-of-the-art operation theatres with laminar airflow technology and advanced surgical equipment.",
    image: "/gallery-1.png",
  },
  {
    name: "Intensive Care Unit",
    description: "24/7 monitored ICU with ventilator support and critical care specialists.",
    image: "/gallery-2.png",
  },
  {
    name: "Neonatal Intensive Care Unit",
    description: "Specialized NICU for newborns requiring advanced medical attention and care.",
    image: "/gallery-3.png",
  },
  {
    name: "Comfortable Patient Rooms",
    description: "Spacious, hygienic rooms designed for patient comfort with modern amenities.",
    image: "/gallery-4.png",
  },
] as const;

export const testimonials = [
  {
    name: "Rajesh Kumar",
    specialty: "Diabetes Care",
    rating: 5,
    text: "Dr. Subrahmanyam's expertise in diabetes management has transformed my life. His personalized approach to treatment and constant guidance has helped me maintain healthy blood sugar levels.",
  },
  {
    name: "Priya Sharma",
    specialty: "Pediatrics",
    rating: 5,
    text: "The pediatric care at Kify Hospital is exceptional. Dr. Tejaswi is incredibly patient and skilled. My children always feel comfortable during their visits.",
  },
  {
    name: "Suresh Reddy",
    specialty: "General Medicine",
    rating: 5,
    text: "Best hospital in Rajahmundry. The staff is caring, the facilities are modern, and the doctors are highly experienced. Highly recommended for all medical needs.",
  },
  {
    name: "Lakshmi Devi",
    specialty: "Emergency Care",
    rating: 5,
    text: "When my father had a medical emergency, Kify Hospital responded immediately. The 24/7 emergency team saved his life. We are forever grateful.",
  },
];

export const faqs = [
  {
    question: "How do I book an appointment at Kify Hospital?",
    answer: "You can book an appointment by calling us at 85000 23456, visiting our website, or walking in during our OPD hours (Mon-Sat: 9:00 AM - 8:30 PM). For emergencies, our team is available 24/7.",
  },
  {
    question: "Do you provide 24/7 emergency services?",
    answer: "Yes, Kify Hospital provides 24/7 emergency and critical care services. Our emergency department is fully equipped with advanced life-saving equipment and staffed round the clock.",
  },
  {
    question: "Which health insurance plans are accepted?",
    answer: "We accept most major health insurance plans. Please contact our billing department at 85000 23456 to verify your specific insurance coverage before your visit.",
  },
  {
    question: "What are the visiting hours for patients?",
    answer: "General visiting hours are from 10:00 AM to 8:00 PM. ICU visiting may have specific time restrictions. Please check with the nursing station for detailed information.",
  },
  {
    question: "Do you offer master health checkup packages?",
    answer: "Yes, we offer comprehensive master health checkup packages tailored for different age groups and health needs. Contact us at 85000 23456 to learn about available packages.",
  },
  {
    question: "Is the hospital accessible for senior citizens?",
    answer: "Yes, our hospital is fully accessible for senior citizens with wheelchair access, ramps, elevators, and dedicated assistance staff to ensure comfortable movement throughout the facility.",
  },
];

export const whyChooseUs = [
  {
    title: "Experienced Specialists",
    icon: Stethoscope,
    description: "Our team of highly qualified doctors with decades of experience ensures you receive the best medical care.",
  },
  {
    title: "24/7 Emergency Care",
    icon: Ambulance,
    description: "Round-the-clock emergency services with fully equipped ambulance and rapid response team.",
  },
  {
    title: "Patient-First Approach",
    icon: HeartPulse,
    description: "Every decision we make revolves around patient comfort, safety, and well-being.",
  },
  {
    title: "Advanced Technology",
    icon: Activity,
    description: "State-of-the-art medical equipment and modern infrastructure for accurate diagnosis and treatment.",
  },
  {
    title: "Affordable Excellence",
    icon: Users,
    description: "World-class healthcare services at reasonable costs, making quality care accessible to all.",
  },
  {
    title: "Trusted in Community",
    icon: Thermometer,
    description: "Serving the Rajahmundry community for over 17 years with a legacy of trust and medical excellence.",
  },
];

export const galleryImages = [
  { src: "/kifyhospital-frontview.png", alt: "Hospital Front View" },
  { src: "/kify-drone-img.png", alt: "Hospital Drone View" },
  { src: "/kify-recption-img.png", alt: "Reception Area" },
  { src: "/kify-waitingroom-img.png", alt: "Waiting Room" },
  { src: "/kify-floor-img.png", alt: "Hospital Corridor" },
  { src: "/kify5-patient-bed.png", alt: "Patient Room" },
  { src: "/gallery-1.png", alt: "Hospital Gallery" },
  { src: "/gallery-2.png", alt: "Hospital Gallery" },
  { src: "/gallery-3.png", alt: "Hospital Gallery" },
  { src: "/gallery-4.png", alt: "Hospital Gallery" },
  { src: "/gallery-5.png", alt: "Hospital Gallery" },
  { src: "/gallery-6.png", alt: "Hospital Gallery" },
  { src: "/gallery-7.png", alt: "Hospital Gallery" },
  { src: "/gallery-8.png", alt: "Hospital Gallery" },
];

export const socialLinks = [
  { label: "Facebook", href: hospital.facebook },
  { label: "Instagram", href: hospital.instagram },
  { label: "YouTube", href: hospital.youtube },
];
