import { Box, Text, Link, Grid, Heading } from "@chakra-ui/react";

function Professors() {
  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-r, orange.300, pink.500)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={6}
    >
      <Box
        bg="#ffffff"
        p={6}
        borderRadius="15px"
        boxShadow="lg"
        w="100%"
        maxW="1000px"
      >
        <Heading as="h2" size="xl" textAlign="center" color="teal.600" mb={6}>
          Información de Clases
        </Heading>
        
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="blue.600">Profesor: Juan Montereal</Text>
            <Text>Materia: Español</Text>
            <Text>Hora: 9 AM</Text>
            <Link href="https://fakeclassplatform.com/class/1" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/1
            </Link>
            <Text>Hora: 5 PM</Text>
            <Link href="https://fakeclassplatform.com/class/4" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/4
            </Link>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold" color="blue.600">Profesor: Diego Tapia</Text>
            <Text>Materia: Español</Text>
            <Text>Hora: 10 AM</Text>
            <Link href="https://fakeclassplatform.com/class/2" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/2
            </Link>
            <Text>Hora: 6 PM</Text>
            <Link href="https://fakeclassplatform.com/class/5" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/5
            </Link>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold" color="blue.600">Profesor: Juliana Zamora</Text>
            <Text>Materia: Español</Text>
            <Text>Hora: 11 AM</Text>
            <Link href="https://fakeclassplatform.com/class/3" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/3
            </Link>
            <Text>Hora: 7 PM</Text>
            <Link href="https://fakeclassplatform.com/class/6" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/6
            </Link>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold" color="blue.600">Profesor: Jorge Martinez</Text>
            <Text>Materia: Matemáticas</Text>
            <Text>Hora: 9 AM</Text>
            <Link href="https://fakeclassplatform.com/class/7" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/7
            </Link>
            <Text>Hora: 5 PM</Text>
            <Link href="https://fakeclassplatform.com/class/10" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/10
            </Link>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold" color="blue.600">Profesor: Nicole Villalobos</Text>
            <Text>Materia: Matemáticas</Text>
            <Text>Hora: 10 AM</Text>
            <Link href="https://fakeclassplatform.com/class/8" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/8
            </Link>
            <Text>Hora: 6 PM</Text>
            <Link href="https://fakeclassplatform.com/class/11" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/11
            </Link>
          </Box>

          <Box>
            <Text fontSize="lg" fontWeight="bold" color="blue.600">Profesor: Andrea Campos</Text>
            <Text>Materia: Matemáticas</Text>
            <Text>Hora: 11 AM</Text>
            <Link href="https://fakeclassplatform.com/class/9" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/9
            </Link>
            <Text>Hora: 7 PM</Text>
            <Link href="https://fakeclassplatform.com/class/12" color="teal.500" isExternal>
              https://fakeclassplatform.com/class/12
            </Link>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default Professors;
