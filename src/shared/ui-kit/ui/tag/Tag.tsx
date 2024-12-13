import { FC } from "react";

import './tag.scss';

type TagProps = {
    text: string;
}

export const Tag: FC<TagProps> = ({ text }) => {
    return <span className="tag">{text}</span>
}