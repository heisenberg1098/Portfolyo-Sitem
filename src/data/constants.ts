// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  VIM = "vim",
  VERCEL = "vercel",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription:
      "1995’ten beri web’in bel kemiği. Eski ama hâlâ oyunun içinde. Ne yaptığını bilenlerin dili. 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript’in güvenlikli ve disiplinli hali. Hızlı değil, doğru kod yazarım. 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription:
      "İnternetin dedesi ama hâlâ ayakta. Temeli sağlam olmayan bina ayakta durmaz. 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },

  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription:
      "Sade, şık ve gözü yormayan tasarımlar. Renk uyumu işin namusu. 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },

  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using"
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "Frontend karmaşasını alır, yerine düzen koyar. Rahat yazılır, rahat yönetilir. 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },

  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "Nazlıdır ama güçlüdür. Doğru kullanıldığında sahne onun. 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },

  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription:
      "Utility class’larla hız, düzen ve kontrol. Temiz iş sevenlerin tercihi. 🌪️🔥",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },

  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription:
      "JavaScript ‘ben backend de yaparım’ dedi, yaptı. Sağlam ve hızlı. 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription:
      "Az laf, çok iş. Middleware’lerle işi kökünden çözer. 🚂💨",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "PostgreSQL",
    shortDescription:
      "Disiplinli, güçlü ve güvenilir. Büyük işlerin veri tabanı. 🐘💅",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription:
      "Esnek yapı, hızlı geliştirme. NoSQL tarafında eli güçlü. 💪🍃",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },

  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription:
      "Kodun sigortası. Ne bozulduysa geri alırız. 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },

  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription:
      "Takım işinin merkezi. PR atılır, kalite konuşur. 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Prettier",
    shortDescription:
      "Kod dağınıksa huzur yok. Temizler, düzeltir, rahatlatır. 🧹✨",
    color: "#f7b93a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
  },

  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription:
      "Paket işlerini bana bırak. Kur, çalıştır, devam et. 📦💯",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },

  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "Hızlı başlamak isteyenler için birebir. Ama bağımlılığı iyi yönetmek lazım. 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "WordPress",
    shortDescription:
      "CMS’in emektarı. Doğru kullanılırsa hâlâ iş görür. 🧓👴",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },

  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription:
      "Terminal dostumdur. Kontrol bende olsun diyenlerin yolu. 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },

  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Docker",
    shortDescription:
      "Nerede çalışır derdi yok. Paketle, gönder, çalışsın. 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },

  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NginX",
    shortDescription:
      "Trafik yönetimi bende. Hızlı, stabil, sessiz güç. 🚗💨",
    color: "#008000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },

  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "AWS",
    shortDescription:
      "Güçlü ama sabır ister. Doğru kurarsan sırtın yere gelmez. 🌐👨‍💻",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },

  [SkillNames.VIM]: {
    id: 23,
    name: "vim",
    label: "Vim",
    shortDescription:
      "Çıkışı bilen efsanedir. Hız ve refleks işi. 🚪🏃",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },

  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Deploy’u kafaya takma. Gönder, yayına al, devam et. 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};


export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};
export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Ara 2024",
    endDate: "Devam Ediyor",
    title: "Full Stack Mühendisi",
    company: "OmniNexus",
    description: [
      "Çeşitli modülleri olan, ölçeklenebilir full-stack uygulamalar geliştirdim ve uygulama mimarisini iyileştirdim.",
      "Veritabanı performansını artırmak için sorguları optimize ettim ve sistem yükünü düşürdüm.",
      "Teknik strateji ve mimari karar süreçlerinde ekip ile birlikte çalışarak doğru çözüm yolları belirledim.",
      "Front-end’ten back-end’e kadar tüm katmanlarda temiz, sürdürülebilir ve test edilebilir kod yazdım.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.POSTGRES,
      SkillNames.DOCKER,
      SkillNames.AWS,
    ],
  },
  {
    id: 2,
    startDate: "Nis 2022",
    endDate: "Ara 2024",
    title: "Freelance Yazılım Geliştirici",
    company: "Live & Learn / Kişisel Projeler",
    description: [
      "Farklı sektörlerden müşteriler için **custom web çözümleri** tasarlayıp geliştirdim.",
      "**Proje yaşam döngüsünün tamamını** (tasarım → geliştirme → yayına alma) ben yönettim.",
      "GitHub’da birçok açık kaynak projesi oluşturdum ve paylaştım, özellikle **Nisan_Lina** gibi kullanıcı arayüzü odaklı projeler yaptım.",
      "Müşteri ihtiyaçlarını doğru analiz edip, **performanslı ve sürdürülebilir uygulamalar** teslim ettim.",
      "Teknoloji seçiminden deploy sürecine kadar tüm aşamalarda aktif iletişim ve koordinasyon sağladım.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.WORDPRESS,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Uyarı: Açık mod saf parlaklıktan milyonlarca lümen yayıyor!",
    "Dikkat: Açık moda giriliyor! Evde denemeyin.",
    "Bu kadar parlaklığı sadece eğitimli profesyoneller kaldırabilir. Güneş gözlüğüyle devam edin!",
    "Hazır ol! Açık mod, her şeyi geleceğinden bile daha parlak yapacak.",
    "Açık moda geçiliyor... Gözlerin buna hazır mı, emin misin?",
  ],
  dark: [
    "Açık mod mu? Delirdin sandım... ama karanlık tarafa tekrar hoş geldin!",
    "Karanlık moda geçiliyor... Aydınlık tarafta hayat nasıldı?",
    "Karanlık mod aktif! Gözlerim adına da teşekkür ederim.",
    "Gölgeler dünyasına tekrar hoş geldin. Aydınlıkta hayat nasıldı?",
    "Karanlık mod açık! Sonunda gerçek kaliteyi anlayan biri.",
  ],
};
