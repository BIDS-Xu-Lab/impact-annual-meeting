export interface AgendaPresentation {
  site: string;
  org: string;
}

export interface AgendaBreakout {
  code: string;
  title: string;
  detail?: string;
}

export interface AgendaItem {
  time: string;
  title: string;
  note?: string;
  kind?: "session" | "break" | "social" | "breakout";
  bullets?: string[];
  presentations?: AgendaPresentation[];
  breakouts?: AgendaBreakout[];
}

export interface AgendaDay {
  id: string;
  label: string;
  date: string;
  note?: string;
  items: AgendaItem[];
}

export const event = {
  title: "IMPACT-MH 2026 Annual Meeting",
  dates: "September 22nd – 23rd, 2026",
  city: "Rockville, MD",
  venue: "6001 Executive Blvd, Rockville, MD 20852",
  registerUrl:
    "https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=u76M3Tkh-E20EU4-h6vrXG5GuCMraMVDl2mHQfWjYDVUOTNOUDlHNkRVRDgyMlpPRENGTDdUS0w2Ui4u",
  checkRegistrationUrl: "https://impact-mh.org/2026-annual-meeting-registration/",
  registrationCloses: "August 28th, 2026",
};

export const agenda: AgendaDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    date: "Tuesday, September 22nd",
    items: [
      {
        time: "12:30 – 1:00 PM",
        title: "Gather and Greeting",
        kind: "session",
        bullets: ["NIMH leadership", "DCC leadership", "Announcements and logistics"],
      },
      {
        time: "1:00 – 2:30 PM",
        title: "General Session 1",
        kind: "session",
        presentations: [
          { site: "PREDiCTOR", org: "Icahn School of Medicine at Mount Sinai" },
          { site: "IMPACT-Y", org: "Yale University" },
          { site: "REACH", org: "NYU Langone School of Medicine" },
          { site: "Duke-PMA", org: "Duke University" },
          { site: "JASPer-MH", org: "Massachusetts General Hospital" },
          { site: "PPSN", org: "University of Pittsburgh" },
          { site: "ARTEMIS", org: "Ohio State University" },
        ],
      },
      {
        time: "2:30 – 2:45 PM",
        title: "Break",
        kind: "break",
      },
      {
        time: "2:45 – 4:00 PM",
        title: "General Session 2",
        kind: "session",
        presentations: [
          { site: "SPARC-XP", org: "Massachusetts General Hospital" },
          { site: "PREDICT-NP", org: "Oregon Health & Science University" },
          { site: "HALO", org: "University of Washington" },
          {
            site: "TRACC-MH",
            org: "Albert Einstein College of Medicine & McLean Hospital",
          },
          { site: "COMPASS", org: "University of Michigan" },
          { site: "ACE-D", org: "Stanford University" },
        ],
      },
      {
        time: "4:00 – 4:15 PM",
        title: "DCC Update",
        kind: "session",
      },
      {
        time: "4:15 – 4:45 PM",
        title: "General Discussion",
        kind: "session",
      },
      {
        time: "5:00 – 6:00 PM",
        title: "Reception",
        note: "Off-site at Pinstripes — pinned on the map above.",
        kind: "social",
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "Wednesday, September 23rd",
    note: "Breakout topics and their order are still being finalized and may change before the meeting.",
    items: [
      {
        time: "8:30 – 9:00 AM",
        title: "Breakfast and Arrival",
        kind: "break",
      },
      {
        time: "9:00 – 10:00 AM",
        title: "Concurrent Breakout Sessions #1",
        kind: "breakout",
        breakouts: [
          {
            code: "1A",
            title: "EHR",
            detail: "Data extraction issues and other topics related to EHR",
          },
          {
            code: "1B",
            title: "Cognitive change measurement",
            detail:
              "Digital cognitive assessment, including computational modeling of task-based data",
          },
        ],
      },
      {
        time: "10:00 – 11:00 AM",
        title: "Concurrent Breakout Sessions #2",
        kind: "breakout",
        breakouts: [
          {
            code: "2A",
            title: "Sensor data",
            detail: "Trajectory and time-series analytical methods",
          },
          {
            code: "2B",
            title: "Clinical translation",
          },
        ],
      },
      {
        time: "11:00 – 11:15 AM",
        title: "Break",
        kind: "break",
      },
      {
        time: "11:15 AM – 12:30 PM",
        title: "Concurrent Breakout Sessions #3",
        kind: "breakout",
        breakouts: [
          {
            code: "3A",
            title: "NLP & AI/ML",
            detail: "Speech/language data and/or clinical records",
          },
          {
            code: "3B",
            title: "Return of results",
          },
        ],
      },
      {
        time: "12:30 – 1:00 PM",
        title: "Boxed Lunches",
        kind: "break",
      },
      {
        time: "1:00 – 2:00 PM",
        title: "Concurrent Breakout Sessions #4",
        kind: "breakout",
        breakouts: [
          {
            code: "4A",
            title: "OMOP",
            detail: "DCC-led session",
          },
          {
            code: "4B",
            title: "Publication planning",
            detail: "Process for planning consortium publications",
          },
        ],
      },
      {
        time: "2:00 – 2:15 PM",
        title: "Break",
        kind: "break",
      },
      {
        time: "2:15 – 3:00 PM",
        title: "Joint Session — Publications Speed Dating",
        kind: "session",
      },
      {
        time: "3:00 – 3:15 PM",
        title: "Closing Comments",
        kind: "session",
      },
    ],
  },
];
