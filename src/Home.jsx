import { useState } from "react";

function Home() {
  const [resultado, setResultado] = useState(
    "Clique no botão para ver o resultado"
  );
  const [paragrafoVisivel, setParagrafoVisivel] = useState(false);

  const clicarBotao = () => {
    if (resultado) {
      setResultado("Processando...");
      setParagrafoVisivel(true);
    }
    setTimeout(() => {
      setResultado("Processamento concluído!");
    }, 1500);
  };
  return (
    <>
      <div className="img-car" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '110px', width: '250px'}}>
        <a href="/Carrinho" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', position: 'relative'}} >Ir para o carrinho de compra
          <img src="/public/shopping-cart.png" style={{position: 'absolute', marginTop: '-80px', width: '40px'}} />
        </a>
      </div>
      <div className="main">
        <h1>Testando useRef</h1>
        {paragrafoVisivel && (
          <p
            style={{
              color: "red",
              marginTop: "20px",
              width: "8opx",
              height: "30px",
              backgroundColor: "yellow",
              borderRadius: "8px",
            }}
          >
            {resultado}
          </p>
        )}

        <button onClick={clicarBotao}>Clicar</button>
      </div>
    </>
  );
}

export default Home;
