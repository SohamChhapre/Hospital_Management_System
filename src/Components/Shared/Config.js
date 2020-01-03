import React from 'react';

export const ApiUrl="http://192.168.1.75:8000";

const data=localStorage.getItem("authuser")
let token=""
export let logo_url=""
if(data){
    token=JSON.parse(data).token
    logo_url=ApiUrl+JSON.parse(data).logo
}

export const config={
        headers: { 
            Authorization: "Token "+ token,
        // contentType: 'application/json'
         }
}

export const  colors=['#800000','#FFFF00','047A0B','710505','#008080','ED0909','AEB82C','#0000FF','#FF00FF','#800080']

