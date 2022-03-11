<template>
    <div>
        <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
    name: "BarChart",
    props: {
        height: {
            type: Number,
            default: 250
        },
        colors: {
            type: Array,
            default: () => {
                return ["#036fe7", '#f93a5a', '#f7a556'];
            }
        },
        categories: {
            type: Array,
            default() {
                return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
            }
        },
        labels: {
            type: Array,
            default() {
                return []
            }
        },
    },
    data() {
        return {
            chartOptions: {
                xaxis: {
                    categories: this.categories
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 0,
                    offsetY: 10,
                    fontSize: '16px',
                    markers: {
                        width: 15,
                        height: 15,
                        strokeWidth: 0,
                        strokeColor: '#fff',
                        radius: 15,
                        offsetX: 0,
                        offsetY: 0
                    },
                    // formatter: function(seriesName, opts) {
                    //     return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex]]
                    // }
                },
            },
            series: [
                {
                    name: 'Success',
                    data: [74, 85, 57, 56, 76, 35, 61, 98, 36, 50, 48, 29, 57]
                },
                {
                    name: 'Pending',
                    data: [46, 35, 101, 98, 44, 55, 57, 56, 55, 34, 79, 46, 76]
                },
                {
                    name: 'Failed',
                    data: [26, 35, 41, 78, 34, 65, 27, 46, 37, 65, 49, 23, 49]
                }]
        }
    },
}
</script>

<style scoped>

</style>