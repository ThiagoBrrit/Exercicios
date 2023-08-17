<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import Formulario from './components/Formulario.vue';
import Resultado from './components/Resultado.vue';

const calculadora = reactive({
  filtro: 'dividindo',
  A: '',
  B: '',
  resultado: '',
})

const somando = () => {
  const Rsomando = calculadora.A + calculadora.B;
  calculadora.resultado = Rsomando;
  return calculadora.resultado

}

const subtraindo = () => {
  const Rsubtraindo = calculadora.A - calculadora.B;
  calculadora.resultado = Rsubtraindo;
  return calculadora.resultado
}

const multiplicando = () => {
  const Rmultiplicando = calculadora.A * calculadora.B;
  calculadora.resultado = Rmultiplicando;
  return calculadora.resultado
}

const dividindo = () => {
  const Rdividindo= calculadora.A / calculadora.B;
  calculadora.resultado = Rdividindo;
  return calculadora.resultado
}


</script>

<template>
  <div class="container">
    <Cabecalho />
    <Formulario :valor-primeiro-input="evento => calculadora.A = Number(evento.target.value)" :valor-segundo-input="evento => calculadora.B = Number(evento.target.value)" :selecionar-filtro="evento => calculadora.filtro = evento.target.value"/>
    <Resultado :filtro="calculadora.filtro" :funcao-soma="somando()" :funcao-sub="subtraindo()" :funcao-mult="multiplicando()" :funcao-divisao="dividindo()"/>

  </div>
</template>
