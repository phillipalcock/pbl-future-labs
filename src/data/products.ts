export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'book' | 'course' | 'bundle';
  image: string;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  // Books
  {
    id: 'book-1',
    title: 'Project-Based Learning Handbook: A Guide to Standards-Focused PBL',
    description: 'A comprehensive guide to standards-focused project-based learning for middle and high school teachers. Second edition by Thom Markham.',
    price: 34.99,
    category: 'book',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B00M7EWVIO.01.L.jpg',
    rating: 4.8,
    reviews: 127
  },
  {
    id: 'book-2',
    title: 'Project Based Learning: Design and Coaching Guide',
    description: 'Expert tools for innovation and inquiry for K-12 educators. A practical guide by Thom Markham for designing and implementing PBL in your classroom.',
    price: 39.99,
    category: 'book',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B01GTQHAHY.01.L.jpg',
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'book-3',
    title: 'Redefining Smart: Awakening Students\' Power to Reimagine Their World',
    description: 'Transform education by empowering students to think critically and reimagine solutions to real-world problems. By Thom Markham.',
    price: 29.99,
    category: 'book',
    image: 'https://images-na.ssl-images-amazon.com/images/P/B00TMNLV2C.01.L.jpg',
    rating: 4.6,
    reviews: 156
  },

  // Courses
  {
    id: 'course-1',
    title: 'Micro-Credential: AI in Project-Based Learning',
    description: 'Master AI integration strategies for designing and delivering authentic project-based learning experiences. 4 weeks.',
    price: 99.99,
    category: 'course',
    image: '🤖',
    rating: 4.9,
    reviews: 234
  },
  {
    id: 'course-2',
    title: 'Micro-Credential: Designing Authentic Projects',
    description: 'Learn frameworks for creating meaningful, real-world projects that drive student engagement and achievement. 6 weeks.',
    price: 149.99,
    category: 'course',
    image: '🎯',
    rating: 4.8,
    reviews: 167
  },
  {
    id: 'course-3',
    title: 'Micro-Credential: AI-Powered Personalized Learning',
    description: 'Implement adaptive learning technologies and AI tools to personalize student learning paths. 5 weeks.',
    price: 129.99,
    category: 'course',
    image: '✨',
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'course-4',
    title: 'Micro-Credential: Community Partnerships & PBL',
    description: 'Build authentic connections with community organizations to enhance project-based learning. 4 weeks.',
    price: 89.99,
    category: 'course',
    image: '🤝',
    rating: 4.6,
    reviews: 198
  },
  {
    id: 'course-5',
    title: 'Micro-Credential: Assessing 21st Century Skills',
    description: 'Develop authentic assessment methods for evaluating project work and critical thinking skills. 7 weeks.',
    price: 159.99,
    category: 'course',
    image: '📊',
    rating: 4.9,
    reviews: 276
  },
  {
    id: 'course-6',
    title: 'Micro-Credential: AI Ethics in Education',
    description: 'Explore responsible AI implementation, bias detection, and ethical considerations in educational technology. 5 weeks.',
    price: 119.99,
    category: 'course',
    image: '⚖️',
    rating: 4.8,
    reviews: 156
  },

  // Bundles
  {
    id: 'bundle-1',
    title: 'Complete Educator Bundle',
    description: 'Get 3 bestselling books + 2 micro-credentials. Save $120 with this comprehensive package.',
    price: 449.99,
    category: 'bundle',
    image: '📦',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'bundle-2',
    title: 'Quick Start: Professional Growth Bundle',
    description: '2 popular micro-credentials perfect for career advancement. Limited time offer.',
    price: 229.99,
    category: 'bundle',
    image: '⚡',
    rating: 4.8,
    reviews: 67
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: 'book' | 'course' | 'bundle'): Product[] {
  return products.filter(p => p.category === category);
}
