<template>
  <div class="page page__main">
    <div class="container-fluid">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="Дизайн" name="Builder">
          <Builder/>
        </el-tab-pane>

        <el-tab-pane label="Просмотр" name="Preview">
          <Preview/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageMain',
  data: () => ({
    activeTab: 'Builder'
  }),
}
</script>
