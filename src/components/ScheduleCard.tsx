import { MapPin, User } from "lucide-react";
import type { ScheduleItem, SubjectType } from "@/data/scheduleData";

interface ScheduleCardProps {
  item: ScheduleItem;
  index: number;
}

const subjectBgColors: Record<SubjectType, string> = {
  cdc: "#2dd4bf",
  embedded: "#a78bfa",
  ai: "#60a5fa",
  ccn: "#4ade80",
  cloud: "#818cf8",
  ml: "#fb923c",
  web: "#f472b6",
  industry: "#facc15",
  lab: "#38bdf8",
};

const ScheduleCard = ({ item, index }: ScheduleCardProps) => {
  const isPractical = item.type === "practical";
  const hasBatches = item.batches && item.batches.length > 0;
  const accentColor = subjectBgColors[item.subjectType];

  return (
    <div
      className="animate-fade-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-2 sm:gap-3">
        {/* Time Column */}
        <div className="flex flex-col items-end min-w-[56px] sm:min-w-[60px] pt-2">
          <span className="text-sm sm:text-base font-bold text-foreground">
            {item.startTime.replace(" ", "")}
          </span>
          <span className="text-xs sm:text-sm text-muted-foreground font-medium">
            {item.endTime.replace(" ", "")}
          </span>
        </div>

        {/* Card */}
        <div className="flex-1 min-w-0 rounded-xl sm:rounded-2xl bg-card shadow-lg transition-all duration-300 overflow-hidden flex border border-border/30">
          {/* Colored left bar */}
          <div 
            className="w-1.5 shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          
          {/* Content */}
          <div className="flex-1 min-w-0 p-3 sm:p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-card-foreground leading-tight truncate">
                  {item.subject}
                </h3>
                
                {!hasBatches && item.faculty && (
                  <div className="mt-2 flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                    <User className="h-3 w-3 shrink-0" />
                    <span className="font-medium truncate">{item.faculty}</span>
                  </div>
                )}
                
                {!hasBatches && item.room && (
                  <div className="mt-1 flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3 shrink-0" />
                    <span className="font-medium">{item.room}</span>
                  </div>
                )}

                {/* Batch Cards for Practicals */}
                {hasBatches && (
                  <div className="mt-2 sm:mt-3 space-y-2">
                    {item.batches!.map((batch) => (
                      <div
                        key={batch.batch}
                        className="rounded-lg bg-muted/40 px-2 sm:px-3 py-2 border border-border/20"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="rounded-md px-2 py-0.5 text-[10px] sm:text-xs font-bold text-background shrink-0"
                            style={{ backgroundColor: accentColor }}
                          >
                            {batch.batch}
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-card-foreground">
                            {batch.subject}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground pl-1">
                          <span className="font-medium">{batch.faculty}</span>
                          <span>•</span>
                          <span>{batch.room}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Badge */}
              {isPractical && !hasBatches && (
                <span
                  className="rounded-lg px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-bold text-background shrink-0"
                  style={{ backgroundColor: accentColor }}
                >
                  Lab
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
