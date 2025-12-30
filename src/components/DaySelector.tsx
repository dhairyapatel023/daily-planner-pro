import { cn } from "@/lib/utils";

interface DaySelectorProps {
  days: { day: string; shortDay: string }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const DaySelector = ({ days, selectedIndex, onSelect }: DaySelectorProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-sidebar-bg p-4 shadow-2xl border border-border/50">
      {days.map((dayData, index) => (
        <button
          key={dayData.day}
          onClick={() => onSelect(index)}
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold transition-all duration-300",
            selectedIndex === index
              ? "bg-sidebar-active text-sidebar-bg shadow-lg shadow-primary/30 scale-110"
              : "text-sidebar-text hover:text-foreground hover:bg-muted/30"
          )}
        >
          {dayData.shortDay}
        </button>
      ))}
      
      {/* Schedule indicator */}
      <div className="mt-3 flex flex-col items-center gap-1">
        <div className="h-16 w-[2px] bg-border/30" />
        <span className="text-[11px] font-semibold tracking-widest text-muted-foreground/50 rotate-90 origin-center translate-y-5">
          Schedule
        </span>
      </div>
    </div>
  );
};

export default DaySelector;
