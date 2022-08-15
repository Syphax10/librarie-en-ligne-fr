import { gql } from "@apollo/client";
//Create a get store function which get the store items from Backend
export const GET_STORE = gql`
  mutation getStore($page: String, $limit: String) {
    getStore(page: $page, limit: $limit) {
      id
      type
      title
      description
      authorName
      language
      price
      quantity
      image
    }
  }
`;
//Create a creteStore function which handle  the  store items for add items

export const CREATE_STORE = gql`
  mutation createStore(
    $type: String
    $title: String
    $description: String
    $authorName: String
    $language: String
    $price: String
    $quantity: String
    $image: String
  ) {
    createStore(
      post: {
        type: $type
        title: $title
        description: $description
        authorName: $authorName
        language: $language
        price: $price
        quantity: $quantity
        image: $image
      }
    ) {
      id
      type
      title
      description
      authorName
      language
      price
      quantity
      image
    }
  }
`;
//Create a updateFunction for store items
export const UPDATE_STORE = gql`
  mutation updateStore(
    $id: String
    $type: String
    $title: String
    $description: String
    $authorName: String
    $language: String
    $price: String
    $quantity: String
    $image: String
  ) {
    updateStore(
      id: $id
      post: {
        type: $type
        title: $title
        description: $description
        authorName: $authorName
        language: $language
        price: $price
        quantity: $quantity
        image: $image
      }
    ) {
      id
      type
      title
      description
      authorName
      language
      price
      quantity
      image
    }
  }
`;

//Delete Store item fucntions
export const DELETE_STORE = gql`
  mutation deleteStore($id: String) {
    deleteStore(id: $id)
  }
`;
