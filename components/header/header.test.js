import React from "react";
import renderer from 'react-test-renderer';
import Header from "./header.component";
import { MockThemeProvider } from "../mock-theme-provider/mock-theme-provider.component";

it('Render Header correctly', () => {
    const tree = renderer.create(
        <MockThemeProvider>
            <Header />
        </MockThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
