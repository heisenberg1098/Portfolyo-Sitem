import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
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
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
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
          Websiteyi ziyaret et
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
  {
    id: "3D Projem",
    category: "Web Uygulaması",
    title: "M.Enes Yalçın Portfolio",
    src: "/assets/projects-screenshots/codingducks/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://heisenberg1098.github.io/Blog-Sitem",
    github: "https://github.com/heisenberg1098",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Benim Kodlamam = LeetCode + CodePen + CSS Battles
          </TypographyP>
          <TypographyP className="font-mono ">
            Coding Ducks, kodlama becerilerini geliştirdiğin ve gerçek zamanlı düellolara katıldığın dijital bir arena. Kendi gelişimini takip edip rozetler kazanırken, liderlik tablosunda adını en üste yazdırabilirsin. Bu serüvene katılmaya ve kodun dünyasında fark yaratmaya hazır mısın?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Problemler </TypographyH3>
          <p className="font-mono mb-2">
            Çeşitli programlama dillerinde algoritma yeteneklerini geliştirebilmen için LeetCode benzeri kodlama problemlerini çözebileceğin bir yapı kurguladım; bu sayede problem çözme becerilerini en üst seviyeye taşıyabilirsin
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/problems.png`,
              `${BASE_PATH}/codingducks/problem.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Ducklets</TypographyH3>
          <p className="font-mono mb-2">
            Tıpkı CodePen'de olduğu gibi ama üzerine sosyal bir etkileşim katarak, çok oyunculu bir ortamda diğer yazılımcılarla gerçek zamanlı olarak birlikte kod yazabileceğiniz bir ekosistem oluşturdum
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ducklets.png`,
              `${BASE_PATH}/codingducks/ducklet1.png`,
              `${BASE_PATH}/codingducks/ducklet2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">UI Battles </TypographyH3>
{/* Bölüm: UI/CSS Challenge */}
          <p className="font-mono mb-2">
            HTML, CSS ve JS kullanarak arayüz bileşenleri oluşturmanız için kendinize meydan okuyun. 
            Hazırladığım otomatik benzerlik puanlama sistemiyle tasarımınızın doğruluğu hakkında anında geri bildirim alın.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/css-battles.png`,
              `${BASE_PATH}/codingducks/css-battle.png`,
              `${BASE_PATH}/codingducks/css-battle2.png`,
            ]}
          />

          {/* Bölüm: Yarışmalar (Contests) */}
          <TypographyH3 className="my-4 mt-8">Yarışmalar</TypographyH3>
          <p className="font-mono mb-2">
            Kodlama yarışmaları düzenleyebilir veya mevcut olanlara katılabilirsiniz. Bu özelliği, 
            üniversite dönemimde üç farklı yarışmaya başarıyla ev sahipliği yapmak için bizzat kullandım.
          </p>
          <SlideShow images={[`${BASE_PATH}/codingducks/contests.png`]} />

          {/* Bölüm: Oyun Alanı (Playground) */}
          <TypographyH3 className="my-4 mt-8">Oyun Alanı</TypographyH3>
          <p className="font-mono mb-2">
            Geliştirdiğim çok yönlü çevrimiçi kod editörü sayesinde yazdığınız kodları hiçbir kuruluma 
            gerek kalmadan anında test edebilir ve çalıştırabilirsiniz.
          </p>
          <SlideShow images={[`${BASE_PATH}/codingducks/playground.png`]} />

          {/* Bölüm: Kullanıcılar ve Profil */}
          <TypographyH3 className="my-4 mt-8">Kullanıcı Deneyimi</TypographyH3>
          <p className="font-mono mb-2">
            Detaylı kullanıcı profilleri ve aktivite takibi ile gelişiminizi izleyebilir, 
            yaptığınız projelerle rozetler kazanabilir ve sıralamada üst basamaklara tırmanabilirsiniz.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/users.png`,
              `${BASE_PATH}/codingducks/user.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "Coupon site",
    title: "Kupon Bul",
    src: "/assets/projects-screenshots/couponluxury/landing.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.couponluxury.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div><TypographyP className="font-mono ">
            CouponLuxury, parmağınızı bile kıpırdatmadan en iyi fırsatları yakalamanız için tasarladığım bir platform. 
            İster en yeni indirimlerin peşinde olun, ister favori mağazalarınızda tasarruf etmeye çalışın, 
            CouponLuxury ile her zaman avantajlısınız.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <p className="font-mono mb-2 mt-4">
            Siteye girdiğiniz anda sizi en güncel kuponlar ve bütçenizi koruyacak 
            en üst seviye fırsatlar karşılıyor.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/landing.png`]} />

          <TypographyH3 className="my-4 ">Mağazalar</TypographyH3>
          <p className="font-mono mb-2">
            Özel fırsatlarla ve indirimlerle dolu kapsamlı bir mağaza listesine göz atın. 
            Bu platformu, her indirim döneminde size özel bir VIP kart sunuyormuş gibi hissettirecek şekilde kurguladım.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/stores.png`,
              `${BASE_PATH}/couponluxury/store.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Kategoriler</TypographyH3>
          <p className="font-mono mb-2">
            Moda, teknoloji veya gıda; ilgi alanınız ne olursa olsun her şeyi burada düzenli bir şekilde bulabilirsiniz. 
            Sonsuz kaydırmaya son; sadece bir kategori seçin ve en iyi tekliflere anında ulaşın.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/categories.png`]} />

          <TypographyH3 className="my-4 mt-8">Özel İçerik Yönetim Sistemi (CMS)</TypographyH3>
          <p className="font-mono mb-2">
            Vue.js ile güçlendirdiğim bu sistem, içeriği her an dinamik ve güncel tutmamı sağlıyor. 
            Flaş indirimlerden sınırlı süreli tekliflere kadar geliştirdiğim CMS, her şeyin canlı ve alakalı kalmasını sağlıyor.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/cms-1.png`,
              `${BASE_PATH}/couponluxury/cms-2.png`,
            ]}
          />

          <p className="font-mono mb-2 mt-5">
            Ayrıca sisteme kişiselleştirilmiş fırsat önerileri, kullanıcı dostu arama özellikleri ve 
            her cihazda sorunsuz çalışan şık, duyarlı (responsive) bir tasarım gibi ekstra dokunuşlar ekledim.
          </p>
          <p className="font-mono mb-2">
            CouponLuxury sadece bir web sitesi değil; hiçbir fırsatı kaçırmamanızı sağlayan 
            kişisel indirim avcısı asistanınızdır!
          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Travel",
    title: "Rezervasyon Masası",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://thebookingdesk.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Booking Desk, seyahat tutkunlarının hayallerini gerçeğe dönüştürmek için tasarladığım kapsamlı bir danışmanlık merkezi. 
            Akıcı ve görsel olarak etkileyici animasyonlara odaklanarak kurguladığım bu sitede gezinmek, adeta gidilecek yerlerin sizi çağırdığını hissettirecek kadar doğal ve zahmetsiz.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <p className="font-mono mb-2 mt-8">
            Sizi karşılayan şık ve modern arayüz; dünyanın dört bir yanından en güncel seyahat ipuçlarını, 
            fırsatları ve mutlaka görülmesi gereken noktaları içeriyor.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />

          <TypographyH3 className="my-4 mt-8">Blog Yazıları</TypographyH3>
          <p className="font-mono mb-2">
            Seyahat uzmanları tarafından özenle hazırlanan makalelere göz atın. İster gizli kalmış rotalar, 
            ister seyahat tüyoları arıyor olun; geliştirdiğim blog bölümü her türlü ihtiyacınıza cevap veriyor.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/blogs.png`,
              `${BASE_PATH}/the-booking-desk/blog.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Sanity CMS Entegrasyonu</TypographyH3>
          <p className="font-mono mb-2">
            İçeriği her zaman taze ve güncel tutabilmek için Sanity CMS entegrasyonunu gerçekleştirdim. 
            Bu sayede tüm içerikleri kolayca yönetebiliyor ve size her zaman en yeni, en doğru bilgilerin ulaşmasını sağlıyorum.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />

          <p className="font-mono mb-2 my-8">
            Lighthouse testlerinde elde ettiği %100 performans skoruyla The Booking Desk, sadece estetik değil, 
            aynı zamanda teknik olarak da kusursuz bir yapıya sahip. İster bir sonraki maceranızı planlayın, 
            ister sadece hayallere dalın; platformum size hem bilgilendirici hem de keyifli, üst düzey bir deneyim sunuyor.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "Blog Sitem",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "Degiştirilecek",
    github:"https://github.com/heisenberg1098",
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
        <div><TypographyP className="font-mono ">
            Dijital oyun alanıma hoş geldiniz! Burası, yaratıcılığın kodla en etkileyici ve özgün şekilde buluştuğu yer.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">
            Etkileyici 3D Objeler
          </TypographyH3>
          <p className="font-mono mb-2">
            O 3D klavye modelini gördünüz mü? Evet, onu ben yaptım! Web sayfasında 3D olarak işlenen 
            bu interaktif klavye 🤯, her bir tuşa bastığınızda yeteneklerimi eğlenceli bir şekilde 
            ortaya çıkarıyor. Yazı yazmayı adeta bir sanat formuna dönüştürdüm.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />

          <TypographyH3 className="my-4 ">Uzay Teması</TypographyH3>
          <p className="font-mono mb-2">
            Koyu arka plan ve süzülen parçacıklar; bu dünyanın dışından gelen, bambaşka bir atmosfer.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />

          <TypographyH3 className="my-4 mt-8">Projeler</TypographyH3>
          <p className="font-mono mb-2">
            En iyi kişisel ve freelance projelerim — gereksiz hiçbir şey yok, sadece en iyiler.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            Bu site sadece bir portfolyo değil; bütünüyle bir ruhu ve tarzı olan dijital bir deneyim.
          </p>
        </div>
      );
    },
  },
  {
    id: "ghostchat",
    category: "Anonymous chat",
    title: "Gizli Sohbet",
    src: "/assets/projects-screenshots/ghostchat/1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://ghostchat.vercel.app",
    github:"https://github.com/heisenberg1098",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div><TypographyP className="font-mono ">
            Ghostchat, arkanda hiçbir iz bırakmadan anonim mesajlar göndermen için geliştirdiğim özel bir platform. 
            Supabase altyapısıyla güçlendirdiğim bu projede temel odak noktam; her şeyin gizli, güvenli ve sade kalması. 
            İster bir sır paylaşıyor, ister geri bildirim veriyor, isterseniz de sadece eğleniyor olun; Ghostchat sesinizin 
            duyulmasını sağlarken kimliğinizi tamamen gizli tutar. Endişe etmeden, dilediğinizi söyleyin.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/1.png`,
              `${BASE_PATH}/ghostchat/2.png`,
              `${BASE_PATH}/ghostchat/3.png`,
              `${BASE_PATH}/ghostchat/4.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "jra",
    category: "Result analyzer",
    title: "JNTUA Sonuç Analizörü",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: ["1.png"],
    live: "https://naresh-khatri.github.io/JNTUA-result-analyser-spa/#/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Sonuç Analizörü, akademik sonuçlara erişim deneyimini basitleştirmek ve iyileştirmek için tasarladığım devrim niteliğinde bir araçtı. 
            Üniversitenin resmi sonuç sayfası ile kullanıcılar arasında güçlü bir köprü (proxy) görevi görerek, veri analizini çok daha hızlı ve 
            verimli hale getiren bir dizi özellik sunuyordu. İşte bu projeyi öne çıkaran detaylar:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />

          <TypographyH3 className="my-4 mt-8">
            Zahmetsiz Sonuç Erişimi
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Resmi sitedeki binlerce satır arasında kaybolmak yerine, tek bir öğrenci numarasıyla tüm sonuçlarınıza anında ulaşmanızı sağlayan bir yapı kurdum.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Sınıf Bazlı Sonuçlar</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Belirli bir numara aralığı girerek tüm sınıfın sonuçlarını tek seferde görüntüleme imkanı sundum; manuel arama ve filtreleme derdine son verdim.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Akademik Kadro Özellikleri</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Öğretim görevlilerinin toplu sonuçları Excel formatında indirmesine olanak tanıyarak, idari iş yüklerini önemli ölçüde hafiflettim.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">
            Gelişmiş Veri Analizi
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Her sonuç belgesi, şu ek analiz özellikleriyle birlikte geliyordu:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>GNO (GPA) Hesaplamaları:</strong> Genel not ortalamanızı kolayca takip edin.
                </li>
                <li>
                  <strong>Grafikler:</strong> Akademik performansınızı kapsamlı grafiklerle görselleştirin.
                </li>
                <li>
                  <strong>Gelecek Öngörüleri:</strong> Mevcut performansınıza dayalı potansiyel sonuçlar hakkında içgörü kazanın.
                </li>
                <li>
                  <strong>Alttan Alınan Ders Takibi:</strong> Kalan derslerinizi tek bakışta kontrol edin.
                </li>
              </ul>
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Performans</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Uygulama, resmi siteden çok daha hızlı ve verimli çalışarak pürüzsüz bir kullanıcı deneyimi sunuyordu.
            </li>
          </ul>

          <TypographyH3 className="my-4 mt-8 text-red-500">Projenin Durumu</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Maalesef Mayıs 2022 itibarıyla, resmi JNTUA sonuç sitesine CAPTCHA doğrulaması eklenmesi nedeniyle uygulama çalışmayı durdurdu. 
              Bu durum, uygulamanın sunduğu kesintisiz veri çekme işlevini engelledi. JNTUA Sonuç Analizörü, kapanana kadar binlerce öğrenci ve 
              akademisyenin akademik verilerle etkileşim kurma biçimini kökten değiştiren vazgeçilmez bir araç oldu.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
