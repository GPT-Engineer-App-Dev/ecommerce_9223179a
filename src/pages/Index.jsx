import React from "react";
import { Box, Button, Container, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  // Dummy product details
  const product = {
    title: "Modern Chair",
    description: "Enhance your space with this elegantly designed modern chair. Crafted with care and attention to detail, this chair is not only a comfortable seating option but also a stylish addition to any room.",
    price: "$299",
    imageUrl: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGFpcnxlbnwwfHx8fDE3MDk4MjI0Njd8MA&ixlib=rb-4.0.3&q=80&w=1080',
  };

  return (
    <Container maxW="container.md" py={10}>
      <Stack spacing={6} align="center">
        <Image src={product.imageUrl} alt={product.title} borderRadius="md" boxSize="300px" objectFit="cover" />
        <VStack spacing={3} align="stretch">
          <Heading as="h1" size="xl">
            {product.title}
          </Heading>
          <Text fontSize="2xl" color="teal.500">
            {product.price}
          </Text>
          <Text color="gray.600">{product.description}</Text>
          <Button leftIcon={<FaShoppingCart />} colorScheme="teal" size="lg" isFullWidth>
            Add to Cart
          </Button>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Index;
