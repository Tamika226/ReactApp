import s from './style.module.css'

const Layout = ({title, description, id, hideBackground = false}) => {

    const styleRoot = hideBackground ? {backgroundImage:'none'}:{};
    return (

        <section className={s.root} id={id} style={styleRoot} >
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={s.desc.full}>
                        <p>{description}</p>
                    </div>
                </article>
            </div>
        </section>

    )
}

export default Layout;