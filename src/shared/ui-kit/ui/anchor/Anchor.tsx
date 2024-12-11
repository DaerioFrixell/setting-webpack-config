import { FC } from "react";
import './anchor.scss';

type AnchorProps = {
    text: string;
    href: string;
};

export const Anchor: FC<AnchorProps> = ({ text, href }) => {
    return <a
        className="anchor"
        href={href}
        target="_blank">
        {text}
    </a>
}