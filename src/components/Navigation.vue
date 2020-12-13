<template functional>
  <div id="nav">
    <router-link :to="{ name: 'main' }">Главная</router-link> |
    <router-link :to="{ name: 'history', params: { type: 'all' } }"
      >История</router-link
    >
    |
    <router-link :to="{ name: 'history', params: { type: 'selected' } }">
      История добавлений
    </router-link>
    |
    <router-link :to="{ name: 'history', params: { type: 'unselected' } }">
      История удалений
    </router-link>
  </div>
</template>
