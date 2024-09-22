import { Card, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function ProductCard({nombre, sabor, cantidadml, mililitros, alcoholica}) {
  return (
    <Card bg={'#FFFFFF'} p={3}my={'7px'} onClick={onClick}>
        <Heading>{nombre}</Heading>
        <Text>Sabor: {sabor}</Text>
        <Text>{cantidadml} ml</Text>
        <Text fontWeight={800}>{alcoholica?'Bebida alcoholica': null}</Text>
    </Card>
  );
}

export default ProductCard