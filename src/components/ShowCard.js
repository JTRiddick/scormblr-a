import React from 'react';

// could this functional component render all cards from array of objects?
const ShowCard = (props) => {
  // console.log('show card ',props);

  return(
    <tr>
      <td>{props.number}</td>
      <td>{props.name}</td>
      <td>{props.text}</td>
    </tr>
  );

}

export default ShowCard;
