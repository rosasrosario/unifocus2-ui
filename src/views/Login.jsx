import { Box, Button, Card, HStack, Input, Image} from '@chakra-ui/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Box 
        backgroundImage= {"https://static.vecteezy.com/system/resources/previews/007/114/311/non_2x/abstract-yellow-and-pink-gradient-background-perfect-for-promotion-presentation-wallpaper-design-etc-vector.jpg"
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
        bgGradient='linear(to-r, orange.300, pink.500)'
        p={"30px"} 
        borderRadius={"30px"}
        >
        <Image
          borderRadius={"30px"}
          src="https://i.ibb.co/QjqWD4S/Aprender-es-f-cil-y-c-modo-nete.png"
        ></Image>
        <Card bg="#000000" p={5}>
          <Input placeholder="Usuario"fontSize={"xl"} fontWeight={600}></Input>
          <Input placeholder="Contraseña"fontSize={"xl"} fontWeight={600}></Input>
          <Button bg="#ff00b2" color={"#ffffff"} onClick={() => navigate("/")} fontSize={"xl"} fontWeight={600}>
            Iniciar sesión
          </Button>  
        </Card>
        </HStack>
      </Box>
    </>
  )
}

export default Login