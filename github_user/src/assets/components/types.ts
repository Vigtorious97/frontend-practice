export interface GithubUser {
    login : string ;
    avatar_url : string ;
    name : string ;
    bio : string ;
    pubic_repos : string ;
    followers : number ;
    following : number ;
    html_url : string ;
}

export interface GithubRepo {
    name : string ;
    html_url : string ; 
    stargazers_count : number;
}