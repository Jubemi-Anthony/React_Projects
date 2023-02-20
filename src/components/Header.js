function Header({setSearchItem, icon, category, setHide}){
    const showSideBar = ()=>{
        setHide(true)
    }
    return(
        <div className="Header">
            <h3>JD Fragrance</h3>
            <div className="spread">
                <div onClick={showSideBar} className="circular"><img src="https://cdn4.iconfinder.com/data/icons/mobile-aplication-web-development/842/nav-64.png" alt="Nav" /></div>
                <img className="invert" src={icon} alt={category} />
                <img src="https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/glasses_businessman_people_male_man_avatar_blonde-64.png" alt="profile" />
            </div>
            <div className="search">
                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-64.png" alt="search icon" />
                <input 
                    type="text" 
                    placeholder="Search"
                    onChange={(event) => {
                    setSearchItem(event.target.value);
                    }}
                />
            </div>
        </div>
    )
}
export default Header;