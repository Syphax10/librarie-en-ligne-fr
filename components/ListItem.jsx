/** @format */

// imports
import React from "react";
import { useRouter } from "next/router";

// components
import Image from "next/image";

// styled
import { ListItemImageContainer, ListItemStyled } from "../styles/ListStyles";

const ListItem = ({ data }) => {
  // router
  const router = useRouter();

  return (
    <ListItemStyled>
      <ListItemImageContainer>
        <Image
          objectFit='cover'
          width='100%'
          height='120px'
          layout='responsive'
          src={
            data.image ??
            "https://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg"
          }
          alt='product-img'
        />
      </ListItemImageContainer>
      <h6>{data.title}</h6>
      <p>{data.authorName}</p>
      <div>
        <span>{data.price} USD</span>
        <button onClick={() => router.push(`/details/${data.id}`)}>
          View Details
        </button>
      </div>
    </ListItemStyled>
  );
};

export default ListItem;
