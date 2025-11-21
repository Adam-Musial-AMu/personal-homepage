import styled from "styled-components";

export const Wrapper = styled.header`
    margin-top: -30px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 72px;
    align-items: center;
`;

export const ProfileImage = styled.img`
    border-radius: 50%;
    width: 30vw;
    max-width: 384px;
    max-height: 384px;
`;

export const ThisIs = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: initial;
    line-height: 16px;
    max-width: 43px;
`;

export const Name = styled.h1`
    margin: 0;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    color: ${({ theme }) => theme.colors.textPrimary };
`;

export const Description = styled.p`
    margin-top: 35px;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    max-width: 633px;
`;

export const ButtonLink = styled.a`
    display: inline-flex;
`;