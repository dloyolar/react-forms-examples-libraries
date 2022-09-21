import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { Field, useField } from 'formik';
import { FormikErrorMsg } from './FormikErrorMsg';

export const InputField = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field name={name} as={Input} />
      <FormikErrorMsg name={name} />
    </FormControl>
  );
};
