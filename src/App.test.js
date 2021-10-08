
import { Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import App from "App";

describe("should render correct link",  () => {

    test("should render home page", async () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App />
        </Router>
      );

      const linkElementHome = screen.getByRole("link", { name: "home" });

      const leftClick = { button: 0 };
      fireEvent.click(linkElementHome, leftClick);

      expect(await screen.getByText(/blog/i)).toBeInTheDocument();
    });



})
