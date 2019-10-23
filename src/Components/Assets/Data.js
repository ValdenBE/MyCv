import ProfilePic from "./ProfilePic.jpg"

const CVData = {



  personalData: {
    name: 'Pirghaye Fabian',
    title: 'Junior Web Developer',
    alias: '* Valden *',
    image: ProfilePic,
    contacts: [{
        type: 'Mail',
        value: 'Pirghaye.f@gmail.com'
      },
      {
        type: 'Mobile',
        value: '0499/33.23.35'
      },
      //{ type: 'website', value: 'example.com' },
      {
        type: 'Linkedin',
        value: 'linkedin.com/in/valdenbe/'
      },
      //{ type: 'twitter', value: 'twitter.com/404' },
      {
        type: 'Github',
        value: 'github.com/valdenbe'
      }
    ],
    desc: [{
      type: 'text',
      title: 'Career Profile',
      content: 'Développeur Web Junior en fin de formation. Je recherche un stage afin de me former en entreprise.',
    }, ],
  },

  school: {
    type: 'common-list',
    title: 'Mes Formations ',
    icon: 'graduation',
    items: [{
      title: 'Junior Web Developer',
      authority: 'Becode Liège',
      authorityWebSite: 'Becode.org',
      rightSide: 'Mai 2019 - Décembre 2019',
    }, ]
  },





  work: {
    type: 'experiences-list',
    title: 'Mon Experience',
    description: 'Optional',
    icon: 'archive',
    items: [{
        title: 'Magasinier Cariste',
        company: 'Dreamland & LACHS',
        description: '/',
        companyWebSite: '/',
        companyMeta: '/',
        datesBetween: '2018-2019'
      },
      {
        title: 'Ouvrier en aménagement extérieur',
        company: 'Maton Sport',
        description: '/',
        companyWebSite: '/',
        companyMeta: '/',
        datesBetween: '2018'
      },
      {
        title: 'Opérateur de production',
        company: 'Sprimoglass, Belourthe & Pere Olive',
        description: '/',
        companyWebSite: '/',
        companyMeta: '',
        datesBetween: '2011 - 2017',
        descriptionTags: ['/']
      },
    ]
  },




  skills: [

    {
      type: 'tag-list',
      title: 'Mes Connaissances',
      icon: 'rocket',
      items: [{
          name: 'React',
          rate: '2',
        },
        {
          name: 'Javascript',
          rate: '2',
        },
        {
          name: 'Html',
          rate: '2',
        },
        {
          name: 'Css/Sass',
          rate: '2',
        },
        {
          name: 'Node',
          rate: '2',
        },
        {
          name: 'Git & GitFlow',
          rate: '2',
        },
        {
          name: 'Angular',
          rate: '1',
        },
      ]
    },
  ],

  hobies: [{
    type: 'tag-list',
    title: 'Mes Hobbies',
    icon: 'cubes',
    items: ['Jeux vidéos', 'Musique', 'Informatique', 'Technologie']
  }, ]

}
export default CVData