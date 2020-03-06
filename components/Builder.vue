<template>
  <section class="design">
    <div class="row">
      <div class="col">
        <draggable
          :list="localModel"
          class="dragArea"
          :group="{
            name: 'builder',
            pull: false,
            put: true,
          }"
          :sort="true"
          @change="onUpdate"
        >
          <component
            v-for="element in model"
            :is="element.type"
            :key="element.id"
            :id="element.id"
            :elements="element.elements"
            :title="element.title"
          />
        </draggable>
      </div>

      <div class="col col-auto">
        <a href="https://qiaoxun.github.io/vue-formbuilder/" target="_blank">
          vue-formbuilder
        </a>
        <Sidebar/>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Builder',
  data: () => ({
    localModel: [],
  }),
  computed: {
    ...mapGetters([
      'model',
    ]),
  },
  watch: {
    localModel (value) {
      this.$store.commit('updateComponents', value)
    },
  },
  methods: {
    onUpdate ({ added, moved }) {
      const action = added || moved

      this.$store.commit('updateStructure', {
        id: action.element.id,
      })
    },
  }
}
</script>

<style lang="scss" scoped>
  .dragArea {
    height: calc(100vh - 55px);
    overflow: hidden;
    overflow-y: auto;

    user-select: none;
  }
</style>
