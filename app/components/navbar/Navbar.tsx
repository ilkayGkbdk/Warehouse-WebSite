import Logo from "@/app/components/navbar/Logo";
import Searchbar from "@/app/components/navbar/Searchbar";
import WarehouseCount from "@/app/components/navbar/WarehouseCount";
import User from "@/app/components/navbar/User";
import HamburgerMenu from "@/app/components/navbar/HamburgerMenu";

const Navbar = () => {
    return (
        <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-20 bg-customGreen text-slate-50'>
            <Logo/>
            <Searchbar/>
            <WarehouseCount/>
            <User/>
            <HamburgerMenu/>
        </div>
    );
}

export default Navbar;