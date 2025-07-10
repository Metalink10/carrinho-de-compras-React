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
      <div
        className="section-nav"
        style={{
          height: "70px",
          backgroundColor: "white",
          position:'relative',
          borderRadius: "10px",
          border:'2px solid rgb(148, 112, 112)',
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
        }}
      >
        <nav className="nav-details">
          <div className="logo" style={{ borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px'}}>
            <img
              src="/Image_1pvib81pvib81pvi.png"
              alt=""
              style={{ width: "100%", height: "100%", borderTopLeftRadius:'10px'
 }}
            />
          </div>
          <div className="details-about">
            <ul>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </div>
          <div className="details-Itens">
            <ul>
              <li>
                <a href="">Itens</a>
              </li>
            </ul>
          </div>
          <div className="details-Products">
            <ul>
              <li>
                <a href="">Products</a>
              </li>
            </ul>
          </div>
          <div
            className="img-car"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "40px",
              width: "37px",
              padding:'20px',
              position:'relative'
            }}
          >
            <a
              href="/Carrinho"
              
            >
              <img
                src="/shopping-cart.png"
                style={{
                  
                  width: "100%",
                }}
              />
            </a>
          </div>
        </nav>
      </div>

      <div className="main">
        <h1>Testando useRef</h1>
        {paragrafoVisivel && (
          <p
            style={{
              color: "red",
              marginTop: "20px",
              width: "80px",
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
