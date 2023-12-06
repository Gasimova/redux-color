import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

export const ColorBox = ({itemData}) => {
    return (
        <>
            <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
                {itemData?.map((item) => (
                    <ImageListItem key={item.img}>
                        {/* <img
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=161&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        /> */}

<span>{item.key}</span>

                    </ImageListItem>
                ))}
            </ImageList>
        </>
    )
}
