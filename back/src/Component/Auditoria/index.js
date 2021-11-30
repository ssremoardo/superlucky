import React from 'react';

import {
    Container,
    ContainerDisplaySelect,
    LabelSelect,
    Select,
    ContainerDisplayTextWithSelect
} from './styles';

function Auditoria() {
    return (
        <ContainerDisplaySelect>
            {/* <ContainerDisplayTextWithSelect>
                <LabelSelect>Data do sorteito</LabelSelect>
                <Select>
                    <option value={0}>Selecione uma data de sorteio</option>
                    <option >10/12/2021</option>
                    <option>20/04/2021</option>
                    <option>05/02/2020</option>
                    <option >01/02/2020</option>
                </Select>
            </ContainerDisplayTextWithSelect> */}
            <ContainerDisplayTextWithSelect>
                <Select>
                    <option value={0}>Selecione uma campanha</option>
                    <option >Campanha teste</option>
                    <option >Campanha mamonas</option>
                </Select>
            </ContainerDisplayTextWithSelect>
          {/*   <ContainerDisplayTextWithSelect>
                <LabelSelect>Nome do ganhador</LabelSelect>
                <Select>
                    <option value={0}>Selecione um ganhador</option>
                    <option >Ganhador teste</option>
                    <option >Ganhador mamonas</option>
                </Select>
            </ContainerDisplayTextWithSelect> */}
        </ContainerDisplaySelect>
    )
}

export default Auditoria;