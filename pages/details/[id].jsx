/** @format */

// imports
import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useMutation } from "@apollo/client";

// styled
import { HomeWrap } from "../../styles/HomeStyles";
import { DetailContent, DetailWrap } from "../../styles/DetailStyles";

// components
import Navbar from "../../components/Navbar";

// mutation
import { DELETE_STORE, GET_STORE } from "../../GraphQL/Mutation";

const Details = () => {
  // states
  const [data, setData] = React.useState(null);

  // router
  const router = useRouter();
  const { id } = router.query;

  // get products
  const [getStore, { get_store_err }] = useMutation(GET_STORE, {
    //if data get successfully then add data into State(data)
    onCompleted: (data) => {
      const item = data.getStore;
      setData(item.find((i) => i.id === id));
    },
    //if there is an error than this function call
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        console.log("Get store error", graphQLErrors);
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    },
  });

  useEffect(() => {
    getStore({
      variables: {},
    });
  }, [getStore]);

  //delete store item functions
  const [deleteStore, { errr }] = useMutation(DELETE_STORE);

  const handleDelte = (_id) => {
    deleteStore({
      variables: {
        id: _id,
      },
    }).then(() => {
      router.push("/");
    });
  };

  return (
    <HomeWrap>
      <Head>
        <title>BookShop</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar back />
      {data ? (
        <DetailWrap>
          <div>
            <Image
              width='100%'
              height='80px'
              objectFit='contain'
              src={
                data.image ??
                "https://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg"
              }
              alt='product-img'
              layout='responsive'
            />
          </div>
          <DetailContent>
            <h1>{data.title}</h1>
            <h4>
              Author: <span>{data.authorName}</span>
            </h4>
            <p>{data.description}</p>
            <h6>
              Price: <span>{data.price} USD</span>
            </h6>
            <div>
              <button onClick={() => router.push(`/edit/${id}`)}>Edit</button>
              <button onClick={() => handleDelte(data.id)}>Delete</button>
            </div>
          </DetailContent>
        </DetailWrap>
      ) : (
        <h1>Loading</h1>
      )}
    </HomeWrap>
  );
};

export default Details;
