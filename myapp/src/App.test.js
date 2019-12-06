import React from "react";
import { render } from "@testing-library/react";
import App, { hit, ball, out, strike } from "./App";
import expectExport from "expect";

test("renders without crashing", () => {
  render(<App />);
});

test("Strikes appears on the Dashboard", () => {
  const { getByText } = render(<App />);

  getByText(/strikes/i);
});

test("Balls appears on the Dashboard", () => {
  const { getByText } = render(<App />);

  getByText(/balls/i);
});

test("Outs appears on the Dashboard", () => {
  const { getByText } = render(<App />);

  getByText(/outs/i);
});
