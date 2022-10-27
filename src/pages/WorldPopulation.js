import {React, Component} from 'react';
import Navigation from '../components/Navigation';
import BarChart from '../components/BarChart';

class WorldPopulation extends Component {
    state = {
        data: [12, 5, 6, 6, 9, 10],
        width: 700,
        height: 500,
        id: "root"
    };
        
    render() {
            return (
                <BarChart data={this.state.data} width={this.state.width} height={this.state.height} />
            );
          }
}

export default WorldPopulation