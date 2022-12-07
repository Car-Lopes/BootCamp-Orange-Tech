import {MdEmail, MdLock, MdOutlineManageSearch}  from 'react-icons/md';
import {useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {Header} from "../../components/Header";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";

import {api} from '../../services/api';

import { Container, 
         Column, 
         Title, 
         Wrapper, 
         TitleLogin, 
         SubTitleLogin,
         FazerLogin,
         Text,
         Row,FazerLogin1         } from './styles';

import { IFormData } from '../login/types';


const schema = yup.object({
email: yup.string().email('Email nao é valido').required('Campo obrigatorio'),
password: yup.string().min(3,'minimo 3 caracteres').required('campo obrigatorio2'),
}).required();         
         

const Cadastro = () => {
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData:IFormData) => {
        try{
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if (data.length === 1){
                navigate ('/Login')
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
                    <TitleLogin>Comece Agora Grátis</TitleLogin>
                    <SubTitleLogin>Crie sua conta e make the change.</SubTitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="nome completo"  control={control} placeholder = "nome completo" leftIcon={<MdOutlineManageSearch/>} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder = "E-mail" leftIcon={<MdEmail/>}/>
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder = "Senha" type="password" leftIcon={<MdLock/>}/>
                        <Button title="Criar minha conta" variant="secondary" /*onClick={handleClickSingnIn}*/ type="submit" />
                    </form> 
                    <Row>
                        <Text>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
                    </Row>   
                    <Row> 
                        <FazerLogin>Já tenho conta. <FazerLogin1>Fazer login</FazerLogin1>  </FazerLogin>  
                    </Row>
                </Wrapper>
            </Column>    
        </Container>
    </>)       
}

export { Cadastro }