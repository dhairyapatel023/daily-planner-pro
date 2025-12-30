import { format } from "date-fns";

interface ScheduleHeaderProps {
  selectedDay: string;
}

const ScheduleHeader = ({ selectedDay }: ScheduleHeaderProps) => {
  const today = new Date();
  const dayOfMonth = format(today, "d");
  const monthYear = format(today, "MMM yyyy").toUpperCase();
  const dayName = format(today, "EEE").toUpperCase();

  return (
    <div className="flex items-start justify-between mb-6 gap-4">
      <div className="min-w-0 flex-1">
        <h1 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight uppercase">
          Schedule
        </h1>
        <p className="text-muted-foreground mt-2 text-base sm:text-lg font-bold uppercase tracking-wide">
          {selectedDay}
        </p>
      </div>
      
      <div className="bg-primary brutal-border brutal-shadow-lg p-3 sm:p-4 text-center">
        <span className="text-xs sm:text-sm font-bold text-primary-foreground block">{dayName}</span>
        <span className="text-3xl sm:text-5xl font-black text-primary-foreground block leading-none">{dayOfMonth}</span>
        <p className="text-xs sm:text-sm font-bold text-primary-foreground mt-1">{monthYear}</p>
      </div>
    </div>
  );
};

export default ScheduleHeader;
