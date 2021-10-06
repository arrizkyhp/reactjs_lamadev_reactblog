import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import TopBar from '..';



const MockTopBarLogin = () => {
    return (
        <BrowserRouter>
            <TopBar user={true}/>
        </BrowserRouter>
    )
}

const MockTopBarNotLogin = () => {
  return (
    <BrowserRouter>
      <TopBar user={false} />
    </BrowserRouter>
  );
};


describe("default", () => {
        beforeEach(() => {
          render(<MockTopBarNotLogin />);
        });

    test("should render social media icon", () => {
        const iconElement = screen.getAllByTestId('icon-social');

        expect(iconElement.length).toBe(4);
    })

    test("should render search icon", () => {
      const iconElement = screen.queryByTestId("icon-search");

      expect(iconElement).toBeInTheDocument();
    });

    test("should render default list menu", () => {
        const linkElementHome = screen.getByRole("link", { name: "home" });
        const linkElementAbout = screen.getByRole("link", { name: "about" });
        const linkElementWrite = screen.getByRole('link', { name: 'write' })

        expect(linkElementHome).toBeInTheDocument();
        expect(linkElementAbout).toBeInTheDocument();
        expect(linkElementWrite).toBeInTheDocument();
    })

})


describe("Not Login", () => {
    beforeEach(() => {
        render(<MockTopBarNotLogin />);
    })


     test("should not render logout menu", () => {
       const logout = screen.queryByText("logout");

       expect(logout).not.toBeInTheDocument();
     });

      test("should render Sign Up & Sign In", () => {
        const singInButton = screen.queryByRole("link", { name: "sign in" });
        const singUpButton = screen.queryByRole("link", { name: "sign up" });

        expect(singInButton).toBeInTheDocument();
        expect(singUpButton).toBeInTheDocument();
      });

      test("should not render profile picture", () => {
          const imageElement = screen.queryByAltText('profile');

          expect(imageElement).not.toBeInTheDocument();
      })
})

describe("Login", () => {
    beforeEach(() => {
        render(<MockTopBarLogin />);
    })

    test("should render logout menu", () => {
        const logout = screen.queryByText("logout");
        expect(logout).toBeInTheDocument();
    })

    test("should not render Sign Up & Sign In", () => {
    const singInButton = screen.queryByRole("link", { name: "sign in" });
    const singUpButton = screen.queryByRole("link", { name: "sign up" });

    expect(singInButton).not.toBeInTheDocument();
    expect(singUpButton).not.toBeInTheDocument();
    });

    test("should render profile picture", () => {
    const imageElement = screen.queryByAltText("profile");

    expect(imageElement).toBeInTheDocument();
    });
})
