import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'

import { 
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture } from './styles'

const Card = () => {
    return(
        <CardContainer>
            <ImageBackground src="https://play-lh.googleusercontent.com/ARhIgOVW2qN3zKv1i6GqQNyOBR5okA5QaidO5NjZ2fT7jaBMa8BLI1yMOh2JSf15Sjk"/>
            <Content>
                <UserInfo>
                    <UserPicture src="https://avatars.githubusercontent.com/u/108474694?v=4"/>
                    <div>
                        <h4>Carlos Lopes</h4>
                        <p>Há 8 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto curso HTML e CSS no bootcamp dio Orange Tech ...<strong>Saiba Mais</strong> </p>
                </PostInfo>
                <HasInfo>
                    <h4>#HTML #CSS #JavaCript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </HasInfo>
            </Content>
        </CardContainer>
    )
}     

export {Card}