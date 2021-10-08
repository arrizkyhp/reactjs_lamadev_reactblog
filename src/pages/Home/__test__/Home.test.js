import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from "pages/Home";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);

const MockHome = () => {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    )
}

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: [
        {
          _id: "615e6400de542307adb760a8",
          title: "CSS for Beginner",
          description: "Grid is good",
          username: "arrizkyhp",
          categories: ["programming", ""],
          createdAt: "2021-10-07T03:05:36.259Z",
          updatedAt: "2021-10-07T03:05:36.259Z",
        },
        {
          _id: "615fa2cfe11e2818657f2ef6",
          title: "Good Sleep for Programmer",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, hic nobis assumenda iste quae quia nesciunt explicabo quod ipsam praesentium harum cupiditate debitis sed totam quidem! Ducimus earum doloremque rerum?",
          username: "liliam",
          categories: ["programming", "tips & trick"],
          createdAt: "2021-10-08T01:45:53.290Z",
          updatedAt: "2021-10-08T01:45:53.290Z",
        },
      ],
    }),
  },
}));

describe("Homepage Default", () => {
    test("should render header section", async  () => {
        render(<MockHome />);

        const navElement = await screen.findByText(/react & node/i);
        expect(navElement).toBeInTheDocument();
    })

     test("should render sidebar section", async  () => {
        render(<MockHome />);

        const aboutElement = await screen.findByText(/about me/i);
        expect(aboutElement).toBeInTheDocument();
    })
})

describe("Get Article Data from API", () => {
  test("should get article from api", async () => {
    render(<MockHome />);

    const textElement = await screen.findByText("CSS for Beginner");
    expect(textElement).toBeInTheDocument();
  });

  test("should get all article from api", async () => {
    render(<MockHome />);

    const articleElement = await screen.findAllByAltText("article");
    expect(articleElement.length).toBe(2);
  });
});