import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react';
import React from 'react';

function Profile() {
  return (
    <Box 
      height="100vh" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      bg="gray.50"
    >
      <Card 
        bg="black" 
        p={12} 
        shadow="lg" 
        borderRadius="md" 
        textAlign="center"
        maxW="4xl"
      >
        <CardBody>
          <Heading size="4xl" mb={6} color="white">
            ¡CLASE CONFIRMADA!
          </Heading>
          <Text fontSize="xl" mb={20} color="gray.300">
            Recibirás tu clave de acceso a la clase en tu correo electrónico.
          </Text>
          <Text fontSize="2xl" color="pink.300">
            Gracias por aprender en Unifocus.
          </Text>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Profile;
