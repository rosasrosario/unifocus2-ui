import { Box, Card, CardBody, Heading, Text, Stack, Button, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Lessons() {
  const location = useLocation();
  const navigate = useNavigate(); // Para redireccionar

  const { materia, hora, tipo } = location.state || {}; 

  const clasesDisponibles = [
    { materia: 'Español', hora: '10 AM', profesor: 'Profesor García', precio: '$100' },
    { materia: 'Español', hora: '11 AM', profesor: 'Profesor García', precio: '$100' },
    { materia: 'Español', hora: '5 PM', profesor: 'Profesor García', precio: '$100' },
    { materia: 'Matemáticas', hora: '10 AM', profesor: 'Profesora Pérez', precio: '$100' },
    { materia: 'Matemáticas', hora: '11 AM', profesor: 'Profesora Pérez', precio: '$100' },
    { materia: 'Matemáticas', hora: '5 PM', profesor: 'Profesora Pérez', precio: '$100' },
  ];

  const clasesFiltradas = clasesDisponibles.filter((clase) => {
    return (
      (!materia || clase.materia === materia) &&
      (!hora || clase.hora === hora) 
    );
  });

  // Función para redirigir al confirmar
  const handleSeleccionar = (clase) => {
    navigate('/confirm', { state: clase }); // Envía los detalles de la clase a la página /confirm
  };

  return (
    <Box p={5} bg="purple.900" color="white">
      <Heading mb={5}>Clases Disponibles</Heading>

      <Heading size="md" mb={5}>Clases según tu búsqueda:</Heading>
      {clasesFiltradas.length > 0 ? (
        <SimpleGrid columns={[1, null, 3]} spacing={5}>
          {clasesFiltradas.map((clase, index) => (
            <Card key={index} bg="gray.100" p={5} borderRadius="md"> {/* Fondo gris oscuro para las tarjetas */}
              <CardBody>
                <Stack spacing={3}>
                  <Text><strong>Materia:</strong> {clase.materia}</Text>
                  <Text><strong>Hora:</strong> {clase.hora}</Text>
                  <Text><strong>Profesor:</strong> {clase.profesor}</Text>
                  <Text><strong>Precio:</strong> {clase.precio}</Text>
                  <Button colorScheme="pink" onClick={() => handleSeleccionar(clase)}>Seleccionar</Button>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      ) : (
        <Text>No se encontraron clases con los criterios seleccionados.</Text>
      )}

      <Heading size="md" mt={10} mb={5}>Todas las clases disponibles:</Heading>
      <SimpleGrid columns={[1, null, 3]} spacing={5}>
        {clasesDisponibles.map((clase, index) => (
          <Card key={index} bg="gray.100" p={5} borderRadius="md">
            <CardBody>
              <Stack spacing={3}>
                <Text><strong>Materia:</strong> {clase.materia}</Text>
                <Text><strong>Hora:</strong> {clase.hora}</Text>
                <Text><strong>Profesor:</strong> {clase.profesor}</Text>
                <Text><strong>Precio:</strong> {clase.precio}</Text>
                <Button colorScheme="pink" onClick={() => handleSeleccionar(clase)}>Seleccionar</Button>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Lessons;
