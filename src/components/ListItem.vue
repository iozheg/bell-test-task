<template functional>
  <div>
    {{ props.item.id }} - {{ props.item.name }} <span v-on="listeners">+</span>
  </div>
</template>
