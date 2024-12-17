import { FC } from "react";
import "./mainTitle.scss";

export const MainTitle: FC<{ title: string }> = ({ title }) => {
    return <h2 className="main-title">{title}</h2>
}