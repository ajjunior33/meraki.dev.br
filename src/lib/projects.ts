export type Project = {
  id: string
  name: string
  description: string
  image: string
  customerLogo: string;
  longDescription: string
  technologies: string[]
  clientTestimonial?: string
}

export const projects: Project[] = [
  {
    id: "ags",
    name: "AGS | Asset Guardian System",
    customerLogo: "/nexux-logo.png",
    description: "Sistema de gerenciamento de ativos Industriais",
    image: "/ags.svg",
    longDescription:
      "Project A is a comprehensive e-commerce platform designed to provide a seamless shopping experience for users and powerful management tools for administrators. Built with scalability in mind, it can handle thousands of products and concurrent users.",
    technologies: ["Vite.JS", "Express.JS", "PostgresSQL", "Digital Ocean"],
    clientTestimonial:
      "Project A transformed our online business. The user-friendly interface and robust backend have significantly improved our sales and customer satisfaction.",
  },
  {
    id: "project-b",
    name: "Universus Store",
    customerLogo:"/universus-logo.svg",
    description: "Sistema de vendas de NFT para um game play to earn.",
    image: "/universus-store-image.png",
    longDescription:
      "Project B is a secure and intuitive mobile banking application that allows users to manage their finances on-the-go. It features real-time transaction tracking, bill payments, and advanced security measures to protect user data.",
    technologies: ["React", "Express.js", "MongoDB", "AWS"],
    clientTestimonial:
      "The mobile banking app developed by YourSoftwareHouse has received overwhelmingly positive feedback from our customers. It's intuitive, fast, and secure.",
  },
  {
    id: "project-c",
    customerLogo:"/sdec-logo.png",
    name: "SDEC App",
    description: "App offline first para venda de materiais de construção.",
    image: "/sdec-app.png",
    longDescription:
      "Project C is an advanced analytics dashboard that leverages artificial intelligence to provide actionable insights from complex data sets. It features interactive visualizations, predictive modeling, and automated reporting capabilities.",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "AWS"],
    clientTestimonial:
      "Project C has revolutionized our decision-making process. The AI-powered insights have helped us identify new opportunities and optimize our operations.",
  },
]

