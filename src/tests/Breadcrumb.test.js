import { render } from "@testing-library/react";
import Breadcrumb from "./../Components/Breadcrumb";

describe("Breadcrumb", () => {

    test("should show component", () => {
        const component = render(<Breadcrumb categories={["data"]} />);
        expect(!!component).toBe(true);
    });

});