import '../../styles/ActivityDetails.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function ActivityDetails() {
    const data = [
        {
          subject: 'Intensité',
          A: 120,
          B: 110,
          fullMark: 150,
        },
        {
          subject: 'Vitesse',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Force',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Endurance',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Energie',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'Cardio',
          A: 65,
          B: 85,
          fullMark: 150,
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
                <PolarAngleAxis className="activity_chart-subject" dataKey="subject" />
                <Radar name="Thomas" dataKey="A" fill="red" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
        
        
    );
}

export default ActivityDetails;