import ProfilePic from "./ProfilePic.jpg"

const CVData = {



    personalData: {
      name: 'Pirghaye Fabian',
      title: 'Junior Web Developer',
      image: ProfilePic,
      contacts: [
        { type: 'Mail', value: 'Pirghaye.f@gmail.com' },
        { type: 'Mobile', value: '0499/33.23.35' },
        //{ type: 'website', value: 'example.com' },
        { type: 'Linkedin', value: 'linkedin.com/in/valdenbe/' },
        //{ type: 'twitter', value: 'twitter.com/404' },
        { type: 'Github', value: 'github.com/valdenbe' }
      ],
      desc: [
        {
          type: 'text',
          title: 'Career Profile',
          content: 'Esse dolore consectetur ut velit eiusmod minim excepteur.',
        },
      ],
    },
    
    school: 
      {
        type: 'common-list',
        title: 'Formations',
        icon: 'graduation',
        items: [
          {
            title: 'Junior Web Developer',
            authority: 'Becode Liège',
            authorityWebSite: 'Becode.org',
            rightSide: '2019.5 - 2019.12',
          }
        ]
      },
    




    work: 
      {
        type: 'experiences-list',
        title: 'Experiences',
        description: 'Optional',
        icon: 'archive',
        items: [
          {
            title: 'Magasinier Cariste',
            company: 'Dreamland & LACHS',
            description: '/',
            companyWebSite: '/',
            companyMeta: '/',
            datesBetween: '2018'
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
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'CSS/SASS', 'Html', 'Node', 'Angular']
      },
    ],

    hobies:[{
      type: 'tag-list',
      title: 'Hobies & Interests',
      icon: 'cubes',
      items: ['Photography', 'Poetry']
    },]
    
  }
  export default CVData