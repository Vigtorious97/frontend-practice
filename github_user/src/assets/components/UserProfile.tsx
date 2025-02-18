import { GithubUser   } from "./types";
import React from "react";

interface UserProfileProps {
    user : GithubUser;
}

const UserProfile : React.FC<UserProfileProps> = ({user}) => {
    return (
        <div className="user-profile"> 
            <img src = {user.avatar_url} alt = {user.name}/>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <p>Repos : {user.pubic_repos} | Followers : {user.followers} | Following : {user.followers} </p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
    )
}

export default UserProfile;