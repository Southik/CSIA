import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { TextField, Grid, Typography } from '@material-ui/core';

const FormInput = ({ name, label }) => {
  const { control } = useFormContext();

  return (
    //Honestly the most useful source: https://stackoverflow.com/questions/66957809/typeerror-props-render-is-not-a-function-react-hook-form
    <Grid item xs={12} sm={6}>

      <Controller
        control={control}
        name={name}
        render={({ field: { ref, ...field }, fieldState }) => (
          <TextField
            fullWidth
            name={name}
            {...field}
            inputRef={ref}
            label={label}
            required
            defaultValue=""
          />
        )}

      />
    </Grid>
  );
}

export default FormInput

