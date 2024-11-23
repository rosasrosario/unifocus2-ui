import { Box, Button, Card, CardBody, Heading, Text, HStack, VStack, Divider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Input, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase-config'; 
import { collection, addDoc } from 'firebase/firestore';

function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();
  const clase = location.state; // Recibe la clase seleccionada desde 'Lessons'

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState("");
  const toast = useToast();

  const handleCancel = () => {
    toast({
      title: "Clase no seleccionada",
      description: "Selecciona otra clase que se adecue más para ti.",
      status: "info",
      duration: 4000,
      isClosable: true,
    });
    navigate('/'); // Redirigir a la página de inicio
  };

  const handleAccept = async () => {
    // Abrir el modal para solicitar el nombre de usuario
    onOpen();
  };

  const handleUsernameSubmit = async () => {
    if (username) {
      try {
        // Agregar a la colección "payments" en Firestore
        await addDoc(collection(db, 'payments'), {
          username: username,
          classId: clase.id,
          price: clase.precio,
          timestamp: new Date(),
        });

        toast({
          title: "Registro exitoso",
          description: "Gracias por tu registro y compra. Es hora de que inicies sesión.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });

        // Redirigir a login
        navigate('/login');
      } catch (error) {
        console.error("Error al guardar el pago:", error);
        toast({
          title: "Error al procesar",
          description: "Hubo un problema al procesar el pago. Inténtalo de nuevo.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "Nombre de usuario requerido",
        description: "El nombre de usuario es necesario para continuar.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    }
    onClose();
  };

  return (
    <Box 
      height="100vh" 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      bg="gray.50"
      p={5}
    >
      <Card 
        bg="white" 
        p={8} 
        shadow="xl" 
        borderRadius="xl" 
        textAlign="center"
        maxW="lg"
      >
        <CardBody>
          <Heading size="2xl" mb={6} color="purple.600" fontWeight="bold">
            ¡Gracias por elegir Unifocus!
          </Heading>

          {/* Información de la clase seleccionada */}
          <VStack align="start" spacing={3} mb={6} textAlign="left">
            <Text fontSize="xl" fontWeight="medium" color="gray.700">
              <strong>Materia:</strong> {clase.materia}
            </Text>
            <Text fontSize="xl" fontWeight="medium" color="gray.700">
              <strong>Hora:</strong> {clase.hora}
            </Text>
            <Text fontSize="xl" fontWeight="medium" color="gray.700">
              <strong>Profesor:</strong> {clase.profesor}
            </Text>
            <Text fontSize="xl" fontWeight="medium" color="gray.700">
              <strong>Precio:</strong> {clase.precio}
            </Text>
            <Text fontSize="xl" fontWeight="medium" color="gray.700">
              <strong>Descripción:</strong> {clase.descripcion}
            </Text>
          </VStack>

          <Divider borderColor="gray.300" mb={6} />

          {/* Información para realizar el pago */}
          <Text fontSize="2xl" fontWeight="bold" color="gray.800" mb={4}>
            Deposita el importe de {clase.precio} a la siguiente cuenta BBVA:
          </Text>
          <VStack align="start" spacing={2} mb={6} textAlign="left">
            <Text fontSize="xl" color="gray.700">
              <strong>NUMERO DE CUENTA</strong>: 1234 5678 9123
            </Text>
            <Text fontSize="xl" color="gray.700">
              <strong>TARJETA</strong>: 0123 1234 5678 9123
            </Text>
          </VStack>

          <Text fontSize="2xl" color="purple.600" fontWeight="bold" mb={6}>
            ¡Gracias por aprender con nosotros!
          </Text>

          <HStack spacing={6} justifyContent="center">
            <Button colorScheme="green" size="lg" onClick={handleAccept}>
              Aceptar y Continuar
            </Button>
            <Button colorScheme="red" size="lg" onClick={handleCancel}>
              Cancelar
            </Button>
          </HStack>
        </CardBody>
      </Card>

      {/* Modal para ingresar el nombre de usuario */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Por favor, ingresa tu nombre de usuario</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </ModalBody>
          <Button colorScheme="blue" onClick={handleUsernameSubmit} mt={4} w="100%">
            Confirmar
          </Button>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Confirm;
