import React, { useState } from "react";
import "./image.css";

import {
  useHistory
} from "react-router-dom";

const Image = ({source, id}) => {
  const history = useHistory();
  const [data] = useState(source);

  const changeURL = (inp) => {
    history.push(`/id/${inp}`);
  }


  return (
    <div className="container">
      <div className="imgDiv">
        <div className="contentOverlay"></div>
        <img className="contentImage" src={data} alt="thumbnail" />
        <div class="contentDetails fadeIn-left">
          <span onClick={() => changeURL(id)}>See more</span>
        </div>
      </div>
    </div>
  );
};

export default Image;
