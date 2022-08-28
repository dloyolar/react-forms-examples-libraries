import { Button, FormLabel, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { forwardRef, useState } from 'react';

export const InputPassword = forwardRef((props, ref) => {
  const { showHideButton, ...restProps } = props;
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <FormLabel>{props.label}</FormLabel>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          ref={ref}
          placeholder={props.placeholder}
          {...restProps}
        />

        {showHideButton && (
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </>
  );
});
