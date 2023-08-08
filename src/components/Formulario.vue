<script setup>
    const props = defineProps(['valorPrimeiroInput', 'valorSegundoInput','selecionarFiltro'])
</script>

<template>
    <form>
        <div class="row d-flex justify-content-center mb-3">
            <div class="col-4 me-3">
                <input @keyup="props.valorPrimeiroInput" class="me-2 mb-3 form-control" type="number"
                    placeholder="Insira um número">
                <input @keyup="props.valorSegundoInput" class="me-2 form-control" type="number"
                    placeholder="Insira outro número">
            </div>

            <div class="col-md-2">
                <select @change="props.selecionarFiltro"  class="form-control">
                    <option value="somar">Somar</option>
                    <option value="subtrair">Subtrair</option>
                    <option value="multiplicacao">Multiplicacao</option>
                    <option value="divisao">Divisão</option>
                </select>

            </div>
        </div>
    </form>
</template>