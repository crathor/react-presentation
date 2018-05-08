import React from 'react';
import './TableOfContents.css';

const TableOfContents = props => {
  // eslint-disable-next-line
  let list = props.table.map((el, index) => {
    if(el === 'Table of Contents'){
    } else{
      return <li key={index}>{el}</li>;
    }
  });

  return(
    <div className="TableOfContents">
      <ol>
        {list}
      </ol>
    </div>
  );
}

export default TableOfContents;
