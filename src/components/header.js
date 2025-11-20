import './header.css'
import styles from './header.module.css'


function Header()
{

    const myStyle={
        color:"blue",
        backgroundColor:"yellow",
        padding:"10px",
        fontFamily:"Arial",
       
    };
    return(
    <>
        {/* <h1 style={myStyle}>Hello styling</h1> */}
        <h1 className={styles.bigblue}>Hello styling</h1>
        <p>add little style</p>

    </>
    );
}


export default Header;