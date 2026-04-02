import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("renders home hero", () => {
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );
    expect(getByRole("heading", { level: 1 })).toHaveTextContent(
      /Making disability resources clearer/i,
    );
  });
});
