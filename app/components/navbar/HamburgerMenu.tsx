import { FiMenu } from "react-icons/fi";

const HamburgerMenu = () => {
    return (
        <div className='flex items-center justify-center md:hidden'>
            <FiMenu size='26' />
        </div>
    );
}

export default HamburgerMenu;