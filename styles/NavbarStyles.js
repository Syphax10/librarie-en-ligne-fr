/** @format */

import styled from "styled-components";

export const NavbarStyled = styled.div`
  margin-inline: 45px;
  padding-block: 16px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(21, 21, 21, 0.05);
  margin-bottom: 40px;
  width: 100%;
  gap: 20px;
`;
export const NavbarIconStyled = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 22px;
  color: #6a983c;
  cursor: pointer;
`;
export const NavbarBack = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    cursor: pointer;
    width: 80px;
    color: #6a983c;
    font-size: 30px;
    transition: 0.25s all;
  }
  svg:hover {
    opacity: 0.8;
    transform: translateX(-3px);
  }
`;
