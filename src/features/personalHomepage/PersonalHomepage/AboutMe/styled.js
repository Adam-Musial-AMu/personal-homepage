import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 64px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const ProfileImage = styled.img`
  width: 30vw;
  height: 30vw;
  max-width: 384px;
  max-height: 384px;

  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132px;
    height: 132px;
  }
`;

export const ThisIs = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: initial;
`;

export const Person = styled.h1`
  font-size: 38px;
  font-weight: 900;
  margin-top: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin-top: 35px;
  max-width: 650px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-top: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    max-width: 570px;
  }
`;

export const ContactButton = styled(ButtonLink)`
  display: inline-flex;
  align-items: center;
  margin-top: 32px;
  cursor: pointer;
  padding: 12px 16px;
  justify-content: center;
  gap: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.scienceBlue};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
`;
