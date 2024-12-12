<template>
    <svg class="svg-icon" aria-hidden="true">
        <use :xlink:href="symbolId" :fill="color" />
    </svg>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    name: String,
});

const symbolId = computed(() => `#${props.name}`);
</script>

<style lang="scss">
.svg-icon {
    color: white;
    fill: white;
    width: 16px;
    height: 16px;
    pointer-events: none;
}
</style>