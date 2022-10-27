import {React} from 'react';
import Navigation from '../components/Navigation';
import BarChart from '../components/BarChart';

const WorldPopulation = () => {
    let state = {
        data: [12, 5, 6, 6, 9, 10],
        width: 700,
        height: 500,
        id: "root"
    };
        
    return (
        <div>
            <Navigation />
            <BarChart data={state.data} width={state.width} height={state.height} />
        </div>
    );
}

export default WorldPopulation