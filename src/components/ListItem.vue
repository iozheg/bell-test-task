<template functional>
  <div>
    <div class="panel-block list-item">
      {{ props.item.id }} - {{ props.item.name }}
      <div class="action-button" v-on="listeners">+</div>
    </div>
    <div class="subitem">
      <list-item
        v-for="subitem in props.item.items"
        :key="subitem.id"
        :item="subitem"
      />
    </div>
  </div>
</template>

<style>
.list-item {
  justify-content: space-between;
}
.subitem {
  margin-left: 24px;
}
.action-button {
  cursor: pointer;
}
</style>
