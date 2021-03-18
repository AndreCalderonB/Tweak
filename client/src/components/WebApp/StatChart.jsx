import React, {useEffect} from 'react'
import Chart from 'chart.js'
function StatChart(props) {

    const name = props.chartname
    const numOne = Math.floor(Math.random() * 17) + 4  
    const numTwo = Math.floor(Math.random() * 17) + 1  
    const numThree = Math.floor(Math.random() * 17) + 3  
    const numFour = Math.floor(Math.random() * 17) + 3  
    const numFive = Math.floor(Math.random() * 17) + 3  
    const numSix = Math.floor(Math.random() * 17) + 3  
    useEffect(() => {
        const ctx = document.getElementById(name);
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["", "", "", "", "", ""],
            datasets: [
              {
                data: [numOne, numTwo, numThree, numFour, numFive, numSix],
                borderColor: ["#048AD4"],
                borderWidth: 3
              }
            ]
          },
          options: {
            elements: {
              line: {
                tension:0
              }
            },
            legend:{
              display:false
            }
          }
        });
      });
    return (
        <div>
            <canvas id={name} height="250px" />
        </div>
    )
}

export default StatChart