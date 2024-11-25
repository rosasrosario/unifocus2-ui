import { Box, Flex, Text, Button, HStack, Image, Stack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <Flex bg="black" color="white" py={2} px={4} align="center">
        <Flex flex={1} justify="start" align="center">
          {/* Logo */}
          <NavLink to="/">
            <Image
              src="https://i.ibb.co/W6hzzrc/UNIFOCUS.png"
              alt="Logo"
              boxSize="100px"
              objectFit="contain"
            />
          </NavLink>

          {/* Navegación */}
          <Flex display="flex" ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* Botones de Login y Registro */}
        <HStack justify="flex-end" spacing={6}>
          <Button
            as={NavLink}
            to="/login"
            fontSize="xl"
            color="white"
            fontWeight={600}
            variant="link"
          >
            Login
          </Button>
          <Button
            as={NavLink}
            to="/register"
            fontSize="xl"
            fontWeight={600}
            color="white"
            bg="orange.500"
            _hover={{
              bg: "white.200",
            }}
          >
            Register
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

// Componente de Navegación de Escritorio
const DesktopNav = () => {
  return (
    <Stack direction="row" spacing={4}>
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

// Elementos de Navegación
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Lessons",
    href: "/lessons",
  },
];
