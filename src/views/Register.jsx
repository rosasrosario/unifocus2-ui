import { Box, Button, Card, HStack, Input, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc, query, where, getDocs, collection } from "firebase/firestore";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(""); // Estado para manejar errores
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Verificar si el email o el username ya están registrados
      const usersQuery = query(
        collection(db, "users"),
        where("email", "==", email)
      );
      const usernamesQuery = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      
      const emailSnapshot = await getDocs(usersQuery);
      const usernameSnapshot = await getDocs(usernamesQuery);
      
      if (!emailSnapshot.empty) {
        setError("El correo electrónico ya está registrado.");
        setSuccess(false); // Si hay error, asegurarse de que no se muestre la alerta de éxito
        return;
      }
      
      if (!usernameSnapshot.empty) {
        setError("El nombre de usuario ya está registrado.");
        setSuccess(false); // Si hay error, asegurarse de que no se muestre la alerta de éxito
        return;
      }

      // Si no hay errores, proceder con la creación de la cuenta
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar los datos del usuario en Firestore
      const userDocRef = doc(db, "users", user.uid);
      await setDoc(userDocRef, {
        username: username,
        email: email,
      });

      console.log("Cuenta creada y datos guardados en Firestore");
      setSuccess(true); // Activar mensaje de éxito
      setError(""); // Limpiar cualquier error previo

      // Redirigir después de un breve retraso
      setTimeout(() => {
        navigate("/");
      }, 3000);

    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setError("Error al crear cuenta, intenta nuevamente.");
      setSuccess(false); // Asegurarse de que no se muestre la alerta de éxito si hay error
    }
  };

  return (
    <Box 
      backgroundImage="https://static.vecteezy.com/system/resources/thumbnails/006/895/305/small/abstract-gradient-background-with-green-and-blue-colors-gradient-backgrounds-for-wallpapers-posters-flyers-banners-flyers-and-more-free-vector.jpg"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      w="100%"
      h="700px"
      justifyContent="center"
      alignItems="center"
    >
      <HStack 
        bgGradient="linear(to-r, teal.300, pink.500)"
        p="30px" 
        borderRadius="30px"
        spacing={8}
      >
        <Card bg="#000000" p={5} borderRadius="md">
          <Input 
            placeholder="Nombre de usuario"
            fontSize="xl" 
            fontWeight={600} 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            mb={4}
          />
          <Input 
            placeholder="Correo electrónico"
            fontSize="xl" 
            fontWeight={600} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb={4}
          />
          <Input 
            placeholder="Contraseña" 
            fontSize="xl" 
            fontWeight={600} 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb={4}
          />
          <Button 
            bg="#ff00b2" 
            color="#ffffff" 
            onClick={handleRegister} 
            fontSize="xl" 
            fontWeight={600}
          >
            Crear cuenta
          </Button>
        </Card>
        
        {success && (
          <Alert status="success" variant="solid" borderRadius="md" p={6} colorScheme="teal" bgGradient="linear(to-r, green.400, blue.400)">
            <AlertIcon boxSize="40px" mr={4} />
            <Box flex="1">
              <AlertTitle fontSize="lg" mb={2}>¡Registro Exitoso!</AlertTitle>
              <AlertDescription fontSize="md">
                Gracias por confiar en nosotros y unirte a nuestro sitio. Te estamos redirigiendo a la página principal, donde podrás elegir la clase que más se adecue a tus necesidades.
              </AlertDescription>
            </Box>
          </Alert>
        )}

        {error && (
          <Alert status="error" variant="solid" borderRadius="md" p={6} colorScheme="red" bgGradient="linear(to-r, red.400, orange.400)">
            <AlertIcon boxSize="40px" mr={4} />
            <Box flex="1">
              <AlertTitle fontSize="lg" mb={2}>¡Error!</AlertTitle>
              <AlertDescription fontSize="md">
                {error}
              </AlertDescription>
            </Box>
          </Alert>
        )}
      </HStack>
    </Box>
  );
}

export default Register;
