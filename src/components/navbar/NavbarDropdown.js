

function NavbarDropdown({user, signOut}) {

    console.log(user);

    let handleClick = () => signOut();

    return (
        <div>
            <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg py-1 bg-white ring-1 ring-secondary ring-opacity-5 focus:outline-none">        
                <a href="" className="block px-4 py-2 text-xs text-primary hover:bg-primary-light cursor-pointer">Invite Colleagues</a>
                <a href="" className="block px-4 py-2 text-xs text-primary hover:bg-primary-light cursor-pointer">Settings</a>
                <a onClick={handleClick} className="block px-4 py-2 text-xs text-primary hover:bg-primary-light cursor-pointer">Sign out</a>
            </div>
        </div>
    )
}

export default NavbarDropdown;