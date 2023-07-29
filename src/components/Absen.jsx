import React from "react";

export default function Absen() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-header bg-success text-white">
              <p className="text-center">Absen Masuk</p>
            </div>
            <div className="card-body text-center">
              <div style={{ fontSize: "60px" }}>
                <i className="fas fa-qrcode"></i>
              </div>
              <button className="btn btn-success btn-block">
                Absen Masuk Sekarang
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-header bg-success text-white">
              <p className="text-center">Absen Pulang</p>
            </div>
            <div className="card-body text-center">
              <div style={{ fontSize: "60px" }}>
                <i className="fas fa-qrcode"></i>
              </div>
              <button className="btn btn-success btn-block">
                Absen Pulang Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
