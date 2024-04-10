import React from "react";
import Chart from 'react-apexCharts'

const Analysis = () => {

    
  return (
    <div>
        <Chart
        type="bar"
        width={600}
        height={600}
        series={[
            {
                name:'Company1',
                data:[100,200,232,231,422, 132]
            }
        ]}
        options={{
            
        }}
        >

        </Chart>


    </div>
  );
};

export default Analysis;
