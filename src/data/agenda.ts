export interface AgendaItem {
  time: string;
  title: string;
  note?: string;
  kind?: "session" | "break" | "social";
}

export interface AgendaDay {
  id: string;
  label: string;
  date: string;
  items: AgendaItem[];
}

export const event = {
  title: "IMPACT-MH 2026 Annual Meeting",
  dates: "September 22nd – 23rd, 2026",
  city: "Rockville, MD",
  venue: "6001 Executive Blvd, Rockville, MD 20852",
  registerUrl: "#", // placeholder — swap in the real registration link when available
};

export const agenda: AgendaDay[] = [
  {
    id: "day-1",
    label: "Day 1",
    date: "Tuesday, September 22nd",
    items: [
      {
        time: "12:30 PM – 5:00 PM",
        title: "Sessions — TBD",
        note: "Specifics later — breakouts coming soon!",
        kind: "session",
      },
      {
        time: "5:00 – 6:00 PM",
        title: "Reception",
        kind: "social",
      },
    ],
  },
  {
    id: "day-2",
    label: "Day 2",
    date: "Wednesday, September 23rd",
    items: [
      {
        time: "8:30 – 9:00 AM",
        title: "Breakfast + Welcome to Day 2",
        kind: "break",
      },
      {
        time: "9:00 AM – 3:00 PM",
        title: "Day 2 Sessions",
        note: "Session details coming soon.",
        kind: "session",
      },
      {
        time: "3:00 – 3:15 PM",
        title: "Closing",
        kind: "session",
      },
    ],
  },
];
