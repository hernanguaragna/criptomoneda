import react from 'react';
import styled from '@emotion/styled';
import imagen from "../src/img/cryptomonedas.png";

const Contenedor = styled.div`
max-width: 900px;
margin: 0 auto;
@media (min-width: 992px) {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`;	// estilos para el contenedor
const Imagen = styled.img`
max-width: 100%;
margin-top: 5rem;
`;


function App() {
  return (
    <Contenedor>
      
        <div>
          <Imagen src={imagen} alt="imagen"/>
        </div>

    </Contenedor>
    
  );
}

export default App;
