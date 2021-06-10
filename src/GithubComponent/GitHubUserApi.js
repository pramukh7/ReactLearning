import React from "react";
import axios from "axios";

const URL = "https://api.github.com/users/";
class GitHubUserApi
{

    getGitHubUser = async (name) =>
    {
       const res = await axios.get(URL+name);
       const data = await res.data;
       return data;
    }
}
export default new GitHubUserApi()