<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        Total
        <div class="field">
          <div class="control">
            <input
              v-model="filter"
              class="input"
              type="text"
              placeholder="Filter"
            />
          </div>
        </div>
        <list
          :list="filter ? filtered : list"
          :action-label="'+'"
          @action="select"
        />
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
import { mapGetters, mapMutations, mapState } from 'vuex';

@Component({
  components: { List },
  computed: {
    ...mapState(['list', 'selected']),
    ...mapGetters(['filtered']),
  },
  methods: mapMutations(['select', 'unselect']),
})
export default class Main extends Vue {
  get filter(): string {
    return this.$store.state.filter;
  }
  set filter(value: string) {
    this.$store.commit('setFilter', value);
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
