import { Grid, CardHeader } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { SketchPicker, SwatchesPicker } from 'react-color'
import { DeleteForever } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addColorBox, deleteColorBox } from '../../store/colors/colorSlice';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Notification } from '../../components/Nofification';

let initialValue = {
  name: '',
  code: ''
}

export const Create = () => {

  const state = useSelector((generalState)=> generalState.colorReducer);
  const dispatch = useDispatch()
  const [color, setColor] = useState(initialValue)
  const [data, setData] = useState([])
  const [groupName, setGroupName] = useState()
  const navigate = useNavigate()
  const [show, setShow] = useState({ open: false, alertText: '' })

  const handleChangeComplete = (cl) => {
    setColor({ ...color, code: cl.hex })
  }
  const handleChangeName = (e) => {
    setColor({ ...color, name: e.target.value })
  }
  const handleColorSubmit = (e) => {
    if (data.length < 6) {
      setData((prevData) => [...prevData, color])
      setColor(initialValue)
    }else{
      setShow({ open: true, alertText: `Color must be 6` })
      setTimeout(() => {
          setShow({ open: false })
      }, 1000);
    }
  }
  const removeColor = (index) => {
    setData(data.filter((item, i) => i !== index));
  };

  const handleGroupName=(e)=>{
    setGroupName(e.target.value)
  }

  const handleSubmit  =(e)=>{
    e.preventDefault()
    const colorGroup = {
      name: groupName,
      data,
      id: Math.floor((Math.random()*100) + 1)
    }
    dispatch(addColorBox(colorGroup))
    setGroupName()
    navigate("/")

  }

  const disabledSave = !groupName || data.length <6

  return (
    <>
    <Header />

      <Grid container justify="center" spacing={1} style={{paddingTop:50}}>
        <Grid item md={6}>
          <div className='colorForm'>
            <label htmlFor='name'>Color name </label>
            <input onChange={handleChangeName} type='text' value={color.name} name='name' id='name' placeholder='Color name' className='colorInput' />
            <label htmlFor='code'>Color code </label>
            <SwatchesPicker onChangeComplete={handleChangeComplete} className='colorPicker' />
            <input type='text' id='code' name='code' placeholder='Color code' className='colorInput' value={color.code} />
            <button className='btnForm' type='button' onClick={handleColorSubmit} >Add Color</button>
          </div>
        </Grid>
        <Grid item md={6}>
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

          <form className='colorForm' >
            <label htmlFor='groupName'>Group Name</label>
            <input type='text' id='groupName' name='groupName' value={groupName} onChange={handleGroupName} placeholder='Group Name' className='colorInput' />
            <button className={disabledSave ? 'btnForm disabledBtn' : 'btnForm'} onClick={handleSubmit} disabled={disabledSave}>Save</button>
          </form>
        </Grid>
      </Grid>

      <Notification show={show} />
    </>
  )
}
