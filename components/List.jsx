/** @format */

// imports
import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";

// mutation
import { GET_STORE } from "../GraphQL/Mutation";

// componnets
import ListItem from "./ListItem";

// styles
import { ListLoading, ListStyled } from "../styles/ListStyles";

const List = ({ searchTerm }) => {
  // states
  const [data, setData] = React.useState([]);
  const [list, setList] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // get products
  const [getStore, { get_store_err }] = useMutation(GET_STORE, {
    //if data get successfully then add data into State(data)
    onCompleted: (data) => {
      setData(data.getStore);
      setLoading(false);
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

  // handle search
  useEffect(() => {
    if (data) {
      if (searchTerm === "") {
        setList(data);
      } else {
        const filteredData = data.filter(
          (i) =>
            i.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            i.authorName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setList(filteredData);
      }
    }
  }, [data, searchTerm]);

  return loading ? (
    <ListLoading>
      <h1>Loading</h1>
    </ListLoading>
  ) : (
    <ListStyled>
      {list.map((item) => (
        <ListItem data={item} key={item.id} />
      ))}
    </ListStyled>
  );
};

export default List;
