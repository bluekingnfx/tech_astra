

const NavBarText = ({
    text
}:{
    text:string
}) => {
    return <>
        <div style={{
            fontFamily: "monospace",
            fontSize: "16px",
            color: "#333"
        }}>
            {text}
        </div>
        <div style={{
            color: "#333"
        }}>
            +
        </div>
    </>
}

export default NavBarText