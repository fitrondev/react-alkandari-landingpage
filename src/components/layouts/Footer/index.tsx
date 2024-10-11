import Logo from "@/components/Logo";
import { socialData } from "@/constants/data";

const Footer = () => {
  return (
    <footer className="bg-primary py-5 text-white">
      <div className="container flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-4">
          {socialData.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="bg-background size-7 flex items-center justify-center
              group hover:bg-green-950 rounded-full transition-colors
              ">
              <item.Icons
                className="size-4 text-primary
              group-hover:text-background transition-colors
              "
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
