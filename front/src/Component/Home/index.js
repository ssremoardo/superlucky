import React, { useState } from 'react';
import logo from '../../assets/chat.png'
import phone from '../../assets/celular.jpeg'
import gel from '../../assets/gel.jpeg'
import eno from '../../assets/eno.jpeg'

import {
    Container,
    ImgLogo,
    CountClock,
    DiplayHeader,
    ContainerBlockInfo,
    ContainerInfoEvent,
    LabelInfoEvent,
    ElementInfoEvent,
    ElementInfoProduct,
    Button,
    DescInfoProduct,
    ContainerDisplayImageWithInfo,
    ImgProduct,
    LegendStatus
} from './styles';
import Auditoria from '../Search'
import api from '../../Services/Api'
import endpoint from '../../Services/Api/Endpoints/campaign'
import ListWinners from '../ListWinners';

function Home() {
    const [campaigns, setCampaigns] = useState([])
    const list = async () => {
        await api.get(endpoint.campaign).then((camp) => {
            setCampaigns(camp.data.data)
        })
    }
    return (
        <Container>
            <DiplayHeader >
                <ImgLogo src={logo} />
                <Auditoria />
            </DiplayHeader>
            <ContainerBlockInfo>
                <ContainerInfoEvent>
                    <ElementInfoProduct>
                        <ContainerDisplayImageWithInfo>
                            <DescInfoProduct> 1º</DescInfoProduct>
                            <ImgProduct src={phone} />
                            <DescInfoProduct>TELEFONE SAMSUNG 2G</DescInfoProduct>
                        </ContainerDisplayImageWithInfo>
                        <ContainerDisplayImageWithInfo>
                            <DescInfoProduct> 2º</DescInfoProduct>
                            <ImgProduct src={gel} />
                            <DescInfoProduct>GEL BOZANO BLUE</DescInfoProduct>
                        </ContainerDisplayImageWithInfo>
                        <ContainerDisplayImageWithInfo>
                            <DescInfoProduct> 3º</DescInfoProduct>
                            <ImgProduct src={eno} />
                            <DescInfoProduct>ENO EFERVECENTE 35g</DescInfoProduct>
                        </ContainerDisplayImageWithInfo>
                    </ElementInfoProduct>
                    <ElementInfoEvent>
                        <LabelInfoEvent>MAMONAS - #1245454 - 25/10/2021
                        </LabelInfoEvent>
                        <Button>Boa sorte</Button>
                        <CountClock>15:05:45</CountClock>
                    </ElementInfoEvent>
                    <LegendStatus>Ativo</LegendStatus>
                </ContainerInfoEvent>
            </ContainerBlockInfo>
            <ContainerBlockInfo>
                <ContainerInfoEvent>
                    <ElementInfoProduct>
                        <ContainerDisplayImageWithInfo>
                            <DescInfoProduct> 1º</DescInfoProduct>
                            <ImgProduct src={phone} />
                            <DescInfoProduct>Telefone samsung 2g</DescInfoProduct>
                        </ContainerDisplayImageWithInfo>
                        <ContainerDisplayImageWithInfo>
                            <DescInfoProduct> 2º</DescInfoProduct>
                            <ImgProduct src={gel} />
                            <DescInfoProduct>Gel bozano blue</DescInfoProduct>
                        </ContainerDisplayImageWithInfo>
                        <ContainerDisplayImageWithInfo>
                            <DescInfoProduct> 3º</DescInfoProduct>
                            <ImgProduct src={eno} />
                            <DescInfoProduct>Eno 35g</DescInfoProduct>
                        </ContainerDisplayImageWithInfo>
                    </ElementInfoProduct>
                    <ElementInfoEvent>
                        <LabelInfoEvent>FALAMANSA - #254147 - 25/10/2021</LabelInfoEvent>
                        <Button>Boa sorte</Button>
                        <CountClock>15:05:45</CountClock>
                    </ElementInfoEvent>
                    <LegendStatus>Ativo</LegendStatus>
                </ContainerInfoEvent>
            </ContainerBlockInfo>
            <ListWinners />
        </Container>
    );
}

export default Home;