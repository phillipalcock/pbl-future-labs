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
    title: 'Project-Based Learning: A Guide to Real-World Impact',
    description: 'Learn how to design and implement transformative project-based learning experiences that drive real-world impact.',
    price: 34.99,
    category: 'book',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=500&fit=crop',
    rating: 4.8,
    reviews: 127
  },
  {
    id: 'book-2',
    title: 'The Future of Education: AI and Personalized Learning',
    description: 'Explore how artificial intelligence is revolutionizing personalized education and student outcomes.',
    price: 39.99,
    category: 'book',
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=500&fit=crop',
    rating: 4.7,
    reviews: 89
  },
  {
    id: 'book-3',
    title: 'Microlearning Strategies for Modern Professionals',
    description: 'Master bite-sized learning techniques for busy professionals looking to upskill continuously.',
    price: 29.99,
    category: 'book',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e01c869?w=400&h=500&fit=crop',
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'book-4',
    title: 'Building Inclusive Learning Communities',
    description: 'Create welcoming, accessible learning environments where every student can thrive.',
    price: 36.99,
    category: 'book',
    image: 'https://images.unsplash.com/photo-1517842645022-5f2f437e628a?w=400&h=500&fit=crop',
    rating: 4.9,
    reviews: 203
  },
  {
    id: 'book-5',
    title: 'Authentic Assessment in the Digital Age',
    description: 'Learn proven methods for assessing student learning through authentic, meaningful projects.',
    price: 44.99,
    category: 'book',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=500&fit=crop',
    rating: 4.7,
    reviews: 98
  },
  {
    id: 'book-6',
    title: 'Community Engagement in Education',
    description: 'Connect schools with communities to create meaningful learning experiences for all students.',
    price: 31.99,
    category: 'book',
    image: 'https://images.unsplash.com/photo-1507842717881-b1a53e46c15e?w=400&h=500&fit=crop',
    rating: 4.8,
    reviews: 112
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
    image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&h=500&fit=crop',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'bundle-2',
    title: 'Quick Start: Professional Growth Bundle',
    description: '2 popular micro-credentials perfect for career advancement. Limited time offer.',
    price: 229.99,
    category: 'bundle',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop',
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
