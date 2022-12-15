import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { CartProvider } from '../../src/context/CartContext';
import { useData } from '../../src/hooks/useData';

describe('Test hook useData', () => {
  const wrapper = ({ children }) => (
    <CartProvider>{children}</CartProvider>
  )

  test('Test function getProducts', async() => {

      const { result } = renderHook( () => useData(), { wrapper });
      const { getProducts } = result.current;
      
      const products = await getProducts();
    
      expect(typeof products).toBe('object');
      
      expect(products.length).toBeGreaterThan(0);
  });

  test('Test function getProduct', async() => {

      const { result } = renderHook( () => useData(), { wrapper });
      const { getProduct } = result.current;
      
      const productId = "skjDqIJgq-OGRaUNXXCCu";
      const product = await getProduct(productId);
    
      expect(typeof product).toBe('object');
      
      expect(product.id).toBe(productId)
  });

  test('Test function addCart', async() => {

      const { result } = renderHook( () => useData(), { wrapper });
      const { addCart } = result.current;
      
      const data = {
          id: 1,
          colorCode: 1,
          storageCode: 2
      }

      let res
      await act(async() => {
        res = await addCart(data);
      });

      expect(res.count).toBeTruthy();

      expect(res.count).toBeGreaterThan(0);
  });
});