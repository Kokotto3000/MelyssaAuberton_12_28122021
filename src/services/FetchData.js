import UserDatas from "./models/UserDatas";
import UserActivity from "./models/UserActivity";
import UserPerformance from "./models/UserPerformance";
import UserAverageSessions from "./models/UserAverageSessions";

// pour éviter répétitions, trouver un moyen de récupérer url ? ou changer les endroits ou il y a des variations avec interpolation...

export default class FetchData{

    constructor(id){
        this.id= id;
    }

    fetchUserDatas(){
        return fetch(`http://localhost:3000/user/${this.id}`)
        .then(response=> response.json())
        .then(result=> {
            if(result !== "can not get user") return new UserDatas(result.data);
            throw result;
        })
        .catch(error=> console.log(error));
    }
    
    fetchUserActivity(){
        return fetch(`http://localhost:3000/user/${this.id}/activity`)
        .then(response=> response.json())
        .then(result=> {
            if(result !== "can not get user") return new UserActivity(result.data);
            throw result;
        })
        .catch(error=> console.log(error));
    }

    fetchUserPerformance(){
        return fetch(`http://localhost:3000/user/${this.id}/performance`)
        .then(response=> response.json())
        .then(result=> {
            if(result !== "can not get user") return new UserPerformance(result.data);
            throw result;
        })
        .catch(error=> console.log(error));
    }

    fetchUserAverageSessions(){
        return fetch(`http://localhost:3000/user/${this.id}/average-sessions`)
        .then(response=> response.json())
        .then(result=> {
            console.log(result);
            if(result !== "can not get user") return new UserAverageSessions(result.data);
            throw result;
        })
        .catch(error=> console.log(error));
    }

}