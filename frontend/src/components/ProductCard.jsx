import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { 
  Box, 
  IconButton, 
  Image, 
  useColorModeValue, 
  Heading, 
  Text, 
  HStack, 
  VStack, 
  Modal, 
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  useToast,
  Button,
} from '@chakra-ui/react';
import { useProductStore } from '../store/product.js';
import {useState} from 'react';


 const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);

    const textcolor = useColorModeValue("gray.800", "gray.200");
    const bg = useColorModeValue("white", "gray.700");

    const { deleteProduct } = useProductStore();
    const { updateProduct } = useProductStore();
    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure();

    // Safety check
    if (!product) {
        return null;
    }

    const handleDeleteProduct = async (pid) => {
      const confirmed = window.confirm("Are you sure you want to delete this product?");
      if (confirmed) {
        const result = await deleteProduct(pid);
        if (result.success) {
          toast({
            title: "Product deleted",
            description: result.message,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Error deleting product",
            description: result.message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      }
    };

    const handleUpdateProduct = async (pid, updatedProduct) => {
      try {
        const result = await updateProduct(pid, updatedProduct);
        if (result && result.success) {
          toast({
            title: "Product updated",
            description: result.message,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          onClose(); // Modal'ı kapat
        } else {
          toast({
            title: "Error updating product",
            description: result?.message || "Failed to update product",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      } catch (error) {
        console.error("Update error:", error);
        toast({
          title: "Error updating product",
          description: "Network error or server is down",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    };

    return (
        <Box
          shadow="md"
          rounded="lg"
          overflow="hidden"
          transition="all 0.3s"
          _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
          bg={bg}
        >
          <Image src={product.image} alt={product.name} h={48} w={"full"} objectFit="cover" />
          <Box p={4}>
          <Heading as={"h3"} size={"md"} mb={2}>
            {product.name}
          </Heading>

          <Text fontWeight={"bold"} fontSize={"xl"} color={textcolor} mb={4}>
            ${product.price}
          </Text>

          <HStack spacing={2}>
            <IconButton  icon={<EditIcon />} colorScheme='blue' onClick={onOpen}/>
            <IconButton  icon={<DeleteIcon />} colorScheme='red' onClick={() => handleDeleteProduct(product._id)}/>
          </HStack>
          </Box>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
                <ModalContent>

                    <ModalHeader>Update Product</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                            placeholder="Product Name"
                            name="name"
                            value={updatedProduct.name}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                            />
                            <Input
                            placeholder="Product Price"
                            name="price"
                            value={updatedProduct.price}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                            />
                            <Input
                            placeholder="Product Image"
                            name="image"
                            value={updatedProduct.image}
                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                            />
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                            Update
                        </Button>
                        <Button variant='ghost' onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>

                </ModalContent>
            </ModalOverlay>
          </Modal>
       </Box>
    )

}

export default ProductCard;








