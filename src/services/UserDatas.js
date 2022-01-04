// import { useEffect, useState } from 'react';

function UserDatas(id){
    // const [ userDatas, setUserDatas ]= useState({});

    // useEffect(()=> {
    //     return fetch(`http://localhost:3000/user/18`)
    //             .then((response)=> response.json())
    //             .then((data) => { 
    //                 setUserDatas(data);
    //             })
    //             .catch((error)=> console.log(error))
    //     }, []);

    return fetch(`http://localhost:3000/user/${id}`)
    .then(data => data.json())
}

export default UserDatas;