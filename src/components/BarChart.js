import React from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, width, height }) => {
    const id = 'root';

    const drawChart = () => {
        const svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

        const h = height;

        svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - 10 * d)
        .attr("width", 65)
        .attr("height", (d, i) => d * 10)
        .attr("fill", "green")

        svg.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d)
        .attr("x", (d, i) => i * 70)
        .attr("y", (d, i) => h - (10 * d) - 3)

        //selection.attr(“property”, (d, i) => {})
    }

    drawChart();

    return  (
        <div id={"#" + id}></div>
    );

}

export default BarChart;
