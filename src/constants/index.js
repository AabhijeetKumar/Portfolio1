import project1 from "../assets/projectsImg/project1.jpeg"
import project2 from "../assets/projectsImg/project2.png"


export const INTRO_CONTENT =
    `A passionate Computer Science undergraduate specializing
 in full-stack web development, proficient in React.js, 
 JavaScript, and MySQL. Experienced in creating scalable,
 responsive web applications. Skilled in team 
 collaboration, problem-solving, and implementing modern 
 web technologies to deliver impactful digital solutions.
 I excel in team leadership, coordination, and analytical 
 problem-solving.`;

export const ABOUT_TEXT =
    `I specialize in full-stack development with a focus on 
MERN stack. With expertise in crafting responsive, 
user-centric web applications, I bring innovative ideas 
to life. Passionate about building user-centric designs 
and efficient back-end systems, I enjoy working collaboratively 
to deliver impactful projects. With a strong interest in 
modern web technologies and an eye for detail, I am committed 
to continuous learning and applying innovative tools to 
solve real-world challenges.`;

export const EXPERIENCE =
    [
        {
            year: "2021 - 2025",
            level: "Undergraduate",
            institute: "Chandigarh Group of Colleges",
            subject: "B.tech CSE",
            percentage: "78 %",
        },
        {
            year: "2020 - 2021",
            level: "Intermediate",
            institute: "Satish Chandra Memorial School",
            board: "CBSE",
            subject: "PCM",
            percentage: "80.8 %",
        },
        {
            year: "2018 - 2019",
            level: "Matriculation",
            institute: "Satish Chandra Memorial School",
            board: "CBSE",
            percentage: "86.8 %",
        },
    ];

export const PROJECTS = [
    {
        title: "Decentralized Storage",
        link:"https://github.com/AabhijeetKumar/DGdrive",
        image: project1,
        description:
            "The application integrates blockchain for secure registration and authentication, employs decentralized storage.It streamlines file sharing, enabling user to share files directly without intermediaries.",
        technologies: ["HTML", "CSS", "React", "Solidity", "PinataCloud"],
    },
    {
        title: "Real-time Chat App",
        image: project2,
        description: "A responsive real-time chat app that allows one-to-one interaction between users.It includes register and login functionality.",
        technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],

    },
];

export const CONTACT = {
    email: "abhiscms01@gmail.com"
}