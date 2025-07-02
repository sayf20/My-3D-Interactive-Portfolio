"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "AI Dockerfile Optimizer",
    description: `AI-Docker-file-optimizer helps optimize Dockerfiles for smaller, more efficient images. Simply paste your Dockerfile, and the app analyzes it for best practices and size optimization tips. It then provides a refactored, optimized version of the Dockerfile. Deployed on Vercel, it ensures fast and easy access to Dockerfile optimization.`,
    link: "https://ai-docker-file-optimizer-eight.vercel.app/",
    images: [
      "/assets/projects-screenshots/aidockerfileoptimizer/1.png",
      "/assets/projects-screenshots/aidockerfileoptimizer/2.png",
      "/assets/projects-screenshots/aidockerfileoptimizer/3.png",
    ],
  },
  {
    id: 2,
    name: "FinanceMe: Complete DevOps Capstone Project",
    description: `This project demonstrates the deployment of a DevOps pipeline for a lobal banking and financial services provider, FinanceMe. The company transitioned from a monolithic architecture to a microservice-based architecture to handle increased traffic and scaling challenges. The project involves automating infrastructure provisioning, build and deployment processes, and continuous monitoring using modern DevOps tools and AWS services.`,
    link: "https://github.com/sayf20/FinanceMe-Devops-Project",
    images: [
      "/assets/projects-screenshots/financeme/1.png",
      "/assets/projects-screenshots/financeme/2.png",
      "/assets/projects-screenshots/financeme/3.png",
      "/assets/projects-screenshots/financeme/4_A.png",
      "/assets/projects-screenshots/financeme/4.png",
      "/assets/projects-screenshots/financeme/6.png",
      "/assets/projects-screenshots/financeme/8.png",
      "/assets/projects-screenshots/financeme/9.png",
      "/assets/projects-screenshots/financeme/10.png",
    ],
  },
  {
    id: 3,
    name: "My Portfolio",
    description: `Welcome to my digital playground, where creativity meets code in the dopest way possible.`,
    link: "https://github.com/sayf20/My-3D-Interactive-Portfolio",
    images: [
      "/assets/projects-screenshots/myportfolio/landing.png",
      "/assets/projects-screenshots/myportfolio/navbar.png",
      "/assets/projects-screenshots/myportfolio/projects.png",
      "/assets/projects-screenshots/myportfolio/project.png",
      "/assets/projects-screenshots/myportfolio/contact.png",
    ],
  },
  {
    id: 4,
    name: "Pick and Place Robotic Arm",
    description: `Boost industrial automation with the Pick and Place Robotic Arm — a smart manipulator designed to detect, grab, and relocate moving objects with precision. Developed using Fusion 360 for mechanical design, this system features an Arduino Uno, six servomotors, and an ultrasonic sensor for object detection and synchronized motion. The 3D-modeled gripper is optimized for secure handling and allows for future integration of pressure and position sensors. A complete electronic prototype was built and simulated in Tinkercad, followed by successful real-world tests. This project offers reliable, customizable automation for repetitive industrial tasks.`,
    link: "https://github.com/sayf20/pick-and-place-robotic-arm",
    images: [
      "/assets/projects-screenshots/pickandplaceroboticarm/modelisation.jpg",
      "/assets/projects-screenshots/pickandplaceroboticarm/organigram.jpg",
      "/assets/projects-screenshots/pickandplaceroboticarm/maquette.jpg",
      "/assets/projects-screenshots/pickandplaceroboticarm/realmodel.jpg",
      "/assets/projects-screenshots/pickandplaceroboticarm/view2.png",
    ],
  },
  {
    id: 5,
    name: "Smart Job Tracker",
    description: `Track your job applications effortlessly with a sleek, dark-themed app that lets you manage, filter, and visualize your job search. Organize your applications with a Kanban board, monitor progress through status updates, and store everything securely. Enjoy seamless access across devices with a responsive design and email reminders for interviews. A smarter, more intuitive way to stay on top of your job hunt!`,
    link: "https://job-tracker-application-sigma.vercel.app/",
    images: [
      "/assets/projects-screenshots/smartjobtracker/01.png",
      "/assets/projects-screenshots/smartjobtracker/02.png",
      "/assets/projects-screenshots/smartjobtracker/03.png",
      "/assets/projects-screenshots/smartjobtracker/04.png",
      "/assets/projects-screenshots/smartjobtracker/05.png",
      "/assets/projects-screenshots/smartjobtracker/06.png",
      "/assets/projects-screenshots/smartjobtracker/07.png",
    ],
  },
  {
    id: 6,
    name: "CyberPulse",
    description: `Explore a real-time visualization of global cyber attacks through this interactive dashboard. This project maps attack sources, destinations, types, and intensities, offering a deep dive into the patterns and scale of modern digital threats. Built with React, TypeScript, and D3.js, and styled using TailwindCSS, it transforms complex data into clear, actionable visuals. Featuring time series charts, protocol breakdowns, and geospatial mapping, this project blends technical depth with intuitive design.`,
    link: "https://cyber-pulse-visualisation-de-donnes.vercel.app/",
    images: [
      "/assets/projects-screenshots/CyberPulse/1.png",
      "/assets/projects-screenshots/CyberPulse/2.png",
      "/assets/projects-screenshots/CyberPulse/3.png",
      "/assets/projects-screenshots/CyberPulse/4.png",
      "/assets/projects-screenshots/CyberPulse/5.png",
      "/assets/projects-screenshots/CyberPulse/6.png",
      "/assets/projects-screenshots/CyberPulse/7.png",
    ],
  },
  {
    id: 7,
    name: "CarServ",
    description: `CarServ is a comprehensive web application designed for car service and repair businesses, enabling customers to easily book services online, browse available services, and connect with the business. Features a robust admin interface for managing reservations and a responsive design for seamless user experience.`,
    link: "https://mzpro.fr/production/carserv-1.0.0/",
    images: [
      "/assets/projects-screenshots/carserv/homepage.png",
      "/assets/projects-screenshots/carserv/reservation.png",
      "/assets/projects-screenshots/carserv/services.png",
      "/assets/projects-screenshots/carserv/clinets.png",
      "/assets/projects-screenshots/carserv/contact.png",
    ],
  },
  {
    id: 8,
    name: "Password & SSH Log Analyzer",
    description: `A powerful yet beginner-friendly cybersecurity tool that analyzes SSH authentication logs to detect brute-force attempts, track login patterns, and visualize potential security threats through an intuitive web dashboard.`,
    link: "https://github.com/sayf20/password-analyzer",
    images: [
      "/assets/projects-screenshots/password-analyzer/cli.png",
      "/assets/projects-screenshots/password-analyzer/dashboard.png",
    ],
  },
  {
    id: 9,
    name: "Futurnet Menuiserie",
    description: `A professional website for a custom carpentry business with over 30 years of experience. This freelance project showcases their expertise in creating bespoke solutions for doors, windows, shutters, and garages, blending traditional craftsmanship with modern innovation.`,
    link: "https://mzpro.fr/production/Futurnet-%20Menuiserie-1.0.0/",
    images: [
      "/assets/projects-screenshots/futurnet/acc_mens.png",
      "/assets/projects-screenshots/futurnet/propos.png",
      "/assets/projects-screenshots/futurnet/propos1.png",
      "/assets/projects-screenshots/futurnet/services.png",
      "/assets/projects-screenshots/futurnet/contact.png",
      "/assets/projects-screenshots/futurnet/rever.png",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
