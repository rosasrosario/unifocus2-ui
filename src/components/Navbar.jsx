import { Box, Flex, Text, Button, Stack, HStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react"; // Añadir useEffect y useState
import axios from 'axios'; // Importar axios

export default function Navbar() {
  const [data, setData] = useState(null); // Estado para almacenar los datos de la API

  useEffect(() => {
    // Hacer la solicitud a la API cuando el componente se monta
    axios.get('http://localhost:8000/api/products/') // Cambia a tu endpoint de la API
      .then(response => {
        setData(response.data); // Guardar la respuesta en el estado
        console.log(response.data); // Mostrar los datos en consola (puedes eliminar esto luego)
      })
      .catch(error => {
        console.error("Error al hacer la solicitud", error);
      });
  }, []); // El array vacío significa que se ejecuta solo cuando se monta el componente

  return (
    <Box>
      <Flex bg={"black"} color={"white"} py={2} px={4} align={"center"}>
        <Flex flex={1} justify={"start"} align="center">
          <NavLink to="/">
            <Image
              src="https://i.ibb.co/W6hzzrc/UNIFOCUS.png"
              alt="Logo"
              boxSize="100px"
              objectFit="contain"
            />
          </NavLink>

          <Flex display={"flex"} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <HStack justify={"flex-end"} spacing={6}>
          <Button
            as={NavLink}
            to={"/login"}
            fontSize={"xl"}
            color={"white"}
            fontWeight={600}
            variant={"link"}
          >
            Login
          </Button>
          <Button
            as={NavLink}
            fontSize={"xl"}
            fontWeight={600}
            color={"white"}
            bg={"orange.500"}
            to={"/register"}
            _hover={{
              bg: "white.200",
            }}
          >
            Register
          </Button>
        </HStack>
      </Flex>

      {/* Aquí puedes mostrar los datos obtenidos de la API */}
      <Box>
        {data ? (
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.name} - {item.price}$</li> // Cambia según los campos que tengas
            ))}
          </ul>
        ) : (
          <Text>Cargando datos...</Text>
        )}
      </Box>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NavLink
            to={navItem.href ?? "#"}
            style={({ isActive }) =>
              isActive
                ? {
                    padding: "8px",
                    fontSize: "sm",
                    fontWeight: 800,
                    color: "white",
                  }
                : {
                    padding: "8px",
                    fontSize: "sm",
                    fontWeight: 200,
                    color: "white",
                  }
            }
          >
            {navItem.label}
          </NavLink>
        </Box>
      ))}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    padding: "8px",
    fontSize: "sm",
    fontWeight: 800,
    color: "white",
  },
  {
    label: "Clases",
    href: "/clases",
  },
];
