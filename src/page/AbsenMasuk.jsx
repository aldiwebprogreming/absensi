import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import CompAbsenMasuk from "../components/CompAbsenMasuk";

export default function AbsenMasuk() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <Navbar />
          <Jumbotron />
          <CompAbsenMasuk />
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
}
