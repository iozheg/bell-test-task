<template functional>
  <div id="nav">
    <router-link :to="{ name: 'main' }">Главная</router-link> |
    <router-link :to="{ name: 'history', params: { type: 'all' } }"
      >История</router-link
    >
    |
    <router-link :to="{ name: 'history', params: { type: 'add' } }">
      История добавлений
    </router-link>
    |
    <router-link :to="{ name: 'history', params: { type: 'remove' } }">
      История удалений
    </router-link>
  </div>
</template>
