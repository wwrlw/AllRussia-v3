<script setup>
import mainComponent from '@/components/Main/mainComponent.vue'
import EconomicComponent from '@/components/Main/EconomicComponent.vue'
import PoliticComponent from '@/components/Main/PoliticComponent.vue'
import TeachComponent from '@/components/Main/TeachComponent.vue'
import HistoryComponent from '@/components/Main/HistoryComponent.vue'
import ThemeComponent from '@/components/Main/ThemeComponent.vue'
</script>

<template>
  <main>
    <mainComponent></mainComponent>
    <EconomicComponent />
    <PoliticComponent />
    <TeachComponent />
    <HistoryComponent />
    <ThemeComponent />
  </main>
</template>
