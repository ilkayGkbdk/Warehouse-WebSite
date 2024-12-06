const Searchbar = () => {
    return (
        <div className='hidden md:flex flex-1'>
            <input className='px-3 py-2 bg-customWhite border-none outline-none flex flex-1 text-black' type='text' placeholder='Ne arıyorsunuz?'/>
            <button className='px-2 md:px-10 bg-customDarkBrown text-lg border border-transparent hover:px-12 hover:bg-customDarkBrown/30 ease-in duration-150'>
                Ara
            </button>
        </div>
    );
}

export default Searchbar;