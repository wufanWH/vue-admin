<template>
  <div class="web-container">
    <div class="first-table">
      <ul>
        <li>
          <div id="knowledge" :style="{width: '340px',height:'340px'}"></div>
        </li>
        <li>
          <div id="popularCourse" :style="{width: '340px',height:'340px'}"></div>
        </li>
        <li>
          <div id="knowledgeClassification" :style="{width: '340px',height:'340px'}"></div>
        </li>
      </ul>

    </div>
    <div class="second-table">
      <ul>
        <li>
          <div>
            <a>学霸排行榜</a>
            <i class="el-icon-more"></i>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="position" label="职位">
              </el-table-column>
              <el-table-column prop="department" label="所属部门">
              </el-table-column>
              <el-table-column prop="period" label="学时">
              </el-table-column>
              <el-table-column prop="credit" label="学分">
              </el-table-column>
            </el-table>
          </div>
        </li>
        <li>
          <div>
            <a>网站活跃度</a>
            <i class="el-icon-more"></i>
            <div id="webActive"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="third-table">
      <ul>
        <li>
          <div class="title-font">培训项目参与度</div>
          <div id="training"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      tableData: [
        {
          name: '张三',
          position: '科员',
          department: '办公室',
          period: '345',
          credit: '78'
        },
        {
          name: '张三',
          position: '科员',
          department: '办公室',
          period: '345',
          credit: '78'
        },
        {
          name: '张三',
          position: '科员',
          department: '办公室',
          period: '345',
          credit: '78'
        },
        {
          name: '张三',
          position: '科员',
          department: '办公室',
          period: '345',
          credit: '78'
        },
        {
          name: '张三',
          position: '科员',
          department: '办公室',
          period: '345',
          credit: '78'
        },
        {
          name: '张三',
          position: '科员',
          department: '办公室',
          period: '345',
          credit: '78'
        }
      ]
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const knowledge = this.$echarts.init(document.getElementById('knowledge'))
      const popularCourse = this.$echarts.init(
        document.getElementById('popularCourse')
      )
      const knowledgeClassification = this.$echarts.init(
        document.getElementById('knowledgeClassification')
      )
      const webActive = this.$echarts.init(document.getElementById('webActive'))
      const training = this.$echarts.init(document.getElementById('training'))
      // 绘制图表
      knowledge.setOption({
        // 标题组件，包含主标题和副标题。
        title: {
          text: '知识类型分布',
          x: 'left'
        },
        // 提示框组件。
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        // 不同系列的标记(symbol)，颜色和名字。
        legend: {
          orient: 'horizontal',
          x: 'center',
          y: 'bottom',
          width: '200px',
          data: ['视频', 'PPT', '文档', '试卷', '音频', '测试']
        },
        // 系列列表。每个系列通过 type 决定自己的图表类型
        series: [
          {
            name: '访问来源',
            type: 'pie', // 类型
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '20',
                  fontWeight: 'bold'
                }
              }
            },
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线。
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 43, name: '视频' },
              { value: 34, name: 'PPT' },
              { value: 135, name: '文档' },
              { value: 123, name: '试卷' },
              { value: 20, name: '音频' },
              { value: 54, name: '测试' }
            ]
          }
        ]
      })
      popularCourse.setOption({
        color: ['#3398DB'],
        title: {
          text: 'Top8最受欢迎课程',
          x: 'left'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: true,
          data: [
            'Vue入门',
            'JavaScript',
            'Jquery',
            'Java',
            'Python',
            'C语言',
            'C++'
          ]
        },
        series: [
          {
            name: '人数',
            type: 'bar',
            show: true,
            // stack: '总量',
            label: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 956, name: 'C++' },
              { value: 1085, name: 'C语言' },
              { value: 1156, name: 'Python' },
              { value: 1253, name: 'Java' },
              { value: 1320, name: 'Jquery' },
              { value: 1480, name: 'JavaScript' },
              { value: 1590, name: 'Vue入门' }
            ]
          }
        ]
      })
      knowledgeClassification.setOption({
        color: ['#3398DB'],
        title: {
          text: 'Top5知识分类访问',
          x: 'left'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: true,
          data: ['写作能力', '管理能力', '业务能力', '领导力', '职业素养']
        },
        series: [
          {
            name: '人数',
            type: 'bar',
            show: true,
            // stack: '总量',
            label: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 4982, name: '写作能力' },
              { value: 5023, name: '管理能力' },
              { value: 6983, name: '业务能力' },
              { value: 7234, name: '领导力' },
              { value: 8248, name: '职业素养' }
            ]
          }
        ]
      })
      webActive.setOption({
        title: {
          text: '2018年网站活跃度统计',
          x: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '人数',
            show: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [120, 321, 210, 321, 234, 433, 354, 544, 456, 725, 645, 774],
            type: 'line'
          }
        ]
      })
      training.setOption({
        color: ['#3398DB'],
        title: {
          text: '2018年项目参与度统计',
          x: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            label: {
              normal: {
                show: true
              }
            },
            data: [120, 201, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.web-container {
  // background-color: white;
  width: 1200px;
  //   background-color: #a2a2a2;
  .first-table {
    // background-color: white;
    margin-top: 30px;
    > ul {
      width: 100%;
      text-align: left;
      > li {
        background-color: white;
        display: inline-block;
        border: solid 1px #a2a2a2;
        margin-right: 20px;
      }
    }
  }
  .second-table {
    margin-top: 30px;
    > ul {
      width: 100%;
      > li {
        background-color: white;
        display: inline-block;
        border: solid 1px #a2a2a2;
        margin-right: 20px;
        width: 525px;
        height: 400px;
        > div {
          font-size: 20px;
          margin-left: 10px;
          margin-top: 10px;
          > a {
            display: inline-block;
            text-align: left;
            width: 250px;
          }
          > i {
            display: inline-block;
            text-align: right;
            color: #a2a2a2;
            width: 250px;
          }
          > div {
            width: 100%;
            height: 350px;
          }
        }
      }
    }
  }
  .third-table {
    margin-top: 30px;
    > ul {
      width: 100%;
      > li {
        background-color: white;
        width: 1075px;
        height: 500px;
        display: inline-block;
        border: solid 1px #a2a2a2;
        .title-font {
          font-size: 20px;
          margin-top: 10px;
          margin-left: 10px;
        }
        #training {
          width: 100%;
          height: 470px;
        }
      }
    }
  }
}
</style>

