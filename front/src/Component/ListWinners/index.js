import React from 'react'
import { Container, TitleLabel, ContainerInfoWinner, DescInfo, ImgProfile } from './styles'
import profile from '../../assets/profile.png'
import profile_2 from '../../assets/profile_2.png'
import profile_3 from '../../assets/profile_3.png'

function ListWinners() {
    return (
        <Container>
            <TitleLabel>LISTA DE GANHADORES - MAMONAS - #1245454 - 25/10/2021 </TitleLabel>
            <ContainerInfoWinner>
                <DescInfo>1º</DescInfo>
                <DescInfo> <ImgProfile src={profile} /> </DescInfo>
                <DescInfo> Carlos da fonseca </DescInfo>
                <DescInfo> (**) ******1547 </DescInfo>
                <DescInfo> #4545123188 </DescInfo>
            </ContainerInfoWinner>
            <ContainerInfoWinner>
                <DescInfo>2º</DescInfo>
                <DescInfo> <ImgProfile src={profile_2} /> </DescInfo>
                <DescInfo> Flavinho Alves </DescInfo>
                <DescInfo> (**) ******1102 </DescInfo>
                <DescInfo> #7459847476 </DescInfo>
            </ContainerInfoWinner>
            <ContainerInfoWinner>
                <DescInfo>3º</DescInfo>
                <DescInfo> <ImgProfile src={profile_3} /> </DescInfo>
                <DescInfo> Fulano Alves </DescInfo>
                <DescInfo> (**) ******7020 </DescInfo>
                <DescInfo> #7845126547 </DescInfo>
            </ContainerInfoWinner>
            <ContainerInfoWinner>
                <DescInfo>3º</DescInfo>
                <DescInfo> <ImgProfile src={profile_3} /> </DescInfo>
                <DescInfo> Fulano Alves </DescInfo>
                <DescInfo> (**) ******7020 </DescInfo>
                <DescInfo> #7845126547 </DescInfo>
            </ContainerInfoWinner>
            <ContainerInfoWinner>
                <DescInfo>3º</DescInfo>
                <DescInfo> <ImgProfile src={profile_3} /> </DescInfo>
                <DescInfo> Fulano Alves </DescInfo>
                <DescInfo> (**) ******7020 </DescInfo>
                <DescInfo> #7845126547 </DescInfo>
            </ContainerInfoWinner>
            <ContainerInfoWinner>
                <DescInfo>3º</DescInfo>
                <DescInfo> <ImgProfile src={profile_3} /> </DescInfo>
                <DescInfo> Fulano Alves </DescInfo>
                <DescInfo> (**) ******7020 </DescInfo>
                <DescInfo> #7845126547 </DescInfo>
            </ContainerInfoWinner>
            <ContainerInfoWinner>
                <DescInfo>3º</DescInfo>
                <DescInfo> <ImgProfile src={profile_3} /> </DescInfo>
                <DescInfo> Fulano Alves </DescInfo>
                <DescInfo> (**) ******7020 </DescInfo>
                <DescInfo> #7845126547 </DescInfo>
            </ContainerInfoWinner>     

        </Container>
    )
}

export default ListWinners;