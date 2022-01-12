import UserDatas from "./models/UserDatas";
import UserActivity from "./models/UserActivity";

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
            // console.log(result);
            if(result !== "can not get user") return new UserActivity(result.data);
            throw result;
        })
        .catch(error=> console.log(error));
    }

}