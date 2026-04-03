import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { App } from "./App";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("App routing", () => {
  it("renders home page at /", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Making disability resources/i,
    );
  });

  it("renders about page at /about", async () => {
    renderAt("/about");
    await waitFor(
      () => expect(screen.getByText(/built AccessBridge/i)).toBeInTheDocument(),
      { timeout: 5000 },
    );
  });

  it("renders resources hub at /resources", async () => {
    renderAt("/resources");
    await waitFor(
      () => expect(screen.getByText(/Browse guides/i)).toBeInTheDocument(),
      { timeout: 5000 },
    );
  });

  it("renders download page at /download-extension", async () => {
    renderAt("/download-extension");
    await waitFor(
      () => {
        const matches = screen.getAllByText(/AccessBridge Companion/i);
        expect(matches.length).toBeGreaterThanOrEqual(1);
      },
      { timeout: 5000 },
    );
  });

  it("renders 404 page for unknown routes", async () => {
    renderAt("/some-nonexistent-route");
    await waitFor(
      () => expect(screen.getByText(/Page not found/i)).toBeInTheDocument(),
      { timeout: 5000 },
    );
  });
});
