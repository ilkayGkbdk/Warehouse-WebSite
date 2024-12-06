import { FaWarehouse } from "react-icons/fa6";

const WarehouseCount = () => {
    return (
        <div className='hidden md:flex items-center justify-center cursor-pointer'>
            <FaWarehouse size='26' className='hover:size-10 ease-in duration-150' />
        </div>
    );
}

export default WarehouseCount;