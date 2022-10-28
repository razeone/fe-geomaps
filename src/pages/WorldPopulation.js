import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ResponsiveContainer, BarChart, Bar, Legend, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{name: 'China', poblacion: 400, pv: 2400, amt: 2400}, {name: 'México', poblacion: 200, pv: 2400, amt: 2400}, {name: 'Russia', poblacion: 800, pv: 2400, amt: 2400}] 


const WorldPopulation = () => {
    return (
        <div>
            <Navigation />
            <h1>World Population</h1>
            <div className="container">
                <h3>World Population</h3>
                <LineChart width={400} height={400} data={data}>
                    <Line type="monotone" dataKey="poblacion" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            
                    <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="poblacion" fill="#82ca9d" />
                    </BarChart>
                
            <br />
            <Footer />
        </div>
    )
}

export default WorldPopulation;