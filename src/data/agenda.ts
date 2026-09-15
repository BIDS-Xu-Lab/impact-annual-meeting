export interface AgendaPresentation {
  site: string;
  org: string;
  remote?: boolean;
}

export interface AgendaBreakout {
  code: string;
  title: string;
  leads?: string[];
  /** One-line blurb shown on the agenda row. */
  detail?: string;
  /** Long-form session description; Breakouts.astro renders it as a card. */
  description?: string;
  /** Optional learning goals, listed under the description. */
  goals?: string[];
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
          { site: "ACE-D", org: "Stanford University", remote: true },
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
            leads: ["Roy Perlis"],
            detail: "Data extraction issues and other topics related to EHR",
            description:
              "This breakout session will address the challenges and opportunities in applying electronic health records and other large-scale human subjects data for neuropsychiatric research questions. We will focus on specific characteristics of these data that require more thoughtful treatment in study design and analysis. We will also consider how alternate strategies to managing these challenges represent tradeoffs in terms of feasibility, statistical power, transparency, and acceptability to peer reviewers and editors. No singing or dancing will be required.",
          },
          {
            code: "1B",
            title: "Cognitive change measurement",
            leads: ["Laura Germine"],
            detail:
              "Digital cognitive assessment, including computational modeling of task-based data",
            description:
              "This group will discuss digital methods for evaluating cognitive status, long-term cognitive change, and short-term cognitive fluctuations with a focus on ecological momentary assessment methods, including computational methods for separating components of cognitive performance. As a group, we will identify key gaps/challenges and best practices in this area toward individually-measured cognitive phenotypes to advance computational translation.",
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
            title: "Sensor data / Longitudinal modeling",
            leads: ["Sarah Yip", "Matt Engelhard"],
            detail: "Trajectory and time-series analytical methods",
            description:
              "This breakout session is designed to highlight the diversity of analytic choices researchers make when faced with complex clinical datasets. To do so, we will invite individuals from four different IMPACT sites to come up with short analytic plans for a fictional dataset comprised of longitudinal, multimodal data including sensor data. These presentations will be informal and approximately 5 minutes each with time for questions. We will then compare and discuss the assumptions, tradeoffs, and clinical implications embedded in their choices (e.g., person-centered vs. variable-centered approaches, handling of missing data, treatment of time, and how heterogeneity is conceptualized). Other discussion items include what would change if the clinical question changed (e.g., prediction vs. explanation vs. subtyping)?",
            goals: [
              "Recognize that the \"right\" analytic approach depends scientific goals and investigator preferences, not just the data structure.",
              "Discuss methodological choices with peers of different analytic backgrounds.",
              "Share pitfalls encountered when working with complex longitudinal data.",
            ],
          },
          {
            code: "2B",
            title: "Return of results",
            leads: ["Jessica Turner"],
            description:
              "The goal of this breakout session is to address the issues of return of results from studies to the participants and the public. The different IMPACT sites are invited to say a few words about their approaches and concerns in RoR, or to share success stories from their experiences. We will have a brief presentation from other large studies on their approaches to RoR, as well.",
            goals: [
              "Understand what Return of Results entails.",
              "Consider the what, why, when and how of RoR might apply to your studies.",
            ],
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
            leads: ["Guillermo Cecchi", "Trevor Cohen"],
            detail: "Speech/language data and/or clinical records",
            description: 
              "The goal of this breakout session is to identify common themes related to the application of NLP across projects. The session will include presentation of some illustrative examples from within the consortium, intended to stimulate discussion around issues that have informed key methodological decisions (e.g. computational constraints, model capabilities) and approaches toward validation (e.g. predicting outcomes, alignment with human judgment).",
          },
          {
            code: "3B",
            title: "Clinical translation",
            leads: ["Alysa Doyle", "Lara Fodland-Ross"],
            description:
              "This breakout will focus on how IMPACT-MH projects can move their scientific advances toward meaningful clinical application. Using brief examples from participating projects, we will first identify what each project is ultimately seeking to translate—and the clinical decision or outcome it is intended to improve. We will then examine where along the pathway from research to clinical use translation becomes difficult, using these points not as barriers to progress, but as a way to identify the evidence, infrastructure, partnerships, or next steps needed to move the work forward.",
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
            leads: ["Hua Xu"],
            detail: "DCC-led session",
            description:
              "This session builds on the EHR and NLP/AI/ML sessions, with the goal of providing hands-on experience in EHR data harmonization using AI technologies. We will first review the OMOP Common Data Model (CDM) and the EHR data structure proposed by the DCC. We will then demonstrate an AI-powered tool for transforming local EHR data into the OMOP CDM format. The session will also include dedicated time for discussion of potential challenges in harmonizing and processing EHR data from individual sites, as well as possible strategies for addressing these challenges.",
          },
          {
            code: "4B",
            title: "Publication planning",
            leads: ["Sarah Morris"],
            detail: "Process for planning consortium publications",
            description:
              "During this session, participants will review the IMPACT-MH publication policy and discuss concrete steps in proposing and conducting cross-project analyses and publications. The discussion will focus on centralized or cross-project publications, since publications from individual U01s/UF1s are not governed by the IMPACT-MH publication policy. This discussion should help to set the stage for the brainstorming session later in the day at which specific topics for cross-cutting analyses and publications will be discussed. Although the focus is intended to be on procedures for proposing and conducting joint projects, rather than specific topics for papers, we may discuss collaborative analysis of common data elements as a starting point/exemplar.",
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
