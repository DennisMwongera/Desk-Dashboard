<template>
<html>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
  <el-row :gutter="40" class="panel-group mt-32">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel rounded-lg" @click="handleSetLineChartData('newVisitis')">
        <div class="card-panel-icon-wrapper bg-gray-400">
          <span class="material-icons text-base text-teal-400">receipt</span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text text-teal-400">
            Total Tickets
          </div>
          <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num text-teal-400" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel rounded-lg" @click="handleSetLineChartData('messages')">
        <div class="card-panel-icon-wrapper bg-gray-400">
          <!-- <svg-icon icon-class="message" class-name="card-panel-icon" /> -->
           <span class="material-icons text-base text-green-600">check</span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text text-green-600">
            Closed Tickets
          </div>
          <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num text-green-600" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel rounded-lg" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-icon-wrapper bg-gray-400">
          <!-- <svg-icon icon-class="money" class-name="card-panel-icon" /> -->
           <span class="material-icons text-base text-yellow-500">cancel</span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text text-yellow-500">
            Open Tickets
          </div>
          <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num text-yellow-500" />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel rounded-lg" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-icon-wrapper bg-gray-400">
           <span class="material-icons text-2xl text-red-500">priority_high</span>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text text-red-500">
            Critical Tickets
          </div>
          <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num text-red-500" />
        </div>
      </div>
    </el-col>
  </el-row>
  </html>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
 position: relative;

  .card-panel-col {
    margin-bottom: 32px;
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 14px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #ffff;
    box-shadow: 4px 4px 40px rgba(8, 8, 8, 0.05);
    border-color: rgba(0, 0, 0, .05);
  

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
    }

    .card-panel-description {
      float: right;
      font-weight: normal;
      margin: 26px;
      margin-left: 0px;

      .card-panel-text {
        line-height: 18px;
        font-size: 16px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
