// src/data/portfolioData.js
export const profile = {
    name: "NELET Tuan",
    title: "Junior Web developer FullStack",
    email: "tuannelet@gmail.com",
    phone: "+33 6 66 08 93 16",
    location: "Paris, France",
    github: "https://github.com/Goldoplot",
    linkedin: "https://linkedin.com/in/tuannelet",
    image: "/img/photo_profile.jpg" // chemin depuis public/img
};

export const skills = {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vue.js"],
    backend: ["PHP", "Node.js", "Ruby", "MySQL", "MongoDB", "REST API"],
    tools: ["Git", "Docker", "AI Claude and ChatGPT", "Figma", "PHPstorm"],
    languages: ["French", "English", "Spanish"]
};

export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Complete e-commerce platform with cart,payment system, user page and admin dashboard.",
        technologies: ["PHP","MYSQL","Bootstrap","JavaScript "],
        image: "/img/ecommerce.jpg",
        github: "https://github.com/Goldoplot/E-commerce-website",
        demo: "",
        status: "In process"
    },
    {
        id: 2,
        title: "Connected Refrigerator Kouakou Ziner",
        description: "Platform to manage your fridge inventory and reduce food waste",
        technologies: ["Ruby on Rails", "ActiveRecord", "MySQL", "Bootstrap", "JavaScript"],
        image: "/img/fridge.jpg",
        github: "https://github.com/Goldoplot/kouakou_ziner",
        demo: "https://fridge.tuannelet.com",
        status: "Deployed"
    },
    {
        id: 3,
        title: "API REST TaskManager",
        description: "Full-featured API for task management with JWT authentication and Swagger documentation",
        technologies: ["Node.js", "Express", "MongoDB", "JWT"],
        image: "/img/api.jpg",
        github: "",
        demo: "",
        status: "In process"
    },
    {
        id: 4,
        title: "Real-time Chat Application",
        description: "A web-based chat application that allows users to communicate in real-time with features like private messaging and group chats.",
        technologies: ["Symfony", "Mercure protocol", "Vue.js"],
        image: "/img/chat-application.jpg",
        github: "",
        demo: "",
        status: "In process"
    }

];

export const experience = [
    {
        title: "The Odin Project",
        company: "The Odin Project",
        period: "2023 - Present",
        description: "The Odin Project is a free, open-source curriculum that provides a comprehensive path to becoming a full-stack web developer. It covers HTML, CSS, JavaScript, Git, Node.js, databases, and more, with a strong emphasis on hands-on projects and real-world experience."
    },
    {
        title: "W3schools tutorials",
        company: "W3schools",
        period: "2023 - Present",
        description: "the world's largest web developer site. It provides tutorials and references on web development languages such as HTML, CSS, JavaScript, PHP, SQL, and Bootstrap, covering most aspects of web programming."
    },
    {
        title: "CS 50's Introduction to Computer Science",
        company: "Harvard University",
        period: "2022",
        description: "An entry-level course taught by David J. Malan that introduces students to the art of programming and the basics of computer science. The course covers foundational topics such as algorithms, data structures, software engineering, and web development, using languages like C, Python, SQL, and JavaScript."
    }

];

export const education = [
    {
        degree: "Bachelor in web development",
        school: "LeWagon",
        period: "2023 - 2024",
        description: "Le Wagon’s Web Development Bootcamp is an intensive, immersive full-stack training program that combines web development with AI integration. It's designed to prepare learners for professional careers by teaching them how to build and deploy real-world applications. "
    }
];

export const timelineEvents = [
    {
        id: 7,
        date: "2012 / 2013",
        title: "Working Holiday Australia",
        type: "decision",
        description: "Took a major step by moving to Australia for a sabbatical year.",
        details: "This experience was a turning point in my life, offering me an international outlook and broad cultural awareness. During that time, I worked in different jobs, strengthened my English, and built a strong sense of independence..",
        icon: "🌏",
        color: "bg-orange-500"
    },
    {
        id: 2,
        date: "2010 / 2015",
        title: "Bachelor in sports sciences",
        type: "education",
        description: "Obtained a Bachelor's degree in Sports Sciences",
        details: "Comprehensive studies in anatomy, physiology, biomechanics, and nutrition. Gained practical experience through internships and projects focused on athletic performance and health promotion.",
        icon: "📚",
        color: "bg-blue-500"
    },
    {
        id: 1,
        date: "2013 / 2015",
        title: "Groupement Technique des Hippodromes Parisiens",
        type: "work",
        description: "Part-time receptionist in a horse racing company",
        details: "Receptionist role involving customer service, administrative tasks, and event coordination. Developed strong organizational and communication skills while managing front-desk operations in a fast-paced environment.",
        icon: "🏢",
        color: "bg-yellow-500"
    },
    {
        id: 3,
        date: "2016 / 2017",
        title: "Working Holiday South Korea",
        type: "decision",
        description: "Moved to South Korea for a year to teach French, train individuals through fitness and explore a new culture",
        details: "This experience allowed me to immerse myself in a completely different culture, learn a new language, and develop adaptability and cross-cultural communication skills. Teaching French also enhanced my interpersonal skills and ability to engage with diverse groups.",
        icon: "🌏",
        color: "bg-orange-500"
    },
     {
        id: 4,
        date: "2018 / 2019",
        title: "UrbanAquaFitness",
        type: "work",
        description: "Fitness instructor and personal trainer",
        details: "Managed a fitness business specializing in aquatic fitness and personal training. Responsibilities included client assessment, program design, and leading group classes. Developed strong customer service skills and business management experience.",
        icon: "🏢",
        color: "bg-purple-500"
    },
    {
        id: 5,
        date: "2019 / 2020",
        title: "Decathlon",
        type: "work",
        description: "Sales associate in a major sports retail chain",
        details: "Provided customer service, managed inventory, and assisted in visual merchandising. Gained experience in retail operations and developed strong communication and sales skills.",
        icon: "🚀",
        color: "bg-red-500"
    },
    {
        id: 6,
        date: "2020 / 2021",
        title: "France Travail",
        type: "work",
        description: "Career transition advisor",
        details: "Assisted individuals in career transitions by providing guidance on job search strategies, resume writing, and interview preparation. Developed strong counseling and interpersonal skills while helping clients achieve their career goals.",
        icon: "💼",
        color: "bg-green-500"
    },
    {
        id: 7,
        date: "2022 / 2023",
        title: "Working Holiday Argentina",
        type: "decision",
        description: "Traveled to Argentina for a year to learn spanish, worked in hotels and restaurants, and explored South America",
        details: "This experience allowed me to immerse myself in a new culture and language, enhancing my adaptability and cross-cultural communication skills, while working in various hospitality roles.",
        icon: "🎯",
        color: "bg-indigo-500"
    },
    {
        id: 8,
        date: "2024 / 2025",
        title: "Botanic",
        type: "work",
        description: "Sales associate in a major gardening retail chain",
        details: "Provided customer service, managed inventory, and assisted in visual merchandising. Gained experience in retail operations and developed strong communication and sales skills.",
        icon: "🚀",
        color: "bg-red-500"
    }
];