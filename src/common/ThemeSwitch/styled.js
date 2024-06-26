import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";


export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color: inherit;
    outline-offset: 8px;
`;

export const Text = styled.span`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;


    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const Box = styled.span`
    display: flex;
    width: 48px;
    border: 1px solid;
    border-radius: 12px;
    padding: 3px;
    background-color: ${({ theme }) => theme.colors.themeSwitch.background};
`;

export const IconWrapper = styled.span`
    background-color: currentColor;
    border-radius: 50%;
    padding: 3px;
    display: flex;
    transition: transform 0.3s;

    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;