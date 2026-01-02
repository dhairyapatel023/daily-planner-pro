import { Coffee } from "lucide-react";

interface BreakCardProps {
  startTime: string;
  endTime: string;
  durationHours: number;
}

const BreakCard = ({ startTime, endTime, durationHours }: BreakCardProps) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-muted-foreground/30 rounded-xl bg-muted/30">
      <Coffee className="w-5 h-5 text-muted-foreground" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
        <span className="text-sm text-muted-foreground">
          {startTime} - {endTime}
        </span>
        <span className="text-sm font-medium text-muted-foreground">
          ({durationHours} hr break)
        </span>
      </div>
    </div>
  );
};

export default BreakCard;
