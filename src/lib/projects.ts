export type Project = {
  id: string
  name: string
  description: string
  image: string
  longDescription: string
  technologies: string[]
  clientTestimonial?: string
}

export const projects: Project[] = [
  {
    id: "project-a",
    name: "Project A",
    description: "E-commerce platform",
    image: "/placeholder.svg?height=200&width=300",
    longDescription:
      "Project A is a comprehensive e-commerce platform designed to provide a seamless shopping experience for users and powerful management tools for administrators. Built with scalability in mind, it can handle thousands of products and concurrent users.",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    clientTestimonial:
      "Project A transformed our online business. The user-friendly interface and robust backend have significantly improved our sales and customer satisfaction.",
  },
  {
    id: "project-b",
    name: "Project B",
    description: "Mobile banking app",
    image: "/placeholder.svg?height=200&width=300",
    longDescription:
      "Project B is a secure and intuitive mobile banking application that allows users to manage their finances on-the-go. It features real-time transaction tracking, bill payments, and advanced security measures to protect user data.",
    technologies: ["React Native", "Express.js", "PostgreSQL", "JWT", "Plaid API"],
    clientTestimonial:
      "The mobile banking app developed by YourSoftwareHouse has received overwhelmingly positive feedback from our customers. It's intuitive, fast, and secure.",
  },
  {
    id: "project-c",
    name: "Project C",
    description: "AI-powered analytics dashboard",
    image: "/placeholder.svg?height=200&width=300",
    longDescription:
      "Project C is an advanced analytics dashboard that leverages artificial intelligence to provide actionable insights from complex data sets. It features interactive visualizations, predictive modeling, and automated reporting capabilities.",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "AWS"],
    clientTestimonial:
      "Project C has revolutionized our decision-making process. The AI-powered insights have helped us identify new opportunities and optimize our operations.",
  },
]

