<template>
  <draggable
    :list="localModel"
    class="col col-6 element_drag-area"
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
</template>

<script>
import ElementMixin from '@/mixins/element'

export default {
  name: 'Col',
  mixins: [
    ElementMixin,
  ],
}
</script>

<style lang="scss" scoped>
  .col {
    border: 1px dashed #ddd;
  }
</style>
