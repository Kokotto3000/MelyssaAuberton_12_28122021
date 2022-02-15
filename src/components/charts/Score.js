import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '../../styles/Score.css';
import { PropTypes } from 'prop-types';

/**
 * 
 * @param {number} score 
 * @returns user score pie chart
 */

function Score({ score }) {

    const data = [
        { id: "1", value: 100 },
        { id: "2", value: score }
    ];
      
    return(
        <div className='score'>
            <h2>Score</h2>

            <ResponsiveContainer className='score_chart'> 
                <PieChart
                    background={ true }
                    data={ data }
                    margin={{ top: 30, right: 10, left: 10, bottom: 10 }}
                >
                    
                    <Pie
                        data={ data }
                        dataKey= "value"
                        outerRadius="75%"
                        fill="white"
                        startAngle={ 90 }
                        endAngle={ -360 }
                        paddingAngle={ 0 }
                    >
                    </Pie>

                    <Pie
                        data={data}
                        dataKey="value"
                        innerRadius="75%"
                        outerRadius="90%"
                        fill="red"
                        startAngle={ 90 }
                        endAngle={ -360 }
                        paddingAngle={ 0 }
                        cornerRadius={ 50 }
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
                            x={ "50%" }
                            y={ "50%" }
                            fill='#282D30'
                            fontWeight="bold"
                            fontSize="2.6rem">
                                { score } %
                        </tspan>
                        <tspan
                            x={ "50%" }
                            y={ "60%" }
                            fill='#74798C'
                            fontWeight="normal"
                            fontSize="2rem">
                                de votre
                        </tspan>
                        <tspan
                            x={"50%"}
                            y={"70%"}
                            fill='#74798C'
                            fontWeight="normal"
                            fontSize="2rem">
                                objectif
                        </tspan>
                    </text>                
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

Score.propTypes = {
    score: PropTypes.number.isRequired
};

export default Score;