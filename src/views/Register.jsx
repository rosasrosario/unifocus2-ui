import { Box, Button, Card, HStack, Input, Image} from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  return (
    <>
      <Box 
        backgroundImage= {"https://static.vecteezy.com/system/resources/thumbnails/006/895/305/small/abstract-gradient-background-with-green-and-blue-colors-gradient-backgrounds-for-wallpapers-posters-flyers-banners-flyers-and-more-free-vector.jpg"
        } 
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        display="flex"
        w={"100%"}
        h={"700"}
        justifyContent="right"
        alignItems="right"
    >
      <HStack 
        bgGradient='linear(to-r, teal.300, pink.500)'
        p={"30px"} 
        borderRadius={"30px"}
        >
        <Card bg="#000000" p={5}>
          <Input placeholder="Nombre"fontSize={"xl"} fontWeight={600}></Input>
          <Input placeholder="Correo electrónico"fontSize={"xl"} fontWeight={600}></Input>
          <Input placeholder="Contraseña"fontSize={"xl"} fontWeight={600}></Input>
          <Button bg="#000000" color={"#ffffff"} onClick={() => navigate("/")} fontSize={"xl"} fontWeight={600}>
            Crear cuenta
          </Button>  
        </Card>
        </HStack>
      </Box>
    </>
  )
}

export default Register