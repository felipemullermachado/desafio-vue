<template>
<div class="container-principal">
    <div class="corpo">
        <h2 class="titulo-principal">Economia mundial</h2>
        <h3 class="titulo-secao">Cotação das principais moedas para o Real</h3>
        <div class="container-principal">
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-positiva">2,074 %</span>
                </p>
                <h3 class="cotacao">R$ 5,50 </h3>
                <p class="info-rodape">usd Dólar / BRL Real</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-positiva">2,31 %</span>
                </p>
                <h3 class="cotacao">R$ 6,68 </h3>
                <p class="info-rodape">eur Euro / BRL Real</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-positiva">2,3 %</span>
                </p>
                <h3 class="cotacao">R$ 7,72 </h3>
                <p class="info-rodape">gbp Libra / BRL Real</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-positiva">1,75 %</span>
                </p>
                <h3 class="cotacao">R$ 0,06 </h3>
                <p class="info-rodape">ars Peso / BRL Real</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-positiva">1,745 %</span>
                </p>
                <h3 class="cotacao">R$ 4,34</h3>
                <p class="info-rodape">cad Canadense / BRL Real</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-positiva">2,535 %</span>
                </p>
                <h3 class="cotacao">R$ 4,35 </h3>
                <p class="info-rodape">aud Australianos / BRL Real</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-positiva">2,284 %</span>
                </p>
                <h3 class="cotacao">R$ 0,05 </h3>
                <p class="info-rodape">jpy Iene / BRL Real</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-positiva">2,357 %</span>
                </p>
                <h3 class="cotacao">R$ 0,85 </h3>
                <p class="info-rodape">cny Renminbi / BRL Real</p>
            </div>
        </div>

        <hr style="margin: 0;">
        <h3 class="titulo-secao">Cotação do BitCoin nas principais corretoras</h3>
        <div class="container-principal">
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-negativa">-5,37 %</span>
                </p>
                <h3 class="cotacao-bitcoin">$53,182.34 </h3>
                <p class="info-rodape">coinbase / USD Dólar</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-negativa">-5,51 %</span>
                </p>
                <h3 class="cotacao-bitcoin">$53,055.14 </h3>
                <p class="info-rodape">bitstamp / USD Dólar</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-negativa">-2,762 %</span>
                </p>
                <h3 class="cotacao-bitcoin">R$ 297.550,00 </h3>
                <p class="info-rodape">foxbit / BRL Real</p>
            </div>
            <div class="container-filho">
                <p class="caixa-porcentagem">
                    <span class="porcentagem-positiva">0,586 %</span>
                </p>
                <h3 class="cotacao-bitcoin">R$ 306.685,90 </h3>
                <p class="info-rodape">mercado bitcoin / BRL Real</p>
            </div>
        </div>

        <hr style="margin: 0;">
        <h3 class="titulo-secao">Índices de bolsas de valores pelo mundo</h3>
        <div class="container-principal">
            <div class="container-filho">
                <h3 class="cotacao-bolsa-negativa"> -5,13 %</h3>
                <p class="info-rodape">ibovespa<br>São Paulo, Brasil</p>
            </div>
            <div class="container-filho">
                <h3 class="cotacao-bolsa-negativa"> -1,42 %</h3>
                <p class="info-rodape">nasdaq<br>New York, EUA</p>
            </div>
            <div class="container-filho">
                <h3 class="cotacao-bolsa-negativa"> -1,68 %</h3>
                <p class="info-rodape">cac<br>Paris, França</p>
            </div>
            <div class="container-filho">
                <h3 class="cotacao-bolsa-negativa"> -3,78 %</h3>
                <p class="info-rodape">nikkei<br>Tokyo, Japan</p>
            </div>
        </div>

        <hr style="margin: 0;">
        <h3 class="titulo-secao">Preço e variação de ações na bolsa de valores BOVESPA</h3>
        <div class="container-principal">
            <div class="container-filho">
                <h3 class="cotacao-bolsa-positiva">33,95 %</h3>
                <p class="info-rodape">Lojas Americ<br>LAME3</p>
            </div>
            <div class="container-filho">
                <h3 class="cotacao-bolsa-positiva">15,65 %</h3>
                <p class="info-rodape">Lojas Americanas S.A.<br>LAME4</p>
            </div>
            <div class="container-filho">
                <h3 class="cotacao-bolsa-positiva">15,41 %</h3>
                <p class="info-rodape">Baumer<br>BALM3</p>
            </div>
            <div class="container-filho">
                <h3 class="cotacao-bolsa-positiva">12,79 %</h3>
                <p class="info-rodape">Baumer<br>BALM4</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      cotacoes: []
    }
  },
    created() {

      this.$http.get('https://api.hgbrasil.com/finance?format=json-cors&key=93f59bae')   
      .then(resposta => resposta.json())
      .then(cotacoes => this.cotacoes = cotacoes)
    } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap');

.container-principal {
 background-color: #313a46;
 border-radius: 0.2rem;
 color: #fafbfe;
 display: flex;
 font-size: 0.8rem;
 line-height: 1.5;
 margin: 0;
 flex-wrap:wrap;
 justify-content: space-between; 
}

.corpo {
 font-family: 'Nunito Sans', sans-serif;
 font-weight: bold;
 text-align: center;
 text-transform: uppercase;
 width: 100%;
}

.container-filho{
  margin-top: 1rem;
  width: 25%;
}

.titulo-secao{
 font-size: 1rem;
 margin-top:1rem;
}

h3{
 font-size: 1.4rem;
 margin:0;
}

.caixa-porcentagem{
  margin-top:0;
}

.porcentagem-positiva{ 
  background-color: #0acf97;
  border-radius: 10px;
  font-size:0.7rem;
  padding: 0 0.3rem;
}

.porcentagem-negativa{
  background-color: #fa5c7c;
  border-radius: 10px;
  font-size: 0.7rem; 
  padding: 0 0.3rem;
}

.cotacao-bolsa-positiva {
  color: #0acf97;
}

.cotacao-bolsa-negativa {
  color:#fa5c7c;
}

.info-rodape{
 color:#e3eaef;
 font-size:0.75rem;
 margin-top:0.4rem;
}

@media(max-width: 1200px){
  .container-principal{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>