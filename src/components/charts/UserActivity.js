/**
* @param {object} data activity data
**/

export default class UserActivity{

    constructor(data){
        this.id= data.userId;
        this.sessions= data.sessions;
        this.ticks= [];
        this.setUpYTick();
        this.setUpSessions();
    }

    setUpSessions(){

        /**
         * 
         * @param {object} this.sessions
         * @returns {object} format days to be like what is expected (current month days)
         */

        for(let i= 0; i < this.sessions.length; i++){
            const date= new Date(this.sessions[i].day);
            const day= date.getDate();
            this.sessions[i].day= day;
        }
    }

    setUpYTick(){

        /**
         * 
         * @param {object} this.sessions
         * @param {Array} this.ticks empty by default
         * @returns custom ticks for userActivity graph
         */

        const kilograms= [];

        for(const session of this.sessions){
            kilograms.push(session.kilogram);
        }
        
        const min= Math.min(...kilograms)-1;
        const max= Math.max(...kilograms)+1;

        for(let i= min; i<=max; i++){
            this.ticks.push(i);
        }
    }
}