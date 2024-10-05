import LogoImg from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

type LogoProps = {
  imgCls?: string;
};

const Logo = ({ imgCls }: LogoProps) => {
  return (
    <div className="flex items-center gap-3">
      <img src={LogoImg} alt="" className={cn("size-9", imgCls)} />
      <h1 className="text-xl font-bold">
        <span className="hidden sm:inline">Masjid</span> Al-Kandari
      </h1>
    </div>
  );
};
export default Logo;
