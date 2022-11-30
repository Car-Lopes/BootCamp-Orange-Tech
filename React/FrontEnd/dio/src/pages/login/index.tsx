import {MdEmail, MdLock} from 'react-icons/md'
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Button} from "../../components/Button";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";

import {api} from '../../services/api';
import {
    Column, 
    Container, 
    CriarText, 
    EsqueciText, 
    Row, 
    SubTitleLogin, 
    Title, 
    TitleLogin, 
    Wrapper } from './styles';
import { IFormData } from './types';

const schema = yup.object({
    email: yup.string().email('Email nao é valido').required('Campo obrigatorio'),
    password: yup.string().min(3,'minimo 3 caracteres').required('campo obrigatorio2'),
  }).required();

const Login = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData:IFormData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1){
                navigate ('/feed')
            } else {
                alert('Email ou senha invalido')
            }
        }catch{
            alert('Houve um erro, tente novamente')
        }
    };

   
    return(<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para voçê aprender com experts, dominar as principais tecnologias
                     e entar mais rápido nas empresas mais desejadas.
                </Title>
            </Column> 
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu Cadastro</TitleLogin>
                    <SubTitleLogin>Faça seu Login e make the change.</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder = "E-mail" leftIcon={<MdEmail/>}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder = "Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Entrar" variant="secondary" /*onClick={handleClickSingnIn}*/ type="submit" />
                    </form>
                    <Row>
                        <EsqueciText>Esqueci minha senha</EsqueciText>
                        <CriarText>Criar Conta</CriarText>
                    </Row>
                </Wrapper>
            </Column>    
        </Container>
    </>)
}

export { Login }

