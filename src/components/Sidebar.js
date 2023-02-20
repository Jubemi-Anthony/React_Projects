function Sidebar({hide, setHide}){

    const hideSideBar = ()=>{
        setHide(false)
    }
    return(
        <div className="Sidebar" id={hide === false ? "left" : ""}>
            <img onClick={hideSideBar} src="https://cdn0.iconfinder.com/data/icons/octicons/1024/x-64.png" alt="x"/>
        </div>
    )
}
export default Sidebar;