import Title from "@/components/Title";
import ImagesMarquee from "./ImagesMarquee";

const Photos = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container space-y-12">
        <Title
          title="Foto"
          desc="Menjelajahi Keindahan Masjid Dari Berbagai Sisi"
        />

        <ImagesMarquee />
      </div>
    </section>
  );
};
export default Photos;
