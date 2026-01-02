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
  elective: "#f97316",
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
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Time Column */}
        <div className="flex flex-col items-end min-w-[65px] sm:min-w-[75px] pt-3">
          <span className="text-base sm:text-lg font-bold text-foreground">
            {item.startTime.replace(" ", "")}
          </span>
          <span className="text-sm sm:text-base text-muted-foreground font-medium">
            {item.endTime.replace(" ", "")}
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
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-bold text-card-foreground leading-tight">
                  {item.subject}
                </h3>
                
                {!hasBatches && item.faculty && (
                  <div className="mt-2.5 flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <User className="h-4 w-4 shrink-0" />
                    <span className="font-medium truncate">{item.faculty}</span>
                  </div>
                )}
                
                {!hasBatches && item.room && (
                  <div className="mt-1.5 flex items-center gap-2 text-sm sm:text-base text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span className="font-medium">{item.room}</span>
                  </div>
                )}

                {/* Batch Cards for Practicals */}
                {hasBatches && (
                  <div className="mt-3 sm:mt-4 space-y-2.5">
                    {item.batches!.map((batch) => (
                      <div
                        key={batch.batch}
                        className="rounded-xl bg-muted/40 px-3 sm:px-4 py-2.5 border border-border/20"
                      >
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span
                            className="rounded-lg px-2.5 py-1 text-xs sm:text-sm font-bold text-background shrink-0"
                            style={{ backgroundColor: accentColor }}
                          >
                            {batch.batch}
                          </span>
                          <p className="text-sm sm:text-base font-semibold text-card-foreground">
                            {batch.subject}
                          </p>
                        </div>
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground pl-1">
                          <span className="font-medium">{batch.faculty}</span>
                          <span>•</span>
                          <span>{batch.room}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Badge - only show if subject doesn't already say Lab */}
              {isPractical && !hasBatches && !item.subject.toLowerCase().includes('lab') && (
                <span
                  className="rounded-xl px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold text-background shrink-0"
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
