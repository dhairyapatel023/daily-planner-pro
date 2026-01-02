import type { ScheduleItem } from "@/data/scheduleData";
import ScheduleCard from "./ScheduleCard";
import BreakCard from "./BreakCard";

interface ScheduleTimelineProps {
  items: ScheduleItem[];
}

interface BreakItem {
  type: 'break';
  startTime: string;
  endTime: string;
  durationHours: number;
}

type TimelineItem = { type: 'class'; item: ScheduleItem; index: number } | BreakItem;

const parseTime = (timeStr: string): number => {
  const [time, period] = timeStr.split(' ');
  let [hours, minutes] = time.split(':').map(Number);
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  return hours * 60 + minutes;
};

const formatTime = (minutes: number): string => {
  let hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;
  return `${hours}:${mins.toString().padStart(2, '0')} ${period}`;
};

const detectBreaks = (items: ScheduleItem[]): TimelineItem[] => {
  if (items.length === 0) return [];
  
  const result: TimelineItem[] = [];
  
  for (let i = 0; i < items.length; i++) {
    result.push({ type: 'class', item: items[i], index: i });
    
    if (i < items.length - 1) {
      const currentEnd = parseTime(items[i].endTime);
      const nextStart = parseTime(items[i + 1].startTime);
      
      if (nextStart > currentEnd) {
        const durationMinutes = nextStart - currentEnd;
        const durationHours = durationMinutes / 60;
        
        result.push({
          type: 'break',
          startTime: formatTime(currentEnd),
          endTime: formatTime(nextStart),
          durationHours,
        });
      }
    }
  }
  
  return result;
};

const ScheduleTimeline = ({ items }: ScheduleTimelineProps) => {
  if (items.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground text-base">No classes scheduled</p>
      </div>
    );
  }

  const timelineItems = detectBreaks(items);

  return (
    <div className="space-y-3 sm:space-y-4 pb-6">
      {timelineItems.map((timelineItem, idx) => 
        timelineItem.type === 'break' ? (
          <BreakCard
            key={`break-${idx}`}
            startTime={timelineItem.startTime}
            endTime={timelineItem.endTime}
            durationHours={timelineItem.durationHours}
          />
        ) : (
          <ScheduleCard
            key={timelineItem.item.id}
            item={timelineItem.item}
            index={timelineItem.index}
          />
        )
      )}
    </div>
  );
};

export default ScheduleTimeline;
