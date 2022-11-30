import {Link} from 'react-router-dom';
import bannerImage from '../../assets/banner.png'
import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Card} from "../../components/Card";
import {UserInfo} from "../../components/UserInfo";

import {Container, Column, Title, TitleHighlight} from './styles';

const Feed = () => {
    return(<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
                <Card /> 
            </Column> 
            <Column flex={1}>
                <TitleHighlight># RANCKING TOP 5 DA SEMANA</TitleHighlight>
                <UserInfo percentual={80} nome="Carlos Lopes" image="https://avatars.githubusercontent.com/u/108474694?v=4"/>
                <UserInfo percentual={75} nome="Carlos Lopes" image="https://avatars.githubusercontent.com/u/108474694?v=4"/>
                <UserInfo percentual={50} nome="Carlos Lopes" image="https://avatars.githubusercontent.com/u/108474694?v=4"/>
                <UserInfo percentual={35} nome="Carlos Lopes" image="https://avatars.githubusercontent.com/u/108474694?v=4"/>
                <UserInfo percentual={10} nome="Carlos Lopes" image="https://avatars.githubusercontent.com/u/108474694?v=4"/>
            </Column>
        </Container>
    </>)
}

export {Feed}

// <Button title="Teste 1" />
// <Button variant="secondary" title="Teste 2" />
// <Link to="/login">Fazer login</Link>