import {useEffect, useState} from 'react'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { LabelList, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { getTopCountriesPopulation } from '../core/Country';
/*

<LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="poblacion" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
*/

const WorldPopulation = () => {
    const [population, setPopulation] = useState([]);

    useEffect(() => {
        getTopCountriesPopulation().then((data) => {
            setPopulation(data);
        });
    }, []);
    
    const reducedPopulation = population.reduce((acc, item) => {
        acc.push({name: item.name, population: item.value, year: item.year});
        return acc;
    }, []);

    return (
        <div>
            <Navigation />
            <h1>10 Países más poblados en 2022</h1>
            <div className="container">
                <h3>Habitantes</h3>
                <BarChart
                    width={1000}
                    height={700}
                    data={reducedPopulation}
                    margin={{
                        top: 5,
                        right: 40,
                        left: 40,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="population" fill="#8884d8">
                        <LabelList dataKey="population" position="top" />
                    </Bar>
                </BarChart>
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default WorldPopulation;