<template functional>
  <div id="nav">
    <router-link :to="{ name: 'main' }">Main</router-link> |
    <router-link :to="{ name: 'history', params: { type: 'all' } }"
      >History</router-link
    >
    |
    <router-link :to="{ name: 'history', params: { type: 'selected' } }">
      History (selected)
    </router-link>
    |
    <router-link :to="{ name: 'history', params: { type: 'unselected' } }">
      History (unselected)
    </router-link>
  </div>
</template>
