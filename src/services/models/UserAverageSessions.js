export default class UserAverageSessions{
    constructor(data){
        this.id= data.userId;
        this.sessions= data.sessions;
        this.setUpSessions();
    }

    setUpSessions(){
        
        const days = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' };

        this.sessions = this.sessions.map(session => ({
            day: days[session.day],
            sessionLength: session.sessionLength
        }))
    }
}