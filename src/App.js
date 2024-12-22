import './App.css';
import { LineGraph } from './components/Line';
import { BarGraph } from './components/Bar';
import { PieChart } from './components/Pie';
import { BubbleChart } from './components/Bubble';
import { ScatterChart } from './components/Scatter';
import { PolarAreaChart } from './components/Polar';
function App() {
  return (
    <div className="app-container">
      <h1 className="graph">Graphs</h1>
      <h1>Line Graph</h1>
      <div className="graph-container"><LineGraph /></div>
      <h1>Bar Graph</h1>
      <div className="graph-container"><BarGraph/></div>
      <h1>Pie Chart</h1>
      <div className="graph-container"><PieChart/></div>
      <h1>Bubble Chart</h1>
      <div className="graph-container"><BubbleChart/></div>
      <h1>Scatter Chart</h1>
      <div className="graph-container"><ScatterChart/></div>
      <h1>Polar Area Chart</h1>
      <div className="graph-container"><PolarAreaChart/></div>

    </div>
  );
}

export default App;
