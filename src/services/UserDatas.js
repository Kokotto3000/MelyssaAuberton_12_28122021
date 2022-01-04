function UserDatas(id, route){

    switch(route){
        case "user":
            return fetch(`http://localhost:3000/user/${id}`)
            .then(data => data.json());
        default:
            return fetch(`http://localhost:3000/user/${id}/${route}`)
            .then(data => data.json());        
    }
    
}

export default UserDatas;