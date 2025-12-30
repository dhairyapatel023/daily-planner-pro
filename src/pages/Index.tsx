import { useState } from "react";
import { scheduleData } from "@/data/scheduleData";
import DaySelector from "@/components/DaySelector";
import ScheduleHeader from "@/components/ScheduleHeader";
import ScheduleTimeline from "@/components/ScheduleTimeline";

const Index = () => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const selectedSchedule = scheduleData[selectedDayIndex];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex w-full">
        {/* Day Selector - Sticky on left */}
        <div className="sticky top-0 h-screen flex items-start pt-44 px-2">
          <DaySelector
            days={scheduleData.map((d) => ({ day: d.day, shortDay: d.shortDay }))}
            selectedIndex={selectedDayIndex}
            onSelect={setSelectedDayIndex}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 py-6 px-3 pr-4 overflow-x-hidden">
          <div className="max-w-xl">
            <ScheduleHeader selectedDay={selectedSchedule.day} />
            <ScheduleTimeline items={selectedSchedule.items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
