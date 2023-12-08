import { Grid, CardHeader } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { SketchPicker, SwatchesPicker } from 'react-color'
import { DeleteForever } from '@mui/icons-material';

let initialValue = {
  name: '',
  code: ''
}

export const Create = () => {

  const [color, setColor] = useState(initialValue)
  const [data, setData] = useState([])

  const formik = useFormik({
    initialValues: {
      title: "",
      body: ""
    },
    // validate: validateInputs,
    onSubmit: (values) => {
      // addPostFetch(values)
      formik.handleReset()
    }
  })

  const handleChangeComplete = (cl) => {
    setColor({ ...color, code: cl.hex })
  }
  const handleChangeName = (e) => {
    setColor({ ...color, name: e.target.value })
  }
  const handleFormSubmit = (e) => {
    if (data.length < 6) {
      setData((prevData) => [...prevData, color])
      setColor(initialValue)
    }else{
       console.log('data coxdu');
    }
  }

  const removeColor = (index) => {
    setData(data.filter((item, i) => i !== index));
  };


  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: 50 }}>Create New Color Box</h1>

      <Grid container justify="center" spacing={1}>
        <Grid item md={6}>
          <CardHeader title="REGISTER FORM"></CardHeader>
          <div className='colorForm'>
            <label htmlFor='name'>Color name </label>
            <input onChange={handleChangeName} type='text' value={color.name} name='name' id='name' placeholder='Color name' className='colorInput' />
            <label htmlFor='code'>Color code </label>
            <SwatchesPicker onChangeComplete={handleChangeComplete} className='colorPicker' />
            <input type='text' id='code' name='code' placeholder='Color code' className='colorInput' value={color.code} />
            <button className='btnForm' type='button'  onClick={handleFormSubmit} >Add Color</button>
          </div>
        </Grid>
        <Grid item md={6}>
          <CardHeader title="REGISTER FORM"></CardHeader>

          <div className='colorDiv'>
            {
              data?.map((item, i) => {
                return <div className='color' style={{ backgroundColor: item.code, width: 30 }}>
                  <div className='colorBody'>
                    <span className='color_name'>{item.name}</span>
                    <DeleteForever className='delete' onClick={()=>removeColor(i)} />
                  </div>
                </div>
              })
            }
            {
              data.length <= 0 && <h3>Please select colors</h3>
            }
          </div>

          <form onSubmit={formik.handleSubmit} className='colorForm'>
            <label htmlFor='groupName'>Group Name</label>
            <input type='text' id='groupName' name='groupName' placeholder='Group Name' className='colorInput' />
            <button className='btnForm' type='submit'>Save</button>
          </form>
        </Grid>
      </Grid>
    </>
  )
}
