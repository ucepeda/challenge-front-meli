import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils'
import { render } from "@testing-library/react";
import Header from "./../Components/Header";

describe("Header", () => {
    test("should render Header", async () => {
        const component = await act(async () => render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        ));
        expect(component).toMatchSnapshot();
    });
});