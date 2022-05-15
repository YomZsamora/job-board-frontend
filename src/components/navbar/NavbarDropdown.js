

function NavbarDropdown({user, signOut}) {

    let handleClick = () => signOut();

    return (
        <div>
            <div className="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg py-1 bg-white ring-1 ring-secondary ring-opacity-5 focus:outline-none">        
                <a href="#" className="flex items-center p-3 -mt-2 text-sm text-primary transition-colors duration-200 transform hover:bg-primary-light ">
                    <div className="mx-1">
                        <h1 className="text-xs ">{user.name}</h1>
                        <p className="text-[11px] ">{user.email}</p>
                    </div>
                </a>

                <hr className="border-primary-light " />
                <a href="" className="block px-4 py-2 text-xs text-primary hover:bg-primary-light cursor-pointer">Invite Colleagues</a>
                <a href="" className="block px-4 py-2 text-xs text-primary hover:bg-primary-light cursor-pointer">Settings</a>
                <a onClick={handleClick} className="block px-4 py-2 text-xs text-primary hover:bg-primary-light cursor-pointer">Sign out</a>
            </div>
        </div>
    )
}

export default NavbarDropdown;