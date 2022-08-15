/** @format */

// imports
import React from "react";
import { useRouter } from "next/router";

// styled components
import {
  NavbarBack,
  NavbarIconStyled,
  NavbarStyled,
} from "../styles/NavbarStyles";

// icons
import { FiChevronLeft } from "react-icons/fi";

const Navbar = ({ back }) => {
  // router
  const router = useRouter();

  return (
    <NavbarStyled>
      {back && (
        <NavbarBack onClick={() => router.back()}>
          <FiChevronLeft />
        </NavbarBack>
      )}
      <NavbarIconStyled>Librairie En Ligne</NavbarIconStyled>
    </NavbarStyled>
  );
};

export default Navbar;
