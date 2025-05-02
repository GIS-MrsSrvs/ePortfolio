// <block:setup>
const data = {
    labels: [
      'Data Aquisition',
      'Data Engineering',
      'Data Science',
      'Software Development',
      'Product Development'
    ],
    
    datasets: [{
      label: 'Profile',
      data: [60, 80, 85, 65, 85],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };
  // </block:setup>
  
  // <block:config:0>
  const config = {
    type: 'radar',
    data: data,
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scales: {
        r: {
            angleLines: {
                display: true
            },
            suggestedMin: 0,
            suggestedMax: 100,
            pointLabels: {
                font: {
                    size: 16
                }
            },
            ticks: {
                font:{
                    size:10
                }
            }
            
        }       
    },
    plugins: {
        legend: {
            labels: {
                // This more specific font property overrides the global property
                font: {
                    size: 20
                }
            }
        }
    }
    },
  };
  // </block:config>
  

