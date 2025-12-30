import { cn } from "@/lib/utils";

interface DaySelectorProps {
  days: { day: string; shortDay: string }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const DaySelector = ({ days, selectedIndex, onSelect }: DaySelectorProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-sidebar-bg p-3 shadow-xl">
      {days.map((dayData, index) => (
        <button
          key={dayData.day}
          onClick={() => onSelect(index)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl text-lg font-semibold transition-all duration-300",
            selectedIndex === index
              ? "bg-sidebar-active text-sidebar-bg shadow-lg scale-105"
              : "text-sidebar-text hover:text-card hover:bg-sidebar-text/10"
          )}
        >
          {dayData.shortDay}
        </button>
      ))}
      
      {/* Schedule indicator */}
      <div className="mt-2 flex flex-col items-center gap-1">
        <div className="h-12 w-[2px] bg-sidebar-text/20" />
        <span className="text-[10px] font-medium tracking-widest text-sidebar-text/40 rotate-90 origin-center translate-y-4">
          Schedule
        </span>
      </div>
    </div>
  );
};

export default DaySelector;
