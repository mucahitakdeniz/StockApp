import { Form } from "formik";
import React from "react";
//import { object, string } from "yup";


const RegisterForm = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="User Name"
            name="user_name"
            id="userName"
            type="text"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.user_name}
            error={touched.user_name && Boolean(errors.user_name)}
            helperText={errors.user_name}
          />
          <TextField
            label="First Name"
            name="first_name"
            id="firstName"
            type="text"
            variant="outlined"
            value={values.first_name}
            error={touched.first_name && Boolean(errors.first_name)}
            helperText={errors.first_name}
          />
          <TextField
            label="Last Name"
            name="last_name"
            id="last_name"
            type="text"
            variant="outlined"
            value={values.last_name}
            error={touched.last_name && Boolean(errors.last_name)}
            helperText={errors.last_name}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={errors.password}
          />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
