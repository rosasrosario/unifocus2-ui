import { Box, Button, Card, HStack, Select } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const [materia, setMateria] = useState("");
  const [hora, setHora] = useState("");
  const [tipo, setTipo] = useState("");

  const handleBuscar = () => {
    navigate('/clases', { state: { materia, hora, tipo } });
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
        justifyContent="center"  // Centrar horizontalmente
        alignItems="center"     // Centrar verticalmente
      >
        <HStack 
          bgGradient="linear(to-r, orange.300, pink.500)"
          p="30px" 
          borderRadius="30px"
          spacing={5} // Espaciado entre los elementos
        >
          <Card bg="#000000" p={5}>
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

          <Card bg="#000000" p={5}>
            <Select 
              placeholder="Elegir hora" 
              fontSize="xl" 
              fontWeight={600} 
              onChange={(e) => setHora(e.target.value)}
            >
              <option value="10 AM">10 AM</option>
              <option value="11 AM">11 AM</option>
              <option value="5 PM">5 PM</option>
              <option value="6 PM">6 PM</option>
            </Select>
          </Card>

          <Card bg="#000000" p={5}>
            <Select 
              placeholder="Elegir tipo de clase" 
              fontSize="xl" 
              fontWeight={600} 
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="Privada">Privada</option>
              <option value="En grupo">En grupo</option>
            </Select>
          </Card>

          <Button 
            bg="#ff00b2" 
            color="#ffffff" 
            onClick={handleBuscar} 
            fontSize="xl" 
            fontWeight={600}
          >
            Buscar clase
          </Button> 
        </HStack>
      </Box>
    </>
  );
}

export default Home;
