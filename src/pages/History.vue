<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in list" :key="`${item.id} - ${index}`">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ actionType(item.action) }}</td>
              <td>{{ item.datetime }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'bulma/css/bulma.css';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Navigation from '@/components/Navigation.vue';
import List from '@/components/List.vue';
import { Actions, HistoryItem, HistoryModes } from '@/types';

@Component({
  components: { Navigation, List },
  computed: {
    ...mapGetters(['actionList']),
  },
})
export default class History extends Vue {
  @Prop({ default: '' }) readonly type!: HistoryModes;

  actionList!: (type: string) => HistoryItem[];
  get list() {
    return this.actionList(this.type);
  }

  actionType(type: Actions) {
    return {
      [Actions.SELECT]: 'Selected',
      [Actions.UNSELECT]: 'Unselected',
    }[type];
  }
}
</script>
