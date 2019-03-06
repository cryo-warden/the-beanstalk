import React from 'react';

const style = {
  flex: "1 1 auto",

  margin: "4px",
  padding: "4px",
  border: "outset 1px grey",
  borderRadius: "8px",

  backgroundColor: "#222",
  color: "#880",
};

const Panel = ({ children }) => (
  <div
    className='Panel'
    style={style}
  >{children}</div>
);

export default Panel;
