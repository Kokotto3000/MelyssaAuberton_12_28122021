import { PieChart, Pie, Cell } from 'recharts';
import '../../styles/Score.css';

function Score() {
    const data = [
        { id: "1", name: "L1", value: 75 },
        { id: "2", name: "L2", value: 25 }
        ];
      
    return(
        <div className='score'>
            <h2>Score</h2>            

            <PieChart width={250}
                height={200}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}>
                <text
                    x={125}
                    y={100}
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    12%
                </text>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="80%"
                    outerRadius="100%"
                    fill="red"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={0}
                    cornerRadius={5}
                >
                    <Cell
                    key="test"
                    fill="transparent"
                    />
                </Pie>
            </PieChart>
        </div>
        
    );
}

export default Score;