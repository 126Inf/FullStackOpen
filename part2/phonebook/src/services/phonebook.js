import axios from 'axios';


const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((res) => {
        return res.data;
    })
}

const addEntry = (entry) => {
    const request = axios.post('http://localhost:3001/persons', entry);
    return request.then((res) => {
        console.log(res);
        return res.data;
    })
}

const deleteEntry = (id) => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`);
    return request.then((res) => {
        return res.data;
    });

}

export default {
    getAll,
    addEntry,
    deleteEntry
}
