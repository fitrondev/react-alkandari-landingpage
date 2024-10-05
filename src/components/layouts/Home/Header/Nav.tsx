import { cn } from "@/lib/utils";

type NavProps = {
  directionCls?: string;
  linkCls?: string;
};

const NavData = [
  {
    id: 1,
    title: "Beranda",
    link: "/",
  },
  {
    id: 2,
    title: "Blog",
    link: "/about",
  },
  {
    id: 3,
    title: "Kegiatan",
    link: "/contact",
  },
  {
    id: 4,
    title: "Tentang",
    link: "/contact",
  },
  {
    id: 5,
    title: "Kontak",
    link: "/contact",
  },
];

const Nav = ({ directionCls, linkCls }: NavProps) => {
  return (
    <nav>
      <ul className={cn("", directionCls)}>
        {NavData.map((item) => (
          <li
            key={item.id}
            className={cn(
              "text-lg cursor-pointer hover:text-primary transition-all duration-300 ease-in-out",
              linkCls
            )}>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
