import axios from "axios";

export const returnPosts = (id) => {
    return (
        axios.create({
            baseURL: `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        }).get()
    )
    
}