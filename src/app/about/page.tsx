"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  //FaVuejs,
  //FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  //RiJavascriptFill,
  //RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  //SiKubuntu,
  //SiPm2,
  //SiPrettier,
  SiTypescript,
  SiVercel,
  //SiVisualstudiocode,
  SiJenkins,
  SiKubernetes,
  SiPython,
} from "react-icons/si";
// import { VscCode } from "react-icons/vsc";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

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

const TOOLS = [
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "Next.js is a React framework for production",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Next.js is a React framework for production",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Nodejs",
    content: "Next.js is a React framework for production",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "Next.js is a React framework for production",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Docker",
    content: "Next.js is a React framework for production",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "NginX",
    content: "Next.js is a React framework for production",
    icon: <DiNginx size={"50px"} color="#008000" />,
    color: "#008000",
  },
  {
    name: "Azure",
    content: "Microsoft's Hey, we do cloud too flex. 🌥️🔗s.",
    icon: <SiKubernetes size={"50px"} color="#326ce5" />,
    color: "#326ce5",
  },
  {
    name: "Express.js",
    content: "Next.js is a React framework for production",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "Next.js is a React framework for production",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "Next.js is a React framework for production",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "Next.js is a React framework for production",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "Next.js is a React framework for production",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Next.js is a React framework for production",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Next.js is a React framework for production",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Jenkins",
    content: "Jenkins automates building, testing, and deploying your code.",
    icon: <SiJenkins size={"50px"} color="#d33833" />,
    color: "#d33833",
  },
  {
    name: "NPM",
    content: "Next.js is a React framework for production",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },

  {
    name: "Vercel",
    content: "Next.js is a React framework for production",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Linux",
    content: "Next.js is a React framework for production",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Next.js is a React framework for production",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "AWS",
    content: "Next.js is a React framework for production",
    icon: <FaAws size={"50px"} color="#3f51b5" />,
    color: "#000000",
  },
  {
    name: "Python",
    content: "Next.js is a React framework for production",
    icon: <SiPython size={"50px"} color="#3776ab" />,
    color: "#3776ab",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
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
        <main className="basis-3/4 w-[500px]">
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
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
            {/* <div className="">
              <Splide
                options={{
                  type: "loop",
                  interval: 2000,
                  autoplay: true,
                  pagination: false,
                  speed: 3000,
                  perPage: 5,
                  perMove: 1,
                  rewind: true,
                  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                  arrows: false,
                }}
                aria-label="My Favorite Images"
              >
                {TOOLS.map((tool) => (
                  <SplideSlide key={tool.name}>
                    <div
                      key={tool.name}
                      className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                    >
                      {tool.icon}
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
