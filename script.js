function calcular() {

  const altura = Number(document.getElementById("altura").value);
  const largura = Number(document.getElementById("largura").value);
  const tipo = document.getElementById("tipo").value;
  const caixa = Number(document.getElementById("caixa").value);
  const qtdCaixa = Number(document.getElementById("qtdCaixa").value);

  if (!altura || !largura || tipo === "") {
    alert("Preencha todos os campos");
    return;
  }

  const braco = Math.round(altura / 4);

  let fator = 0.514;
  if (tipo === "pesado") fator = 0.50;
  if (tipo === "alto") fator = 0.52;

  const giro = Math.round(altura * fator);

  const hFolha = altura - 120;
  const lFolha = largura - (caixa * qtdCaixa) - 80 - 15;

  const trav80 = lFolha + 95;
  const trav20 = lFolha + 20;

  const cxPeso = Math.round(
    tipo === "alto" ? altura * 0.45 : altura * 0.4
  );

  document.getElementById("braco").innerText = braco + " mm";
  document.getElementById("giro").innerText = giro + " mm";
  document.getElementById("hFolha").innerText = hFolha + " mm";
  document.getElementById("lFolha").innerText = lFolha + " mm";
  document.getElementById("trav80").innerText = trav80 + " mm";
  document.getElementById("trav20").innerText = trav20 + " mm";
  document.getElementById("cxPeso").innerText = cxPeso + " mm";
}
