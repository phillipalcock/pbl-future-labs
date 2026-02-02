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
    description: 'The definitive guide to standards-focused project-based learning for middle and high school teachers. Second edition.',
    price: 34.99,
    category: 'book',
    image: '/images/pbl handbook.jpg',
    rating: 4.8,
    instructor: 'Thom Markham, Ph.D.'
  },
  {
    id: 'book-2',
    title: 'Project Based Learning: Design and Coaching Guide',
    description: 'Expert tools for innovation and inquiry for K-12 educators. A step-by-step system for designing and running PBL in your classroom.',
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
    title: 'Design Your First AI-Powered Project',
    description: 'After this course, you will build and launch a complete AI-enhanced PBL unit — from driving question to final product — ready for your classroom.',
    price: 99.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.9,
    duration: '4 weeks',
    instructor: 'Phil Alcock & Thom Markham, Ph.D.',
    thumbnail: 'ai-pbl',
    includes: ['12 video lessons', 'Downloadable templates', 'PBL Future Labs Certification', 'Community access'],
    curriculum: [
      'Week 1: AI fundamentals for educators — what works, what doesn\'t',
      'Week 2: Using AI for project design and standards alignment',
      'Week 3: AI-powered research workflows for students',
      'Week 4: Assessment and reflection with AI tools'
    ]
  },
  {
    id: 'course-2',
    title: 'Build Projects Students Actually Care About',
    description: 'After this course, you will design real-world projects that connect students to community partners, drive deep engagement, and hold up to rigorous standards.',
    price: 149.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.8,
    duration: '6 weeks',
    instructor: 'Thom Markham, Ph.D.',
    thumbnail: 'authentic-projects',
    includes: ['18 video lessons', 'Project design toolkit', 'PBL Future Labs Certification', 'Peer review sessions'],
    curriculum: [
      'Week 1-2: The anatomy of a great project — what makes it real',
      'Week 3: Connecting projects to community partners and real audiences',
      'Week 4: Standards alignment without killing the project',
      'Week 5: Building student agency into the design',
      'Week 6: Launching, managing, and showcasing final products'
    ]
  },
  {
    id: 'course-3',
    title: 'Personalize Learning With AI',
    description: 'After this course, you will use AI tools to create flexible learning paths, give real-time feedback, and meet every student where they are — inside a project.',
    price: 129.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.7,
    duration: '5 weeks',
    instructor: 'Phil Alcock',
    thumbnail: 'personalized-learning',
    includes: ['15 video lessons', 'AI tool guides', 'PBL Future Labs Certification', 'Live Q&A sessions'],
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
    title: 'Connect Students to the Real World',
    description: 'After this course, you will build lasting partnerships with community organizations and design projects where students solve real problems for real people.',
    price: 89.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.6,
    duration: '4 weeks',
    instructor: 'Phil Alcock & Thom Markham, Ph.D.',
    thumbnail: 'community-partnerships',
    includes: ['10 video lessons', 'Partnership templates', 'PBL Future Labs Certification', 'Case studies'],
    curriculum: [
      'Week 1: Identifying and approaching community partners',
      'Week 2: Co-designing projects with external stakeholders',
      'Week 3: Managing logistics and student-partner interactions',
      'Week 4: Showcasing student work to real audiences'
    ]
  },
  {
    id: 'course-5',
    title: 'Assess What Actually Matters',
    description: 'After this course, you will measure collaboration, critical thinking, and deeper learning — not just content recall — using AI-enhanced assessment systems.',
    price: 159.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.9,
    duration: '7 weeks',
    instructor: 'Thom Markham, Ph.D.',
    thumbnail: 'assessment',
    includes: ['21 video lessons', 'Assessment rubric library', 'PBL Future Labs Certification', 'Portfolio templates'],
    curriculum: [
      'Week 1-2: Beyond rubrics — rethinking what assessment means in PBL',
      'Week 3: Assessing collaboration and teamwork',
      'Week 4: Critical thinking assessment methods',
      'Week 5: Student self-assessment and reflection tools',
      'Week 6: Using AI for continuous formative assessment',
      'Week 7: Building a portfolio-based assessment system'
    ]
  },
  {
    id: 'course-6',
    title: 'Teach Students to Think Critically About AI',
    description: 'After this course, you will lead your school in responsible AI use — from building ethical policies to teaching students how to question the tools they use.',
    price: 119.99,
    category: 'course',
    image: '/images/pbl-logo.png',
    rating: 4.8,
    duration: '5 weeks',
    instructor: 'Phil Alcock',
    thumbnail: 'ai-ethics',
    includes: ['15 video lessons', 'Policy templates', 'PBL Future Labs Certification', 'Ethics case studies'],
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
    description: '2 popular courses to accelerate your AI + PBL implementation. Limited time offer.',
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
