import Marquee from "react-fast-marquee";
// import ImgTest from "@/assets/activity.jpg";

const ImagesMarquee = () => {
  return (
    <Marquee loop={0} play pauseOnHover>
      {Array.from({ length: 8 }, (_, i) => (
        <img
          key={i}
          src={`https://picsum.photos/id/${Math.floor(
            Math.random() * 100
          )}/350/250.webp`}
          alt=""
          loading="lazy"
          className="object-cover w-[350px] h-[250px] rounded-xl mx-5"
        />
      ))}
    </Marquee>
  );
};
export default ImagesMarquee;
