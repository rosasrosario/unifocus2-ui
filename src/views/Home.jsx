import { Box, Button, Card, HStack, Select, Text, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [materia, setMateria] = useState("");
  const [hora, setHora] = useState("");

  const handleBuscar = () => {
    navigate('/lessons', { state: { materia, hora } });
  };

  return (
    <>
      <Box 
        backgroundImage={"https://static.vecteezy.com/system/resources/previews/007/114/311/non_2x/abstract-yellow-and-pink-gradient-background-perfect-for-promotion-presentation-wallpaper-design-etc-vector.jpg"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        display="flex"
        w={"100%"}
        h="700px"
        justifyContent="space-between" 
        alignItems="center"
        p={5}
      >
        <Box w="50%" textAlign="left">
          <Text fontSize="6xl" fontWeight="bold" color="white" mb={6}>
            ¡Bienvenido!
          </Text>
          <Text fontSize="5xl" fontWeight="bold" color="gray.100" mb={6}>
            Ingresa a la universidad de tus sueños. ¡Aprender en UNIFOCUS es fácil!
          </Text>
          <Text fontSize="4xl" fontWeight="bold" color="gray.200" mb={6}>
            Busca tu clase ideal aquí.
          </Text>

          <HStack 
            bgGradient="linear(to-r, teal.600, teal.600)"
            p="30px" 
            borderRadius="30px"
            spacing={5}
            justify="flex-start" 
          >
            <Card bg="#26b4ad" p={5}>
              <Select 
                placeholder="Elegir materia" 
                fontSize="xl" 
                fontWeight={600} 
                onChange={(e) => setMateria(e.target.value)}
              >
                <option value="Español">Español</option>
                <option value="Matemáticas">Matemáticas</option>
              </Select>
            </Card>

            <Card bg="#26b4ad" p={5}>
              <Select 
                placeholder="Elegir hora" 
                fontSize="xl" 
                fontWeight={600} 
                onChange={(e) => setHora(e.target.value)}
              >
                <option value="9 AM">9 AM</option>
                <option value="10 AM">10 AM</option>
                <option value="11 AM">11 AM</option>
                <option value="5 PM">5 PM</option>
                <option value="6 PM">6 PM</option>
                <option value="7 PM">7 PM</option>
              </Select>
            </Card>
            <Button 
                colorScheme="teal"
                fontSize="2xl"  
                fontWeight={700}  
                p={7}  
                height="60px"
                onClick={handleBuscar}
              >
              Buscar clase
            </Button>
          </HStack>
        </Box>

        <Box w="46%" display="flex" justifyContent="center" alignItems="center">
          <Image 
            src="https://static.vecteezy.com/system/resources/thumbnails/014/635/000/small_2x/3d-book-creative-idea-illustration-png.png" 
            alt="Imagen ejemplo"
            borderRadius="lg"
            boxSize="600px"
          />
        </Box>
      </Box>
    </>
  );
}

export default Home;
