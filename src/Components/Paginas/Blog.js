import React from "react";
import Navbar from "../NavBar";
import logo from "../../Assets/iee-logo-blue.png";
import {
    Card, CardHeader, CardBody, CardFooter
    , Flex, Avatar, Box, Button, Image, Text, Heading
} from '@chakra-ui/react';


export default function Blog() {
    return (
        <div className="app">
            <Navbar />
            <div className="container">
                <div className="row ">
                    <div className="col-5">
                        <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                                <svg class="bi pe-none me-2" width="40" height="32"></svg>
                                <span class="fs-4"><img id="logo" src={logo}></img></span>
                            </a>
                            <hr></hr>
                            <ul class="nav nav-pills flex-column mb-auto">
                                <li class="nav-item">
                                    <a href="#" class="nav-link active" aria-current="page">
                                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                                        Tudo
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link link-body-emphasis">
                                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                                        Documentos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link link-body-emphasis">
                                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                                        Eventos
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="nav-link link-body-emphasis">
                                        <svg class="bi pe-none me-2" width="16" height="16"></svg>
                                        Vídeos
                                    </a>
                                </li>
                            </ul>
                           
                        </div>
                    </div>
                    <div className="col-5">
                        <Card maxW='md'>
                            <CardHeader>
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                        <Box>
                                            <Heading size='sm'>Segun Adebayo</Heading>
                                            <Text>Creator, Chakra UI</Text>
                                        </Box>
                                    </Flex>

                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Text>
                                    With Chakra UI, I wanted to sync the speed of development with the speed
                                    of design. I wanted the developer to be just as excited as the designer to
                                    create a screen.
                                </Text>
                            </CardBody>
                            <Image
                                objectFit='cover'
                                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Chakra UI'
                            />

                            <CardFooter
                                justify='space-between'
                                flexWrap='wrap'
                                sx={{
                                    '& > button': {
                                        minW: '136px',
                                    },
                                }}
                            >
                                <Button flex='1' variant='outline' >
                                    Like
                                </Button>
                                <Button flex='1' variant='outline' >
                                    Share
                                </Button>
                            </CardFooter>
                        </Card>

                    </div>

                </div>
            </div>


        </div>

    )
}