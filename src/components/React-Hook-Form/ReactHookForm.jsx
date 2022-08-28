import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';

import { InputPassword } from './InputPassword';

export const ReactHookForm = () => {
  const validations = Yup.object({
    firstName: Yup.string().max(15, 'Must be have 15 characters or less').required('Required'),
    lastName: Yup.string().max(15, 'Must be have 15 characters or less').required('Required'),
    email: Yup.string().email('Must be an valid email').required('Required'),
    password1: Yup.string().required('Required').min(6, 'Must be have 6 character at least'),
    password2: Yup.string()
      .oneOf([Yup.ref('password1')], 'Passwords must match')
      .required('Required'),
    terms: Yup.boolean().isTrue('Must be accept the terms and conditions').required(),
    role: Yup.string()
      .notOneOf(['business-consultant'], 'Oops, you cant select this option')
      .required('Required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password1: '',
      password2: '',
      terms: false,
      role: '',
    },
    resolver: yupResolver(validations),
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 5));
  };

  return (
    <Box p={4} w="sm">
      <Text fontSize="2xl" align="center">
        React Hook Form Version
      </Text>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="5">
          <FormControl isInvalid={!!errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Input {...register('firstName')} />

            {errors.firstName?.message && (
              <FormErrorMessage>{errors.firstName.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Input {...register('lastName')} />

            {errors.lastName?.message && (
              <FormErrorMessage>{errors.lastName.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Input {...register('email')} />

            {errors.email?.message && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={!!errors.password1}>
            <InputPassword label="Password" showHideButton={true} {...register('password1')} />

            {errors.password1?.message && (
              <FormErrorMessage>{errors.password1.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.password2}>
            <InputPassword label="Repeat Password" {...register('password2')} />

            {errors.password2?.message && (
              <FormErrorMessage>{errors.password2.message}</FormErrorMessage>
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.role}>
            <FormLabel>Select your role</FormLabel>
            <Select placeholder="Select option" {...register('role')}>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="business-consultant">Business Consultant</option>
            </Select>

            {errors.role?.message && <FormErrorMessage>{errors.role.message}</FormErrorMessage>}
          </FormControl>

          <FormControl isInvalid={!!errors.terms}>
            <Checkbox {...register('terms')}>Terms & Conditions</Checkbox>

            {errors.terms?.message && <FormErrorMessage>{errors.terms.message}</FormErrorMessage>}
          </FormControl>

          <Button colorScheme="whatsapp" type="submit">
            Create
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
