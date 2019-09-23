import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: function() {
    return {
      downloads: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
					{
						label: 'Downloads',
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
						// pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
					}
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Store'
        },
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Downloads'
            }
          }]
        },
      }
    }
  },
  mounted () {
    this.renderChart(this.downloads, this.options)
  },

}