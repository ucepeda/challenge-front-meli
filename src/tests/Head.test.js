import { render } from "@testing-library/react";
import Head from "./../Components/Head";

describe("Header", () => {
  test("should render Head with props ", () => {
    const component = render(
      <Head title="Title de prueba" description="Descripcion de prueba" />
    );
    expect(component).toMatchSnapshot();
  });
});