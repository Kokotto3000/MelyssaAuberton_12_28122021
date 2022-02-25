import UserDatas from "../../models/UserDatas";
import UserActivity from "../../models/UserActivity";
import UserPerformance from "../../models/UserPerformance";
import UserAverageSessions from "../../models/UserAverageSessions";

const url= "http://localhost:3000/user/";

/**
 * @class
 * @classdesc Fetch data from API. Has 4 methods corresponding to the API's 4 endpoints
 * This way, API calls are done outside of React Components
 */

export default class FetchData{

    constructor(id){
        this.id= id;
    }

    /**
     * 
     * @param {string} url
     * @param {number} this.id 
     * @returns {object} data from API - Used in Banner, InfosCard, and Score
     */

    fetchUserDatas(){
        return fetch(`${url + this.id}`)
        .then(response=> response.json())
        .then(result=> {
            if(result !== "can not get user") return new UserDatas(result.data);
            throw result;
        })
        .catch(error=> console.log(error));
    }

    /**
     * 
     * @param {string} url
     * @param {number} this.id 
     * @returns {object} data from API - Used in DailyParameters
     */
    
    fetchUserActivity(){
        return fetch(`${url + this.id}/activity`)
        .then(response=> response.json())
        .then(result=> {
            if(result !== "can not get user") return new UserActivity(result.data);
            throw result;
        })
        .catch(error=> console.log(error));
    }

    /**
     * 
     * @param {string} url
     * @param {number} this.id 
     * @returns {object} data from API - Used in Performance
     */

    fetchUserPerformance(){
        return fetch(`${url + this.id}/performance`)
        .then(response=> response.json())
        .then(result=> {
            if(result !== "can not get user") return new UserPerformance(result.data);
            throw result;
        })
        .catch(error=> console.log(error));
    }

    /**
     * 
     * @param {string} url
     * @param {number} this.id 
     * @returns {object} data from API - Used in AverageSessions
     */

    fetchUserAverageSessions(){
        return fetch(`${url + this.id}/average-sessions`)
        .then(response=> response.json())
        .then(result=> {
            if(result !== "can not get user") return new UserAverageSessions(result.data);
            throw result;
        })
        .catch(error=> console.log(error));
    }
}