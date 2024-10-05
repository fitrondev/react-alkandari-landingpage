import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <div className="container h-screen flex items-center justify-center">
        <div className="lg:w-[787px] flex flex-col items-center justify-center text-center gap-y-4 sm:gap-y-8">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            Temukan kedamaian melalui dekat dengan Tuhan
          </h1>
          <p className="text-sm sm:text-lg lg:text-balance">
            Masjid bukan hanya sebagai tempat ibadah yang nyaman, tapi juga jadi
            tempat berbagai kegiatan, memupuk persaudaraan hingga membangkitkan
            perekonomian, atau tempat apapun yang berkaitan dengan keumatan.
          </p>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant={"secondary"}>Baca Selengkapnya</Button>
            <Button>
              <Phone className="size-4 mr-2" /> Hubungi Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
