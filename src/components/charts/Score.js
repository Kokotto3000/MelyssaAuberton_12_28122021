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

            <PieChart className="score-chart" 
                width={250}
                height={200}
                background={true}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}>
                
                <Pie
                    data={data}
                    // dataKey="value"
                    outerRadius="90%"
                    fill="white"
                    // startAngle={90}
                    // endAngle={-270}
                    paddingAngle={0}
                    // cornerRadius={50}
                >
                    
                </Pie>
                <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="80%"
                    outerRadius="100%"
                    fill="red"
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={0}
                    cornerRadius={50}
                >
                <Cell
                    key="test"
                    fill="transparent"
                    stroke="transparent"
                />
                </Pie>
                <text
                    textAnchor="middle"
                    dominantBaseline="middle"
                >
                    <tspan
                        x={125}
                        y={100}
                            fill='#282D30'
                            font-weight="bold"
                            font-size="2.6rem">
                            12%
                    </tspan>
                    <tspan
                        x={125}
                        y={126}
                        fill='#74798C'
                        font-weight="normal"
                        font-size="2rem">
                            de votre
                    </tspan>
                    <tspan
                        x={125}
                        y={152}
                        fill='#74798C'
                        font-weight="normal"
                        font-size="2rem">
                            objectif
                    </tspan>
                </text>                
            </PieChart>
        </div>
        
    );
}

export default Score;