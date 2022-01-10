function UserDatas(id){

    return fetch(`http://localhost:3000/user/${id}`)
    .then(response=> response.json())
    .then(result=> {
        if(result !== "can not get user") return result;
        throw result;
    })
    .catch(error=> console.log(error));

}

export default UserDatas;