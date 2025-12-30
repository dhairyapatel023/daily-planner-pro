import { format } from "date-fns";

interface ScheduleHeaderProps {
  selectedDay: string;
}

const ScheduleHeader = ({ selectedDay }: ScheduleHeaderProps) => {
  const today = new Date();
  const dayOfMonth = format(today, "d");
  const monthYear = format(today, "MMM yyyy");
  const dayName = format(today, "EEEE");

  return (
    <div className="flex items-start justify-between mb-8">
      <div>
        <h1 className="text-5xl font-bold text-foreground tracking-tight">
          Schedule
        </h1>
        <p className="text-muted-foreground mt-2 text-xl font-medium">
          {selectedDay}
        </p>
      </div>
      
      <div className="text-right">
        <div className="flex items-baseline gap-2 justify-end">
          <span className="text-base text-muted-foreground">{dayName}</span>
          <span className="text-5xl font-bold text-primary">{dayOfMonth}</span>
        </div>
        <p className="text-base text-muted-foreground mt-1">{monthYear}</p>
      </div>
    </div>
  );
};

export default ScheduleHeader;
