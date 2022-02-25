/**
* @param {object} data user general info
**/

export default class UserDatas{
    constructor(data){
        this.id= data.id;
        this.firstName= data.userInfos.firstName;
        this.score= data.todayScore * 100;
        this.calorieCount= data.keyData.calorieCount.toLocaleString('en-US');
        this.proteinCount= data.keyData.proteinCount;
        this.carbohydrateCount= data.keyData.carbohydrateCount;
        this.lipidCount= data.keyData.lipidCount;
    }
}