import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media only screen and(max-width: 511px) {
    font-size: 0.7rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px 0 0 25px;
  @media only screen and(max-width: 511px) {
    width: 8vw;
  }
`;

export const OptionsContainer = styled.div`
  font-size: 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  @media only screen and(max-width: 511px) {
    padding: 0;
  }
`;
