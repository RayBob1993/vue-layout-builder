<template>
  <div class="components">
    <div
      v-for="section in elements"
      class="group"
    >
      <el-divider>{{ section.title }}</el-divider>

      <draggable
        v-model="section.components"
        :group= "{
          name: 'builder',
          pull: 'clone',
          put: false,
        }"
        :clone="onClone"
        :sort="false"
        class="row"
      >
        <div
          v-for="component in section.components"
          class="col col-6"
        >
          <el-button class="component-button">
            {{ component.title }}
          </el-button>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import ComponentModel from '@/models/ComponentModel'
import { mapState } from 'vuex'

export default {
  name: 'Components',
  data: () => ({}),
  computed: {
    ...mapState([
      'elements',
    ]),
  },
  methods: {
    onClone ({ type, title, props }) {
      return new ComponentModel({
        type,
        title,
        props,
      })
    },
  },
}
</script>

<style lang="scss">
  .component-button {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
</style>
