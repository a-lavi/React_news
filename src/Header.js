import{Link} from "react-router-dom"
function Header(){
    return(
        <div className="headerflex">
        <Link to="/"><p className="headernav"> Home </p></Link>
        <a><p className="headernav"> News </p></a>
        <a><p className="headernav"> About</p></a>
        </div>
    )
}
export default Header;