import {useEffect, useState} from 'react'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { getTopCountriesPopulation } from '../core/Country';
import formatValue from '../core/Misc';

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
                    height={900}
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
                    <YAxis tickFormatter={formatValue} />
                    <Tooltip formatter={formatValue} />
                    <Bar dataKey="population" fill="#8884d8">
                    </Bar>
                </BarChart>
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default WorldPopulation;