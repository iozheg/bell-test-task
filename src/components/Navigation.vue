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

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
