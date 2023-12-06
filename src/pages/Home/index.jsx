import React from 'react'
import { ColorBox } from '../../components/ColorBox'
import { Header } from '../../components/Header'

export const Home = () => {

    const itemData = [{color:'red'}, {color:'green'}]
    return (
        <>
            <Header />
            <ColorBox itemData={itemData} />
        </>
    )
}
