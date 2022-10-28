import {useEffect, useState} from 'react'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Label } from 'recharts';
import { getTopCountriesPopulation } from '../core/Country';

const WorldPopulation = () => {
    const [population, setPopulation] = useState([]);

    useEffect(() => {
        getTopCountriesPopulation().then((data) => {
            setPopulation(data);
        });
    }, []);
    
    const reducedPopulation = population.reduce((acc, item) => {
        acc.push({name: item.name, population: item.value/10000, year: item.year});
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
                    <YAxis>
                        <Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
                            Población (escala 1:10000)
                        </Label>
                    </YAxis>
                    <Tooltip />
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