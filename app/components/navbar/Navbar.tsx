import Logo from "@/app/components/navbar/Logo";
import Searchbar from "@/app/components/navbar/Searchbar";
import CountCard from "@/app/components/navbar/CountCard";
import User from "@/app/components/navbar/User";
import HamburgerMenu from "@/app/components/navbar/HamburgerMenu";
import {getCurrentUser} from "@/app/actions/getCurrentUser";

const Navbar = async () => {

    const currentUser = await getCurrentUser();

    return (
        <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-20 bg-customGreen text-slate-50'>
            <Logo/>
            <Searchbar/>
            <CountCard/>
            <User currentUser={currentUser} />
            <HamburgerMenu/>
        </div>
    );
}

export default Navbar;