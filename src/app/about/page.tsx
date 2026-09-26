"use client";
import React from "react";
import {
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLinux,
  FaPhone,
  FaReact,
} from "react-icons/fa6";
import {
  SiBurpsuite,
  SiGithubactions,
  SiKalilinux,
  SiKubernetes,
  SiMicrosoftazure,
  SiNextdotjs,
  SiOwasp,
  SiPandas,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiSpringboot,
  SiTerraform,
  SiTypescript,
  SiWireshark,
} from "react-icons/si";
import { TbBinaryTree } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "mosratisayf20@gmail.com",
    href: "mailto:mosratisayf20@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Phone",
    content: "+33 7 65 23 28 47",
    href: "tel:+33765232847",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/saifeddine-mosrati/",
    content: "/saifeddine-mosrati",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/sayf20",
    content: "/sayf20",
    icon: <FaGithub height={"50px"} />,
  },
];

type Tool = {
  name: string;
  icon: React.ReactNode;
};

type ToolFamily = {
  name: string;
  tools: Tool[];
};

const ICON_SIZE = "40px";

// "Ce que j'utilise" : 4 familles alignées sur le profil
// cybersécurité · IA · cloud · DevSecOps.
const TOOL_FAMILIES: ToolFamily[] = [
  {
    name: "IA & Data",
    tools: [
      { name: "Python", icon: <SiPython size={ICON_SIZE} color="#3776ab" /> },
      { name: "PyTorch", icon: <SiPytorch size={ICON_SIZE} color="#ee4c2c" /> },
      {
        name: "scikit-learn",
        icon: <SiScikitlearn size={ICON_SIZE} color="#f7931e" />,
      },
      { name: "Pandas", icon: <SiPandas size={ICON_SIZE} color="#e70488" /> },
      // XGBoost n'a pas de logo dans les bibliothèques d'icônes :
      // icône symbolique d'arbre de décision.
      {
        name: "XGBoost",
        icon: <TbBinaryTree size={ICON_SIZE} color="#1a9fdc" />,
      },
    ],
  },
  {
    name: "Cybersécurité",
    tools: [
      { name: "OWASP", icon: <SiOwasp size={ICON_SIZE} color="#ffffff" /> },
      { name: "Linux", icon: <FaLinux size={ICON_SIZE} color="#ffffff" /> },
      {
        name: "Tests d'intrusion",
        icon: <SiKalilinux size={ICON_SIZE} color="#8fb4d6" />,
      },
      {
        name: "Burp Suite",
        icon: <SiBurpsuite size={ICON_SIZE} color="#ff6633" />,
      },
      {
        name: "Wireshark",
        icon: <SiWireshark size={ICON_SIZE} color="#1679a7" />,
      },
    ],
  },
  {
    name: "Cloud & DevSecOps",
    tools: [
      {
        name: "Azure",
        icon: <SiMicrosoftazure size={ICON_SIZE} color="#0078d4" />,
      },
      { name: "Docker", icon: <FaDocker size={ICON_SIZE} color="#2496ed" /> },
      {
        name: "Kubernetes",
        icon: <SiKubernetes size={ICON_SIZE} color="#326ce5" />,
      },
      {
        name: "Terraform",
        icon: <SiTerraform size={ICON_SIZE} color="#844fba" />,
      },
      {
        name: "GitHub Actions",
        icon: <SiGithubactions size={ICON_SIZE} color="#2088ff" />,
      },
    ],
  },
  {
    name: "Développement",
    tools: [
      {
        name: "TypeScript",
        icon: <SiTypescript size={ICON_SIZE} color="#3178c6" />,
      },
      { name: "React", icon: <FaReact size={ICON_SIZE} color="#61dafb" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={ICON_SIZE} color="#ffffff" />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot size={ICON_SIZE} color="#6db33f" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={ICON_SIZE} color="#699eca" />,
      },
    ],
  },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
            <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-[50%_10%]"
                  alt="me"
                  src="/assets/me1.png"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Saifeddine MOSRATI</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                    R&D Data Engineer @ Mantu
                </div>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                    IA & Machine Learning
                </div>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                    Sécurité de l&apos;IA · Cybersécurité
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="w-full lg:basis-3/4 lg:w-auto">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">À propos</h1>
            <p className="mb-6 text-roboto">
              Salut ! Moi c&apos;est Saifeddine. Je conçois des modèles
              d&apos;intelligence artificielle à partir de données réelles de
              capteurs, et je me spécialise dans ce qui peut les rendre
              vulnérables.
            </p>
            <p className="mb-6 text-roboto">
              Élève-ingénieur en cybersécurité à l&apos;EPITA, je suis R&amp;D
              Data Engineer en alternance chez Mantu depuis septembre 2025, où je
              travaille de la donnée brute jusqu&apos;au produit : un pipeline de
              prévision de la consommation énergétique d&apos;un bâtiment
              (ingestion sur Azure, séries temporelles, MLOps), la plateforme de
              gestion des capteurs qui va avec, et sa sécurité. Avant Mantu,
              j&apos;étais testeur d&apos;intrusion web chez Futurnet et
              développeur full-stack en freelance.
            </p>
            <p className="mb-6 text-roboto">
              Là où je vais : la sécurité des systèmes d&apos;IA — comprendre
              comment un modèle peut être trompé, empoisonné par ses données ou
              détourné, et comment le protéger. L&apos;IA se déploie partout, et
              il faudra des profils capables à la fois de la construire et de la
              sécuriser. C&apos;est ce profil que je construis.
            </p>
            <p className="mb-10">
              Quand je ne code pas, je suis à la salle, sur un terrain de foot ou
              de basket, en rando, devant un animé, en train d&apos;explorer un
              nouvel endroit, ou simplement autour d&apos;un bon café.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Ce que j&apos;utilise</h1>
            <div className="flex flex-col gap-8">
              {TOOL_FAMILIES.map((family) => (
                <section key={family.name} aria-label={family.name}>
                  <h2 className="text-sm uppercase tracking-widest text-zinc-500 mb-3">
                    {family.name}
                  </h2>
                  <ul className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                    {family.tools.map((tool) => (
                      <li
                        key={tool.name}
                        className="flex flex-col items-center justify-center gap-2 p-3 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                        <span className="text-[11px] leading-tight text-center text-zinc-400">
                          {tool.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
