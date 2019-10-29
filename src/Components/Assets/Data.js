import ProfilePic from "./ProfilePic.jpg";
import Badges from "./Badges.jpg";
const CVData = {
  personalData: {
    name: "Pirghaye Fabian",
    title: "Junior - Front End - Web Developer",
    alias: "* Valden *",
    image: ProfilePic,
    badges: Badges,
    contacts: [
      {
        type: "Mail",
        value: "Pirghaye.f@gmail.com"
      },
      {
        type: "Mobile",
        value: "0499/33.23.35"
      },
      //{ type: 'website', value: 'example.com' },
      {
        type: "Linkedin",
        value: "linkedin.com/in/valdenbe/"
      },
      //{ type: 'twitter', value: 'twitter.com/404' },
      {
        type: "Github",
        value: "github.com/valdenbe"
      }
    ],
    desc: [
      {
        type: "text",
        title: "Career Profile",
        content:
          "Développeur Web Junior en fin de formation. Je recherche un stage afin de me former en entreprise."
      }
    ]
  },

  school: {
    title: "Mes Formations ",
    items: [
      {
        title: "Junior Web Developer",
        authority: "Becode Liège",
        authorityWebSite: "Becode.org",
        rightSide: "Mai 2019 - Décembre 2019"
      }
    ]
  },

  work: {
    title: "Mon Experience",
    items: [
      {
        title: "Magasinier Cariste",
        company: "Dreamland & LACHS",
        description: "/",
        companyWebSite: "/",
        datesBetween: "2018-2019"
      },
      {
        title: "Ouvrier en aménagement extérieur",
        company: "Maton Sport",
        description: "/",
        companyWebSite: "/",
        datesBetween: "2018"
      },
      {
        title: "Opérateur de production",
        company: "Sprimoglass, Belourthe & Pere Olive",
        description: "/",
        companyWebSite: "/",
        datesBetween: "2011 - 2017"
      }
    ]
  },

  skills: [
    {
      type: "HTML",
      level: 60,
      range: 2
    },
    {
      type: "CSS/Sass",
      level: 60,
      range: 2
    },
    {
      type: "Javascript",
      level: 60,
      range: 2
    },
    {
      type: "Typescript",
      level: 30,
      range: 1
    },
    {
      type: "React",
      level: 50,
      range: 2
    },
    {
      type: "Angular",
      level: 25,
      range: 1
    },
    {
      type: "Wordpress",
      level: 30,
      range: 1
    },
    {
      type: "NodeJs",
      level: 25,
      range: 1
    },
    {
      type: "Git",
      level: 50,
      range: 2
    }
  ],
  colors: {
    bar: "#6ab5d4",
    title: {
      text: "#fff",
      background: "inherit"
    }
  },

  softSkills: [
    {
      title: "Mes Soft Skills",
      items: ["Communication", "Gestion du stress", "Motivation", "Curiosité"]
    }
  ],
  hobies: [
    {
      title: "Mes Hobbies",
      items: ["Jeux vidéos", "Musique", "Informatique", "Technologie"]
    }
  ]
};
export default CVData;
