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
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPm2,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";
// İkon importlarınızın dosyanın en üstünde olduğundan emin olun
// Örn: import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaHtml5, FaCss3, FaNodeJs, FaReact, FaDocker, FaVuejs, FaGit, FaYarn, FaLinux, FaAws } from "react-icons/fa";
// Örn: import { SiJavascript, SiTypescript, SiExpress, SiVscodium, SiPrettier, SiVercel, SiKubuntu } from "react-icons/si";
// Örn: import { DiNginx, DiPostgresql, DiMongodb, DiVim, DiNpm } from "react-icons/di";
// Örn: import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";

const CONTACT_LINKS = [
  {
    name: "E-posta",
    content: "Yenes8372@gmail.com",
    href: "mailto:Yenes8372@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "Telefon",
    content: "+90 5XX XXX XX XX", // Burayı kendi numaranla güncellemeyi unutma
    href: "tel:+905XXXXXXXXX",
    icon: <FaPhone height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/enes-yalcin/", // LinkedIn kullanıcı adını buraya eklemelisin
    content: "/enes-yalcin",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/heisenberg1098",
    content: "/heisenberg1098",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "JavaScript",
    content: "Web geliştirmede kullanılan yüksek seviyeli, dinamik programlama dili.",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "JavaScript'in, büyük ölçekli uygulama geliştirmeyi sağlayan tür güvenli süper seti.",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "HTML",
    content: "Web sayfalarının iskeletini ve yapısını oluşturan işaretleme dili.",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "HTML öğelerinin stilini, düzenini ve görünümünü belirleyen dil.",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Node.js",
    content: "Sunucu tarafında JavaScript çalıştırmayı sağlayan Chrome V8 tabanlı runtime.",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "React.js",
    content: "Kullanıcı arayüzleri oluşturmak için kullanılan popüler JavaScript kütüphanesi.",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Docker",
    content: "Uygulamaları izole konteynerlerde geliştirmek ve dağıtmak için kullanılan platform.",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "NginX",
    content: "Yüksek performanslı web sunucusu, reverse proxy ve yük dengeleyici.",
    icon: <DiNginx size={"50px"} color="#008000" />,
    color: "#008000",
  },
  {
    name: "Vue.js",
    content: "Aşamalı (progressive) kullanıcı arayüzü oluşturma framework'ü.",
    icon: <FaVuejs size={"50px"} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Express.js",
    content: "Node.js için tasarlanmış hızlı, minimalist ve esnek web framework'ü.",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    content: "Güvenilirlik ve performans odaklı, gelişmiş açık kaynaklı veritabanı.",
    icon: <DiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "MongoDB",
    content: "Modern uygulamalar için esnek, belge tabanlı NoSQL veritabanı.",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Tailwind CSS",
    content: "Hızlı UI geliştirme için kullanılan utility-first CSS framework'ü.",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Firebase",
    content: "Google'ın sunduğu backend-as-a-service (BaaS) uygulama geliştirme platformu.",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Yazılım geliştirme süreçlerinde kullanılan dağıtık versiyon kontrol sistemi.",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Git depolarını barındıran, geliştiriciler için iş birliği platformu.",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Microsoft tarafından geliştirilen, geniş eklenti desteğine sahip kod editörü.",
    icon: <SiVscodium size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "VIM",
    content: "Yüksek verimlilik odaklı, klavye tabanlı metin editörü.",
    icon: <DiVim size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Prettier",
    content: "Tutarlı bir kod stili sağlayan otomatik kod formatlayıcı.",
    icon: <SiPrettier size={"50px"} color="#f7b93c" />,
    color: "#f7b93c",
  },
  {
    name: "NPM",
    content: "JavaScript dünyası için standart paket yöneticisi.",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Yarn",
    content: "Hızlı, güvenilir ve güvenli bağımlılık (paket) yönetim aracı.",
    icon: <FaYarn size={"50px"} color="#2C8EBB" />,
    color: "#2C8EBB",
  },
  {
    name: "Vercel",
    content: "Frontend ekipleri için geliştirilmiş, Next.js odaklı dağıtım platformu.",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Linux",
    content: "Açık kaynaklı, unix benzeri işletim sistemi çekirdeği.",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Kubuntu",
    content: "KDE Plasma masaüstü ortamını kullanan resmi Ubuntu türevi.",
    icon: <SiKubuntu size={"50px"} color="#0077C4" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Bilgisayarla metin tabanlı komutlar aracılığıyla etkileşim kurma arayüzü.",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "AWS",
    content: "Amazon'un sunduğu kapsamlı ve esnek bulut bilişim platformu.",
    icon: <FaAws size={"50px"} color="#3f51b5" />,
    color: "#000000",
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
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Naresh Khatri</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Web Developer
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
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Merhaba! Ben Enes, anlamlı dijital deneyimler yaratmaya tutkulu bir Fullstack geliştiriciyim. Web geliştirme alanındaki deneyimimle, fikirleri kodlama ve tasarım yoluyla gerçeğe dönüştürmekten keyif alıyorum. Yolculuğum teknolojiye olan merakım ve olumlu bir etki yaratma arzusuyla başladı.
            </p>
            <p className="mb-10">
              Kod yazmadığım zamanlarda beni [Your Interests/Hobbies], yeni teknolojileri keşfederken veya bir sonraki projem üzerine düşünürken kahvemi yudumlarken bulabilirsiniz.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20"> kullandığım şeyler</h1>
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
