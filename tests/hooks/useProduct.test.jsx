import { renderHook } from '@testing-library/react';
import { CartProvider } from '../../src/context/CartContext';
import { useProduct } from '../../src/hooks/useProduct';

describe('Test hook useProduct', () => {

  const wrapper = ({ children }) => (
    <CartProvider>{children}</CartProvider>
  )

  test('Test function getProduct', async() => {

      const { result } = renderHook( () => useProduct(), { wrapper });
      const { getProduct } = result.current;
      
      const productId = "skjDqIJgq-OGRaUNXXCCu";
      const product = await getProduct(productId);
    
      expect(typeof product).toBe('object');
      
      expect(product.id).toBe(productId)
  });
});