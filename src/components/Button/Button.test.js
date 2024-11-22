import { render, screen } from "@testing-library/react";
import BtnComponent from ".";

test("renders the Button component with correct text", () => {
  render(<BtnComponent label="Click Me" />);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
