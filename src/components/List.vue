<template>
  <div>
    <list-item
      v-for="item in list"
      :key="item.id"
      :item="item"
      @click="move(item.id)"
    />
  </div>
</template>

<script lang="ts">
import { Item } from '@/types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import ListItem from '@/components/ListItem.vue';

@Component({
  components: { ListItem },
})
export default class List extends Vue {
  @Prop({ default: [] }) readonly list!: Item[];

  move(id: string) {
    console.log(id, 'moved');
  }
}
</script>
