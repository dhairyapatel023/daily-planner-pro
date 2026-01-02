import { Coffee } from "lucide-react";

interface BreakCardProps {
  startTime: string;
  endTime: string;
  durationHours: number;
}

const BreakCard = ({ startTime, endTime, durationHours }: BreakCardProps) => {
  const accentColor = "#94a3b8";

  return (
    <div className="animate-fade-in">
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Time Column */}
        <div className="flex flex-col items-end min-w-[65px] sm:min-w-[75px] pt-3">
          <span className="text-base sm:text-lg font-bold text-foreground">
            {startTime.replace(" ", "")}
          </span>
          <span className="text-sm sm:text-base text-muted-foreground font-medium">
            {endTime.replace(" ", "")}
          </span>
        </div>

        {/* Card */}
        <div className="flex-1 min-w-0 rounded-2xl bg-card shadow-lg transition-all duration-300 overflow-hidden flex border border-border/30">
          {/* Colored left bar */}
          <div 
            className="w-2 shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          
          {/* Content */}
          <div className="flex-1 min-w-0 p-4 sm:p-5">
            <div className="flex items-center gap-3">
              <Coffee className="h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-card-foreground">
                  Break
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground font-medium">
                  {durationHours} hour{durationHours !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakCard;
