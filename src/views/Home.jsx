import { Box, Button, Card, HStack, Select } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Box 
        backgroundImage={"https://static.vecteezy.com/system/resources/previews/007/114/311/non_2x/abstract-yellow-and-pink-gradient-background-perfect-for-promotion-presentation-wallpaper-design-etc-vector.jpg"}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        display="flex"
        w={"100%"}
        h="700px"
        justifyContent="left"
        alignItems="left"
      >
        <HStack 
          bgGradient="linear(to-r, orange.300, pink.500)"
          p="30px" 
          borderRadius="30px"
        >
          <Card bg="#000000" p={5}>
            <Select placeholder="Elegir materia" fontSize="xl" fontWeight={600}>
              <option value="espanol">Español</option>
              <option value="matematicas">Matemáticas</option>
            </Select>
          </Card>

          <Card bg="#000000" p={5}>
            <Select placeholder="Elegir hora" fontSize="xl" fontWeight={600}>
              <option value="10am">10 AM</option>
              <option value="11am">11 AM</option>
              <option value="5pm">5 PM</option>
              <option value="6pm">6 PM</option>
            </Select>
          </Card>

          <Card bg="#000000" p={5}>
            <Select placeholder="Elegir tipo de clase" fontSize="xl" fontWeight={600}>
              <option value="privada">Privada</option>
              <option value="grupo">En grupo</option>
            </Select>
          </Card>

          <Button bg="#ff00b2" color="#ffffff" onClick={() => navigate("/clases")} fontSize="xl" fontWeight={600}>
            Buscar clase
          </Button> 
        </HStack>
      </Box>
    </>
  );
}

export default Home;
