import React from "react";

interface HeaderProps {
    center?: boolean
    text: string
    bold?: boolean
}

const Header:React.FC<HeaderProps> = ({center, text, bold}) => {
    return (
        <div className={`text-slate-800 my-3 md:my-5 px-3 md:px-10 text-xl ${center ? 'text-center' : 'text-start'} ${bold? 'font-bold' : ''}`}>
            {text}
        </div>
    );
}

export default Header;