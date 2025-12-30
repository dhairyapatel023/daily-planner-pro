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
        <div className="flex flex-col items-end min-w-[60px] pt-2">
          <span className="text-sm font-semibold text-foreground/80">
            {item.startTime.replace(" ", "")}
          </span>
          <span className="text-xs text-muted-foreground">
            {item.endTime.replace(" ", "")}
          </span>
        </div>

        {/* Card */}
        <div className="flex-1 rounded-2xl bg-card shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden flex">
          {/* Colored left bar */}
          <div 
            className="w-1.5 shrink-0"
            style={{ backgroundColor: accentColor }}
          />
          
          {/* Content */}
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <h3 className="font-semibold text-card-foreground leading-tight">
                  {item.subject}
                </h3>
                
                {!hasBatches && item.faculty && (
                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-3.5 w-3.5" />
                    <span>{item.faculty}</span>
                  </div>
                )}
                
                {!hasBatches && item.room && (
                  <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{item.room}</span>
                  </div>
                )}

                {/* Batch Cards for Practicals */}
                {hasBatches && (
                  <div className="mt-3 space-y-2">
                    {item.batches!.map((batch) => (
                      <div
                        key={batch.batch}
                        className="flex items-center gap-3 rounded-xl bg-muted/50 px-3 py-2"
                      >
                        <span
                          className="rounded-lg px-2.5 py-1 text-xs font-bold text-white"
                          style={{ backgroundColor: accentColor }}
                        >
                          {batch.batch}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-card-foreground truncate">
                            {batch.faculty}
                          </p>
                          <p className="text-xs text-muted-foreground">
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
                  className="rounded-lg px-2.5 py-1 text-xs font-semibold text-white shrink-0"
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
