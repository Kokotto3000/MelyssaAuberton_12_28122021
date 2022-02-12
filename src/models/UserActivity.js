export default class UserActivity{

    constructor(data){
        this.id= data.userId;
        this.sessions= data.sessions;
        this.tick= null;
        this.ticks= [];
        this.setUpYTick();
        this.setUpSessions();
    }

    setUpSessions(){
        // console.log(this.sessions);
        for(let i= 0; i < this.sessions.length; i++){
            const date= new Date(this.sessions[i].day);
            const day= date.getDate();
            // console.log(day);
            this.sessions[i].day= day;
        }
    }

    setUpYTick(){
        // console.log(this.sessions);
        const kilograms= [];

        for(const session of this.sessions){
            kilograms.push(session.kilogram);
        }

        // this.ticks= Array.from(new Set(kilograms));
        // this.ticks.sort();

        const min= Math.min(...kilograms)-1;
        const max= Math.max(...kilograms)+1;

        for(let i= min; i<=max; i++){
            this.ticks.push(i);
        }

        // console.log(this.ticks);

        this.tick= max-min;
        
        // console.log(this.tick)
    }
}