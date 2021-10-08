import { render, screen } from "@testing-library/react";
import Posts from 'layouts/Posts';
import { BrowserRouter } from "react-router-dom";
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);


const apiData = [
  {
    _id: "615e6400de542307adb760a8",
    categories: ["programming", "tips & trick"],
    description: "Grid is Good",
    title: "Grid for beginner",
    createdAt: "2021-10-07T03:05:36.259Z",
    updatedAt: "2021-10-07T03:05:36.259Z",
  },
  {
    _id: "615e67239a8df18f6b616f99",
    categories: ["programming", "Css"],
    description: "Flex is Good",
    title: "Flex for beginner",
    createdAt: "2021-10-07T03:14:23.784Z",
    updatedAt: "2021-10-07T03:14:23.784Z",
  },
];


const MockPosts = () => {
  return (
    <BrowserRouter>
      <Posts posts={apiData} />
    </BrowserRouter>
  );
};

describe("Posts", () => {
    test("should renders article from api",  () => {
        render(<MockPosts />);

        const headerElement = screen.queryByText("Grid is Good");
        expect(headerElement).toBeInTheDocument();
    })
})