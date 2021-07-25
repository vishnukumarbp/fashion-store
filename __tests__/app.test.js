/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import App from "../pages/_app";

describe("App", () => {
  it("renders without crashing", () => {
    const appName = "FashionStore";
    render(<App />);
    expect(screen.getByText(appName)).toBeInTheDocument();
  });
});
