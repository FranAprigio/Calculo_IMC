import { useState } from 'react';

function Calculadora (){

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [imcMessage, setImcMessage] = useState("");

  function calcularIMC (){

    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(altura === "" || peso === ""){
      setMensagem("Por Favor, preencha o peso  e a altura corretamente !");
      setImcMessage("");
    }else if(!alt){
      setMensagem("Por Favor, preencha o peso  e a altura corretamente !");
      setImcMessage("");
        
    }else if (imc < 18.5){
     setMensagem("Abaixo do peso!");
     setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if(imc >= 18.5 && imc < 24.9){
    setMensagem("Peso normal!");
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if (imc >= 25 && imc < 29.9){
    setMensagem("Sobrepeso !");
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
    
   }else if(imc >= 30.0 && imc < 34.9){
    setMensagem("Obesidade grau I !");
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
     
   }else if(imc >= 35 && imc < 39.9){
    setMensagem("Obesidade Grau II !");
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);

   }else if(imc >= 40){
    setMensagem("Obesidade Grau III !");
    setImcMessage(`Seu IMC é: ${imc.toFixed(2)}`);
   }
     setPeso("");
     setAltura("");
  }

  return(
   <div className="container-app">
      <div className="container-input">
      <h1>Calculo de IMC</h1>
          <input
            type="text"
            placeholder="(KG) Ex: 75"
            value={peso}
            onChange={ (e) => setPeso(e.target.value) }
          />

          <input 
            type="text"
            placeholder="(CM) Ex: 170"
            value={altura}
            onChange={ (e) => setAltura(e.target.value) }
          />

          <button onClick={calcularIMC}>
            Calcular
          </button>

            <h2>
                {mensagem} <br/>
                {imcMessage} 
                <br/>
                
            </h2>
      </div>
   </div>
  );
}

export default Calculadora;