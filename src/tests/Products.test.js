import { render } from '@testing-library/react'
import { Search } from "./../services/controllers/products"
import Products from "./../Pages/Products";


test("should get an object", async () => {
    const component = render(        
            <Products searchItem="samsung s23" />       
    );
    const product = "samsung s23";
    const search = new Search();
    const data = await search.products(product);
    expect(typeof data).toBe("object");
});


/*

test("should render Products page with prop ", () => {
    const component = render(
        <Products searchItem="iphone" />
    );
    expect(component).toMatchSnapshot();
}); 

*/