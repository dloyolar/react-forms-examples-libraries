import { Box, Center, HStack, StackDivider, Text } from '@chakra-ui/react';
import { FormikForm } from './components/FormikForm';

function App() {
  return (
    <Center h="100vh">
      <HStack divider={<StackDivider borderColor="orange.400" />}>
        <Box>
          <FormikForm />
        </Box>
        <Box>
          <Text fontSize="2xl" align="center">
            React Hook Form Version (WIP)
          </Text>
        </Box>
      </HStack>
    </Center>
  );
}

export default App;
