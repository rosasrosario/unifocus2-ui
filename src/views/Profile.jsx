import { Box, Card, CardBody, Heading, Text, VStack, HStack, List, ListItem, Image } from '@chakra-ui/react';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const { nombre = "Nombre del usuario", correo = "correo@ejemplo.com", clases = [] } = location.state || {};

  return (
    <Box 
      height="100vh" 
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      bgGradient="linear(to-r, teal.500, purple.600)"  
      p={5}
    >
      <Card 
        bgGradient="linear(to-r, teal.300, purple.500)"  
        p={30}  
        shadow="xl" 
        borderRadius="xl" 
        textAlign="left"
        maxW="7xl"
        width="90%"  
      >
        <CardBody>
          <VStack spacing={6}>
            <Heading size="2xl" color="white" noOfLines={3}>  
              {nombre}
            </Heading>
            <Text fontSize="lg" color="gray.300">
              {correo}
            </Text>

            <Box mt={8} w="100%">
              <Heading size="md" color="gray.100" mb={4}>
                Clases confirmadas
              </Heading>
              {clases.length > 0 ? (
                <List spacing={3}>
                  {clases.map((clase, index) => (
                    <ListItem key={index}>
                      <HStack 
                        justify="space-between" 
                        p={100} 
                        bg="purple.700" 
                        borderRadius="md"
                      >
                        <Text fontWeight="bold" color="white">
                          {clase.materia}
                        </Text>
                        <Text color="gray.400">{clase.hora}</Text>
                      </HStack>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Text fontSize="md" color="gray.300">
                  No hay clases confirmadas.
                </Text>
              )}
            </Box>
          </VStack>
        </CardBody>
      </Card>

          <Image 
            src="https://www.pngplay.com/wp-content/uploads/9/Learning-PNG-Images-HD.png" 
            alt="Imagen ejemplo" 
            borderRadius="md" 
            mb={4} 
            boxSize="400px"
          />
    </Box>
  );
}

export default Profile;
