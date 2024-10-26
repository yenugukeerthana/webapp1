import { Link } from "react-router-dom";

const Header=()=>{
    return(
    //     <header style={{ backgroundColor: "lightblue" }}>
    //     <nav style={{
    //         display: "flex",
    //         justifyContent: "space-between", 
    //         alignItems: "center",             
    //         padding: "10px 20px"
    //     }}>
    //         <div style={{ display: "flex" }}> {/* Left-aligned links */}
    //             <Link to="/help" style={{ padding: '0 20px' }}>Help</Link>
    //             <Link to="/about" style={{ padding: '0 20px' }}>About</Link>
    //             <Link to="/carrers" style={{ padding: '0 20px' }}>Carrers</Link>
    //         </div>
    //         <Link to="/profile" style={{ padding: '0 20px' }}>Profile</Link> {/* Right-aligned link */}
    //     </nav>
    // </header>
        <header style={{backgroundColor: "lightblue"}}>
            <nav style={{display:"flex", justifyContent: "space-between"}}>
            <div style={{ display: "flex" }}>
                    <Link to="/help" style={{ padding: '20px' }}>Help</Link>
                    <Link to="/about" style={{ padding: '20px'}}>About</Link>
                    <Link to="/carrers" style={{ padding: '20px' }}>Carrers</Link>
            </div>
                    <Link to="/profile" style={{ padding: '20px', float:"right"}}>Profile</Link>
            </nav>
        </header>
    )
}
export default Header;