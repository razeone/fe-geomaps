import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import formatValue from '../core/Misc';

const CountryPopulationChart = ({ countryData }) => {

    if(countryData.length === 0) {
        return (
        <div>
            <h2>Población no encontrada</h2>
        </div>);
    }
    else {
        return (
            <>
                <h2>Población</h2>
                <div className="chart">
                <LineChart width={900} height={600} margin={{ top: 5, right: 20, bottom: 5, left: 30 }} data={countryData}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={formatValue} />
                </LineChart>
                </div>
            </>
        );
    }
}

export default CountryPopulationChart;
