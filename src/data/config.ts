const config = {
  title: "Saifeddine MOSRATI | R&D Data Engineer · IA & Sécurité de l'IA",
  description: {
    long: "Portfolio de Saifeddine MOSRATI, R&D Data Engineer en alternance chez Mantu et élève-ingénieur en cybersécurité à l'EPITA. Je conçois des modèles d'intelligence artificielle à partir de données réelles de capteurs (prévision, séries temporelles, MLOps sur Azure) et je me spécialise dans la sécurité des systèmes d'IA : comprendre comment un modèle peut être trompé, empoisonné ou détourné, et comment le protéger.",
    short:
      "R&D Data Engineer chez Mantu. Je construis des modèles d'IA sur des données réelles — et je me spécialise dans leur sécurité.",
  },
  keywords: [
    "Saifeddine",
    "Saifeddine MOSRATI",
    "Saifeddine Mosrati portfolio",
    "R&D Data Engineer",
    "Data Engineer",
    "Machine Learning Engineer",
    "MLOps",
    "Intelligence Artificielle",
    "AI Security",
    "Sécurité de l'IA",
    "Cybersécurité",
    "DevSecOps",
    "Microsoft Azure",
    "Python",
    "Data Engineering",
    "Mantu",
    "EPITA",
    "Paris",
  ],
  author: "Saifeddine MOSRATI",
  email: "mosratisayf20@gmail.com",
  site: "https://myportfolio-beta-teal.vercel.app/",

  // CV téléchargeable, servi directement depuis le site (public/cv)
  resume: {
    fr: "/cv/CV_Saifeddine_Mosrati_FR.pdf",
    en: "/cv/CV_Saifeddine_Mosrati_EN.pdf",
  },

  get ogImg() {
    return this.site + "assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/saifeddine-mosrati/",
    github: "https://github.com/sayf20",
  },
};
export { config };
