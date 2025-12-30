import { cn } from "@/lib/utils";

interface DaySelectorProps {
  days: { day: string; shortDay: string }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const DaySelector = ({ days, selectedIndex, onSelect }: DaySelectorProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-card/80 backdrop-blur-sm p-2 shadow-xl border border-border/30">
      {days.map((dayData, index) => (
        <button
          key={dayData.day}
          onClick={() => onSelect(index)}
          className={cn(
            "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl text-base sm:text-lg font-bold transition-all duration-300",
            selectedIndex === index
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
          )}
        >
          {dayData.shortDay}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
