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
          height: "100px",
          backgroundColor: "burlywood",
          borderRadius: "10px",
        }}
      >
        <nav className="nav-details">
          <div className="logo">
            <img
              src="/Image_1pvib81pvib81pvi.png"
              alt=""
              style={{ width: "90px", borderRadius: "35%" }}
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
              height: "110px",
              width: "250px",
            }}
          >
            <a
              href="/Carrinho"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <img
                src="/shopping-cart.png"
                style={{
                  position: "absolute",
                  marginTop: "-80px",
                  width: "40px",
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
