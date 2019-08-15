import React from 'react';

import { storiesOf } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Button} from "../src/components";
import {LightThemeProvider} from "../src/components/ThemeProvider";

storiesOf('Button', module)
    .add('Primary', () => (
        <LightThemeProvider>
            <Button primary onClick={action('clicked')} >
                Test Button
            </Button>
        </LightThemeProvider>
    ))
    .add('Secondary', () => (
        <LightThemeProvider>
            <Button secondary onClick={action('clicked')} >
                Test Button
            </Button>
        </LightThemeProvider>
    ));
