import {baseUrl} from "../variables.js";
async function getUser(userName){
    const respostaUrl = await fetch(`${baseUrl}/${userName}`);
    return await respostaUrl.json();
}
export{getUser}
