import React from "react";
import ItemListContainer from "../components/ItemListContainer";
import Heroes from "../components/Heroes";

const Home = () => {
  return (
    <>
      <Heroes />  
      <ItemListContainer greeting={"PRODUCTOS DESTACADOS"}/>
    </>
  );
};

export default Home;
