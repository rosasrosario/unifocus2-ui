import { Box, Button, Card, HStack, Input, Image, Text, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Intentar iniciar sesión con Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);

      setSuccess(true); // Mostrar mensaje de éxito
      setError(""); // Limpiar cualquier error previo

      setTimeout(() => {
        navigate("/profile"); // Redirigir después de un breve retraso
      }, 2000);
    } catch (err) {
      // Manejo de errores específicos de Firebase Authentication
      if (err.code === "auth/user-not-found") {
        setError("El correo electrónico no está registrado.");
      } else if (err.code === "auth/wrong-password") {
        setError("La contraseña es incorrecta.");
      } else if (err.code === "auth/invalid-email") {
        setError("El formato del correo electrónico no es válido.");
      } else {
        setError("Ocurrió un error. Por favor, intenta de nuevo.");
      }
      setSuccess(false);
    }
  };

  return (
    <Box 
      backgroundImage="https://static.vecteezy.com/system/resources/previews/007/114/311/non_2x/abstract-yellow-and-pink-gradient-background-perfect-for-promotion-presentation-wallpaper-design-etc-vector.jpg"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      w="100%"
      h="700px"
      justifyContent="center"
      alignItems="center"
    >
      <HStack
        bgGradient="linear(to-r, orange.300, pink.500)"
        p="30px" 
        borderRadius="30px"
      >
        <Image
          borderRadius="30px"
          src="https://i.ibb.co/QjqWD4S/Aprender-es-f-cil-y-c-modo-nete.png"
          alt="Imagen de inicio de sesión"
        />
        <Card bg="#000000" p={5}>
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
          {error && (
            <Text color="red.500" mb={4}>
              {error}
            </Text>
          )}
          {success && (
            <Alert status="success" borderRadius="md" mb={4}>
              <AlertIcon />
              <AlertTitle fontSize="lg">¡Inicio de sesión exitoso!</AlertTitle>
              Redirigiéndote a tu perfil...
            </Alert>
          )}
          <Button
            bg="#ff00b2"
            color="#ffffff"
            onClick={handleLogin}
            fontSize="xl"
            fontWeight={600}
          >
            Iniciar sesión
          </Button>  
        </Card>
      </HStack>
    </Box>
  );
}

export default Login;
