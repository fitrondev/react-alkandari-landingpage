// images
import activityImg from "@/assets/activity.jpg";

// icons
import { GiPrayer } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { FaMosque } from "react-icons/fa6";
import { CgViewComfortable } from "react-icons/cg";
import { IconType } from "react-icons";

export type FeatureType = {
  Icons: IconType;
  desc: string;
};

export const featuresData: FeatureType[] = [
  {
    Icons: GiPrayer,
    desc: "Imam Hafidz Qur’an dan Menguasai Berbagai Nagham",
  },
  {
    Icons: TbAirConditioning,
    desc: "Masjid Dilengkapi AC, Memastikan Ruangan Sejuk",
  },
  {
    Icons: FaMosque,
    desc: "Masjid Terbuka 24 Jam dengan Jaminan Keamanan",
  },
  {
    Icons: CgViewComfortable,
    desc: "Menggunakan Karpet Terbaik yang Lembut Dipakai Sujud",
  },
];

export type ActivityType = {
  id: number;
  title: string;
  desc: string;
  img: string;
};

export const activityData: ActivityType[] = [
  {
    id: 1,
    title: "Kajian Fiqih, Kajian Ibadah 4 Madzhab dan Belajar Ngaji",
    desc: "Di setiap harinya, masjid akan melaksanakan banyak kegiatan keislaman, terbuka untuk masyarakat sekitar dan untuk umum.",
    img: activityImg,
  },
  {
    id: 2,
    title: "Sembako Gratis dan Santunan Terhadap Dhuafa",
    desc: "Tersedia paket sembako gratis dan juga rutin melaksanakan kegiatan santunan terhadap dhuafa.",
    img: activityImg,
  },
  {
    id: 3,
    title: "Pendidikan dan Pelatihan Kewirausahaan",
    desc: "Masjid rutin membina jama’ah di segala usia agar memiliki keterampilan dan minat belajar yang tinggi demi masa depan yang cerah.",
    img: activityImg,
  },
];

import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa6";

export type SocialType = {
  Icons: IconType;
  link: string;
};

export const socialData: SocialType[] = [
  {
    Icons: FaFacebookF,
    link: "https://www.facebook.com",
  },
  {
    Icons: GrInstagram,
    link: "https://www.instagram.com",
  },
  {
    Icons: FaTiktok,
    link: "https://www.tiktok.com",
  },
];
