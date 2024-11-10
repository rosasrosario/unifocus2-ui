import { Box, Button, Card, CardBody, Heading, Text, HStack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Confirm({ materia, hora }) {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/'); // Cambia '/' al path de tu página de inicio si es diferente
  };

  const handleAccept = () => {
    // Navegar a /profile y pasar las clases seleccionadas
    navigate('/profile', { state: { clases: [{ materia, hora }] } });
  };

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
            Procede al pago
          </Heading>
          <Text fontSize="3xl" mb={4} color="gray.300" textAlign="left">
            Deposita el importe de $100 MXN a la siguiente cuenta:
          </Text>
          <Text fontSize="2xl" mb={2} color="gray.300" textAlign="left">
            PERSONAL UNIFOCUS
          </Text>
          <Text fontSize="xl" mb={2} color="gray.300" textAlign="left">
            BANCO BBVA
          </Text>

          <Text fontSize="2xl" mb={2} color="gray.300" textAlign="left">
            NUMERO DE CUENTA
          </Text>
          <Text fontSize="xl" mb={2} color="gray.300" textAlign="left">
            1234 5678 9123 
          </Text>

          <Text fontSize="2xl" mb={2} color="gray.300" textAlign="left">
            TARJETA
          </Text>
          <Text fontSize="xl" mb={6} color="gray.300" textAlign="left">
            0123 1234 5678 9123 
          </Text>

          <Text fontSize="2xl" color="pink.300" mb={10}>
            Gracias por aprender en Unifocus.
          </Text>

          <HStack spacing={4} justifyContent="center">
            <Button colorScheme="teal" size="lg" onClick={handleAccept}>
              ACEPTAR
            </Button>
            <Button colorScheme="red" size="lg" onClick={handleCancel}>
              CANCELAR
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
}

export default Confirm;
