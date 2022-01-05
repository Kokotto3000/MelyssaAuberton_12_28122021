import '../../styles/ActivityDetails.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function ActivityDetails() {
    const data = [
        {
          kind: 'Intensité',
          value: 200
        },
        {
          kind: 'Vitesse',
          value: 240
        },
        {
          kind: 'Force',
          value: 80
        },
        {
          kind: 'Endurance',
          value: 80
        },
        {
          kind: 'Energie',
          value: 220
        },
        {
          kind: 'Cardio',
          value: 110
        },
      ];

    return (   
        <div className='activity'>
            <ResponsiveContainer className='activity_chart'>
                <RadarChart
                    // width={250} 
                    // height={200} 
                    // margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    // cx="50%" 
                    // cy="100%" 
                    outerRadius="60%" 
                    data={data}>
                <PolarGrid />
                <PolarAngleAxis className="activity_chart-subject" dataKey="kind" />
                <Radar name="Thomas" dataKey="value" fill="red" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
        
        
    );
}

export default ActivityDetails;