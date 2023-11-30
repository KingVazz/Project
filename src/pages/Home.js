import React from "react";
import Layout from "./../components/Layout/Layout";
import {Link} from "react-router-dom";
import background from '../img/Background.jpg';
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
     <div className="home" style={{backgroundImage:`url(${background})`}}>
      <div className="headerContainer">
        <h1>Food Website</h1>
        <p>Best Food In Indonesia</p>
        <Link to= "/menu">
          <button>PESAN</button>
        </Link>
      </div>
     </div>
    </Layout>
  );
};

export default Home