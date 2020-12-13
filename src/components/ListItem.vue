<template functional>
  <div>
    <div class="panel-block list-item">
      {{ props.item.id }} - {{ props.item.name }}
      <button v-if="props.actionLabel" class="button is-small" v-on="listeners">
        <span class="is-size-5">{{ props.actionLabel }}</span>
      </button>
    </div>
    <div v-if="props.item.items" class="subitem">
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
