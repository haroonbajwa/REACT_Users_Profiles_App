import axios from "axios";



export const returnSingleUser = (id) => {
    return (
        axios.create({
            baseURL: `https://jsonplaceholder.typicode.com/users/${id}`
        }).get()
    )
    
}

