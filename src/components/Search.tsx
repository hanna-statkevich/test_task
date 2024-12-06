import { Box, Button, Grid, TextField } from "@mui/material";
import { Formik } from "formik";

interface IProps {
  onSubmit: (values: { search: string; }) => Promise<void>
}

const SearchBar = ({onSubmit}: IProps) => {

  return (
    <Box sx={{
      width: '500px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Grid container direction={"column"} spacing={2}>
        <Formik initialValues={{search: ''}} onSubmit={onSubmit}>
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
            <>
              <Grid item>
                <TextField
                  fullWidth
                  name="search"
                  label="Search"
                  value={values.search}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.search && Boolean(errors.search)}
                  helperText={touched.search && errors.search}
                />
              </Grid>
              <Grid item>
                <Button color="primary" variant="contained" fullWidth type="submit" disabled={isSubmitting}
                        onClick={() => handleSubmit()}>
                  Submit
                </Button>
              </Grid>
            </>
          )}
        </Formik>
      </Grid>
    </Box>
  );
};

export default SearchBar;
