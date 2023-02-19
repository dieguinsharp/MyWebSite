import {Link} from 'react-router-dom'
import Container from '../layout/Container'
import styles from './NavBar.module.css'
import img from '../../img/myimg.jpg'

function NavBar(){
    return (
        <div className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/experience">Experiência</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/honorablemention">Menção Honrosa</Link>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default NavBar;