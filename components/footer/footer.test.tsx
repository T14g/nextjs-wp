import React from "react";
import renderer from 'react-test-renderer';
import Footer from "./footer.component";
import { MockThemeProvider } from "../mock-theme-provider/mock-theme-provider.component";

it('Render Footer correctly', () => {
    const tree = renderer.create(
        <MockThemeProvider>
            <Footer />
        </MockThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
