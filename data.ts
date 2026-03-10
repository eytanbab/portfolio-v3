export type projectProps = {
  projectName: string;
  projectDesc: string;
  techUsed: string[];
  projectImagePath: string;
  link: string;
  repo: string;
};

export type educationProps = {
  title: string;
  constitute: string;
  from: string;
  to: string;
  place: string;
};

export type experienceProps = [
  title: string,
  company: string,
  from: string,
  to: string,
  responsibilities: string[]
]

export const experience = [
  {
    title: "Frontend Engineer",
    company: "Outlier AI",
    from: "Apr 2023",
    to: "Present",
    responsibilities: [
      "Authored production-grade React and TypeScript code snippets to serve as reference implementations for complex state management and UI interactions.","Established benchmarks for code quality by ranking model outputs against semantic HTML and WAI-ARIA accessibility standards.", "Corrected logic flaws and improper implementation patterns in React-based code, replacing deprecated hooks with modern functional components and optimized state management.", "Identified rendering bottlenecks and bundle size issues in generated code to ensure model outputs follow scalable frontend architectures.", "Developed complex coding scenarios to handle edge cases, including API failure states, asynchronous loading indicators, and cross-browser styling to establish high-standard code quality benchmarks.", "Enforced strict TypeScript strict-mode compliance in model outputs by correcting `any` type usage andinterface mismatches to ensure type-safe code generation."
    ]

  }
]

export const education: educationProps[] = [
  {
    title: "BSc in Software Engineering",
    constitute: "SCE - Sami Shamoon College of Engineering",
    from: "Oct 2019",
    to: "Sep 2023",
    place: "Be'er Sheva, Israel",
  },
  {
    title: "UX Design",
    constitute: "Technion – Israel Institute of Technology",
    from: "Nov 2025",
    to: "Apr 2026",
    place: "Tel Aviv, Israel"
  }
]

export const projects: projectProps[] = [
  {
    projectName: 'City Alerts',
    projectDesc: "A real-time visualization platform that tracks nationwide siren alerts and regional trends across Israel during the \"Lion\'s Roar\" operation. It provides interactive geospatial mapping and city-level performance metrics, such as peak intensity scores and comparative analysis of localized risk levels.",
    techUsed: ['Next.js', 'nuqs', 'Tailwind CSS','Shadcn', 'Leaflet'],
    projectImagePath: '',
    link: 'https://city-alerts.vercel.app/',
    repo: 'https://github.com/eytanbab/city-alerts',
  },
  {
    projectName: 'Application Tracker',
    projectDesc:
      'Track and manage your job applications with ease. View detailed application data, analyze trends with interactive charts, and stay organized with customizable filters and status tracking.',
    techUsed: ['Next.js', 'Tailwind CSS', 'Drizzle', 'Neon'],
    projectImagePath: '/mobile_images/job-application-tracker.png',
    link: 'https://apptrackr.vercel.app/',
    repo: 'https://github.com/eytanbab/job-application-tracker/',
  },
  // {
  //   projectName: 'Markdown Editor',
  //   projectDesc:
  //     'Create and manage markdown notes with ease. You can save, edit, and organize your notes, and favorite your most important entries for quick access.',
  //   techUsed: ['React', 'Tailwind CSS', 'Supabase'],
  //   projectImagePath: '/mobile_images/markdown_editor.png',
  //   link: 'https://7wells-markdown-editor.netlify.app/',
  //   repo: 'https://github.com/eytanbab/react/tree/master/markdown-editor',
  // },
  {
    projectName: 'Finance Tracker',
    projectDesc:
      'Manage and visualize your finances with interactive charts and detailed transaction tracking. Save, edit, and filter transactions with ease, and customize your settings for a personalized experience.',
    techUsed: ['Nextjs', 'Tailwind CSS', 'Hono', 'PostreSQL'],
    projectImagePath: '/mobile_images/finance_mobile.png',
    link: 'https://finance-tracker-eight-indol.vercel.app/',
    repo: 'https://github.com/eytanbab/finance-tracker',
  },
  // {
  //   projectName: 'Defino',
  //   projectDesc:
  //     'Look up word meanings fast and explore a wide range of definitions. Find new words and expand your vocabulary with ease.',
  //   techUsed: ['React', 'Tailwind CSS', 'Dictionary API'],
  //   projectImagePath: '/mobile_images/defino_mobile.png',
  //   link: 'https://dict-web-app.netlify.app/',
  //   repo: 'https://github.com/eytanbab/react/tree/master/dictionary-web-app',
  // },
  // {
  //   projectName: 'Advice Generator',
  //   projectDesc:
  //     'Get instant guidance with our advice generator app! Simply click the button and receive a random piece of advice, based on expert insights and proven psychological principles.',
  //   techUsed: ['React', 'Tailwind CSS', 'Advice Slip API'],
  //   projectImagePath: '/mobile_images/advice_mobile.png',
  //   link: 'https://advice-generator-7.netlify.app/',
  //   repo: 'https://github.com/eytanbab/react/tree/master/advice-generator',
  // },
  {
    projectName: 'Shortly',
    projectDesc:
      'Create short, easy-to-share links in seconds. Simplify your online sharing with a quick URL shortener.',
    techUsed: ['React', 'Tailwind CSS', 'shrtco.de API'],
    projectImagePath: '/mobile_images/shortly_mobile.png',
    link: 'https://url-shortener-2.netlify.app/',
    repo: 'https://github.com/eytanbab/react/tree/master/url-shortener-2',
  },
  // {
  //   projectName: 'Weatherly',
  //   projectDesc:
  //     "Stay ahead of the weather with our user-friendly web app! With real-time updates and accurate forecasts, you'll always be prepared for whatever Mother Nature has in store. ",
  //   techUsed: ['React', 'Tailwind CSS', 'weatherapi '],
  //   projectImagePath: '/mobile_images/weatherly_mobile.png',
  //   link: 'https://weatherly-web-app.netlify.app/',
  //   repo: 'https://github.com/eytanbab/react/tree/master/weather-web-app',
  // },
  // {
  //
  //   projectName: 'Tip calculator',
  //   projectDesc:
  //     'Tired of the hassle of calculating tips? Our tip calculator app is here to help! With just a few taps, you can easily split the bill and calculate the perfect tip for your meal. ',
  //   techUsed: ['React', 'CSS'],
  //   projectImagePath: '/mobile_images/calculator_mobile.png',
  //   link: 'https://calculate-my-tip.netlify.app/',
  //   repo: 'https://github.com/eytanbab/react/tree/master/tip-calculator-app',
  // },
];

export const tracks = [
  {
    trackName: '7Wells - Voices',
    link: 'https://www.youtube.com/embed/iS_Y5EzirdA?si=6VleCHd3tJdcFqC5?ecver=2&enablejsapi=1',
  },
  {
    trackName: '7Wells - Mi Amor ft. Alexy Large',
    link: 'https://www.youtube.com/embed/ISbn3al-6sM?si=zA6qNDI6j8ae_4ia?ecver=2&enablejsapi=1',
  },
  {
    trackName: 'Lady Gaga - Judas | 7wells Bootleg',
    link: 'https://www.youtube.com/embed/nCKZO0q-wZw?si=HS1pBrc16tiRZS1o?ecver=2&enablejsapi=1',
  },
  {
    trackName: '7Wells - Habibi',
    link: 'https://www.youtube.com/embed/OdYlUDppAfs?si=1oQNT5bvOjo-uIsn?ecver=2&enablejsapi=1',
  },
  {
    trackName: '7Wells - House of Techno',
    link: 'https://www.youtube.com/embed/B5NAtCB4u-Q?si=0Z8Tdtfk7Ah3VCs_?ecver=2&enablejsapi=1',
  },
];
