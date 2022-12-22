import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { CartProvider } from '../../src/context/CartContext';
import { useCart } from '../../src/hooks/useCart';

describe('Test hook useCart', () => {
  const wrapper = ({ children }) => (
    <CartProvider>{children}</CartProvider>
  )

  test('Test function addCart', async() => {

      const { result } = renderHook( () => useCart(), { wrapper });
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