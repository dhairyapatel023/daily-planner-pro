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
      <div className="flex min-h-screen max-w-4xl mx-auto">
        {/* Day Selector - Left Side */}
        <div className="flex items-center justify-center px-3 py-6">
          <DaySelector
            days={scheduleData.map((d) => ({ day: d.day, shortDay: d.shortDay }))}
            selectedIndex={selectedDayIndex}
            onSelect={setSelectedDayIndex}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 py-6 pr-4 pl-2 overflow-hidden">
          <div className="h-full flex flex-col">
            <ScheduleHeader selectedDay={selectedSchedule.day} />
            
            {/* Scrollable Timeline */}
            <div className="flex-1 overflow-y-auto scrollbar-hide pr-2">
              <ScheduleTimeline items={selectedSchedule.items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
