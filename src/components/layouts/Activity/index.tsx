import Title from "@/components/Title";
import { activityData } from "@/constants/data";
import ActivityCard from "./ActivityCard";

const Activity = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container bg-primary lg:rounded-lg text-background py-10 lg:p-14 space-y-12">
        <Title
          title="Kegiatan"
          desc="Berbagai Kegiatan Menarik Yang Tersedia di Masjid"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-4 sm:gap-y-10">
          {activityData.map((item) => (
            <ActivityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Activity;
