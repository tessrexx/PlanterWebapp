import "./PageLayout.css";
import React from "react";

function PageLayout() {
  return (
    <div className="layout-container">
      <div className="layout-main">
        <div className="layout-left-right-flex">
          <div className="layout-left"> Hello </div>
          <div className="layout-right"> Hello </div>
        </div>
        <div className="layout-body"> Height Missing</div>
      </div>
    </div>
  );
}

export default PageLayout;
