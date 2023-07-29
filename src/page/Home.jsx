import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Absen from "../components/Absen";
import ListMenu from "../components/ListMenu";

export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <Navbar />
          <Jumbotron />
          <Absen />
          <ListMenu />
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}
