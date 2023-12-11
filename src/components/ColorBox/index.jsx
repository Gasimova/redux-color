import { DeleteForever } from '@mui/icons-material';
import { Box, ImageList, ImageListItem } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteColorBox } from '../../store/colors/colorSlice';
import { Notification } from '../Nofification';

export const ColorBox = ({ colors }) => {
    const [show, setShow] = useState({ open: false, alertText: '' })

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code);
        setShow({ open: true, alertText: `${code} copied to clipboard` })
        setTimeout(() => {
            setShow({ open: false })
        }, 1000);
    }

    const dispatch = useDispatch()
    const handleDelete = (item) => {
        dispatch(deleteColorBox(item))
        setShow({ open: true, alertText: `This color box removed` })
        setTimeout(() => {
            setShow({ open: false })
        }, 1000);
    }

    return (
        <div className='homeColorBox'>
            {colors?.map((item, index) => (
                <Box sx={{ boxShadow: 3 }} style={{ padding: 35 }} key={index}>
                    <div className='cardHeader'>
                        <span>{item?.name}</span>
                        <span onClick={() => handleDelete(item.id)}> <DeleteForever className='delete' /></span>
                    </div>
                    <ImageList sx={{ width: 200, height: 150 }} variant="woven" cols={3} gap={8}>
                        {item?.data?.map((color) => {
                            return <ImageListItem onClick={() => handleCopy(color.code)} sx={{ boxShadow: 1 }} key={item.img} style={{ backgroundColor: color.code, width: '100%', height: '100%', cursor: 'pointer' }}>
                                <span className='text'>{color.name}</span>
                            </ImageListItem>
                        })}
                    </ImageList>
                </Box>

            ))}
            <Notification show={show} />
        </div>
    )
}
