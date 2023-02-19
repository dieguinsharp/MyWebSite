import styles from './Experience.module.css'
import { FaMicrosoft } from 'react-icons/fa';
import liskov from '../../img/liskov.jpeg';
import csharp from '../../img/csharp.png';
import rest from '../../img/rest.png';
import sql from '../../img/sql.png';
import xf from '../../img/xf.png';
import xaml from '../../img/xaml.png';
import react from '../../img/react.png';
import SkillBlock from '../layout/SkillBlock';

function Experience(){
    return (
        <div className={styles.content}>
            <SkillBlock 
                src={<FaMicrosoft />}
                isNotImage="1"
                text="Independente de qual stack escolher, busco sempre ficar atualizado no 'Microsoft Way', ligado em melhorias de framework, 
                atualizações e principalmente novas versões do dotnet e testes de performance."/>
            <SkillBlock 
                src={csharp}
                text="Mais de 3 anos aplicando o csharp como linguagem padrão e buscando sempre melhorar em qualidae do código e performance."/>
            <SkillBlock 
                src={xf}
                text="Mais de 1 ano atuando como dev mobile usando Xamarin Forms, trabalhando principalmente com o padrão MVVM criando aplicações multiplataforma."/>
            <SkillBlock 
                src={xaml}
                text="Todo o frontend que trabalhei foi estudado e aplicado como XAML, criando telas ricas em XPF e Xamarin e usando o MVVM para o uso de Bindings das propriedades."/>
            <SkillBlock 
                src={react}
                text="Comecei recentemente os estudos em React, não muito o que falar, ainda no começo mas esse site que vos lê foi feito com ele :D"/>
            <SkillBlock 
                src={sql}
                text="Toda a parte de armazenamento eu escolhi estudar o SQL e SQLite, criando VIEWS, TRIGGERS e PROCEDURES para saciar n problemas. Mais de dois anos estudando e aplicando isso nos desafios diários."/>
            <SkillBlock 
                src={rest}
                text="Todo o trabalho sob backend eu escolhi estudar e aplicar API Rests respeitando fortemente a arquitetura em si e utilizando o Entity Framework Core como ORM. Mais de dois anos com essa arquitetura no trabalho."/>
        </div>
    )
}

export default Experience;