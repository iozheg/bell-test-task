<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        Total
        <list :list="list" :action-label="'+'" @action="select" />
      </div>
      <div class="column">
        Selected
        <list :list="selected" :action-label="'-'" @action="unselect" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'bulma/css/bulma.css';
import { Component, Vue } from 'vue-property-decorator';
import List from '@/components/List.vue';
import { mapMutations, mapState } from 'vuex';

@Component({
  components: { List },
  computed: mapState(['list', 'selected']),
  methods: mapMutations(['select', 'unselect']),
})
export default class Main extends Vue {}
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
