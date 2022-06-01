import React from "react";
import { useState } from "react";
// Infile CSS & Component Imports
import "./InfoModal.css";

const InfoModal = ({ open, setOpen }) => {
  return (
    <div>
      <div className="modalBackground" onClick={() => setOpen(false)} />
      <div className="modal">
        <p className="test">blahblah</p>
      </div>
    </div>
  );
};

export default InfoModal;
