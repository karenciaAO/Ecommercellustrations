import React from "react";
import Head from "next/head";
import{
    Box,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    useColorMode,
    useBreakpoint
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Layout = ({children}) => {
    const {colorMode, toggleColorMode} = useColorMode();

    return(

        <div><Head><title>E-commerce APP</title></Head>
        <Box>
            <Flex 
                bg={useColorModeValue('white','gray.600')}
                minH={'60px'}
                py={{base:2}}
                px={{base:4}}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200','gray.900')}
                align={'center'}

            >
                <Flex flex={{base:1}} justify={{base:'center', md:'start'}}>
                    <Text fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')}> Logo</Text>
                    <Stack flex={{base:1}}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}
                                            
                    >
                    <Button onClick={toggleColorMode}>{colorMode === 'light'?<MoonIcon/>:<SunIcon/>}</Button>
                    
                    <Button as={'a'} fontSize={'sm'} fontWeight={400}variant={'link'}>Sign In</Button>
                    <Button fontSize={'sm'} fontWeight={600} color={'white'} bg={'yellow.400'} href={'#'} _hover={{bg: 'yellow.300'}}>Sign Up</Button></Stack></Flex>
            </Flex>
        </Box>
        {children}
        <Box>
            <Flex 
                bg={useColorModeValue('white','gray.600')}
                minH={'60px'}
                py={{base:2}}
                px={{base:4}}
                borderTop={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200','gray.900')}
                align={'center'}

            >
                <Flex flex={{base:1}} justify={{base:'center', md:'center'}} alignItems={{base: 'center'}}>
                    <Text fontFamily={'heading'} color={useColorModeValue('gray.600', 'white')}>Copyright 2023. webdecode.</Text>
                </Flex>
            </Flex>
        </Box>
        </div>      


    )
}
export default Layout

