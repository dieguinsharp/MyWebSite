import styles from './Honorable.module.css'

function Honorable({src, title, content}){
    return (
        <div className={styles.content}>
            <div>
                <img src={src} />
            </div>
            <div>
                <h1>{title}</h1>
                {content}
            </div>
        </div>
    )
}

export default Honorable;