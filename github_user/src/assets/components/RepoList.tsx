import React from "react"
import { GithubRepo } from "./types"

interface RepoListProps {
    repos : GithubRepo[];
}

const RepoList : React.FC<RepoListProps> = ({repos}) => {
    return (
        <div className="repos-list">
            <h3> Latest Repositories</h3>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.name}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name} {repo.stargazers_count}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RepoList;