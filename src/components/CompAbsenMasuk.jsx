import { Html5QrcodeScanner } from "html5-qrcode";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CompAbsenMasuk() {
  const [scanResult, setScanResult] = useState(null);

  const addData = async () => {
    await axios
      .post("http://127.0.0.1/restci/api/siswa", {
        nama: "Obeng",
        kls: "12",
        jk: "Perempuan",
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("render", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(success, error);
    function success(result) {
      scanner.clear();
      setScanResult(result);
      addData();
    }
    function error(error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div className="card mt-3">
        <div className="card-header bg-success text-center text-white">
          <p>Absensi Masuk</p>
        </div>
        <div className="car-body mx-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            porro. Facere magni corrupti laboriosam iusto maiores maxime odit?
            Sed sint odit fugit eos at maiores quam, eaque ratione sequi ipsam.
          </p>
          {scanResult ? <div>{scanResult}</div> : <div id="render"></div>}
        </div>
      </div>
    </div>
  );
}
