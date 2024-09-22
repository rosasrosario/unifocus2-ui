import { Box, Flex, Text, Button, Stack, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <Flex bg={"black"} color={"white"} py={2} px={4} align={"center"}>
        <Flex flex={1} justify={"start"}>
          {/* Para colocar un logo*/}
          <Text textAlign={{ base: "center", md: "left" }} color={"white"}>
            Logo
          </Text>
          {/* Para los NavLinks*/}
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
            to={"/signup"}
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
    label: "Login",
    href: "/login",
  },
  {
    label: "Register",
    href: "/register",
  },
  {
    label: "Clases",
    href: "/clases",
  },
];