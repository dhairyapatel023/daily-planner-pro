import { useState, useMemo } from "react";
import { scheduleData } from "@/data/scheduleData";
import DaySelector from "@/components/DaySelector";
import ScheduleHeader from "@/components/ScheduleHeader";
import ScheduleTimeline from "@/components/ScheduleTimeline";

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
  const selectedSchedule = scheduleData[selectedDayIndex];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen w-full">
        {/* Day Selector - Fixed Left Side */}
        <div className="fixed left-0 top-0 h-full flex items-center z-10 px-2">
          <DaySelector
            days={scheduleData.map((d) => ({ day: d.day, shortDay: d.shortDay }))}
            selectedIndex={selectedDayIndex}
            onSelect={setSelectedDayIndex}
          />
        </div>

        {/* Main Content - with left margin for day selector */}
        <div className="flex-1 ml-16 sm:ml-20 py-4 px-3 sm:px-6 overflow-hidden">
          <div className="h-full flex flex-col max-w-2xl">
            <ScheduleHeader selectedDay={selectedSchedule.day} />
            
            {/* Scrollable Timeline */}
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <ScheduleTimeline items={selectedSchedule.items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
