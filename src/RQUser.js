import { useQuery } from 'react-query'
import axios from 'axios'

const RQUserPage = () => {
    const { isLoading, data } = useQuery('super-heroes', () => {
        return axios.get('http://localhost:4000/users')
    })

    if(isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <>
            <h2>RQ User Page</h2>
            {data?.data.map((user) => {
                return (
                    <div>
                        <ul>
                            <li key={user.name}>{user.name}</li>
                            <li key={user.email}>{user.email}</li>
                            <li key={user.password}>{user.password}</li>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default RQUserPage;