import React, { useState, useEffect } from 'react';
import axios from "axios";

function Starwars() {
  const [name, setName] = useState("");

  useEffect(() => {
    const getJedi = async (id) => {
      //Pegar o nome de um Jedi por ID
      const response = await axios.get(
        `https://swapi.dev/api/people/${id}/`      
      );
      setName(response.data.name);
    };
    getJedi(1);
  });

  return (
    <div>
      <p>O nome do Jedi é {name}</p>      
    </div>
  );
}

export default Starwars;