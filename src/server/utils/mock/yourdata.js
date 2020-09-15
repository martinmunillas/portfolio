export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  name: 'martinmunilla.',
  headerTagline: [
    //Line 1 For Header
    'Hi 👋 You found me! I am Martin Munilla.',
    //Line 2 For Header
    'Software Developer',
    //Line 3 For Header
    'from Chile',
  ],
  //Contact Email
  contactEmail: 'contact@martinmunilla.com',
  // Add Your About Text Here
  abouttext:
    ["I'm Martin Munilla, I've been working in the software/web development since 2017, I started using tools like Wordpress but stopped using them to learn new technologies and become a full stack developer.",
    "At the moment my favourite stack is MERN(MongoDB, ExpressJS, ReactJS, NodeJS) but i know other tools as well and i'm also always open to learn new stuff "],
  aboutImage:
    'http://localhost:3000/static/personalPhoto.png',
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true, //true or false (Change Here)
  // Change Projects Here
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: 'Muniflix', //Project Title - Add Your Project Title Here
      service: 'Backend & Frontend', // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
      'http://localhost:3000/static/muniflix.png',
      //Project URL - Add Your Project Url Here
      url: 'https://muniflix-app.herokuapp.com/',
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: 'Project Two',
      service: 'Website Development',
      imageSrc:
        'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      url: 'http://chetanverma.com/',
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: 'Project Three',
      service: 'Web App',
      imageSrc:
        'https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      url: 'http://chetanverma.com/',
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: 'Project Four',
      service: 'Branding',
      imageSrc:
        'https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      url: 'http://chetanverma.com/',
    },

    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
  ],
  social: [
    // Add Or Remove The Link Accordingly
    { name: 'Github', url: 'https://github.com/martinmunillas' },
    {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/users/13784481/martin-munilla',
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/chetanverma',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/cv.uidesign/',
    },
  ],
};