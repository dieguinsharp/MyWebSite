import {FaFacebook, FaInstagram, FaLinkedin, FaSteam, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.list}>
                <a href='https://www.facebook.com/perfectliskov/' target="_blank">
                    <FaFacebook />
                </a>
                <a href='https://www.instagram.com/dieguito.dzs/' target="_blank">
                    <FaInstagram />
                </a>
                <a href='https://www.linkedin.com/in/diego-soareslskv/' target="_blank">
                    <FaLinkedin />
                </a>
                <a href='https://steamcommunity.com/id/diegokeltec/' target="_blank">
                    <FaSteam />
                </a>
                <a href='https://github.com/dieguinsharp/' target="_blank">
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}

export default Footer;