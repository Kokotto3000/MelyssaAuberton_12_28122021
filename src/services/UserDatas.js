function UserDatas(id){

    return fetch(`http://localhost:3000/user/${id}`)
    .then(data => data.json())
    .catch(error=> console.log(error));
}

export default UserDatas;