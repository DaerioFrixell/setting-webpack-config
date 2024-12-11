import { FC } from "react";
import "./title.scss";

type TitleProps = {
    text: string
};

export const Title: FC<TitleProps> = ({ text }) => {
    return <h2 className="title">{text}</h2>
}