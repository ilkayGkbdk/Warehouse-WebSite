import Header from "@/app/components/general/Header";
import {warehouses} from "@/utils/Warehouses";
import WarehouseCard from "@/app/components/home/WarehouseCard";

const Warehouses = () => {
    return (
        <div>
            <Header text='Tüm Depolar' center bold/>
            <div className='flex items-center flex-wrap gap-3 md:gap-10 md:my-10 px-3 md:px-10'>
                {
                    warehouses.map(warehouse => (
                        <WarehouseCard warehouse={warehouse} key={warehouse.id} />
                    ))
                }
            </div>
        </div>
    );
}

export default Warehouses;