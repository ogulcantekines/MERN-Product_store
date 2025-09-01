import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Container,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import { useProductStore } from '../store/product.js';


const CreatePage = () => {

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();
  const { createProduct } = useProductStore();
  
  const handleAddProduct = async() => {
    if (!newProduct.name || !newProduct.price ||
      !newProduct.image) {
      toast({
        title: "Error",
        description: "All fields are required",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    try {
      const { success, message } = await createProduct(newProduct);
      if (success) {
        toast({
          title: "Success",
          description: message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      console.log("Product added successfully");
      // Reset form
      setNewProduct({ name: "", price: "", image: "" });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

    return (
    <Container maxW={"container.sm"}>
      <VStack 
        spacing={8}>
      
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mt={10} mb={8}>
          Create a New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.700")}
          p={6}
          rounded={"lg"}
          shadow={"md"}>
        

          <VStack spacing={4}>
            <Input
            placeholder='Product Name'
            name='name'
            type='text'
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />

            <Input
            placeholder='Price'
            name='price'
            type='number'
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />

            <Input
            placeholder='Image URL'
            name='image'
            type='text'
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />

            <Button colorScheme='blue' onClick={handleAddProduct} w={"full"}>
              Add Product
            </Button>

          </VStack>
        </Box>
      </VStack>

    </Container>

  );
  
  
  };

  

export default CreatePage;
