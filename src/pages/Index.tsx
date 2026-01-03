import { useState, useMemo } from "react";
import { scheduleData } from "@/data/scheduleData";
import DaySelector from "@/components/DaySelector";
import ScheduleHeader from "@/components/ScheduleHeader";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import BatchSelector from "@/components/BatchSelector";

const BATCHES = ["All", "H10", "H11", "H12"];

const Index = () => {
  const todayIndex = useMemo(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
    // Map to schedule index (assuming schedule starts Monday = 0)
    const scheduleIndex = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    // Clamp to available days in schedule
    return Math.min(scheduleIndex, scheduleData.length - 1);
  }, []);

  const [selectedDayIndex, setSelectedDayIndex] = useState(todayIndex);
  const [selectedBatch, setSelectedBatch] = useState("All");
  const selectedSchedule = scheduleData[selectedDayIndex];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Sticky Header with Day Selector */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border/30 px-4 py-3">
        <div className="flex flex-col gap-3">
          <ScheduleHeader />
          <div className="flex flex-col items-center gap-2">
            <DaySelector
              days={scheduleData.map((d) => ({ day: d.day, shortDay: d.shortDay }))}
              selectedIndex={selectedDayIndex}
              onSelect={setSelectedDayIndex}
            />
            <BatchSelector
              batches={BATCHES}
              selectedBatch={selectedBatch}
              onSelect={setSelectedBatch}
            />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <ScheduleTimeline 
          key={`${selectedDayIndex}-${selectedBatch}`}
          items={selectedSchedule.items} 
          selectedBatch={selectedBatch}
        />
      </div>
    </div>
  );
};

export default Index;
