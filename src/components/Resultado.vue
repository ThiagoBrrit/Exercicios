<script setup>
    const props = defineProps(['filtro', 'funcaoSoma', 'funcaoSub', 'funcaoMult', 'funcaoDivisao'])
</script>

<template>
    <div class="row">
        <div class="col d-flex align-items-center justify-content-center">
            <p class="me-2">Resultado =</p>
            <div>
                <p v-if="props.filtro === 'somar'">{{ props.funcaoSoma }}</p>
                <p v-else-if="props.filtro === 'subtrair'">{{ props.funcaoSub }}</p>
                <p v-else-if="props.filtro === 'multiplicacao'">{{ props.funcaoMult }}</p>
                <p v-else>{{ props.funcaoDivisao }}</p>
            </div>
        </div>
    </div>
</template>