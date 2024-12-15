<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<template>
  <div class="dropdown">
    <ul class="ul">
      <li v-for="option in options" :key="option.label">
        <a :href="option.link" class="dropdown__text pb-1">{{ option.label }}</a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  display: flex;
  align-items: center;
  background-color: #222222;
  flex-direction: column;
  justify-content: center;
  text-wrap: nowrap;
  row-gap: 24px;
  position: absolute;
  padding: 8px 18px;
}

.dropdown__text {
  margin: 0;
  color: white;
}
.ul {
  padding: 0;
}
</style>
