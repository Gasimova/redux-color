import React from 'react'
import { useSelector } from 'react-redux'
import { ColorBox } from '../../components/ColorBox'
import { Header } from '../../components/Header'

export const Home = () => {

    const colors = useSelector((item)=>item.colorReducer.colors)

    return (
        <>
            <Header />
            {
                colors.length > 0 ? <ColorBox colors={colors} />  : <div style={{display:'flex', justifyContent:'center'}}><img src='https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg' /></div>
            }
        </>
    )
}
