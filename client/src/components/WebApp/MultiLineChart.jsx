import React, {useEffect} from 'react'
import Chart from 'chart.js'
function MultiLineChart(props) {

    const name = props.chartname
    const numOne = Math.floor(Math.random() * 17) + 4  
    const numTwo = Math.floor(Math.random() * 17) + 1  
    const numThree = Math.floor(Math.random() * 17) + 3  
    const numFour = Math.floor(Math.random() * 17) + 3  
    const numFive = Math.floor(Math.random() * 17) + 3  
    const numSix = Math.floor(Math.random() * 17) + 3  
    const BnumOne = Math.floor(Math.random() * 17) + 4  
    const BnumTwo = Math.floor(Math.random() * 17) + 1  
    const BnumThree = Math.floor(Math.random() * 17) + 3  
    const BnumFour = Math.floor(Math.random() * 17) + 3  
    const BnumFive = Math.floor(Math.random() * 17) + 3  
    const BnumSix = Math.floor(Math.random() * 17) + 3  
    const CnumOne = Math.floor(Math.random() * 17) + 4  
    const CnumTwo = Math.floor(Math.random() * 17) + 1  
    const CnumThree = Math.floor(Math.random() * 17) + 3  
    const CnumFour = Math.floor(Math.random() * 17) + 3  
    const CnumFive = Math.floor(Math.random() * 17) + 3  
    const CnumSix = Math.floor(Math.random() * 17) + 3  
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
              }, {
                data: [BnumOne, BnumTwo, BnumThree, BnumFour, BnumFive, BnumSix],
                borderColor: ["#D50505"],
                borderWidth: 3
              },{
                data: [CnumOne, CnumTwo, CnumThree, CnumFour, CnumFive, CnumSix],
                borderColor: ["#46930A"],
                borderWidth: 3
              },
              

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

export default MultiLineChart