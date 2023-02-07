import { render } from "@testing-library/react";
import Message from "./../Components/Message";

describe("Message", () => {
  test("should render Message component ", () => {
    const component = render(      
        <Message message="Test" />      
    );
    expect(component).toMatchSnapshot();
  });
});