<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './Resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [4, 8]
        },
        yAxis: {
          data: ['1-1000', '1000-3000', '3000-5000', '5000-8000', '8000-10,000', '10,000+'],
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['inquiry', 'complaint', 'request']
        },
        series: [{
          name: 'inquiry', itemStyle: {
            normal: {
              color: '#106A8E',
              lineStyle: {
                color: '#106A8E',
                width: 9
              }
            }
          },
          smooth: true,
          type: 'line',
          data: ['1000', '3000', '6000', '4000', '5000', '4000'],
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: 'complaint', itemStyle: {
            normal: {
              color: '#106A8E',
              lineStyle: {
                color: '#106A8E',
                width: 9
              }
            }
          },
          smooth: true,
          type: 'line',
          data: ['1000', '3000', '6000', '4000', '5000', '4000'],
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: 'request',
          smooth: true,
          type: 'line',
          itemStyle: {
            normal: {
              color: '#3888fa',
              lineStyle: {
                color: '#3888fa',
                width: 2
              },
              areaStyle: {
                color: '#f3f8ff'
              }
            }
          },
          data: actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    }
  }
}
</script>
