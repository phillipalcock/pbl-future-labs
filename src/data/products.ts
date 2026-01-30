export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'book' | 'course' | 'bundle';
  image: string;
  rating: number;
  duration?: string;
  curriculum?: string[];
  instructor?: string;
  includes?: string[];
  thumbnail?: string;
}

export const products: Product[] = [
  // Books
  {
    id: 'book-1',
    title: 'Project-Based Learning Handbook: A Guide to Standards-Focused PBL',
    description: 'A comprehensive guide to standards-focused project-based learning for middle and high school teachers. Second edition.',
    price: 34.99,
    category: 'book',
    image: '/images/pbl handbook.jpg',
    rating: 4.8,
    instructor: 'Thom Markham, Ph.D.'
  },
  {
    id: 'book-2',
    title: 'Project Based Learning: Design and Coaching Guide',
    description: 'Expert tools for innovation and inquiry for K-12 educators. A practical guide for designing and implementing PBL in your classroom.',
    price: 39.99,
    category: 'book',
    image: '/images/design and coaching guide.jpg',
    rating: 4.7,
    instructor: 'Thom Markham, Ph.D.'
  },
  {
    id: 'book-3',
    title: 'Redefining Smart: Awakening Students\' Power to Reimagine Their World',
    description: 'Transform education by empowering students to think critically and reimagine solutions to real-world problems.',
    price: 29.99,
    category: 'book',
    image: '/images/redefining smart.jpg',
    rating: 4.6,
    instructor: 'Thom Markham, Ph.D.'
  },

  // Courses
  {
    id: 'course-1',
    title: 'AI in Project-Based Learning',
    description: 'Master AI integration strategies for designing and delivering authentic project-based learning experiences.',
    price: 99.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.9,
    duration: '4 weeks',
    instructor: 'Phil Alcock & Thom Markham, Ph.D.',
    thumbnail: 'ai-pbl',
    includes: ['12 video lessons', 'Downloadable templates', 'Certificate of completion', 'Community access'],
    curriculum: [
      'Week 1: AI fundamentals for educators — what works, what doesn\'t',
      'Week 2: Using AI for project design and standards alignment',
      'Week 3: AI-powered research workflows for students',
      'Week 4: Assessment and reflection with AI tools'
    ]
  },
  {
    id: 'course-2',
    title: 'Designing Authentic Projects',
    description: 'Learn frameworks for creating meaningful, real-world projects that drive student engagement and achievement.',
    price: 149.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.8,
    duration: '6 weeks',
    instructor: 'Thom Markham, Ph.D.',
    thumbnail: 'authentic-projects',
    includes: ['18 video lessons', 'Project design toolkit', 'Certificate of completion', 'Peer review sessions'],
    curriculum: [
      'Week 1-2: The anatomy of an authentic project — what makes it real',
      'Week 3: Connecting projects to community partners and real audiences',
      'Week 4: Standards alignment without killing the project',
      'Week 5: Building student agency into the design',
      'Week 6: Launching, managing, and showcasing final products'
    ]
  },
  {
    id: 'course-3',
    title: 'AI-Powered Personalized Learning',
    description: 'Implement adaptive learning technologies and AI tools to personalize student learning paths within projects.',
    price: 129.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.7,
    duration: '5 weeks',
    instructor: 'Phil Alcock',
    thumbnail: 'personalized-learning',
    includes: ['15 video lessons', 'AI tool guides', 'Certificate of completion', 'Live Q&A sessions'],
    curriculum: [
      'Week 1: Understanding personalization vs. differentiation',
      'Week 2: AI tools for identifying student strengths and gaps',
      'Week 3: Designing flexible project pathways',
      'Week 4: Real-time feedback loops with AI',
      'Week 5: Scaling personalized PBL in your classroom'
    ]
  },
  {
    id: 'course-4',
    title: 'Community Partnerships & PBL',
    description: 'Build authentic connections with community organizations to enhance project-based learning with real-world impact.',
    price: 89.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.6,
    duration: '4 weeks',
    instructor: 'Phil Alcock & Thom Markham, Ph.D.',
    thumbnail: 'community-partnerships',
    includes: ['10 video lessons', 'Partnership templates', 'Certificate of completion', 'Case studies'],
    curriculum: [
      'Week 1: Identifying and approaching community partners',
      'Week 2: Co-designing projects with external stakeholders',
      'Week 3: Managing logistics and student-partner interactions',
      'Week 4: Showcasing student work to real audiences'
    ]
  },
  {
    id: 'course-5',
    title: 'Assessing 21st Century Skills',
    description: 'Develop authentic assessment methods for evaluating project work, collaboration, and critical thinking.',
    price: 159.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.9,
    duration: '7 weeks',
    instructor: 'Thom Markham, Ph.D.',
    thumbnail: 'assessment',
    includes: ['21 video lessons', 'Assessment rubric library', 'Certificate of completion', 'Portfolio templates'],
    curriculum: [
      'Week 1-2: Beyond rubrics — rethinking what assessment means in PBL',
      'Week 3: Assessing collaboration and teamwork authentically',
      'Week 4: Critical thinking assessment frameworks',
      'Week 5: Student self-assessment and reflection tools',
      'Week 6: Using AI for continuous formative assessment',
      'Week 7: Building a portfolio-based assessment system'
    ]
  },
  {
    id: 'course-6',
    title: 'AI Ethics in Education',
    description: 'Explore responsible AI implementation, bias detection, and ethical considerations in educational technology.',
    price: 119.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.8,
    duration: '5 weeks',
    instructor: 'Phil Alcock',
    thumbnail: 'ai-ethics',
    includes: ['15 video lessons', 'Policy templates', 'Certificate of completion', 'Ethics case studies'],
    curriculum: [
      'Week 1: The ethical landscape — what educators need to know',
      'Week 2: Bias in AI tools and how to spot it',
      'Week 3: Student data privacy and responsible AI use',
      'Week 4: Teaching students to think critically about AI',
      'Week 5: Building an ethical AI policy for your school'
    ]
  },

  // Bundles
  {
    id: 'bundle-1',
    title: 'Complete Educator Bundle',
    description: 'Get 3 bestselling books + 2 courses. Save $120 with this comprehensive package.',
    price: 449.99,
    category: 'bundle',
    image: '/images/pbl-logo.png',
    rating: 4.9
  },
  {
    id: 'bundle-2',
    title: 'Quick Start: Professional Growth Bundle',
    description: '2 popular courses perfect for career advancement. Limited time offer.',
    price: 229.99,
    category: 'bundle',
    image: '/images/pbl-logo.png',
    rating: 4.8
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: 'book' | 'course' | 'bundle'): Product[] {
  return products.filter(p => p.category === category);
}
