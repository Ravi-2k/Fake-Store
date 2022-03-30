import React from "react";
import { Offcanvas } from "react-bootstrap";
import "./OffCanvas.css";

function OffCanvas({ show, onHideFunction, placement, title, children }) {
  return (
    <Offcanvas
      show={show}
      onHide={onHideFunction}
      style={{ width: "40rem" }}
      placement={placement}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="offCanvasTitle">{title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
}

export default OffCanvas;
