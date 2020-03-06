<template>
  <draggable
    :list="localModel"
    class="box dragArea"
    tag="div"
    v-bind="dragOptions"
    @change="onUpdate"
  >
    {{ id }}
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
  name: 'Box',
  mixins: [
    ElementMixin,
  ],
}
</script>

<style lang="scss" scoped>
  .box {
    background: rgba(0,0,0,.15);
    min-height: 100px;
    padding: 10px;
    border: 1px solid #444;
    margin-bottom: 5px;
    cursor: pointer;
  }
</style>
