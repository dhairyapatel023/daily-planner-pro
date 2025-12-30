import { MapPin, User } from "lucide-react";
import type { ScheduleItem, SubjectType } from "@/data/scheduleData";

interface ScheduleCardProps {
  item: ScheduleItem;
  index: number;
}

const subjectBgColors: Record<SubjectType, string> = {
  cdc: "hsl(170 80% 45%)",
  embedded: "hsl(270 80% 65%)",
  ai: "hsl(210 100% 60%)",
  ccn: "hsl(140 80% 50%)",
  cloud: "hsl(250 80% 65%)",
  ml: "hsl(25 100% 55%)",
  web: "hsl(330 90% 60%)",
  industry: "hsl(50 100% 50%)",
  lab: "hsl(195 100% 50%)",
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
        <div className="flex flex-col items-center min-w-[60px] sm:min-w-[70px] pt-2">
          <span className="text-sm sm:text-base font-black text-foreground bg-secondary px-2 py-1 brutal-border brutal-shadow-sm">
            {item.startTime.replace(" ", "")}
          </span>
          <div className="w-0.5 h-4 bg-foreground" />
          <span className="text-xs sm:text-sm font-bold text-muted-foreground">
            {item.endTime.replace(" ", "")}
          </span>
        </div>

        {/* Card */}
        <div 
          className="flex-1 min-w-0 bg-card brutal-border brutal-shadow brutal-hover overflow-hidden"
          style={{ borderLeftWidth: '6px', borderLeftColor: accentColor }}
        >
          {/* Content */}
          <div className="p-3 sm:p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-black text-card-foreground leading-tight uppercase tracking-wide">
                  {item.subject}
                </h3>
                
                {!hasBatches && item.faculty && (
                  <div className="mt-2 flex items-center gap-2 text-xs sm:text-sm text-foreground">
                    <User className="h-4 w-4 shrink-0" strokeWidth={3} />
                    <span className="font-bold">{item.faculty}</span>
                  </div>
                )}
                
                {!hasBatches && item.room && (
                  <div className="mt-1 flex items-center gap-2 text-xs sm:text-sm text-foreground">
                    <MapPin className="h-4 w-4 shrink-0" strokeWidth={3} />
                    <span className="font-bold">{item.room}</span>
                  </div>
                )}

                {/* Batch Cards for Practicals */}
                {hasBatches && (
                  <div className="mt-3 space-y-2">
                    {item.batches!.map((batch) => (
                      <div
                        key={batch.batch}
                        className="bg-muted brutal-border p-2 sm:p-3"
                        style={{ borderWidth: '2px' }}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="px-2 py-0.5 text-[10px] sm:text-xs font-black text-foreground brutal-border brutal-shadow-sm shrink-0"
                            style={{ backgroundColor: accentColor, borderWidth: '2px' }}
                          >
                            {batch.batch}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-card-foreground uppercase">
                            {batch.subject}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-muted-foreground pl-1 font-semibold">
                          <span>{batch.faculty}</span>
                          <span className="font-black">•</span>
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
                  className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-black text-foreground brutal-border brutal-shadow-sm shrink-0 uppercase"
                  style={{ backgroundColor: accentColor, borderWidth: '2px' }}
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
