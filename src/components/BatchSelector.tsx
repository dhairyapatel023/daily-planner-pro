import { cn } from "@/lib/utils";

interface BatchSelectorProps {
  batches: string[];
  selectedBatch: string;
  onSelect: (batch: string) => void;
}

const BatchSelector = ({ batches, selectedBatch, onSelect }: BatchSelectorProps) => {
  return (
    <div className="flex items-center gap-1.5 p-1 rounded-xl bg-secondary/50 backdrop-blur-sm">
      {batches.map((batch) => {
        const isSelected = batch === selectedBatch;
        return (
          <button
            key={batch}
            onClick={() => onSelect(batch)}
            className={cn(
              "relative px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 ease-out",
              isSelected
                ? "text-primary-foreground scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {isSelected && (
              <span 
                className="absolute inset-0 bg-primary rounded-lg animate-scale-in shadow-lg"
                style={{ 
                  boxShadow: '0 4px 14px -3px hsl(var(--primary) / 0.4)'
                }}
              />
            )}
            <span className="relative z-10">{batch}</span>
          </button>
        );
      })}
    </div>
  );
};

export default BatchSelector;
