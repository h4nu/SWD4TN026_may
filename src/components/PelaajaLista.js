import React from 'react';

function Pelaajalista (props) {
    
    return (
      <div>
      { 
         props.pelit.map(peli => {

          return (
             <p key={peli.numero}> 


                  { peli.nimi.toUpperCase() } { ((peli.laani * 8) + (peli.pitaja * 5) + (peli.tila * 2 )) - peli.kirous } pistettä <br />
                  Kiroukset: { peli.kirous }<br />
                  Tilat: { peli.tila }<br />
                  Pitäjät: { peli.pitaja }<br />
                  Läänit: { peli.laani }<br />
             </p>
             
          )
        })
     } Voittaja on ...
     </div>
  )
}

export default Pelaajalista;