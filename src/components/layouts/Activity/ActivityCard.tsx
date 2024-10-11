import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ActivityType } from "@/constants/data";

type ActivityCardProps = {
  item: ActivityType;
};

const ActivityCard = ({ item }: ActivityCardProps) => {
  return (
    <Card className="w-[320px] h-[400px]">
      <CardHeader>
        <CardTitle className="line-clamp-2 cursor-pointer">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3">{item.desc}</p>
      </CardContent>
      <CardFooter>
        <img
          src={item.img}
          alt=""
          className="rounded-md cursor-pointer"
          loading="lazy"
        />
      </CardFooter>
    </Card>
  );
};
export default ActivityCard;
