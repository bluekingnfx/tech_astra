import Styles from './Button.module.css'


const Nav_Button = ({
    innerText,
    width,
    cusStyles
}:{
    innerText: string,
    width: number,
    cusStyles?: React.CSSProperties
}) => {
    return (
        <div>
            <button className={Styles.container} style={{
                ...cusStyles,
                width: width
            }}>
                {innerText}
            </button>
        </div>
    )
}

export default Nav_Button