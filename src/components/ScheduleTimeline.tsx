import type { ScheduleItem } from "@/data/scheduleData";
import ScheduleCard from "./ScheduleCard";

interface ScheduleTimelineProps {
  items: ScheduleItem[];
}

const ScheduleTimeline = ({ items }: ScheduleTimelineProps) => {
  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground text-lg">No classes scheduled</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-8">
      {items.map((item, index) => (
        <ScheduleCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default ScheduleTimeline;
