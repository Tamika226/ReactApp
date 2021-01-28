import style from './style.module.css'

const Header = ({title, description}) =>{
    return(
        <header className={style.root} title={title} description={description}>
            <div className={style.forest}></div>
            <div className={style.container}>
                <h1>This is title</h1>
                <p>This is Description!</p>
            </div>
        </header>
    )
}

export default Header;