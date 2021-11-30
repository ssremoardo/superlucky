import React from 'react';
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
import Auditoria from '../Auditoria'

function Home() {
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
                        <LabelInfoEvent>Mamonas - #1245454 - 25/10/2021</LabelInfoEvent>
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
                        <LabelInfoEvent>Mamonas - #1245454 - 25/10/2021</LabelInfoEvent>
                        <Button>Boa sorte</Button>
                        <CountClock>15:05:45</CountClock>
                    </ElementInfoEvent>
                    <LegendStatus>Ativo</LegendStatus>
                </ContainerInfoEvent>
            </ContainerBlockInfo>
        </Container>
    );
}

export default Home;