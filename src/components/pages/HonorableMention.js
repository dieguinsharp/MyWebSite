import Honorable from '../layout/Honorable'
import rocklee from '../../img/rocklee.png'
import globinho from '../../img/globinho.png'
import bacardi from '../../img/bacardi.png'
import malphite from '../../img/malphite.png'

function HonorableMention(){

    const rockLeeText = (<p> ah, Lee... <br/> o que foi que eu fiz? <br/> olhe só pra você... <br/> nem está consciente e continua empenhado em mostrar ao mundo o que pode fazer <br/> (ele está nocauteado, tudo o que o mantém de pé é o poder de sua vontade) <br/> Lee... <br/> você já provou... <br/> você é um grande ninja... </p>)
    const globinhoText = (<p> por que ir embora? <br/> não entende o mau que fez ao desaparecer? <br/> os motivos eram nulos... <br/> pensaram apenas no lado político e acabaram com uma geração.</p>)
    const bacardiText = (<p> é tão bom... <br/> não sabe o quão bom é você com uma coca-cola, uma mesa de bar e uma porção de salgado. <br/> se faz mal a saúde? <br/> o que não faz? <br/> obrigado por exsitir.</p>)
    const malphiteText = (<p> é magnifico... <br/> um ser tão lindo e forte, porém o falta compreensão do meta. <br/> simplesmente o rei daquele lugar: <br/> a top lane. <br/> cadê seu rework? I don't know <br/> D U R O C O M O P E D R A.</p>)


    return (
        <div>
            <Honorable 
                src={rocklee}
                title='Rock Lee'
                content={rockLeeText}
            /> 
            <Honorable 
                src={globinho}
                title='TV Globinho'
                content={globinhoText}
            /> 
            <Honorable 
                src={bacardi}
                title='Bacardi'
                content={bacardiText}
            /> 
            <Honorable 
                src={malphite}
                title='Malphite'
                content={malphiteText}
            />
        </div>
    )
}

export default HonorableMention;