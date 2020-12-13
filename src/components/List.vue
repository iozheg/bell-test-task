<template>
  <div>
    <list-item
      v-for="item in list"
      :key="item.id"
      :item="item"
      :action-label="actionLabel"
      @click="action(item.id)"
    />
  </div>
</template>

<script lang="ts">
import { Item } from '@/types';
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue';

@Component({
  components: { ListItem },
})
export default class List extends Vue {
  @Prop({ default: [] }) readonly list!: Item[];
  @Prop({ default: '' }) readonly actionLabel!: string;

  @Emit()
  action(id: string) {
    return id;
  }
}
</script>
