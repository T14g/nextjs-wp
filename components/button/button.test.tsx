import React from "react";
import renderer from 'react-test-renderer';
import Button from './button.component';

describe("Button", () => {
    it('Render Button correctly', () => {
        const tree = renderer.create(<Button text="Button Text" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

