import { Box, Center, HStack, StackDivider } from '@chakra-ui/react';
import { FormikForm } from './components/Formik/FormikForm';
import { ReactHookForm } from './components/React-Hook-Form/ReactHookForm';

function App() {
  return (
    <Center h="100vh">
      <HStack divider={<StackDivider borderColor="orange.400" />}>
        <Box>
          <FormikForm />
        </Box>
        <Box>
          <ReactHookForm />
        </Box>
      </HStack>
    </Center>
  );
}

export default App;
