//functional component
function Header(){

    let menus=["Home","About","Contact","Services","Portfolio"];
    return(
        <>
        <h1>Header</h1>
        <ul>
            {
                menus.map(
                    (element)=><li>{element}</li>
                )
            }
        </ul>
        </>
    )
}
export default Header;