import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FormikErrorMsg } from './FormikErrorMsg';
import { PasswordInput } from './FormikPasswordInput';
import { InputField } from './InputField';

export const FormikForm = () => {
  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
    terms: false,
    role: '',
  };

  const validations = Yup.object({
    firstName: Yup.string().max(15, 'Must be have 15 characters or less').required('Required'),
    lastName: Yup.string().max(15, 'Must be have 15 characters or less').required('Required'),
    email: Yup.string().email('Must be an valid email').required('Required'),
    password1: Yup.string().min(6, 'Must be have 6 character at least').required('Required'),
    password2: Yup.string()
      .oneOf([Yup.ref('password1')], 'Passwords must match')
      .required('Required'),
    terms: Yup.boolean().isTrue('Must be accept the terms and conditions').required(),
    role: Yup.string()
      .notOneOf(['business-consultant'], 'Oops, you cant select this option')
      .required('Required'),
  });

  return (
    <Box p={4} w="sm">
      <Text fontSize="2xl" align="center">
        Formik Version
      </Text>

      <Formik
        initialValues={initialForm}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 5));
        }}
        validationSchema={validations}
      >
        {({ getFieldProps, errors, touched }) => (
          <Form>
            <Stack spacing="5">
              <InputField name="firstName" label="First Name" />

              <InputField name="lastName" label="Last Name" />

              <InputField name="email" label="Email" />

              <FormControl isInvalid={!!errors.password1 && touched.password1}>
                <PasswordInput label="Password" name="password1" />
              </FormControl>

              <FormControl isInvalid={!!errors.password2 && touched.password2}>
                <PasswordInput
                  label="Password"
                  name="password2"
                  placeholder="Repeat password"
                  showHideButton={false}
                />
              </FormControl>

              <FormControl isInvalid={!!errors.role && touched.role}>
                <FormLabel>Select your role</FormLabel>
                <Select placeholder="Select option" {...getFieldProps('role')}>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="business-consultant">Business Consultant</option>
                </Select>
                <FormikErrorMsg name="role" />
              </FormControl>

              <FormControl isInvalid={!!errors.terms && touched.terms}>
                <Checkbox {...getFieldProps('terms')}>Terms & Conditions</Checkbox>
                <FormikErrorMsg name="terms" />
              </FormControl>

              <Button colorScheme="blue" type="submit">
                Create
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
