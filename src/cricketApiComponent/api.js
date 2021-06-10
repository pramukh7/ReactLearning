import React from "react";

export const getMatches = () => {
        return fetch("https://cricapi.com/api/matches?apikey=DNNP7J74byZvwcAY1ZkNTzZqOYv1").
        then(resp => {return resp.json()}).catch((error) => console.log("ERROR", error));
    }
