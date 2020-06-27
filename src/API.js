import axios from 'axios'

const http = axios.create(
    {
        baseURL: "http://fusiontechph.com/courseware"
    }
)

export default{
    async login(payload){
        const { data, status } = await http.post('/api/loginAdmin/', JSON.stringify(payload))

        return { data, status }
    },
    async addTeacher(payload){
        const { data, status } = await http.post('/api/addTeacher/', JSON.stringify(payload))

        return { data, status }
    },
    async getTeachers(){
        const { data, status } = await http.post('/api/getTeacher/')

        return { data, status }
    },
    async updateTeacher(payload){
        const { data, status } = await http.post('/api/updateTeacher/', JSON.stringify(payload))

        return { data, status }
    },
    async deleteTeacher(payload){
        const { data, status } = await http.post('/api/deleteTeacher/', JSON.stringify(payload))

        return { data, status }
    },
    async getSections(){
        const { data, status } = await http.post('/api/getSection/')

        return { data, status }
    },
    async addSection(payload){
        const { data, status } = await http.post('/api/addSection/', JSON.stringify(payload))

        return { data, status }
    },
    async updateSection(payload){
        const { data, status } = await http.post('/api/updateSection/', JSON.stringify(payload))

        return { data, status }
    },
    async deleteSection(payload){
        const { data, status } = await http.post('/api/deleteSection/', JSON.stringify(payload))

        return { data, status }
    },
    async deleteSection(payload){
        const { data, status } = await http.post('/api/deleteSection/', JSON.stringify(payload))

        return { data, status }
    },
    async addSy(payload){
        const { data, status } = await http.post('/api/addSy/', JSON.stringify(payload))

        return { data, status }
    },
    async getSy(){
        const { data, status } = await http.post('/api/getSy/')

        return { data, status }
    }
}