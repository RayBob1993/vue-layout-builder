<template>
  <div
    @mouseover="onMouseover"
    @mouseout="onMouseout"
    class="element"
    :class="{
      'is-active': isActive,
      'is-mouseover': isMouseover,
    }"
  >
    <div class="element__title">
      {{ component.title }}
    </div>

    <el-button
      class="element__draggable"
      icon="el-icon-rank"
      circle
      size="mini"
    />

    <div @click="onClick">
      <component :is="component.type"/>
    </div>

    <el-button-group
      v-if="isActive"
      class="element__actions"
    >
      <el-tooltip
        effect="dark"
        content="Клонировать"
        placement="top"
      >
        <el-button
          size="mini"
          icon="el-icon-plus"
          @click="onClone"
        />
      </el-tooltip>

      <el-tooltip
        effect="dark"
        content="Удалить"
        placement="top"
      >
        <el-button
          type="danger"
          size="mini"
          icon="el-icon-delete"
          @click="onDelete"
        />
      </el-tooltip>
    </el-button-group>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Element',
  props: {
    component: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    isMouseover: false,
  }),
  computed: {
    ...mapState([
      'activeElement',
    ]),
    isActive () {
      return this.activeElement && this.activeElement.id === this.component.id
    },
  },
  methods: {
    ...mapMutations([
      'setActiveElement',
      'setActiveSidebarTab',
      'deleteById',
    ]),
    onDelete () {
      this.setActiveElement(null)
      this.setActiveSidebarTab('Components')
      this.deleteById(this.component.id)
    },
    onClone () {

    },
    onMouseover () {
      this.isMouseover = true
    },
    onMouseout () {
      this.isMouseover = false
    },
    onClick () {
      this.setActiveElement(this.component)
      this.setActiveSidebarTab('Props')
    },
  },
}
</script>

<style lang="scss">
.element {
  position: relative;

  margin-bottom: 10px;
  border: 1px solid transparent;

  &.is-active {
    border-color: $--color-primary;
  }

  &.is-mouseover {
    border-color: $--color-primary;
  }

  &__title {
    position: absolute;
    top: -17px;
    right: 15px;
    z-index: 2;

    padding: 3px 5px;

    background: #ecf5ff;

    color: #000;
    font-size: 10px;

    visibility: hidden;

    :hover > & {
      visibility: visible;
    }
  }

  &__draggable {
    position: absolute;
    right: -14px;
    top: 50%;

    transform: translateY(-50%);

    visibility: hidden;

    :hover > & {
      visibility: visible;
    }
  }

  &__actions {
    position: absolute;
    right: 0;
    top: calc(100% + 10px);
    z-index: 2;
  }
}
</style>
