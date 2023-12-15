import { writable } from "svelte/store";
const API_URL= "https://polar-chamber-99129-2f8b5415ba26.herokuapp.com/tasks/"
export const tasks = writable()

export async function getAllTasks(){
    const URL = API_URL + "getAllTasks"
    console.log(URL)
    try {
        const response = await fetch(URL);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        tasks.set(data)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
}    


