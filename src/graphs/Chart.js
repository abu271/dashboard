import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: function() {
    return {
      datacollection: null,
      options: {
        layout: {
          padding: {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
          }
        },
        title: {
          display: true,
          text: 'Queue'
        }
      },
    }
  },
  mounted () {
    // this.chartData is created in the mixin
    this.fillData()
    this.renderChart(this.datacollection, this.options)
  },
  methods: {
    fillData () {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            fill: false,
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data Two',
            backgroundColor:"green",
            borderColor:"green",
            fill: false,
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}