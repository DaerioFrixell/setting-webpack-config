
import { Routes, Route } from "react-router";
import { routingSetting } from "./RoutingSetting";
import { Layout } from "app/layouts";

export const Routing = () => {
    return (
        <Layout>
            <Routes>
                {routingSetting.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                    />
                )}
            </Routes>
        </Layout>
    )
};