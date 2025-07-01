import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
  SiPhp,
  SiSass,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  scss: {
    title: "SCSS",
    bg: "#cd6799",
    fg: "white",
    icon: <SiSass />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // {
  //   id: "codingducks",
  //   category: "Coding platform",
  //   title: "Coding Ducks",
  //   src: "/assets/projects-screenshots/codingducks/landing.png",
  //   screenshots: ["landing.png"],
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.chakra,
  //       PROJECT_SKILLS.reactQuery,
  //       PROJECT_SKILLS.firebase,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.prisma,
  //       PROJECT_SKILLS.python,
  //       PROJECT_SKILLS.postgres,
  //       PROJECT_SKILLS.sockerio,
  //     ],
  //   },
  //   live: "https://www.codingducks.xyz/",
  //   github: "https://github.com/Naresh-Khatri/Coding-Ducks",
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono text-2xl text-center">
  //           Coding ducks = LeetCode + CodePen + CSS Battles
  //         </TypographyP>
  //         <TypographyP className="font-mono ">
  //           Coding Ducks is your coding dojo — where you level up your skills,
  //           battle in real-time code duels, and earn badges like a true code
  //           warrior. Track your progress, flex your brain, and climb the
  //           leaderboard. Ready to quack the code?
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Solve coding problems similar to LeetCode, enhancing your
  //           problem-solving skills across various languages.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/problems.png`,
  //             `${BASE_PATH}/codingducks/problem.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Collaborate in real-time with others in a multiplayer coding
  //           environment, just like CodePen but with a social twist.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/ducklets.png`,
  //             `${BASE_PATH}/codingducks/ducklet1.png`,
  //             `${BASE_PATH}/codingducks/ducklet2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">UI Battles </TypographyH3>

  //         <p className="font-mono mb-2">
  //           Challenge yourself to create UI components with HTML/CSS/JS, and get
  //           instant feedback with an automated similarity scoring.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/css-battles.png`,
  //             `${BASE_PATH}/codingducks/css-battle.png`,
  //             `${BASE_PATH}/codingducks/css-battle2.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Contests </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Organize or participate in coding competitions. Successfully used to
  //           host three contests during college.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Playground </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Test and execute your code instantly in my versatile online code
  //           runner.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/codingducks/playground.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Users</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Track your progress, earn badges, and climb the rankings with
  //           detailed user profiles and activity tracking.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/codingducks/users.png`,
  //             `${BASE_PATH}/codingducks/user.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "couponluxury",
  //   category: "Coupon site",
  //   title: "Coupon Luxury",
  //   src: "/assets/projects-screenshots/couponluxury/landing.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
  //   live: "https://www.couponluxury.com/",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.js,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.chakra,
  //       PROJECT_SKILLS.vue,
  //     ],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.prisma,
  //       PROJECT_SKILLS.postgres,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content(): JSX.Element {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           CouponLuxury is your go-to destination for snagging the best deals
  //           without lifting a finger. Whether you&apos;re hunting for the latest
  //           discounts or trying to save a buck at your favorite stores,
  //           CouponLuxury&apos;s got you covered.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <p className="font-mono mb-2 mt-4">
  //           As soon as you land, boom! You&apos;re greeted with the freshest
  //           coupons and top-tier deals that&apos;ll make your wallet happy.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />
  //         <TypographyH3 className="my-4 ">Stores</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dive into a comprehensive list of stores, each packed with exclusive
  //           deals and discounts. It&apos;s like having a VIP pass to every sale
  //           in town.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/couponluxury/stores.png`,
  //             `${BASE_PATH}/couponluxury/store.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Categories</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Whatever you&apos;re into—fashion, tech, food—you&apos;ll find it
  //           neatly organized here. No more endless scrolling; just pick a
  //           category and get the best offers instantly.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Custom CMS </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Powered by Vue.js, this bad boy allows us to keep the content
  //           dynamic and up-to-date. From flash sales to limited-time offers, my
  //           CMS ensures everything&apos;s live and relevant.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/couponluxury/cms-1.png`,
  //             `${BASE_PATH}/couponluxury/cms-2.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-5">
  //           Plus, I&apos;ve sprinkled in some extra magic like personalized
  //           deal recommendations, user-friendly search features, and a sleek,
  //           responsive design that works like a charm on any device.
  //         </p>
  //         <p className="font-mono mb-2">
  //           CouponLuxury isn&apos;t just a website; it&apos;s your personal deal-hunting
  //           assistant, ensuring you never miss out on a bargain!
  //         </p>
  //         {/* <TypographyP className="my-4 mt-8">
  //         <strong>Misc:</strong>
  //         Hosted not one, not two, but THREE coding contests (Codemacha) during
  //         college. Safe to say, Coding Ducks passed the vibe check.
  //       </TypographyP>
  //       <TypographyP className="my-4 mt-8">
  //         <strong>Target Audience:</strong>
  //         For all the novice coders out there ready to make their mark.
  //       </TypographyP> */}
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "the-booking-desk",
  //   category: "Travel",
  //   title: "The Booking Desk",
  //   src: "/assets/projects-screenshots/the-booking-desk/landing.png",
  //   screenshots: ["1.png"],
  //   live: "https://thebookingdesk.com/",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.tailwind,
  //     ],
  //     backend: [PROJECT_SKILLS.sanity],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           The Booking Desk is your ultimate travel consultation hub, designed
  //           to turn your wanderlust dreams into reality. With a focus on smooth
  //           and visually captivating animations, navigating the site feels like
  //           a breeze—it&apos;s almost as if the destinations are calling you.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <p className="font-mono mb-2 mt-8">
  //           A sleek, modern interface greets you, featuring the latest travel
  //           tips, deals, and must-visit spots around the globe.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dive into the curated articles written by travel experts. Whether
  //           you&apos;re looking for hidden gems or travel hacks, our blog section has
  //           you covered.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/blogs.png`,
  //             `${BASE_PATH}/the-booking-desk/blog.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

  //         <p className="font-mono mb-2">
  //           Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity CMS
  //           to manage all the content with ease, ensuring you always get the
  //           latest and greatest information.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/the-booking-desk/cms-1.png`,
  //             `${BASE_PATH}/the-booking-desk/cms-2.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 my-8">
  //           With a stunning 100% score on Lighthouse, The Booking Desk isn&apos;t
  //           just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
  //           next adventure or just daydreaming, our site delivers a top-notch
  //           experience that&apos;s both informative and enjoyable.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // { // Portfolio project
  //   id: "portfolio",
  //   category: "Portfolio",
  //   title: "My Portfolio",
  //   src: "/assets/projects-screenshots/portfolio/landing.png",
  //   screenshots: ["1.png"],
  //   live: "http://nareshkhatri.vercel.app",
  //   github:"https://github.com/Naresh-Khatri/Portfolio",
  //   skills: {
  //     frontend: [
  //       PROJECT_SKILLS.ts,
  //       PROJECT_SKILLS.next,
  //       PROJECT_SKILLS.shadcn,
  //       PROJECT_SKILLS.aceternity,
  //       PROJECT_SKILLS.framerMotion,
  //       PROJECT_SKILLS.tailwind,
  //       PROJECT_SKILLS.spline,
  //     ],
  //     backend: [],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Welcome to my digital playground, where creativity meets code in the
  //           dopest way possible.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Beautiful 3D Objects{" "}
  //         </TypographyH3>
  //         <p className="font-mono mb-2">
  //           Did you see that 3D keyboard modal? Yeah! I made that. That
  //           interactive keyboard is being rendered in 3D on a webpage 🤯, and
  //           pressing each keycap reveals a skill in a goofy way. It&apos;s like
  //           typing, but make it art.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/landing.png`,
  //             `${BASE_PATH}/portfolio/skills.png`,
  //           ]}
  //         />
  //         <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
  //         <p className="font-mono mb-2">
  //           Dark background + floating particles = out-of-this-world cool.
  //         </p>
  //         <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
  //         <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

  //         <p className="font-mono mb-2">
  //           My top personal and freelance projects — no filler, all killer.
  //         </p>
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/portfolio/projects.png`,
  //             `${BASE_PATH}/portfolio/project.png`,
  //           ]}
  //         />
  //         <p className="font-mono mb-2 mt-8 text-center">
  //           This site&apos;s not just a portfolio — it&apos;s a whole vibe.
  //         </p>
  //       </div>
  //     );
  //   },
  // },
  // { // GhostChat project
  //   id: "ghostchat",
  //   category: "Anonymous chat",
  //   title: "GhostChat",
  //   src: "/assets/projects-screenshots/ghostchat/1.png",
  //   screenshots: ["1.png", "2.png", "3.png", "4.png"],
  //   live: "https://ghostchat.vercel.app",
  //   github:"https://github.com/Naresh-Khatri/GhostChat",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
  //     backend: [PROJECT_SKILLS.supabase],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           Ghostchat is your go-to spot for sending anonymous messages without
  //           leaving a trace. Powered by Supabase, it&apos;s all about keeping things
  //           low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
  //           or just having some fun, Ghostchat ensures your identity stays
  //           hidden, while your voice is heard. Say what you want, without the
  //           worry.
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow
  //           images={[
  //             `${BASE_PATH}/ghostchat/1.png`,
  //             `${BASE_PATH}/ghostchat/2.png`,
  //             `${BASE_PATH}/ghostchat/3.png`,
  //             `${BASE_PATH}/ghostchat/4.png`,
  //           ]}
  //         />
  //       </div>
  //     );
  //   },
  // },
  // {
  //   id: "jra",
  //   category: "Result analyzer",
  //   title: "JNTUA Results Analyzer",
  //   src: "/assets/projects-screenshots/jra/1.png",
  //   screenshots: ["1.png"],
  //   live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
  //   skills: {
  //     frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
  //     backend: [
  //       PROJECT_SKILLS.node,
  //       PROJECT_SKILLS.mongo,
  //       PROJECT_SKILLS.express,
  //       PROJECT_SKILLS.docker,
  //     ],
  //   },
  //   get content() {
  //     return (
  //       <div>
  //         <TypographyP className="font-mono ">
  //           JNTUA Results Analyzer was a revolutionary tool designed to simplify
  //           and enhance the experience of accessing academic results. It served
  //           as a powerful proxy between the JNTUA university results website and
  //           its users, offering a range of features that made result analysis
  //           faster and more efficient. Here&apos;s what made it stand out:
  //         </TypographyP>
  //         <ProjectsLinks live={this.live} repo={this.github} />
  //         <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
  //         <TypographyH3 className="my-4 mt-8">
  //           Effortless Results Retrieval
  //         </TypographyH3>
  //         {/* Effortless Results Retrieval: */}
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Search all your results using a single roll number, eliminating
  //             the tedious task of sifting through thousands of rows on the
  //             official site.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             class-wise results effortlessly by entering a roll number range.
  //             No more manual searches or filtering.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Faculty members could download batch results in Excel format,
  //             making administrative tasks a breeze.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">
  //           Enhanced Data Insights:
  //         </TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Each result came with additional features including:
  //             <ul className="list-disc font-mono ml-6">
  //               <li>
  //                 <strong>CGPA Calculations: </strong>Easily track your
  //                 cumulative grade point average.
  //               </li>
  //               <li>
  //                 <strong>Charts:</strong> Visualize your academic performance
  //                 with comprehensive charts.
  //               </li>
  //               <li>
  //                 <strong>Future Projections:</strong> Get insights into
  //                 potential future outcomes based on current performance.
  //               </li>
  //               <li>
  //                 <strong> Backlog Counts: </strong>Keep track of your backlog
  //                 subjects at a glance.
  //               </li>
  //             </ul>
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             The application was significantly faster and more efficient than
  //             the official site, providing a smoother user experience.
  //           </li>
  //         </ul>
  //         <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
  //         <ul className="list-disc ml-6">
  //           <li className="font-mono">
  //             Unfortunately, as of May 2022, the tool stopped working due to the
  //             introduction of CAPTCHA on the official JNTUA results site, which
  //             disrupted the seamless functionality of the app. JNTUA Results
  //             Analyzer transformed the way students and faculty interacted with
  //             academic results, making it a must-have tool until its unexpected
  //             shutdown.
  //           </li>
  //         </ul>
  //       </div>
  //     );
  //   },
  // },

  // +
  { // 01. AI Docker file optimizer project
    id: "aidockerfileoptimizer",
    category: "AI and DevOps",
    title: "AI Dockerfile Optimizer",
    src: "/assets/projects-screenshots/aidockerfileoptimizer/2.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://ai-docker-file-optimizer-eight.vercel.app/",
    github:"https://github.com/sayf20/AI-Docker-file-optimizer",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.openai,PROJECT_SKILLS.netlify],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AI-Docker-file-optimizer helps optimize Dockerfiles for smaller, more efficient images. 
            Simply paste your Dockerfile, and the app analyzes it for best practices and size 
            optimization tips. It then provides a refactored, optimized version of the Dockerfile. 
            Deployed on Vercel, it ensures fast and easy access to Dockerfile optimization.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/aidockerfileoptimizer/1.png`,
              `${BASE_PATH}/aidockerfileoptimizer/2.png`,
              `${BASE_PATH}/aidockerfileoptimizer/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 02. FinanceMe project
    id: "financeme",
    category: "DevOps in Banking and Finance",
    title: "FinanceMe: Complete DevOps Capstone Project",
    src: "/assets/projects-screenshots/financeme/1.png",
    screenshots: ["/assets/projects-screenshots/financeme/1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
      ],
      backend: [
        PROJECT_SKILLS.java,
        PROJECT_SKILLS.maven,
        PROJECT_SKILLS.postgres,
      ],
    },
    live: "https://github.com/sayf20/FinanceMe-Devops-Project",
    github: "https://github.com/sayf20/FinanceMe-Devops-Project",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            FinanceMe: Complete DevOps Capstone Project
          </TypographyP>
          <TypographyP className="font-mono ">
            This project demonstrates the deployment of a DevOps pipeline for a global banking and
            financial services provider, FinanceMe. The company transitioned from a monolithic 
            architecture to a microservice-based architecture to handle increased traffic and 
            scaling challenges. The project involves automating infrastructure provisioning, build 
            and deployment processes, and continuous monitoring using modern DevOps tools and 
            AWS services.?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture </TypographyH3>
          <p className="font-mono mb-2">
            The project is divided into three main phases:
            1.Automating Infrastructure Provisioning
            2.Build and Deployment Automation
            3.Continuous Monitoring
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/financeme/1.png`,
              `${BASE_PATH}/financeme/2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Automating Infrastructure Provisioning</TypographyH3>
          <p className="font-mono mb-2">
          Terraform is used to create 4 AWS EC2 instances:
            Jenkins Master Node (for CI/CD pipeline management)
            Build Server (for application and Docker image builds)
            Production Server (for deploying Dockerized applications)
            Monitoring Server (for continuous monitoring of Build and Prod servers)
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/financeme/4_A.png`,
              `${BASE_PATH}/financeme/4.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Build and Deployment Automation</TypographyH3>

          <p className="font-mono mb-2">
          Jenkins is configured for a CI/CD pipeline:
            Jenkins Master Node is responsible for pipeline orchestration.
            Build Server is configured as a Jenkins Slave Node to handle application builds and Docker image creation.
            Ansible is used for automating deployment to the Prod server, where the application is deployed using an Ansible client-server model.
          </p>
          <SlideShow
            images={[
              
              `${BASE_PATH}/financeme/6.png`,
      
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Continuous Monitoring </TypographyH3>
          <p className="font-mono mb-2">
          Prometheus and Grafana are used for real-time monitoring:
            Node Exporter is installed on both Build and Prod servers to collect server metrics (CPU, Disk Space, Memory Utilization).
            Grafana Dashboard is created to visualize these metrics for continuous monitoring.
          </p>
          <SlideShow images={[
                `${BASE_PATH}/financeme/3.png`,
                `${BASE_PATH}/financeme/8.png`,
                `${BASE_PATH}/financeme/9.png`,
                `${BASE_PATH}/financeme/10.png`,
            ]} />
        </div>
      );
    },
  },
  { // 03. Portfolio project
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["assets/projects-screenshots/myportfolio/landing.png"],
    live: "",
    github:"https://github.com/sayf20/My-3D-Interactive-Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/myportfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/projects.png`,
              `${BASE_PATH}/myportfolio/project.png`,
              `${BASE_PATH}/myportfolio/contact.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
{ // 05. Pick and Place Robotic Arm
  id: "pickandplaceroboticarm",
  category: "IoT",
  title: "Pick and Place Robotic Arm",
  src: "/assets/projects-screenshots/pickandplaceroboticarm/realmodel.jpg", // Main image (Fusion 360 view)
  screenshots: [
    "modelisation.jpg",       // 3D model from Fusion 360
    "organigram.jpg",         // System diagram
    "maquette.jpg",
    "realmodel.jpg",           // Photo of electronic setup
    "view2.png"          // You can use a GIF preview or embed video externally
  ],
  live: "", // Replace with actual link
  github: "https://github.com/sayf20/pick-and-place-robotic-arm",
  skills: {
    frontend:[],
    backend: [PROJECT_SKILLS.cplusplus, PROJECT_SKILLS.arduino],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          Boost industrial automation with the Pick and Place Robotic Arm — a smart manipulator 
          designed to detect, grab, and relocate moving objects with precision. Developed using 
          Fusion 360 for mechanical design, this system features an Arduino Uno, six servomotors, 
          and an ultrasonic sensor for object detection and synchronized motion. The 3D-modeled 
          gripper is optimized for secure handling and allows for future integration of pressure 
          and position sensors. A complete electronic prototype was built and simulated in Tinkercad, 
          followed by successful real-world tests. This project offers reliable, customizable automation 
          for repetitive industrial tasks.
        </TypographyP>
        <ProjectsLinks live={this.live} repo={this.github} />
        <SlideShow
          images={[
            `${BASE_PATH}/pickandplaceroboticarm/modelisation.jpg`,
            `${BASE_PATH}/pickandplaceroboticarm/organigram.jpg`,
            `${BASE_PATH}/pickandplaceroboticarm/maquette.jpg`,
            `${BASE_PATH}/pickandplaceroboticarm/realmodel.jpg`,
            `${BASE_PATH}/pickandplaceroboticarm/view2.png`,
          ]}
        />
      </div>
    );
  },
},

  { // 05. Smart Job Tracker project
    id: "smartjobtracker",
    category: "Full stack",
    title: "Smart Job Tracker",
    src: "/assets/projects-screenshots/smartjobtracker/02.png",
    screenshots: ["01.png", "02.png", "03.png","04.png","05.png","06.png","07.png"],
    live: "https://job-tracker-application-sigma.vercel.app/",
    github:"https://github.com/sayf20/job-tracker-application",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.vite],
      backend: [PROJECT_SKILLS.firebase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Track your job applications effortlessly with a sleek, dark-themed app that lets you 
            manage, filter, and visualize your job search. Organize your applications with a 
            Kanban board, monitor progress through status updates, and store everything securely. 
            Enjoy seamless access across devices with a responsive design and email reminders for 
            interviews. A smarter, more intuitive way to stay on top of your job hunt!
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/smartjobtracker/01.png`,
              `${BASE_PATH}/smartjobtracker/02.png`,
              `${BASE_PATH}/smartjobtracker/03.png`,
              `${BASE_PATH}/smartjobtracker/04.png`,
              `${BASE_PATH}/smartjobtracker/05.png`,
              `${BASE_PATH}/smartjobtracker/06.png`,
              `${BASE_PATH}/smartjobtracker/07.png`,
            ]}
          />
        </div>
      );
    },
  },
  { // 06. Savinder Puri portfolio project
    id: "Cyber Attack Visualization Dashboard",
    category: "Web Development and Cybersecurite",
    title: "CyberPulse",
    src: "/assets/projects-screenshots/CyberPulse/1.png",
    screenshots: ["1.png", "2.png", "3.png","4.png","5.png","6.png","7.png"],
    live: "https://cyber-pulse-visualisation-de-donnes.vercel.app/",
    github:"https://github.com/sayf20/Cyber-Pulse-Visualisation-de-Donnes",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Explore a real-time visualization of global cyber attacks through this interactive dashboard. 
            This project maps attack sources, destinations, types, and intensities, offering a deep dive into 
            the patterns and scale of modern digital threats. Built with React, TypeScript, and D3.js, and 
            styled using TailwindCSS, it transforms complex data into clear, actionable visuals.  
            Featuring time series charts📊🔥, protocol breakdowns, and geospatial mapping, this project blends 
            technical depth with intuitive design. Built with precision by Saifeddine MOSRATI 🚀.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/CyberPulse/1.png`,
              `${BASE_PATH}/CyberPulse/2.png`,
              `${BASE_PATH}/CyberPulse/3.png`,
              `${BASE_PATH}/CyberPulse/4.png`,
              `${BASE_PATH}/CyberPulse/5.png`,
              `${BASE_PATH}/CyberPulse/6.png`,
              `${BASE_PATH}/CyberPulse/7.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "carserv",
    category: "Web Development (Freelance)",
    title: "CarServ",
    src: "/assets/projects-screenshots/carserv/homepage.png",
    screenshots: ["homepage.png", "reservation.png", "services.png", "clinets.png","contact.png"],
    live: "https://mzpro.fr/production/carserv-1.0.0/",
    github:"https://github.com/sayf20/CarServ",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.bootstrap, PROJECT_SKILLS.js, PROJECT_SKILLS.scss],
      backend: [PROJECT_SKILLS.php],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            CarServ is a comprehensive web application designed for car service and repair businesses,
            enabling customers to easily book services online, browse available services, and connect
            with the business. Features a robust admin interface for managing reservations and a
            responsive design for seamless user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Online service booking system with intuitive form
            • Administrative dashboard for reservation management
            • Interactive contact system with email integration
            • Responsive design using Bootstrap 5
            • Dynamic team and testimonials sections
            • Animated UI elements and carousel displays
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/carserv/homepage.png`,
              `${BASE_PATH}/carserv/reservation.png`,
              `${BASE_PATH}/carserv/services.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Technical Implementation</TypographyH3>
          <p className="font-mono mb-2">
            Built with a focus on user experience, combining modern frontend technologies
            with smooth animations and intuitive navigation. Features include date/time
            picking for appointments, dynamic content loading, and a secure admin interface
            for business management.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/carserv/clinets.png`,
              `${BASE_PATH}/carserv/contact.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "password-analyzer",
    category: "Cybersecurity",
    title: "Password & SSH Log Analyzer",
    src: "/assets/projects-screenshots/password-analyzer/dashboard.png",
    screenshots: ["cli.png", "dashboard.png"],
    live: "https://github.com/sayf20/password-analyzer",
    github: "https://github.com/sayf20/password-analyzer",
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A powerful yet beginner-friendly cybersecurity tool that analyzes SSH authentication logs to detect
            brute-force attempts, track login patterns, and visualize potential security threats through an
            intuitive web dashboard.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Comprehensive log analysis for failed/successful login attempts
            • Real-time CLI summary with color-coded alerts
            • Interactive web dashboard with drag-and-drop functionality
            • Visual representation of attack patterns and login statistics
            • Dark-themed, responsive UI for optimal viewing
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/password-analyzer/cli.png`,
              `${BASE_PATH}/password-analyzer/dashboard.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with Python for backend processing, Flask for web server functionality,
            and Chart.js for data visualization. Features a custom-designed dark theme UI
            with responsive layouts and intuitive user interactions.
          </p>
        </div>
      );
    },
  },
  {
    id: "futurnet-menuiserie",
    category: "Web Development (Freelance)",
    title: "Futurnet Menuiserie",
    src: "/assets/projects-screenshots/futurnet/acc_mens.png",
    screenshots: ["acc_mens.png", "propos.png","propos1.png","services.png","contact.png","rever.png",],
    live: "https://mzpro.fr/production/Futurnet-%20Menuiserie-1.0.0/",
    github:"https://github.com/sayf20/Menuiserie-FuturBois-Website",
    skills: {
      frontend: [
        PROJECT_SKILLS.html,
        PROJECT_SKILLS.css,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.bootstrap,
        PROJECT_SKILLS.scss,
      ],
      backend: [PROJECT_SKILLS.php],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A professional website for a custom carpentry business with over 30 years of experience. 
            This freelance project showcases their expertise in creating bespoke solutions for doors, 
            windows, shutters, and garages, blending traditional craftsmanship with modern innovation.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            • Custom carpentry services showcase with detailed information
            • Online booking system for service appointments
            • Team presentation highlighting expert technicians
            • Customer testimonials and reviews section
            • 24/7 contact and support information
            • Responsive design with modern UI elements and animations
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/futurnet/acc_mens.png`,
              `${BASE_PATH}/futurnet/propos.png`,
              `${BASE_PATH}/futurnet/propos1.png`,
              `${BASE_PATH}/futurnet/services.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with HTML5, CSS3/SCSS, and JavaScript, featuring customized Bootstrap components,
            jQuery for enhanced interactivity, Owl Carousel for smooth slideshows, WOW.js for scroll
            animations, and Tempus Dominus for a user-friendly booking system.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/futurnet/contact.png`,
              `${BASE_PATH}/futurnet/rever.png`,
            ]}
          />

        </div>
      );
    },
  },
];
export default projects;
