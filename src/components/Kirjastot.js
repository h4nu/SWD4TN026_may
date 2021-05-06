import React, { useState, useEffect} from 'react';

function Kirjastot () {
    const [city, setCity] = useState('Espoo');
    const [limit, setLimit] = useState('30');
    const [data, setData] = useState({ items: [] });
    const [virhe, setVirhe] = useState('Haetaan');

    const fetchUrl = async () => {
        try {
            const response = await fetch('https://api.kirjastot.fi/v4/library?city.name='+ city + '&limit' + limit);
            const json = await response.json();
            setData(json);
        } catch(error) {
            setVirhe('Tietoja ei ole saatavilla');
        }
    }

    useEffect( () => { fetchUrl() }, []);

    return (
        <div>
          {data.items.map(kirjasto => (
            <div key={kirjasto.id}>
              {kirjasto.name}, {kirjasto.address.street} <br />
            </div>
          ))}
        </div>
      );
}

export default Kirjastot;