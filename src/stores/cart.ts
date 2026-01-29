import type { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

// Helper functions for cart management
export function addToCart(current: CartItem[], product: Product, quantity: number = 1): CartItem[] {
  const existing = current.find(item => item.product.id === product.id);
  if (existing) {
    return current.map(item =>
      item.product.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  return [...current, { product, quantity }];
}

export function removeFromCart(current: CartItem[], productId: string): CartItem[] {
  return current.filter(item => item.product.id !== productId);
}

export function updateQuantity(current: CartItem[], productId: string, quantity: number): CartItem[] {
  if (quantity <= 0) {
    return removeFromCart(current, productId);
  }
  return current.map(item =>
    item.product.id === productId
      ? { ...item, quantity }
      : item
  );
}

export function clearCart(): CartItem[] {
  return [];
}

export function getCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

export function getCartItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}

// Local storage helpers
export function saveCartToStorage(items: CartItem[]): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(items.map(item => ({
      productId: item.product.id,
      quantity: item.quantity
    }))));
  }
}

export function loadCartFromStorage(products: Product[]): CartItem[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('cart');
  if (!stored) return [];
  try {
    const items = JSON.parse(stored);
    return items
      .map((item: { productId: string; quantity: number }) => {
        const product = products.find(p => p.id === item.productId);
        return product ? { product, quantity: item.quantity } : null;
      })
      .filter((item: CartItem | null): item is CartItem => item !== null);
  } catch {
    return [];
  }
}
