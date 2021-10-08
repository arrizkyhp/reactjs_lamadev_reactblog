import { render, screen } from '@testing-library/react';
import Header from 'layouts/Header';

describe("Header Page", () => {
    beforeEach(() => {
        render(<Header />);
    })

    test("should render Title web", () => {
        const reactText = screen.queryByText(/React & Node/i);
        const blogText = screen.queryByText(/Blog/i);

        expect(reactText).toBeInTheDocument();
        expect(blogText).toBeInTheDocument();
    })

    test("should render image header", () => {
        const image = screen.queryByRole('img');

        expect(image.src).toContain("https://picsum.photos/id/101/2000");
    })
})