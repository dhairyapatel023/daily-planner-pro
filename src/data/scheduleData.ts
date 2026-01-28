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
        subject: 'CDC Training',
        faculty: 'CD Cell Trainer',
        room: 'E-313',
        startTime: '9:00 AM',
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
          { batch: 'H10', subject: 'Embedded Systems Lab', faculty: 'Gunjan Thakur', room: 'E-214' },
          { batch: 'H11', subject: 'AI Systems Lab', faculty: 'Manish Mandloi', room: 'E-212' },
          { batch: 'H12', subject: 'CCN Lab', faculty: 'Anand Singh', room: 'E-212-3' },
        ],
      },
      {
        id: 'mon-3',
        subject: 'AI Systems',
        faculty: 'Manish Mandloi',
        room: 'F-303',
        startTime: '2:00 PM',
        endTime: '3:00 PM',
        type: 'lecture',
        subjectType: 'ai',
      },
      {
        id: 'mon-4',
        subject: 'Cloud Architecture and Services',
        faculty: 'Deepak Sharma',
        room: 'F-303',
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
        startTime: '5:00 PM',
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
        room: 'E-112-3',
        startTime: '9:00 AM',
        endTime: '11:00 AM',
        type: 'practical',
        subjectType: 'cloud',
        batches: [
          { batch: 'H10', subject: 'Cloud Architecture and Services Lab', faculty: 'Mahesh Kumar', room: 'E-112-3' },
          { batch: 'H11', subject: 'Cloud Architecture and Services Lab', faculty: 'Bablu Kumar', room: 'E-112-3' },
          { batch: 'H12', subject: 'Cloud Architecture and Services Lab', faculty: 'Deepak Sharma', room: 'E-112-3' },
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
          { batch: 'H10', subject: 'AI Systems Lab', faculty: 'Manish Mandloi', room: 'E-212-3' },
          { batch: 'H11', subject: 'CCN Lab', faculty: 'Devlina Adhikari', room: 'E-212' },
          { batch: 'H12', subject: 'Embedded Systems Lab', faculty: 'Gunjan Thakur', room: 'E-214' },
        ],
      },
      {
        id: 'tue-4',
        subject: 'Cloud Architecture and Services',
        faculty: 'Deepak Sharma',
        room: 'F-302',
        startTime: '3:00 PM',
        endTime: '4:00 PM',
        type: 'lecture',
        subjectType: 'cloud',
      },
      {
        id: 'tue-5',
        subject: 'Machine Learning',
        faculty: 'Jigar Shah',
        room: 'F-303',
        startTime: '4:00 PM',
        endTime: '5:00 PM',
        type: 'lecture',
        subjectType: 'ml',
      },
      {
        id: 'tue-6',
        subject: 'Open Elective',
        faculty: '',
        room: 'OE Room',
        startTime: '5:00 PM',
        endTime: '6:00 PM',
        type: 'lecture',
        subjectType: 'elective',
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
        room: 'E-212-3',
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
          { batch: 'H10', subject: 'CCN Lab', faculty: 'Devlina Adhikari', room: 'E-212-3' },
          { batch: 'H11', subject: 'Embedded Systems Lab', faculty: 'Gunjan Thakur', room: 'E-214' },
          { batch: 'H12', subject: 'AI Systems Lab', faculty: 'Manish Mandloi', room: 'E-212' },
        ],
      },
      {
        id: 'wed-3',
        subject: 'Embedded Systems',
        faculty: 'Gunjan Thakur',
        room: 'E-103',
        startTime: '2:00 PM',
        endTime: '3:00 PM',
        type: 'lecture',
        subjectType: 'embedded',
      },
      {
        id: 'wed-4',
        subject: 'Computer Communication and Networking',
        faculty: 'Anand Singh',
        room: 'F-303',
        startTime: '3:00 PM',
        endTime: '4:00 PM',
        type: 'lecture',
        subjectType: 'ccn',
      },
      {
        id: 'wed-5',
        subject: 'AI Systems',
        faculty: 'Manish Mandloi',
        room: 'E-105',
        startTime: '4:00 PM',
        endTime: '5:00 PM',
        type: 'lecture',
        subjectType: 'ai',
      },
      {
        id: 'wed-6',
        subject: 'Industry 4.0',
        faculty: 'Abhishek S. Kumar',
        room: 'F-402',
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
        room: 'F-303',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        type: 'lecture',
        subjectType: 'ml',
      },
      {
        id: 'thu-2',
        subject: 'AI Systems',
        faculty: 'Manish Mandloi',
        room: 'F-304',
        startTime: '10:00 AM',
        endTime: '11:00 AM',
        type: 'lecture',
        subjectType: 'ai',
      },
      {
        id: 'thu-3',
        subject: 'Web Technology Lab',
        faculty: '',
        room: 'E-112-113',
        startTime: '11:00 AM',
        endTime: '1:00 PM',
        type: 'practical',
        subjectType: 'web',
        batches: [
          { batch: 'H10', subject: 'Web Technology Lab', faculty: 'Shivangi Mehta', room: 'E-112-113' },
          { batch: 'H11', subject: 'Web Technology Lab', faculty: 'Kamal Garg', room: 'E-112-113' },
          { batch: 'H12', subject: 'Web Technology Lab', faculty: 'Anand Singh', room: 'E-112-113' },
        ],
      },
      {
        id: 'thu-4',
        subject: 'Web Technology',
        faculty: 'Shivangi Mehta',
        room: 'F-303',
        startTime: '2:00 PM',
        endTime: '3:00 PM',
        type: 'lecture',
        subjectType: 'web',
      },
      {
        id: 'thu-5',
        subject: 'Computer Communication and Networking',
        faculty: 'Anand Singh',
        room: 'F-303',
        startTime: '3:00 PM',
        endTime: '4:00 PM',
        type: 'lecture',
        subjectType: 'ccn',
      },
      {
        id: 'thu-6',
        subject: 'Embedded Systems',
        faculty: 'Gunjan Thakur',
        room: 'E-203',
        startTime: '4:00 PM',
        endTime: '5:00 PM',
        type: 'lecture',
        subjectType: 'embedded',
      },
      {
        id: 'thu-7',
        subject: 'Industry 4.0',
        faculty: 'Abhishek S. Kumar',
        room: 'F-402',
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
        room: 'E-202',
        startTime: '9:00 AM',
        endTime: '10:00 AM',
        type: 'lecture',
        subjectType: 'ccn',
      },
      {
        id: 'fri-2',
        subject: 'Embedded Systems',
        faculty: 'Gunjan Thakur',
        room: 'F-302',
        startTime: '11:00 AM',
        endTime: '12:00 PM',
        type: 'lecture',
        subjectType: 'embedded',
      },
      {
        id: 'fri-3',
        subject: 'Web Technology',
        faculty: 'Shivangi Mehta',
        room: 'F-303',
        startTime: '12:00 PM',
        endTime: '1:00 PM',
        type: 'lecture',
        subjectType: 'web',
      },
      {
        id: 'fri-4',
        subject: 'Industry 4.0 Lab',
        faculty: 'Abhishek S. Kumar',
        room: 'F-402',
        startTime: '2:00 PM',
        endTime: '4:00 PM',
        type: 'practical',
        subjectType: 'industry',
      },
      {
        id: 'fri-5',
        subject: 'Open Elective',
        faculty: '',
        room: 'OE Room',
        startTime: '4:00 PM',
        endTime: '5:00 PM',
        type: 'lecture',
        subjectType: 'elective',
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
