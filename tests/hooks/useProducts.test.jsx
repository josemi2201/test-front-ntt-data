import { renderHook } from '@testing-library/react';
import { CartProvider } from '../../src/context/CartContext';
import { useProducts } from '../../src/hooks/useProducts';

describe('Test hook useProducts', () => {

  const wrapper = ({ children }) => (
    <CartProvider>{children}</CartProvider>
  )

  test('Test function getProducts', async() => {

      const { result } = renderHook( () => useProducts(), { wrapper });
      const { getProducts } = result.current;
      
      const products = await getProducts();
    
      expect(typeof products).toBe('object');
      
      expect(products.length).toBeGreaterThan(0);
  });

});