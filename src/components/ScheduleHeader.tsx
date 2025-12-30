import { format } from "date-fns";

interface ScheduleHeaderProps {
  selectedDay: string;
}

const ScheduleHeader = ({ selectedDay }: ScheduleHeaderProps) => {
  const today = new Date();
  const dayOfMonth = format(today, "d");
  const monthYear = format(today, "MMM yyyy");
  const dayName = format(today, "EEE");

  return (
    <div className="flex items-start justify-between mb-5 gap-2">
      <div className="min-w-0 flex-1">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
          Schedule
        </h1>
        <p className="text-muted-foreground mt-1 text-base sm:text-lg font-medium">
          {selectedDay}
        </p>
      </div>
      
      <div className="text-right shrink-0">
        <div className="flex items-baseline gap-1.5 justify-end">
          <span className="text-xs sm:text-sm text-muted-foreground">{dayName}</span>
          <span className="text-3xl sm:text-4xl font-bold text-primary">{dayOfMonth}</span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">{monthYear}</p>
      </div>
    </div>
  );
};

export default ScheduleHeader;
