import React,{useState} from "react";
import axios from "axios";
import UserProfile from "./UserProfile";
import RepoList from "./RepoList";
import { GithubRepo, GithubUser} from "./types";


const GithubSeach : React.FC = () => {
    const [username , setUsername] = useState<string>(" ");
    const [user , setUser] = useState<GithubUser | null>(null);
    const [repos , setRepos] = useState<GithubRepo[]>([]);
    const [loading , setLoading ] = useState<boolean>(false);
    const [errors , setErrors] = useState<string>("");


const fetchGithubData = async() => {
    if(!username) return ;
    setLoading(false);
    setUser(null);
    setErrors("");
    setRepos([]);

    try{
        const userNameData = await axios.get(`https://api.github.com/users/${username}`);
        const reposNameData = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=updated`)
        setUser(userNameData.data);
        setRepos(reposNameData.data);
    }catch(err){
        setErrors("The given username was not found");
    } finally {
        setLoading(false);
    }
}

    return (
        <div className="github-search">
            <h1> Github User Finder </h1>
            <input 
            type="text"
            placeholder=" Enter user name...."
            value = {username}
            onChange = {(e) => setUsername(e.target.value)}
            />
            <button onClick={fetchGithubData} disabled={loading}>
                {loading ? "Searching.." : "Search"}
            </button>
            { errors && <p className="error">{errors} </p>}
            {user && <UserProfile user = {user} /> }
            {repos.length > 0 && <RepoList repos={repos}/>}
            
        </div>
    )

};

export default GithubSeach;