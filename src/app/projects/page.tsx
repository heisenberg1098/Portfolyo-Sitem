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
    name: "Kodlama Ördekleri :)",
    description: `CodePen'in yaratıcı oyun alanı ile LeetCode'un problem çözme dünyasının birleşimi. İster yeni başlayan ister deneyimli bir geliştirici olun, kodlama maceralarına katılın ve yaratıcılığınızı konuşturun.`,
    link: "https://www.codingducks.live",
    images: [
      "/assets/projects-screenshots/codingducks/1.png",
      "/assets/projects-screenshots/codingducks/2.png",
      "/assets/projects-screenshots/codingducks/3.png",
      "/assets/projects-screenshots/codingducks/4.png",
      "/assets/projects-screenshots/codingducks/5.png",
    ],
  },
  {
    id: 2,
    name: "Gizli Sohbet",
    description: `Kullanıcıların kimliklerini açığa çıkarmadan bağlantı kurmalarını sağlayan anonim bir mesajlaşma uygulaması. İlgi çekici sohbetler ve gizemli karşılaşmalar için topluluğa katılın.`,
    link: "https://ghostchatt.vercel.app/",
    images: [
      "/assets/projects-screenshots/ghostchat/1.png",
      "/assets/projects-screenshots/ghostchat/2.png",
      "/assets/projects-screenshots/ghostchat/3.png",
      "/assets/projects-screenshots/ghostchat/4.png",
    ],
  },
  {
    id: 3,
    name: "Kupon Bul",
    description: `Özel indirimler ve tasarruf için tek adresiniz. Lüks markalar ve ürünlerdeki en iyi fırsatları bulmak için platformu keşfedin. Akıllı alışveriş topluluğumuza katılın ve premium kuponlara erişin.`,
    link: "https://www.couponluxury.com/",
    images: [
      "/assets/projects-screenshots/couponluxury/1.png",
      "/assets/projects-screenshots/couponluxury/2.png",
      "/assets/projects-screenshots/couponluxury/3.png",
      "/assets/projects-screenshots/couponluxury/4.png",
      "/assets/projects-screenshots/couponluxury/5.png",
    ],
  },
  {
    id: 4,
    name: "JNTUA Sonuç Analizi",
    description: `Öğrencilerin sınıf bazlı sonuçları zahmetsizce analiz etmelerine, karşılaştırmalarına ve görüntülemelerine olanak tanıyan bir uygulama. Akademik yolculuğunuzu takip edin ve değerli içgörüler kazanın.`,
    link: "/projects/4",
    images: ["/assets/projects-screenshots/jra/1.png"],
  },
];

function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projeler</h1>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
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
                  aria-label="Proje Görselleri"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`${project.name} ekran görüntüsü`}
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