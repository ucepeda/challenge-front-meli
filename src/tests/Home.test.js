import { render } from "@testing-library/react";
import Home from "../Pages/Home";

describe("Home", () => {
  test("should render Home", () => {
    const component = render(
        <Home />
    );
    expect(component).toMatchSnapshot();
  });
});