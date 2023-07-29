import React from "react";

export default function ListMenu() {
  return (
    <div>
      <div className="card mt-3" style={{ borderRadius: "0px" }}>
        <div className="row my-3 mx-3">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header bg-success text-white">
                Hadir Bulan Ini
              </div>
              <div className="card-body">
                <h2>
                  30 <i className="fas fa-check"></i>
                </h2>
              </div>
              <div className="card-footer">
                <label>Kehadiran anda di bulan ini</label>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="card">
              <div className="card-header bg-success text-white">
                Absen Bulan Ini
              </div>
              <div className="card-body">
                <h2>
                  30 <i className="fas fa-hand"></i>
                </h2>
              </div>
              <div className="card-footer">
                <label>Absen anda di bulan ini</label>
              </div>
            </div>
          </div>

          <div className="col-sm-6 mt-3">
            <div className="card">
              <div className="card-header bg-success text-white">
                Izin Bulan Ini
              </div>
              <div className="card-body">
                <h2>
                  2 <i className="fas fa-envelope"></i>
                </h2>
              </div>
              <div className="card-footer">
                <label>Izin anda di bulan ini</label>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-3">
            <div className="card">
              <div className="card-header bg-success text-white">
                Cuti Bulan Ini
              </div>
              <div className="card-body">
                <h2>
                  0 <i className="fas fa-envelope-open"></i>
                </h2>
              </div>
              <div className="card-footer">
                <label>Cuti anda di bulan ini</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
