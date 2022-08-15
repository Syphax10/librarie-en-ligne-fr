/** @format */

import styled from "styled-components";

export const ListStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 32px;
  column-gap: 32px;
  margin-bottom: 40px;
`;
export const ListItemStyled = styled.div`
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  padding: 16px;

  h6 {
    margin: 0;
    margin-block: 16px 4px;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #151515;
  }
  p {
    margin: 0;
    font-size: 12px;
    line-height: 16px;
    color: #575757;
    margin-bottom: 16px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: #151515;
    }
    button {
      background: #6a983c;
      border: 2px solid #46760a;
      border-radius: 12px;
      padding: 6.5px 12px;
      font-weight: 700;
      font-size: 15px;
      line-height: 22px;
      color: #ffffff;
      cursor: pointer;
      transition: 0.25s all;

      &:hover {
        opacity: 0.8;
        transform: translateY(-2px);
      }
    }
  }
`;
export const ListItemImageContainer = styled.span`
  width: 100%;
  position: relative;
`;
export const ListLoading = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    margin: 0rem;
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #6a983c;
  }
`;
