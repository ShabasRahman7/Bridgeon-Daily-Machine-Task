import React from "react";
function UserCard({user,onUpdateUser}){
    return(
        <div>
            <h4>Name: {user.name}</h4>
            <h4>Age: {user.age}</h4>
            <button onClick={onUpdateUser}>Increase Age</button>
        </div>
    )
}

export default UserCard;