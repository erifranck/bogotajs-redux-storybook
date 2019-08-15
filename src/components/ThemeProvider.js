import React from 'react';
import {ThemeProvider} from 'styled-components';
import {darkTheme} from "../theme/dark.theme";
import {lightTheme} from "../theme/light.theme";

export const LightThemeProvider = (props) => (
    <ThemeProvider theme={lightTheme} >
        {props.children}
    </ThemeProvider>
);

export const DarkThemeProvider = (props) => (
    <ThemeProvider theme={darkTheme} >
        {props.children}
    </ThemeProvider>
);
