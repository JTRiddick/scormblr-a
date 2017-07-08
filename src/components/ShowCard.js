import React from 'react';

// could this functional component render all cards from array of objects?
const ShowCard = (props) => {
    let showCards;
  // console.log('show card ',props);
    console.log('showcard props,',props)
    if (props.cards && props.cards.length > 0){
      showCards =  props.cards.map((card,i)=>{
       return <tr key={i}>
         {/* <td>{card.number}</td> */}
         <td>{card.name}</td>
         <td>{card.text}</td>
       </tr>
     });
    }

  return(
    <tbody>
      {showCards}
    </tbody>
  );

}

export default ShowCard;
