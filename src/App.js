import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

function App(props) {
  console.log(props);
  return (
    <>
      <Header>{props.nama}</Header>
      <p> Semoga berhasil belajar react nya</p>
    </>
  );
}

App.propTypes = {
  nama: PropTypes.string.isRequired
};

export default App;
