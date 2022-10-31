import React from 'react';
import VerticalMenu from '../../components/VerticalMenu';
import * as G from "../../styles/global"
import Header from '../../components/Header';

const Equipes = () => {
    return (
        <G.Content>
            <VerticalMenu />
            <G.Main>
                <Header />
                <G.Section>
                    <p>Equipes</p>
                </G.Section>
            </G.Main>
        </G.Content>
    )
}

export default Equipes;