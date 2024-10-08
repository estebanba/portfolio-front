const createDate = (dateString) => new Date(dateString);

export const activity = [
  {
    title: "Tesla",
    subtitle: "Web applications for data management in construction",
    company: "Tesla",
    // category: "Work",
    // type: "Software",
    labels: ["work", "software", "architecture"],
    role: "Software Engineer",
    description: "Developed Engineering Applications",
    date: 2022,
    dateFrom: createDate("2022-11-01"),
    dateUntil: createDate("2024-07-01"),
    url: "https://www.tesla.com/",
    image: [],
  },
  {
    title: "Tesla",
    subtitle:
      "Web applications for data management and 3D models in Quality Control",
    company: "Tesla",
    // category: "Work",
    // type: "Software",
    labels: ["work", "software"],
    role: "Software Engineer",
    description: "Developed Engineering Applications",
    date: 2023,
    dateFrom: createDate("2023-11-01"),
    dateUntil: createDate("2024-07-01"),
    url: "https://www.tesla.com/",
    image: [],
  },
  {
    title: "Tesla",
    subtitle:
      "Web applications for data management and 3D models in Manufacturing",
    company: "Tesla",
    // category: "Work",
    // type: "Software",
    labels: ["work", "software"],
    role: "Software Engineer",
    description: "Developed Engineering Applications",
    date: 2024,
    dateFrom: createDate("2024-11-01"),
    dateUntil: createDate("2024-07-01"),
    url: "https://www.tesla.com/",
    image: [],
  },
  {
    title: "Portfolio 2",
    subtitle: "Small makeover",
    company: null,
    category: "Post",
    type: "Application",
    labels: ["project"],
    role: "Creator",
    description: "This is my portfolio",
    date: "2024",
    dateFrom: createDate("2024-10-01"),
    // dateUntil: createDate("2024-07-01"),
    url: "https://www.estebanbasili.com/",
    images: [],
  },
  {
    title: "Boxi in winter",
    subtitle: "Walking in Berlin on a cold afternoon",
    company: null,
    // category: "Experiment",
    // type: "Application",
    labels: ["photography", "label B", "experiment"],
    role: "Creator",
    description: "A Tool to Blabla",
    date: "29/11/2023",
    dateFrom: createDate("2023-11-29"),
    // dateUntil: createDate("2024-07-01"),
    url: "https://photos.app.goo.gl/sXnVmAhMicrQ1vn19",
    images: [],
  },
  // {
  //   title: "Amazon",
  //   subtitle: "BIM/VDC Management for a Fulfillment Center",
  //   company: "Hyphen",
  //   labels: ["project", "architecture"],
  //   role: ["Architect", "BIM Manager"],
  //   description: "Bilding Information Modeling ",
  //   date: 2018,
  //   url: "https://hyphen.archi/commercial-architects/logistics/",
  //   images: [],
  // },

  // ---------------------
  // {
  //   title: "Tesla",
  //   subtitle:
  //     "Automation and web applications for data management and 3D models",
  //   company: "Tesla",
  //   labels: ["software", "project", "work"],
  //   role: "Software Engineer",
  //   description:
  //     "Collaborated with control engineers and operators to create effective automation solutions, including database structures, API integration, and user interface design for data and 3D models.",
  //   dateFrom: createDate("2022-11-01"),
  //   dateUntil: createDate("2024-07-01"),
  //   url: "https://www.tesla.com/",
  //   images: [],
  // },
  {
    title: "Ironhack",
    subtitle: "Full Stack Web Development Bootcamp",
    company: "Ironhack",
    labels: ["software", "experiment"],
    role: "Bootcamp Participant",
    description:
      "Completed a full-time Full Stack Web Development Bootcamp focused on front-end and back-end technologies.",
    dateFrom: createDate("2022-05-01"),
    dateUntil: createDate("2022-07-01"),
    url: "https://www.ironhack.com/",
    images: [],
  },
  {
    title: "Travel Sabbatical",
    subtitle: "Exploration of different countries for personal growth",
    company: "Self-employed",
    labels: ["experiment"],
    role: "Traveler",
    description:
      "Traveled through Mexico, Costa Rica, Argentina, and Brazil for personal exploration and growth.",
    dateFrom: createDate("2021-10-01"),
    dateUntil: createDate("2022-03-01"),
    url: "",
    images: [],
  },
  {
    title: "Amazon",
    subtitle: "BIM data production and coordination for fulfillment centers",
    company: "Hyphen A GmbH",
    labels: ["architecture", "work"],
    role: "Project Architect and BIM Specialist",
    description:
      "Managed BIM data production for logistics projects, led a BIM coordination team, and developed BIM standards and training for Amazon projects.",
    dateFrom: createDate("2018-10-01"),
    dateUntil: createDate("2021-09-01"),
    url: "https://www.hyphen.com/",
    images: [],
  },
  // {
  //   title: "Architectural Project Management and BIM",
  //   subtitle: "Project management and digital workflows in architectural projects",
  //   company: "IR arquitectura",
  //   labels: ["architecture", "work"],
  //   role: "Partner and BIM Specialist",
  //   description: "Managed multiple architectural projects, developed project management standards, and promoted digitalization of workflows.",
  //   dateFrom: createDate("2015-06-01"),
  //   dateUntil: createDate("2018-08-01"),
  //   url: "",
  //   images: []
  // },
  {
    title: "Tapebicuá",
    subtitle:
      "Consulting on design and construction of industrialized timber housing",
    company: "Tapebicuá",
    labels: ["architecture", "project"],
    role: "Consulting Architect",
    description:
      "Provided consulting to management on the design and construction of timber housing, reducing lead times by 20%.",
    dateFrom: createDate("2018-02-01"),
    dateUntil: createDate("2018-09-01"),
    url: "",
    images: [],
  },
  // {
  //   title: "BIM Course Assistance",
  //   subtitle: "Assistance in a BIM course at Universidad de Buenos Aires",
  //   company: "Universidad de Buenos Aires",
  //   labels: ["architecture", "teaching"],
  //   role: "Teacher Assistant",
  //   description: "Collaborated as a Teacher Assistant in a BIM course led by Arch. Javier Nuñez.",
  //   dateFrom: createDate("2018-02-01"),
  //   dateUntil: createDate("2018-09-01"),
  //   url: "https://www.uba.ar/",
  //   images: []
  // },
  {
    title: "Revit a Medida",
    subtitle: "Customized Revit and BIM Training",
    company: "Revit a Medida",
    labels: ["architecture", "teaching"],
    role: "Revit Instructor",
    description: "Conducted one-on-one and group lessons on Revit and BIM.",
    dateFrom: createDate("2017-02-01"),
    dateUntil: createDate("2019-01-01"),
    url: "",
    images: [],
  },
  // {
  //   title: "Architectural Design and Visualization",
  //   subtitle: "Design competitions and architectural visualization as an intern",
  //   company: "4L/KLM/A3 Arquitectos",
  //   labels: ["architecture", "work"],
  //   role: "Architectural Intern",
  //   description: "Participated in schematic design, design competitions, and architectural visualization.",
  //   dateFrom: createDate("2010-03-01"),
  //   dateUntil: createDate("2015-05-01"),
  //   url: "",
  //   images: []
  // },
  {
    title: "Casa 3X3",
    subtitle: "Single-family dwelling in San Isidro, Buenos Aires",
    company: "IR arquitectura",
    labels: ["architecture", "project"],
    role: "Project Team Member",
    description:
      "Participated in the design of a single-family dwelling, focusing on integrating modern architecture with the surrounding environment.",
    dateFrom: createDate("2017-01-01"),
    dateUntil: createDate("2021-12-31"),
    url: "https://irarquitectura.com/index.php/work/project/2",
    images: [],
  },
  {
    title: "ATO House",
    subtitle: "Residential project near Bajo de San Isidro Ecological Reserve",
    company: "IR arquitectura",
    labels: ["architecture", "project"],
    role: "Project Team Member",
    description:
      "Contributed to the design of a residential house that blends modern architecture with natural surroundings, focusing on sustainability and ecosystem integration.",
    dateFrom: createDate("2016-01-01"),
    dateUntil: createDate("2020-12-31"),
    url: "https://irarquitectura.com/index.php/work/project/21",
    images: [],
  },
  {
    title: "El Camarín",
    subtitle: "Small apartment renovation in Chacarita, Buenos Aires",
    company: "IR arquitectura",
    labels: ["architecture", "project"],
    role: "Project Team Member",
    description:
      "Worked on the renovation of a small apartment, optimizing space and creating a flexible living environment.",
    dateFrom: createDate("2018-01-01"),
    dateUntil: createDate("2018-12-31"),
    url: "https://homeworlddesign.com/chacarita-small-apartment-ir-arquitectura/",
    images: [],
  },
  {
    title: "Diorama Don Bosco",
    subtitle: "Expansion of an existing residence in San Isidro, Buenos Aires",
    company: "IR arquitectura",
    labels: ["architecture", "project"],
    role: "Project Team Member",
    description:
      "Contributed to the expansion of an existing residence, focusing on maintaining the architectural integrity while providing additional living space.",
    dateFrom: createDate("2015-01-01"),
    dateUntil: createDate("2015-12-31"),
    url: "https://irarquitectura.com/index.php/work/project/21",
    images: [],
  },
  {
    title: "Espacio Thea",
    subtitle: "Reform project in Barrio Norte, Caba, Argentina",
    company: "IR arquitectura",
    labels: ["architecture", "project"],
    role: "Project Team Member",
    description:
      "Contributed to the reform of a space in Barrio Norte, focusing on modern design and enhancing functionality.",
    dateFrom: createDate("2016-01-01"),
    dateUntil: createDate("2016-12-31"),
    url: "https://irarquitectura.com/index.php/work/project/7",
    images: [],
  },
  {
    title: "San Martín 3829",
    subtitle: "Residential building project in Buenos Aires",
    company: "4L arquitectura",
    labels: ["architecture", "project"],
    role: "Project Team Member",
    description:
      "Participated in the design and development of a residential building located at San Martín 3829, focusing on optimizing living space and modern architecture.",
    dateFrom: createDate("2016-01-01"),
    dateUntil: createDate("2016-12-31"),
    url: "https://cargocollective.com/4LARQ/San-Martin-3829",
    images: [],
  },
];
