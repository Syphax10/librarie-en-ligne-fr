/** @format */

import styled from "styled-components";

export const DetailWrap = styled.div`
  padding: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
`;
export const DetailContent = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0;
    font-weight: 600;
    font-size: 32px;
    line-height: 140%;
    color: #151515;
    margin-bottom: 10px;
  }
  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #151515;
    margin-bottom: 42px;

    span {
      margin-left: 10px;
      font-weight: 600;
      font-size: 18px;
      line-height: 18px;
      text-decoration-line: underline;
      color: #6a983c;
    }
  }
  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #151515;
    margin-bottom: 40px;
  }
  h6 {
    font-weight: 800;
    font-size: 18px;
    line-height: 27px;
    color: #151515;

    span {
      margin-left: 10px;
      font-size: 24px;
      text-decoration-line: underline;
      color: #6a983c;
    }
  }
  div {
    display: flex;
    align-items: center;
    gap: 20px;

    button {
      background: #6a983c;
      border: 2px solid #46760a;
      border-radius: 12px;
      padding: 10px 12px;
      font-weight: 700;
      font-size: 15px;
      line-height: 22px;
      color: #ffffff;
      cursor: pointer;
      transition: 0.25s all;
      width: 180px;

      &:hover {
        opacity: 0.8;
        transform: translateY(-2px);
      }

      &:first-child {
        background: #f9f9f9;
        border-color: #d1d1d1;
        color: black;
      }
      &:last-child {
        background: #f00000;
        border-color: #900000;
      }
    }
    .save-btn {
      background: #6a983c !important;
      border: 2px solid #46760a !important;
    }
  }
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    color: #151515;
    margin-bottom: 20px;

    input {
      background: #f9f9f9;
      border: 1px solid #d1d1d1;
      border-radius: 12px;
      height: 42px;
      padding: 0 12px;

      &:focus {
        outline: none;
      }
    }
    textarea {
      background: #f9f9f9;
      border: 1px solid #d1d1d1;
      border-radius: 12px;
      height: 142px;
      padding: 6px 12px;
      &:focus {
        outline: none;
      }
    }
  }
`;
export const EditImageIcon = styled.label`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  height: 50px;
  z-index: 100;
  height: 50px;
  width: 200px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    opacity: 0.8;
    transform: scaleX(1.1);
  }

  img {
    height: 25px;
    width: 25px;
  }

  input[type="file"] {
    display: none;
  }
`;
