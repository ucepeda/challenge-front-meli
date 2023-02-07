import { render } from "@testing-library/react";
import Product from "./../Pages/Product";

describe("Product", () => {
    test("should render Product component ", () => {
        const component = render(
            <Product />
        );
        expect(component).toMatchSnapshot();
    });
});