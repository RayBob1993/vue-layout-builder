<template>
  <div class="container">
    <draggable
      :list="localModel"
      class="row element_drag-area"
      tag="div"
      v-bind="dragOptions"
      @change="onUpdate"
    >
      <component
        v-for="element in elements"
        :is="element.type"
        :key="element.id"
        :id="element.id"
        :title="element.title"
        :elements="element.elements"
      />
    </draggable>
  </div>
</template>

<script>
import ElementMixin from '@/mixins/element'

export default {
  name: 'Container',
  mixins: [
    ElementMixin,
  ],
}
</script>

<style lang="scss" scoped>
  .container {
    border: 1px dashed #ddd;

    .row {
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
