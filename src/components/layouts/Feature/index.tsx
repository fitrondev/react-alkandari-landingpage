import Title from "@/components/Title";
import { featuresData } from "@/constants/data";

const Feature = () => {
  return (
    <section className="py-10 lg:pt-36 lg:pb-20">
      <div className="container space-y-12">
        <Title title="Fitur" desc="Semua Kenyamanan dalam Satu Masjid" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-y-4">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[200px] flex flex-col items-center text-center gap-4">
              <div className="size-[130px] bg-primary rounded-full flex items-center justify-center">
                <item.Icons className="text-7xl text-white" />
              </div>

              <div>
                <p className="font-semibold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Feature;
