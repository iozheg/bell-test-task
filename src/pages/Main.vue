<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <list :list="list" />
      </div>
      <div class="column">
        <list :list="list" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'bulma/css/bulma.css';
import { Component, Vue } from 'vue-property-decorator';
import List from '@/components/List.vue';

@Component({
  components: { List },
})
export default class Main extends Vue {
  get list() {
    return this.$store.state.list;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
