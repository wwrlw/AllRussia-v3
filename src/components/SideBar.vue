<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, defineEmits } from 'vue'

const emit = defineEmits('onClose')

const target = ref(null)

onClickOutside(target, (event) => emit('onClose', event))
</script>

<template>
  <div class="container" ref="target">
    <ul class="sideBar_list-start">
      <li class="sideBar-name text-center">ALLRUSSIA</li>
      <li class="flex justify-center">
        <!-- <img src="@/assets/loop.svg" alt="" class="sideBar-img" /> -->
      </li>
    </ul>

    <ul class="sideBar_list-one text-center">
      <li class="sideBar-item"><a href="/about">ПОСЛЕДНИЕ НОВОСТИ</a></li>
      <li class="sideBar-item"><a href="/about">ПОЛИТИКА</a></li>
      <li class="sideBar-item"><a href="/about">ЭКОНОМИКА</a></li>
      <li class="sideBar-item"><a href="/about">НАУКА И ОБРАЗОВАНИЕ</a></li>
      <li class="sideBar-item"><a href="/about">КУЛЬТУРА И ИСТОРИЯ</a></li>
      <li class="sideBar-item"><a href="/about">СПОРТ</a></li>
      <li class="sideBar-item"><a href="/about">ТУРИЗМ</a></li>
    </ul>
    <div class="divider"></div>
    <ul class="sieBar_list-two text-center">
      <li class="sideBar-item-two"><a href="/partner">ПАРТНЕРЫ</a></li>
      <li class="sideBar-item-two"><a href="/about">ПРОЕКТЫ</a></li>
    </ul>
    <div class="divider"></div>
    <ul class="sieBar_list-three text-center">
      <li class="sideBar-item-three"><a href="/">ИНФОРМАЦИЯ</a></li>
      <li class="sideBar-item-three"><a href="/">СВЯЗАТЬСЯ С НАМИ</a></li>
    </ul>
    <u-i-logos-list> </u-i-logos-list>
    <ul class="sideBar_list-four">
      <li class="sideBar-item-four">ПОРТАЛ «ВСЯ РОССИЯ»</li>
      <li class="sideBar-item-four">ВСЕ ПРАВА ЗАЩИЩЕНЫ</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  font-family: 'Roboto Condensed';
  position: fixed;
  top: 71px;
  width: 350px;
  max-height: calc(100vh - 71px);
  background-color: #222222;
  color: #ffffff;
  z-index: 1000;
  overflow-y: auto;
}

.sideBar-name {
  font-size: 24px;
  font-weight: bold;
}

ul {
  list-style-type: none;
  margin: 0;
}

li a {
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
}

.logo a {
  color: #ffffff;
  font-size: 20px;
}

li {
  padding-bottom: 20px;
}

.sideBar-img {
  padding-top: 10px;
}

.divider {
  margin-bottom: 20px;
  width: 280px;
  margin-left: 40px;
  height: 2px; /* Толщина линии */
  background-color: #ffffff; /* Цвет линии */
}

.sideBar_list-start {
  gap: 20px;
  margin-top: 30px;
}

.sideBar-item-three:last-child {
  padding-bottom: 40px;
}
.sideBar-item-three > a {
  font-weight: normal;
  opacity: 0.7;
}
.sideBar-item-four {
  padding: 0 0 8px;
  font-size: 12px;
  opacity: 0.75;
}
.sideBar_logos {
  display: flex;
  padding-bottom: 40px;
}
.sideBar_logos-item {
  padding: 0 10px 0 0;
}
</style>
