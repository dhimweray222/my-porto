import type { PortfolioData } from '~/types/portfolio'

export const usePortfolio = () => {
  const data: PortfolioData = {
    profile: {
      name: 'Dhimas Wahyu Asshidiq',
      role: 'Full Stack Developer',
      bio: 'Skilled Software Developer focusing on efficient, scalable systems. Experienced in Go Fiber, Node.js, and Nuxt 3. Passionate about backend optimization and creating responsive, accessible frontend interfaces.',
      skills: ['Go', 'Fiber', 'Nuxt 3', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Kafka', 'Tailwind CSS'],
      image: '/dhimas.png'
    },
    experience: [
      {
        id: 1,
        company: 'PT Pegadaian',
        role: 'Fullstack Developer',
        period: '02/2025 - Present',
        description: [
          'Developed Sahabat Pegadaian website using Nuxt 3 and Express.js.',
          'Implemented SSR and optimized performance with lazy-loading.',
          'Built secure RESTful APIs and optimized SQL queries.'
        ], 
        logo: 'https://placehold.co/60x60/008f4c/ffffff?text=P', 
        projectImage: 'https://placehold.co/600x400/008f4c/ffffff?text=Sahabat+Pegadaian',
        techStack: ['Nuxt 3', 'TypeScript', 'Express.js', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
        fullDescription: 'Developed new features for the Sahabat Pegadaian promotional website. Implemented Server-Side Rendering (SSR) for SEO, built accessible UI with Tailwind CSS, and optimized backend performance using index tuning and Redis caching. Integrated JWT-based authentication and role-based access control.'
      },
      {
        id: 2,
        company: 'Fleetify.id',
        role: 'Backend Developer',
        period: '02/2024 - 02/2025',
        description: [
          'Optimized Redis cache and implemented Go clean architecture.',
          'Improved API efficiency for fleet management features.',
          'Integrated RabbitMQ for Fleet Status feature.'
        ],
        logo: 'https://placehold.co/60x60/2563eb/ffffff?text=F',
        projectImage: 'https://placehold.co/600x400/2563eb/ffffff?text=Fleet+Management',
        techStack: ['Go', 'Fiber', 'GORM', 'Redis', 'RabbitMQ', 'PostgreSQL'],
        fullDescription: 'Designed and implemented workflows for vehicle repair applications. Optimized backend server queries to enhance performance. Integrated RabbitMQ as a message broker and developed a Purchase Order Part system for partner workshops.'
      },
      {
        id: 3,
        company: 'Synapsis.id',
        role: 'Backend Intern',
        period: '11/2023 - 02/2024',
        description: [
          'Developed microservices using Fiber Go and Kafka.',
          'Created services to consume data for Google BigQuery.',
          'Built REST APIs to expose BigQuery data.'
        ],
        logo: 'https://placehold.co/60x60/6366f1/ffffff?text=S',
        projectImage: 'https://placehold.co/600x400/6366f1/ffffff?text=Microservices',
        techStack: ['Go', 'Fiber', 'Kafka', 'Google BigQuery', 'Microservices'],
        fullDescription: 'Developed backend microservices for user authentication and profile services. Created a data consumption service using Fiber Go to write data from a message broker to Google BigQuery.'
      },
      {
        id: 4,
        company: 'Goedang',
        role: 'Backend Developer NodeJS',
        period: '08/2022 - 09/2023',
        description: [
          'Developed REST API using ExpressJS and PostgreSQL.',
          'Mentored new members on backend development.',
          'Implemented data security measures.'
        ],
        logo: 'https://placehold.co/60x60/f59e0b/ffffff?text=G',
        projectImage: 'https://placehold.co/600x400/f59e0b/ffffff?text=REST+API',
        techStack: ['Node.js', 'ExpressJS', 'Sequelize', 'PostgreSQL'],
        fullDescription: 'Developed REST APIs for Goedang applications using ExpressJS and Sequelize ORM. Provided guidance to new team members and ensured data security within the application.'
      },
      {
        id: 5,
        company: 'PT. Qatros Teknologi Nusantara',
        role: 'Backend Engineer Intern',
        period: '08/2022 - 12/2022',
        description: [
          'Developed REST API using Ruby on Rails.',
          'Built Family Tree schema and chat features.',
          'Implemented Action Cable for real-time features.'
        ],
        logo: 'https://placehold.co/60x60/ef4444/ffffff?text=Q',
        projectImage: 'https://placehold.co/600x400/ef4444/ffffff?text=Family+Tree',
        techStack: ['Ruby on Rails', 'PostgreSQL', 'Action Cable'],
        fullDescription: 'Developed REST APIs and schemas for a Family Tree application. Implemented real-time chat functionality between users using Action Cable.'
      }
    ],
    contact: {
      email: 'dhimweray222@gmail.com',
      github: 'https://github.com/dhimas',
      linkedin: 'https://linkedin.com/in/dhimas'
    }
  }

  return {
    data
  }
}
