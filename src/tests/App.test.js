import App from "../App";
import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react";

describe("App", () => {
  test("should render App component for route /", () => {
    const component = render(
      <BrowserRouter location={"/"}>
        <App />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });

  test("should render component for route /items", () => {
    const component = render(
      <BrowserRouter location={"/items"}>
        <App />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });

  test("should render App component for route /items/MLA867086863", () => {
    const productId = "MLA867086863";
    const component = render(
      <BrowserRouter location={`/items/${productId}`}>
        <App />
      </BrowserRouter>
    );
    expect(component).toMatchSnapshot();
  });
});