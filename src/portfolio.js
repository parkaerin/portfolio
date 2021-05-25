
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Aerin Park",
  title: "안녕하세요.",
  subTitle: emoji("" +
      "Front-End 개발자 박애린입니다."
  ),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  // Instagram and Twitter are also supported in the links!
  display: false
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "",
  skills: [
    emoji("⚡ Cloud Web Application 개발"),
    emoji("⚡ XP - Extreme Programming 경험 (Test-Driven Development 및 Pair Programming, Agile 문화)"),
    emoji("⚡ React.js 부터 Spring Framework 까지 풀스택 경험")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript, TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Webpack",
      fontAwesomeClassname: "fas fa-window-restore"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Framework",
      fontAwesomeClassname: "fab fa-stripe-s"
    },
    {
      skillName: "Mysql, MongoDB...",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C++, MFC...",
      fontAwesomeClassname: "fas fa-laptop-code"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "LS Electric",
      companylogo: require("./assets/images/ls-logo.png"),
      date: "2014.01 – Present",
      desc: "",
      descBullets: [
        "2019~현재 - Cloud Web Front-End 개발",
        "2014~2018 - Windows Application 개발 (XG5000)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "parkaerin", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      title: "Solution Square",
      period: "2021.01 ~ Present",
      image: require("./assets/images/screenshot/sss.png"),
      subImages: [
        require("./assets/images/screenshot/sss2.png"),
      ],
      comment: [
        "Goals: 자동화 기기(PLC, HMI, Drive...) 관련 문서 조회 Portal 및 문서 검색 시스템 구축",
        "Responsibility: Full-Stack 개발 (현재 진행 중)",
        "Skills: React.js, Typescript, Webpack, Jest, Java, Spring Boot 2, JUnit, Mongo DB, Maria DB, Elasticsearch...",
        "주요 개발 기능:  Social Login 구현, Elasticsearch를 통한 문서 검색 엔진 구축, 제품 카테고리 관리, Web Editor를 통한 컨텐츠 업로드 등",
      ]
    },
    {
      title: "O&M Cloud Monitoring",
      period: "2020.07 ~ 2020.12",
      image: require("./assets/images/screenshot/09.png"),
      subImages: [
        require("./assets/images/screenshot/10.png"),
        require("./assets/images/screenshot/11.png"),
        require("./assets/images/screenshot/12.png"),
        require("./assets/images/screenshot/13.png"),
      ],
      comment: [
          "Goals: 태양열 발전 Site 모니터링 Web Application",
          "Responsibility: Full-Stack 개발",
          "Skills: React.js, Typescript, Webpack, Jest, Java, Spring Boot 2, JUnit, Mongo DB, Maria DB...",
          "주요 개발 기능:  Mapbox를 이용한 Site 모니터링, 기기 대시보드, Chart를 통한 초단위 기기 데이터 조회, 일정 관리 등",
      ]
    },
    {
      title: "G1 PCS Monitoring",
      period: "2019.01 ~ 2020.06",
      image: require("./assets/images/screenshot/04.png"),
      subImages: [
        require("./assets/images/screenshot/01.png"),
        require("./assets/images/screenshot/02.png"),
        require("./assets/images/screenshot/03.png"),
        require("./assets/images/screenshot/08.png"),
      ],
      comment: [
        "Goals: PCS 기기 모니터링",
        "Responsibility: Front-End 및 BFF Server 개발",
        "Skills: React.js, Typescript, Webpack, Jest, Java, Spring Boot 2, JUnit, Mongo DB, Maria DB...",
        "주요 개발 기능:  Google Map 이용한 Site 모니터링, Chart를 통한 초단위 기기 데이터 조회, 기기 관리 일지 데이터 관리, 기기 알람 관리, Node.js 서버로 구동하는 Embedded Web 개발 등",
      ]
    },
    {
      title: "XG5000",
      period: "2014.01 ~ 2018.12",
      image: require("./assets/images/screenshot/16.png"),
      subImages: [
        require("./assets/images/screenshot/xg50002.jpg"),
        require("./assets/images/screenshot/xg50003.jpg"),
        require("./assets/images/screenshot/xg50004.jpg"),
      ],
      comment: [
        "Goals: PLC Engineering을 위한 Windows Application 개발",
        "Responsibility: Full-Stack 개발",
        "Skills: C++, MFC, MySql, installShield...",
        "주요 개발 기능: PLC 기기 프로그래밍, I/O 파라미터 설정 화면, 기종 DB 관리, 플래그 트리 기능, 모션 PLC 파라미터 관리 화면 개발, 다국어 관리, 설치 파일 관리 등",
      ]
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Education"),
  subtitle: "",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Education Section

export const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hanyang University (Seoul)",
      logo: require("./assets/images/hanyanguniv.jpg"),
      subHeader: "컴퓨터 공학부",
      duration: "2009.03 ~ 2014.02",
      desc: "Computer Science & Engineering",
      descBullets: [
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "010-9452-5975",
  email_address: "love90719@naver.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
