import React from 'react';

import { storiesOf } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Button} from "../src/components";
import {LightThemeProvider} from "../src/components/ThemeProvider";

const ThemeDecorator = storyFn => <LightThemeProvider>{storyFn()}</LightThemeProvider>;

storiesOf('Button', module)
    .addDecorator(ThemeDecorator)
    .add('Primary', () => (
        <Button primary onClick={action('clicked')} >
            Test Button
        </Button>
    ))
    .add('Secondary', () => (
        <Button secondary onClick={action('clicked')} >
            Test Button
        </Button>
    ));
