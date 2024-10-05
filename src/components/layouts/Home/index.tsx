import HeroImg from "@/assets/hero.jpg";
import Hero from "./Hero";
import Header from "./Header";

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen text-white">
      <Header />
      <Hero />
      <img
        src={HeroImg}
        alt=""
        className="size-full absolute left-0 top-0 object-cover -z-20"
      />
      <div className="size-full absolute left-0 top-0 -z-10 bg-[#165648]/90 mix-blend-multiply" />
    </div>
  );
};
export default HomeLayout;
