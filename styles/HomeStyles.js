/** @format */

import styled from "styled-components";

export const HomeWrap = styled.section`
  margin-inline: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ProductSearch = styled.label`
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  padding: 8px 18px;
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 40px;
`;
export const ProductSearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #151515;

  &::placeholder {
    color: #a9a9a9;
  }

  &:focus {
    outline: none;
  }
`;
export const ProductSearchIcon = styled.img`
  width: 12px;
  height: 12px;
`;
