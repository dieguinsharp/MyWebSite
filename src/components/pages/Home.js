import styles from './Home.module.css'
import img from '../../img/myimg2.jpeg'
import desktop from '../../img/mydesktop.jpeg'
import {FaFacebook, FaInstagram, FaLinkedin, FaSteam} from 'react-icons/fa'

function Home(){
    return (
        <div className={styles.content}>
            <img className={styles.img} src={img}/>
            <h1>Olá, eu sou o Diego :D</h1>
            <div className={styles.card}>
                <h1>Um pouco de mim</h1>
                <p>
                    Vou ser rápido aqui, meu nome é Diego, tenho 20 anos e gosto de jogar bola e jogar CSGO. 
                    Há 3 anos atrás eu começava meus estudos para desenvolvedor .net, vendo sobre WPF, Xamarin, APIs e linguagens de banco, como o SQL Server. 
                    Após alguns meses focado consegui meu primeiro emprego fazendo um estágio como dev Xamarin (sem mesmo estar estudando kkkk) e apenas em 2022 que comecei minha graduação na área (ADS). 
                </p>
                <p>
                    Durante esses 3 longos anos eu me adaptei a aprender tudo na própria internet e convenhamos: é possível ficar muito bom apenas nisso. 
                    Hoje atualmente estou trabalhando em um produto de uma multinacional e estou curtindo muito pois a cada dia é um desafio diferente e é assim que gosto de passar meu tempo.
                    Eu estou em uma grande caminhada para se tornar um pleno backend e decidi dedicar esse ano a estudar esse lado magnifico das coisas.
                    Por enquanto é isso pessoas, minhas redes sociais está logo abaixo e obrigado por chegarem até aqui.
                </p>
            </div>
            <div className={styles.card}>
                <h1>Motivações</h1>
                <p>
                    Não sei muito sobre motivação mas vejo que só preciso de tempo até poder realizar tudo que ainda tenho em mente e tenho certeza que fiz a escolha certa ao ingressar nesse mundo das "telinhas", obrigado a todos que me ajudaram  até aqui e especialmente a esse indivíduo que contribuiu de forma direta e/ou indireta para eu estar aqui: <a href='https://www.facebook.com/petvetbr' target="_blank">Fernando Lage Bastos</a>
                </p>
            </div>
        </div>
    )
}

export default Home;