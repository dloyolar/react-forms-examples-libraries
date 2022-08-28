import { Button, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useField } from 'formik';
import { useState } from 'react';
import { FormikErrorMsg } from './FormikErrorMsg';

export const PasswordInput = ({
  label,
  showHideButton = true,
  placeholder = 'Enter password',
  ...props
}) => {
  const [field] = useField(props);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          {...field}
          {...props}
        />
        {showHideButton && (
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <FormikErrorMsg name={props.name} />
    </>
  );
};
