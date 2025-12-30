import { cn } from "@/lib/utils";

interface DaySelectorProps {
  days: { day: string; shortDay: string }[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

const DaySelector = ({ days, selectedIndex, onSelect }: DaySelectorProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-card brutal-border brutal-shadow-lg p-2">
      {days.map((dayData, index) => (
        <button
          key={dayData.day}
          onClick={() => onSelect(index)}
          className={cn(
            "flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center text-base sm:text-lg font-black transition-all duration-150 brutal-border",
            selectedIndex === index
              ? "bg-primary text-primary-foreground brutal-shadow-sm translate-x-0 translate-y-0"
              : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground hover:-translate-x-0.5 hover:-translate-y-0.5 hover:brutal-shadow-sm"
          )}
        >
          {dayData.shortDay}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
