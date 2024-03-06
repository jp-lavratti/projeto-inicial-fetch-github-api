import {baseUrl, repositoriesQuantity} from "../variables.js";
async function getRepositories(userName){
    const respostaUrl = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`);
    return await respostaUrl.json();
}
export{getRepositories}