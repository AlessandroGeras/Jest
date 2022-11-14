import React, { useState, useEffect } from 'react';


function Click() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Me clique
      </button>
    </div>
  );
}

export default Click;