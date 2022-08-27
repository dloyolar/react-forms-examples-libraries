import { ErrorMessage } from 'formik';

import { FormErrorMessage } from '@chakra-ui/react';

export const FormikErrorMsg = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errorMsg) => <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </ErrorMessage>
  );
};
