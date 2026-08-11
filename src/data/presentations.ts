export interface PresentationTopic {
  title: string;
  note?: string;
}

export interface PresentationFormat {
  duration: string;
  slides: string;
  topics: PresentationTopic[];
}

// The six slides every Day 1 site deck runs through. Array order is the slide
// order, and Presentations.astro numbers them from it.
export const presentationFormat: PresentationFormat = {
  duration: "about 10 minutes",
  slides: "six slides",
  topics: [
    { title: "Premise, population, and outcomes" },
    { title: "Current status" },
    { title: "Biggest hurdle" },
    { title: "Biggest success" },
    {
      title: "Points of intersection with other U projects",
      note: "Actual or potential",
    },
    { title: "Focus for the coming year" },
  ],
};
