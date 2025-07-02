import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

test("renders Hero slider buttons", () => {
  render(<Page />);
  screen.getByLabelText("Next slide");
  screen.getByLabelText("Previous slide");
});
