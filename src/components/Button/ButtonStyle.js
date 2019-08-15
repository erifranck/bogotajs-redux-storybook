import {Button as ButtonComponent} from "./Button";
import styled, {withTheme} from "styled-components";

export const Button = withTheme(styled(ButtonComponent)`
    &.bx-btn {
        border: none;
        outline: none;
        padding: 10px;
        border-radius: 4px;
        &-primary {
            background: ${({theme}) => theme.colors.primary};
            color: ${({theme}) => theme.colors.neutral};
            border-bottom: 2px solid ${({theme}) => theme.colors.darkerPrimary};
            border-left: 2px solid ${({theme}) => theme.colors.darkerPrimary};
        }
        &:active {
            border-bottom: none;
            border-left: none;
        }
        &-secondary {
            background: ${({theme}) => theme.colors.secondary};
            color: ${({theme}) => theme.colors.neutral};
            border-bottom: 2px solid ${({theme}) => theme.colors.darkerSecondary};
            border-left: 2px solid ${({theme}) => theme.colors.darkerSecondary};
        }
    }
`);
