import React from 'react';
import { Box, Card, CardBody, Heading, Text, Stack, Button, SimpleGrid } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase-config'; 
import { collection, addDoc } from 'firebase/firestore';

function Lessons() {
  const location = useLocation();
  const navigate = useNavigate(); 

  const { materia, hora } = location.state || {}; 

  const clasesDisponibles = [
    { id: 1, materia: 'Español', hora: '9 AM', profesor: 'Juan Montereal', precio: '$10,500', descripcion: 'Clase de Español de dos meses.' },
    { id: 2, materia: 'Español', hora: '10 AM', profesor: 'Diego Tapia', precio: '$10,500', descripcion: 'Clase de Español de dos meses.' },
    { id: 3, materia: 'Español', hora: '11 AM', profesor: 'Juliana Zamora', precio: '$10,500', descripcion: 'Clase de Español de dos meses.' },
    { id: 4, materia: 'Español', hora: '5 PM', profesor: 'Juan Montereal', precio: '$10,500', descripcion: 'Clase de Español de dos meses.' },
    { id: 5, materia: 'Español', hora: '6 PM', profesor: 'Diego Tapia', precio: '$10,500', descripcion: 'Clase de Español de dos meses.' },
    { id: 6, materia: 'Español', hora: '7 PM', profesor: 'Juliana Zamora', precio: '$10,500', descripcion: 'Clase de Español de dos meses.' },
    { id: 7, materia: 'Matemáticas', hora: '9 AM', profesor: 'Jorge Martinez', precio: '$15,000', descripcion: 'Clase de Matemáticas de tres meses.' },
    { id: 8, materia: 'Matemáticas', hora: '10 AM', profesor: 'Nicole Villalobos', precio: '$15,000', descripcion: 'Clase de Matemáticas de tres meses.' },
    { id: 9, materia: 'Matemáticas', hora: '11 AM', profesor: 'Andrea Campos', precio: '$15,000', descripcion: 'Clase de Matemáticas de tres meses.' },
    { id: 10, materia: 'Matemáticas', hora: '5 PM', profesor: 'Jorge Martinez', precio: '$15,000', descripcion: 'Clase de Matemáticas de tres meses.' },
    { id: 11, materia: 'Matemáticas', hora: '6 PM', profesor: 'Nicole Villalobos', precio: '$15,000', descripcion: 'Clase de Matemáticas de tres meses.' },
    { id: 12, materia: 'Matemáticas', hora: '7 PM', profesor: 'Andrea Campos', precio: '$15,000', descripcion: 'Clase de Matemáticas de tres meses.' },
  ];

  const clasesFiltradas = clasesDisponibles.filter((clase) => {
    return (
      (!materia || clase.materia === materia) &&
      (!hora || clase.hora === hora) 
    );
  });

  const saveClassToFirestore = async (clase) => {
    try {
      await addDoc(collection(db, 'classes'), clase);
      console.log('Clase guardada en Firestore:', clase);
    } catch (error) {
      console.error('Error al guardar la clase en Firestore:', error);
    }
  };

  const handleSeleccionar = (clase) => {
    saveClassToFirestore(clase); // Guardar la clase en Firestore
    navigate('/confirm', { state: clase });
  };

  return (
    <Box p={5} bg="purple.900" color="white">
      <Heading mb={5}>Clases Disponibles</Heading>

      <Heading size="md" mb={5}>Clases según tu búsqueda:</Heading>
      {clasesFiltradas.length > 0 ? (
        <SimpleGrid columns={[1, null, 3]} spacing={5}>
          {clasesFiltradas.map((clase) => (
            <Card key={clase.id} bg="gray.100" p={5} borderRadius="md">
              <CardBody>
                <Stack spacing={3}>
                  <Text><strong>Materia:</strong> {clase.materia}</Text>
                  <Text><strong>Hora:</strong> {clase.hora}</Text>
                  <Text><strong>Profesor:</strong> {clase.profesor}</Text>
                  <Text><strong>Precio:</strong> {clase.precio}</Text>
                  <Text><strong>Descripción:</strong> {clase.descripcion}</Text>
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
        {clasesDisponibles.map((clase) => (
          <Card key={clase.id} bg="gray.100" p={5} borderRadius="md">
            <CardBody>
              <Stack spacing={3}>
                <Text><strong>Materia:</strong> {clase.materia}</Text>
                <Text><strong>Hora:</strong> {clase.hora}</Text>
                <Text><strong>Profesor:</strong> {clase.profesor}</Text>
                <Text><strong>Precio:</strong> {clase.precio}</Text>
                <Text><strong>Descripción:</strong> {clase.descripcion}</Text>
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
