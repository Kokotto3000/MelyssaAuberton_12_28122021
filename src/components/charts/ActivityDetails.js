import '../../styles/ActivityDetails.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

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

    return(
        
        <div className='activity'>
            <div className='activity_chart'>
                <RadarChart width={250}
                height={200}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <Radar name="Mike" dataKey="A" fill="red" fillOpacity={0.7} />
                </RadarChart>
            </div>
        </div>
        
        
    );
}

export default ActivityDetails;