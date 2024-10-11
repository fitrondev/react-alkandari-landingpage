import Title from "@/components/Title";
import MosqueMaps from "./MosqueMaps";

const Maps = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container space-y-12">
        <Title title="Lokasi" desc="Lokasi Masjid Mudah Diakses" />

        <MosqueMaps />
      </div>
    </section>
  );
};
export default Maps;
