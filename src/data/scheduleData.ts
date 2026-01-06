export type SubjectType = 
  | 'cdc' 
  | 'embedded' 
  | 'ai' 
  | 'ccn' 
  | 'cloud' 
  | 'ml' 
  | 'web' 
  | 'industry' 
  | 'lab'
  | 'elective';

export interface ScheduleItem {
  id: string;
  subject: string;
  faculty: string;
  room: string;
  startTime: string;
  endTime: string;
  type: 'lecture' | 'practical';
  subjectType: SubjectType;
  batches?: { batch: string; subject: string; faculty: string; room: string }[];
}

export interface DaySchedule {
  day: string;
  shortDay: string;
  items: ScheduleItem[];
}

export const scheduleData: DaySchedule[] = [
  {
    day: 'Monday',
    shortDay: 'M',
    items: [
      {
        id: 'mon-1',
        subject: 'Embedded Systems',
        faculty: 'Gunjan Thakur',
        room: 'F303',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        type: 'lecture',
        subjectType: 'embedded',
      },
      {
        id: 'mon-1b',
        subject: 'CDC Training',
        faculty: 'CD Cell Trainer',
        room: 'E313',
        startTime: '10:00 AM',
        endTime: '11:00 AM',
        type: 'lecture',
        subjectType: 'cdc',
      },
      {
        id: 'mon-2',
        subject: 'Practicals',
        faculty: '',
        room: '',
        startTime: '11:00 AM',
        endTime: '1:00 PM',
        type: 'practical',
        subjectType: 'lab',
        batches: [
          { batch: 'H10', subject: 'Embedded Systems Lab', faculty: 'Gunjan Thakur', room: 'E214' },
          { batch: 'H11', subject: 'AI Systems Lab', faculty: 'Manish Mandloi', room: 'E212' },
          { batch: 'H12', subject: 'CCN Lab', faculty: 'Anand Singh', room: 'E212-3' },
        ],
      },
      {
        id: 'mon-3',
        subject: 'AI Systems',
        faculty: 'Manish Mandloi',
        room: 'F303',
        startTime: '2:00 PM',
        endTime: '3:00 PM',
        type: 'lecture',
        subjectType: 'ai',
      },
      {
        id: 'mon-4',
        subject: 'Cloud Architecture and Services',
        faculty: 'Deepak Sharma',
        room: 'F303',
        startTime: '3:00 PM',
        endTime: '4:00 PM',
        type: 'lecture',
        subjectType: 'cloud',
      },
      {
        id: 'mon-5',
        subject: 'Open Elective',
        faculty: '',
        room: 'OE Room',
        startTime: '4:00 PM',
        endTime: '6:00 PM',
        type: 'lecture',
        subjectType: 'elective',
      },
    ],
  },
  {
    day: 'Tuesday',
    shortDay: 'T',
    items: [
      {
        id: 'tue-1',
        subject: 'Cloud Architecture and Services Lab',
        faculty: '',
        room: 'E112-113',
        startTime: '9:00 AM',
        endTime: '11:00 AM',
        type: 'practical',
        subjectType: 'cloud',
        batches: [
          { batch: 'H10', subject: 'Cloud Architecture and Services Lab', faculty: 'Arti Solanki', room: 'E112-113' },
          { batch: 'H11', subject: 'Cloud Architecture and Services Lab', faculty: 'Kamal Garg', room: 'E112-113' },
          { batch: 'H12', subject: 'Cloud Architecture and Services Lab', faculty: 'Gaurav Bhargava', room: 'E112-113' },
        ],
      },
      {
        id: 'tue-3',
        subject: 'Practicals',
        faculty: '',
        room: '',
        startTime: '11:00 AM',
        endTime: '1:00 PM',
        type: 'practical',
        subjectType: 'lab',
        batches: [
          { batch: 'H10', subject: 'AI Systems Lab', faculty: 'Manish Mandloi', room: 'E212-3' },
          { batch: 'H11', subject: 'CCN Lab', faculty: 'Devlina Adhikari', room: 'E212' },
          { batch: 'H12', subject: 'Embedded Systems Lab', faculty: 'Gunjan Thakur', room: 'E214' },
        ],
      },
      {
        id: 'tue-4',
        subject: 'Cloud Architecture and Services',
        faculty: 'Deepak Sharma',
        room: 'F302',
        startTime: '3:00 PM',
        endTime: '4:00 PM',
        type: 'lecture',
        subjectType: 'cloud',
      },
      {
        id: 'tue-5',
        subject: 'Open Elective',
        faculty: '',
        room: 'OE Room',
        startTime: '4:00 PM',
        endTime: '5:00 PM',
        type: 'lecture',
        subjectType: 'elective',
      },
      {
        id: 'tue-6',
        subject: 'Machine Learning',
        faculty: 'Jigar Shah',
        room: 'F303',
        startTime: '5:00 PM',
        endTime: '6:00 PM',
        type: 'lecture',
        subjectType: 'ml',
      },
    ],
  },
  {
    day: 'Wednesday',
    shortDay: 'W',
    items: [
      {
        id: 'wed-1',
        subject: 'Machine Learning Lab',
        faculty: 'Jigar Shah',
        room: 'E212-3',
        startTime: '9:00 AM',
        endTime: '11:00 AM',
        type: 'practical',
        subjectType: 'ml',
      },
      {
        id: 'wed-2',
        subject: 'Practicals',
        faculty: '',
        room: '',
        startTime: '11:00 AM',
        endTime: '1:00 PM',
        type: 'practical',
        subjectType: 'lab',
        batches: [
          { batch: 'H10', subject: 'CCN Lab', faculty: 'Devlina Adhikari', room: 'E212-3' },
          { batch: 'H11', subject: 'Embedded Systems Lab', faculty: 'Gunjan Thakur', room: 'E214' },
          { batch: 'H12', subject: 'AI Systems Lab', faculty: 'Manish Mandloi', room: 'E212' },
        ],
      },
      {
        id: 'wed-3',
        subject: 'Computer Communication and Networking',
        faculty: 'Anand Singh',
        room: 'F303',
        startTime: '3:00 PM',
        endTime: '4:00 PM',
        type: 'lecture',
        subjectType: 'ccn',
      },
      {
        id: 'wed-4',
        subject: 'AI Systems',
        faculty: 'Manish Mandloi',
        room: 'F303',
        startTime: '4:00 PM',
        endTime: '5:00 PM',
        type: 'lecture',
        subjectType: 'ai',
      },
      {
        id: 'wed-5',
        subject: 'Industry 4.0',
        faculty: 'Abhishek S. Kumar',
        room: 'OE Room',
        startTime: '5:00 PM',
        endTime: '6:00 PM',
        type: 'lecture',
        subjectType: 'industry',
      },
    ],
  },
  {
    day: 'Thursday',
    shortDay: 'T',
    items: [
      {
        id: 'thu-1',
        subject: 'Machine Learning',
        faculty: 'Jigar Shah',
        room: 'F303',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        type: 'lecture',
        subjectType: 'ml',
      },
      {
        id: 'thu-2',
        subject: 'AI Systems',
        faculty: 'Manish Mandloi',
        room: 'F304',
        startTime: '10:00 AM',
        endTime: '11:00 AM',
        type: 'lecture',
        subjectType: 'ai',
      },
      {
        id: 'thu-3',
        subject: 'Web Technology Lab',
        faculty: '',
        room: 'E112-113',
        startTime: '11:00 AM',
        endTime: '1:00 PM',
        type: 'practical',
        subjectType: 'web',
        batches: [
          { batch: 'H10', subject: 'Web Technology Lab', faculty: 'Shivangi Mehta', room: 'E112-113' },
          { batch: 'H11', subject: 'Web Technology Lab', faculty: 'Kamal Garg', room: 'E112-113' },
          { batch: 'H12', subject: 'Web Technology Lab', faculty: 'Anand Singh', room: 'E112-113' },
        ],
      },
      {
        id: 'thu-4',
        subject: 'Web Technology',
        faculty: 'Shivangi Mehta',
        room: 'F303',
        startTime: '2:00 PM',
        endTime: '3:00 PM',
        type: 'lecture',
        subjectType: 'web',
      },
      {
        id: 'thu-5',
        subject: 'Computer Communication and Networking',
        faculty: 'Anand Singh',
        room: 'F303',
        startTime: '3:00 PM',
        endTime: '4:00 PM',
        type: 'lecture',
        subjectType: 'ccn',
      },
      {
        id: 'thu-6',
        subject: 'Embedded Systems',
        faculty: 'Gunjan Thakur',
        room: 'F304',
        startTime: '4:00 PM',
        endTime: '5:00 PM',
        type: 'lecture',
        subjectType: 'embedded',
      },
      {
        id: 'thu-7',
        subject: 'Industry 4.0',
        faculty: 'Abhishek S. Kumar',
        room: 'OE Room',
        startTime: '5:00 PM',
        endTime: '6:00 PM',
        type: 'lecture',
        subjectType: 'industry',
      },
    ],
  },
  {
    day: 'Friday',
    shortDay: 'F',
    items: [
      {
        id: 'fri-1',
        subject: 'Computer Communication and Networking',
        faculty: 'Anand Singh',
        room: 'F303',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        type: 'lecture',
        subjectType: 'ccn',
      },
      {
        id: 'fri-2',
        subject: 'Embedded Systems',
        faculty: 'Gunjan Thakur',
        room: 'F302',
        startTime: '11:00 AM',
        endTime: '12:00 PM',
        type: 'lecture',
        subjectType: 'embedded',
      },
      {
        id: 'fri-3',
        subject: 'Web Technology',
        faculty: 'Shivangi Mehta',
        room: 'F303',
        startTime: '12:00 PM',
        endTime: '1:00 PM',
        type: 'lecture',
        subjectType: 'web',
      },
      {
        id: 'fri-4',
        subject: 'Industry 4.0 Lab',
        faculty: 'Abhishek S. Kumar',
        room: 'OE Room',
        startTime: '2:00 PM',
        endTime: '4:00 PM',
        type: 'practical',
        subjectType: 'industry',
      },
    ],
  },
];

export const getSubjectLabName = (subjectType: SubjectType): string => {
  const labNames: Record<SubjectType, string> = {
    cdc: 'CDC Training',
    embedded: 'Embedded Systems Lab',
    ai: 'AI Systems Lab',
    ccn: 'Computer Communication & Networking Lab',
    cloud: 'Cloud Lab',
    ml: 'Machine Learning Lab',
    web: 'Web Technology Lab',
    industry: 'Industry 4.0 Lab',
    lab: 'Lab',
    elective: 'Open Elective',
  };
  return labNames[subjectType] || 'Lab';
};
