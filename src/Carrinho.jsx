import { useState } from "react";
import "./App.css";
import "./Carrinho.css";

function Carrinho() {
  const [inputBurguer, setInputBurguer] = useState("0");
  const [inputSalada, setInputSalada] = useState("0");
  const [mostrarResultado, setMostrarResultado] = useState("");
  const [resultado, setResultado] = useState("");

  const numero1 = parseFloat(inputBurguer);
  const numero2 = parseFloat(inputSalada);

  const valorBurguer = 18;
  const valorSalada = 21;

  let valueBurguer = valorBurguer * numero1;
  const valueSalada = valorSalada * numero2;

  const valueBtn = (total, valueUniqueSalada, valueUniqueBurguer) => {
    if (total) {
      const valorTotal = valueBurguer + valueSalada;
      setMostrarResultado(true);
      setResultado("Valor da compra é:" + "" + valorTotal);
      console.log(valorTotal);
      return;
    }

    if (!valueUniqueSalada) {
      const valueSalada = "";
      const showBurguer = valueBurguer;

      setResultado("Valor da compra é:" + "" + showBurguer);
    }

    if (!valueUniqueBurguer) {
      const valueBurguer = "";
      const showSalada = valueSalada;

      setResultado("Valor da compra é:" + "" + valu);
    }
  };

  return (
    <>
      <a href="/">Sair do carrinho</a>

      <div className="input-selections">
        <div className="section-input">
          <input
            type="number"
            name=""
            id=""
            value={inputBurguer}
            onChange={(event) => setInputBurguer(event.target.value)}
          />
          <input
            type="number"
            name=""
            id=""
            value={inputSalada}
            onChange={(event) => setInputSalada(event.target.value)}
          />
        </div>
        <div className="section-itens">
          <div className="details-itens">
            <h3>Itens</h3>
            <p>x-Burgue</p>
            <p>x-Salada</p>
          </div>
          <div className="details-preços">
            <h3>Preços</h3>
            <p>R$ {valorBurguer}</p>
            <p>R$ {valorSalada}</p>
          </div>
        </div>
      </div>
      {mostrarResultado && (
        <p
          style={{
            color: "red",
            marginTop: "20px",
            width: "130px",
            height: "60px",
            backgroundColor: "burlywood",
            borderRadius: "8px",
            position: "absolute",
          }}
        >
          {resultado}
        </p>
      )}

      <button
        onClick={valueBtn}
        className="img"
        style={{
          width: "200px",
          backgroundColor: "transparent",
          border: "1px solid black",
          color: "black",
          marginTop: "-15px"
        }}
      >
        <img
          src="/public/shopping-cart.png"
          alt=""
          style={{
            width: "30px",
            position: "absolute",
            marginTop: "-10px",
            right: "90px",
          }}
        />
        Carrinho de compras
      </button>
    </>
  );
}

export default Carrinho;
