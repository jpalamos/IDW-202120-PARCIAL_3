window.onload = () => {
  let countup = 0;
  const poemas = [
    ['Eduardo Galeano', `Sin embargo, aunque no podemos adivinar el mundo que será, bien podemos  imaginar el que queremos que sea. El derecho de soñar no figura entre los  treinta derechos humanos que las Naciones Unidas proclamaron a fines de  1948. Pero si no fuera por él, y por las aguas que da de beber, los demás  derechos se morirían de sed`],
    ['Oscar Wilde', `La educación es algo admirable, pero es bueno recordar de cuando en cuando que nada de lo que merece la pena saber puede ser enseñado`],
    ['Eduardo Galeano', `Cuando es verdadera, cuando nace de la necesidad de decir, a la voz humana  no hay quien la pare. Si le niegan la boca, ella habla por las manos, o por los  ojos, o por los poros, o por donde sea`],
    ['Mario Benedetti', `Nunca pensé que en la felicidad hubiera tanta tristeza`],
    ['Paulo Coelho', `Las cosas simples son las más extraordinarias y sólo los sabios consiguen verlas`],
  ];
  setInterval(() => {
    countup = countup < poemas.length - 1 ? countup + 1 : 0
    document.getElementById('poemaTitle').innerHTML = poemas[countup][0];
    document.getElementById('poemaText').innerHTML = poemas[countup][1];
  }, 3000);
}
