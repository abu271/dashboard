import { Bar } from 'vue-chartjs'

export default {
	extends: Bar,
	data: function () {
		return {
			datacollection: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#f87979',
						pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
					}
        ]
			},
			options: {
        layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 50
            }
				},
				title: {
          display: true,
          text: 'Pubsub'
        },
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
          xPadding:14,
          yPadding:14,
					enabled: true,
					mode: 'single',
					callbacks: {
						label: function(tooltipItems, data) {
							return '£' + tooltipItems.yLabel;
						}
					}
				},
				responsive: true,
				maintainAspectRatio: false,
}
		}
	},
	mounted () {
		// this.chartData is created in the mixin
		this.renderChart(this.datacollection, this.options)
	}
}