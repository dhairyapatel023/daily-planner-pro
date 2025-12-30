import { cn } from "@/lib/utils";

interface DaySelectorProps {
  days: { day: string; shortDay: string }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const DaySelector = ({ days, selectedIndex, onSelect }: DaySelectorProps) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-card/90 backdrop-blur-sm p-2.5 shadow-xl border border-border/30">
      {days.map((dayData, index) => (
        <button
          key={dayData.day}
          onClick={() => onSelect(index)}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold transition-all duration-300",
            selectedIndex === index
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/40 scale-110"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          )}
        >
          {dayData.shortDay}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
