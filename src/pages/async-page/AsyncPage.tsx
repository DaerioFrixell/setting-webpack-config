import { axiosInstanse } from "app/api/api";
import { useEffect, useState } from "react";
import './asyncPage.scss';

export const AsyncPage = () => {
    const [data, setData] = useState<any[] | null>(null);

    useEffect(() => {
        axiosInstanse.get(`data?drilldowns=Nation&measures=Population`).then(res => setData(res.data.data))
    }, [])

    if (!data) return <h2>loading....</h2>;

    return (
        <div className="async">
            <h2>name of people:</h2>

            {data.slice(0, 5).map(el => {
                return (
                    <div style={{ marginBottom: 20 }}>
                        <p key={el.Nation}>{el.Nation}</p>
                        <p>год: {el.Year}</p>
                        <p>численность населения: {el.Population}</p>
                    </div>
                );
            })}
        </div>
    );
};