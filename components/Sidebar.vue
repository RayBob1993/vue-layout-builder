<template>
  <aside class="sidebar">
    <el-tabs
      v-model="activeSidebarTab"
      type="border-card"
    >
      <el-tab-pane label="Компоненты" name="Components">
        <Components/>
      </el-tab-pane>

      <el-tab-pane label="Свойства" name="Props">
        <Props/>
      </el-tab-pane>
    </el-tabs>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  computed: {
    activeSidebarTab: {
      get () {
        return this.$store.state.activeSidebarTab
      },
      set (value) {
        this.$store.commit('setActiveSidebarTab', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 400px;
}
</style>
