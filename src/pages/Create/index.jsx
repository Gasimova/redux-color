import { FormControl, FormHelperText, InputLabel, Input, Grid, CardHeader, CardContent, TextField, CardActions, Button } from '@mui/material'
import { Field, Form } from 'formik'
import React from 'react'

// const useStyle = makeStyles((theme) => ({
//   padding: {
//     padding: theme.spacing(3),
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }))

export const Create = () => {
  // const classes = useStyle()

  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <>
      <h1>Create New Color Box</h1>

      <Grid container justify="center" spacing={1}>
        <Grid item md={6}>
          <CardHeader title="REGISTER FORM"></CardHeader>
          <Form>
                  <CardContent>
                    <Grid item container spacing={1} justify="center">
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="First Name"
                          variant="outlined"
                          fullWidth
                          name="firstName"
                          // value={values.firstName}
                          component={TextField}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={6}>
                        <Field
                          label="Last Name"
                          variant="outlined"
                          fullWidth
                          name="lastName"
                          // value={values.lastName}
                          component={TextField}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Button
                      // disabled={!dirty || !isValid}
                      variant="contained"
                      color="primary"
                      type="Submit"
                      >
                      REGISTER
                    </Button>
                  </CardActions>
                </Form>
        </Grid>
      </Grid>
    </>
  )
}
