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
    title: 'Micro-Credential: AI in Education Fundamentals',
    description: 'Master the essentials of AI implementation in educational settings. Earn your credential in 4 weeks.',
    price: 99.99,
    category: 'course',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop',
    rating: 4.9,
    reviews: 234
  },
  {
    id: 'course-2',
    title: 'Micro-Credential: Design Thinking for Learning',
    description: 'Apply design thinking principles to create engaging learning experiences. 6-week program with projects.',
    price: 149.99,
    category: 'course',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=500&fit=crop',
    rating: 4.8,
    reviews: 167
  },
  {
    id: 'course-3',
    title: 'Micro-Credential: Data Literacy for Educators',
    description: 'Understand and interpret educational data to improve student outcomes. 5-week certification program.',
    price: 129.99,
    category: 'course',
    image: 'https://images.unsplash.com/photo-1598119237c8-e1a3b8deb0c5?w=400&h=500&fit=crop',
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'course-4',
    title: 'Micro-Credential: Digital Citizenship & Ethics',
    description: 'Teach students to navigate the digital world responsibly and ethically. 4-week online program.',
    price: 89.99,
    category: 'course',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop',
    rating: 4.6,
    reviews: 198
  },
  {
    id: 'course-5',
    title: 'Micro-Credential: Culturally Responsive Teaching',
    description: 'Build skills to create inclusive, culturally aware learning environments. 7-week comprehensive course.',
    price: 159.99,
    category: 'course',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop',
    rating: 4.9,
    reviews: 276
  },
  {
    id: 'course-6',
    title: 'Micro-Credential: Assessment & Feedback Strategies',
    description: 'Master formative and summative assessment techniques that drive learning growth. 5-week program.',
    price: 119.99,
    category: 'course',
    image: 'https://images.unsplash.com/photo-1512941691920-25bcd09d16e6?w=400&h=500&fit=crop',
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
