import {
  Box,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

function Profile() {
  const location = useLocation();
  const { correo = "correo@ejemplo.com", clases = [] } = location.state || {};

  const [username, setUsername] = useState("Usuario");
  const [loading, setLoading] = useState(true);
  const [classesWithLinks, setClassesWithLinks] = useState([]);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const usersRef = collection(db, "users");
        const userQuery = query(usersRef, where("email", "==", correo));
        const userSnapshot = await getDocs(userQuery);

        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          setUsername(userData.username || "Usuario");
        } else {
          setUsername("Usuario no encontrado");
        }
      } catch (err) {
        console.error("Error al obtener el username:", err);
        setUsername("Error al cargar usuario");
      }
    };

    const fetchClassLinks = async () => {
      try {
        const classesRef = collection(db, "classes");
        const classIds = clases.map((clase) => clase.id);

        const classQuery = query(classesRef, where("id", "in", classIds));
        const classSnapshot = await getDocs(classQuery);

        const classesWithLinksData = classSnapshot.docs.map((doc) => doc.data());
        setClassesWithLinks(classesWithLinksData);
      } catch (err) {
        console.error("Error al obtener los links de clases:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsername();
    fetchClassLinks();
  }, [correo, clases]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgGradient="linear(to-r, teal.500, purple.600)"
      >
        <Spinner size="xl" color="white" />
      </Box>
    );
  }

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bgGradient="linear(to-r, teal.500, purple.600)"
      p={5}
    >
      <Card
        bgGradient="linear(to-r, teal.300, purple.500)"
        p={8}
        shadow="xl"
        borderRadius="xl"
        textAlign="left"
        maxW="7xl"
        width="90%"
      >
        <CardBody>
          <VStack spacing={6}>
            <Heading size="2xl" color="white">
              Bienvenido, {username} 👋
            </Heading>
            <Text fontSize="lg" color="gray.300">
              Correo: {correo}
            </Text>

            <Box mt={8} w="100%">
              <Heading size="md" color="gray.100" mb={4}>
                Clases confirmadas
              </Heading>
              {classesWithLinks.length > 0 ? (
                <List spacing={3}>
                {classesWithLinks.map((clase, index) => (
                  <ListItem key={index}>
                    <HStack
                      justify="space-between"
                      p={4}
                      bg="purple.700"
                      borderRadius="md"
                    >
                      <Text fontWeight="bold" color="white">
                        {clase.materia}
                      </Text>
                      <VStack align="start" spacing={0}>
                        <Text color="gray.300">Hora: {clase.hora}</Text>
                        <Text color="gray.300">Profesor: {clase.profesor}</Text>
                        <Text color="gray.300">
                          Link:{" "}
                          <Text
                            as="a"
                            href={clase.link || "#"}
                            color="blue.400"
                            textDecoration="underline"
                            isTruncated
                          >
                            {clase.link || "No disponible"}
                          </Text>
                        </Text>
                      </VStack>
                      <Text color="green.300" fontWeight="bold">
                        {clase.precio}
                      </Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
              ) : (
                <Text fontSize="md" color="gray.300">
                  No hay clases confirmadas.
                </Text>
              )}
            </Box>
          </VStack>
        </CardBody>
      </Card>

      <Image
        src="https://www.pngplay.com/wp-content/uploads/9/Learning-PNG-Images-HD.png"
        alt="Imagen ejemplo"
        borderRadius="md"
        mb={4}
        boxSize="400px"
      />
    </Box>
  );
}

export default Profile;
