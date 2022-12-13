import { render } from '@testing-library/react';
import { ProductDetailInfo } from '../../../src/components/ProductDetail/ProductDetailInfo';

describe("Test <ProductDetailInfo />", () => {
  test('Match whit snapshot', () => {
    const product =  {
        id: "AasKFs5EGbyAEIKkcHQcF",
        brand: "alcatel",
        model: "Flash (2017)",
        price: "",
        imgUrl: "https://www.gizbot.com/imgh/310x233/2020/09/realme-narzo-20_160145525500.jpg",
        processor: "MediaTek MT8735",
        ram: "16GB | 32GB | 64GB",
        so: "Android 10",
        screenResolution: "1280x720",
        battery: "3.400mAh",
        cameras: "13MP | 5MP",
        dimensions: "99,8 mm / 190 mm / 8,5 mm",
        weight: "275 g",
        storages: [
            { id: "1", label: "16GB" },
            { id: "2", label: "32GB" },
            { id: "3", label: "64GB" },
            { id: "4", label: "128GB" },
        ],
        colors: [{ id: "1", label: "Black" }],
    }

    const { container } = render( <ProductDetailInfo product={product} /> );
    expect( container ).toMatchSnapshot();

  });
})