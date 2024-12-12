import { axiosInstanse, baseUrl } from "app/api/api"
import { useEffect, useState } from "react"

export const AsyncPage = () => {
    const [data, setData] = useState<any[] | null>(null);

    useEffect(() => {
        axiosInstanse.get(`${baseUrl}/people`).then(res => setData(res.data.results))
    }, [])

    if (!data) return <h2>loading....</h2>;

    return (
        <div>
            <h2>name of people:</h2>

            {data.map(el => {
                return <p key={el.name}>{el.name}</p>
            })}
        </div>
    )
}