<template>
  <div class="dashboard-container mt-12">
    <div class="dashboard-text">name: {{ name }}</div>
    <Metrics class="mt-32 ml-4 mr-4" @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;margin-bottom:32px;" class="mt- ml-4 mr-4 rounded-md">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row class="flex">
      <el-col
        :xs="{span: 24}"
        :sm="{span: 24}"
        :md="{span: 24}"
        :lg="{span: 12}"
        :xl="{span: 24}"
        style="padding-right:8px;margin-bottom:30px;"
        class="w-4/6 ml-4 "
      >
        <UserTable />
      </el-col>
      <el-col
        :xs="24"
        :sm="24"
        :lg="8"
        class="ml-4 mr-4 rounded-md"
      >
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
    </el-row>
    <el-row>
      <Footer class="Footer_section" />
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Metrics from '../dashboard/Metrics.vue'
import LineChart from '../dashboard/LineChart.vue'
import UserTable from '../dashboard/UserTable.vue'
import PieChart from '../dashboard/PieChart.vue'
import Footer from '@/layout/components/Footer/Footer.vue'

const lineChartData = {
  ineChartData: {

    open_tickets: [100, 120, 161, 134, 105, 160, 165],
    closed_tickets: [120, 82, 91, 154, 162, 140, 145]
  }
}
export default {
  // eslint-disable-next-line vue/name-property-casing
  name: 'index',
  components: {
    Metrics,
    LineChart,
    UserTable,
    PieChart,
    Footer
  },
  data() {
    return {
      lineChartData: lineChartData.lineChartData
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    background-color: #F0F4F8;
    width: 100%;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
