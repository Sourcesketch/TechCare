const username = 'coalition';
const password = 'skills-test';
const base64Credentials = btoa(`${username}:${password}`);
// Make an API request
fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
    headers: {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/json' // Assuming JSON content type
    }
})
    .then(response => response.json())
    .then(data => {
        // Data processing
        const formattedData = data.map((item) => item);
      //  console.log(formattedData[3].diagnosis_history[0].year);
       // console.log(formattedData[3].diagnosis_history[0].blood_pressure.systolic.value);
        // Create the Highcharts chart
        Highcharts.chart('container', {
            chart: {
                type: 'spline',
                backgroundColor: '#F4F0FE',
                borderRadius: '12px',
            },
            title: {
                text: 'Blood Pressure',
                    align: 'left',
                 
                
            },
            
            xAxis: {
                categories: [
                    (formattedData[3].diagnosis_history[5].month).substring(0,3) + " " + formattedData[3].diagnosis_history[5].year,
                    (formattedData[3].diagnosis_history[4].month).substring(0,3) + " " + formattedData[3].diagnosis_history[4].year,
                    (formattedData[3].diagnosis_history[3].month).substring(0,3) + " " + formattedData[3].diagnosis_history[3].year,
                    (formattedData[3].diagnosis_history[2].month).substring(0,3) + " " + formattedData[3].diagnosis_history[2].year,
                    (formattedData[3].diagnosis_history[1].month).substring(0,3) + " " + formattedData[3].diagnosis_history[1].year,
                    (formattedData[3].diagnosis_history[0].month).substring(0,3) + " " + formattedData[3].diagnosis_history[0].year
                ]
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },
            series: [{
                name: 'Systolic',
                color: '#E66FD2',
                data: [
                    formattedData[3].diagnosis_history[5].blood_pressure.systolic.value,
                    formattedData[3].diagnosis_history[4].blood_pressure.systolic.value,
                    formattedData[3].diagnosis_history[3].blood_pressure.systolic.value,
                    formattedData[3].diagnosis_history[2].blood_pressure.systolic.value,
                    formattedData[3].diagnosis_history[1].blood_pressure.systolic.value,
                    formattedData[3].diagnosis_history[0].blood_pressure.systolic.value
                ]
            }, {
                name: 'diastolic',
                color: '#8C6FE6',
                data: [
                    formattedData[3].diagnosis_history[5].blood_pressure.diastolic.value,
                    formattedData[3].diagnosis_history[4].blood_pressure.diastolic.value,
                    formattedData[3].diagnosis_history[3].blood_pressure.diastolic.value,
                    formattedData[3].diagnosis_history[2].blood_pressure.diastolic.value,
                    formattedData[3].diagnosis_history[1].blood_pressure.diastolic.value,
                    formattedData[3].diagnosis_history[0].blood_pressure.diastolic.value
                ]
            }],
            exporting: {
                enabled: false
              },
              credits: {
                enabled: false
              },
           
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
