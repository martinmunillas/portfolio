export default {
  name: 'martinmunilla.',
  headerTagline: [
    'Hi 👋 You found me! I am Martin Munilla.',
    'Software Developer',
    'from Chile',
  ],
  contactEmail: 'contact@martinmunilla.com',
  abouttext: [
    "I'm Martin Munilla, I've been working in the software/web development since 2017, I started using tools like Wordpress but stopped using them to learn new technologies and become a full stack developer.",
    "At the moment my favourite stack is MERN(MongoDB, ExpressJS, ReactJS, NodeJS) but i know other tools as well and i'm also always open to learn new stuff ",
  ],
  aboutImage: 'https://i.ibb.co/qs8RQyB/personal.png',
  ShowAboutImage: true,
  projects: [
    {
      id: 1,
      title: 'Muniflix',
      service: 'Streaming on demand',
      description: 'A platform to watch the best movies and series',
      imageSrc: 'https://i.ibb.co/55RBBbB/muniflix-Banner.png',
      mainUrl: 'https://muniflix-app.herokuapp.com/',
      mainButton: 'View Preview App',
      repository: [
        {
          url: 'https://github.com/martinmunillas/Muniflix-App',
          name: 'App Repository',
        },
        {
          url: 'https://github.com/martinmunillas/MuniFlix-Api',
          name: 'API Repository',
        },
      ],
    },
    {
      id: 2,
      title: 'Timber',
      service: 'Programming Language',
      description: `An interpreter for my own programming language, done with the only purpose of learning`,
      imageSrc: 'https://i.ibb.co/jVCm81b/timber-Banner.png',
      mainUrl: '',
      mainButton: 'Download Interpreter',
      repository: [
        {
          url: 'https://github.com/martinmunillas/Timber',
          name: 'Interpreter Repository',
        },
      ],
    },
    {
      id: 3,
      title: 'martinmunilla.',
      service: 'Portfolio',
      description: `My personal developer portfolio`,
      imageSrc: 'https://i.ibb.co/3c7981z/portfolio-Banner.png',
      mainUrl: '',
      mainButton: 'Visit Portfolio',
      repository: [
        {
          url: 'https://github.com/martinmunillas/portfolio',
          name: 'Portfolio Repository',
        },
      ],
    },
  ],

  social: [{ name: 'Github', url: 'https://github.com/martinmunillas' }],
};
