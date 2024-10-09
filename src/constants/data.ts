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
