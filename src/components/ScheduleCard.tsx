import { MapPin, User } from "lucide-react";
import type { ScheduleItem, SubjectType } from "@/data/scheduleData";

interface ScheduleCardProps {
  item: ScheduleItem;
  index: number;
}

const subjectBgColors: Record<SubjectType, string> = {
  cdc: "#2dd4bf",        // teal-400
  embedded: "#a78bfa",   // violet-400
  ai: "#60a5fa",         // blue-400
  ccn: "#4ade80",        // green-400
  cloud: "#818cf8",      // indigo-400
  ml: "#fb923c",         // orange-400
  web: "#f472b6",        // pink-400
  industry: "#facc15",   // yellow-400
  lab: "#38bdf8",        // sky-400
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
      <div className="flex items-start gap-4">
        {/* Time Column */}
        <div className="flex flex-col items-end min-w-[70px] pt-3">
          <span className="text-base font-bold text-foreground">
            {item.startTime.replace(" ", "")}
          </span>
          <span className="text-sm text-muted-foreground font-medium">
            {item.endTime.replace(" ", "")}
          </span>
        </div>

        {/* Card */}
        <div className="flex-1 rounded-2xl bg-card shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] overflow-hidden flex border border-border/30">
          {/* Colored left bar */}
          <div 
            className="w-2 shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          
          {/* Content */}
          <div className="flex-1 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-card-foreground leading-tight">
                  {item.subject}
                </h3>
                
                {!hasBatches && item.faculty && (
                  <div className="mt-3 flex items-center gap-2 text-base text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{item.faculty}</span>
                  </div>
                )}
                
                {!hasBatches && item.room && (
                  <div className="mt-2 flex items-center gap-2 text-base text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">{item.room}</span>
                  </div>
                )}

                {/* Batch Cards for Practicals */}
                {hasBatches && (
                  <div className="mt-4 space-y-3">
                    {item.batches!.map((batch) => (
                      <div
                        key={batch.batch}
                        className="flex items-center gap-4 rounded-xl bg-muted/40 px-4 py-3 border border-border/20"
                      >
                        <span
                          className="rounded-xl px-3 py-1.5 text-sm font-bold text-background"
                          style={{ backgroundColor: accentColor }}
                        >
                          {batch.batch}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-semibold text-card-foreground truncate">
                            {batch.faculty}
                          </p>
                          <p className="text-sm text-muted-foreground font-medium">
                            {batch.room}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Type Badge */}
              {isPractical && !hasBatches && (
                <span
                  className="rounded-xl px-4 py-2 text-sm font-bold text-background shrink-0"
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
