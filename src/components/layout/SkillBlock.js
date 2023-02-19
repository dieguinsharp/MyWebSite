import styles from './SkillBlock.module.css'

function SkillBlock({src, text, isNotImage}){
    return (
        <div className={styles.block}>
                {isNotImage ? (
                    src
                ) : ( 
                    <img src={src} />
                )}           
            <p>{text}</p>
        </div>
    )
}

export default SkillBlock;