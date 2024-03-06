import {baseUrl,eventsQuantity} from "../variables.js";
async function getEvents(userName){
    const respostaUrl = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsQuantity}`);
    return await respostaUrl.json()
}
export{getEvents}