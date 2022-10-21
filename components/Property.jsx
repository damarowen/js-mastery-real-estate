import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { useMediaQuery } from '@chakra-ui/react'

import DefaultImage from '../assets/images/house.jpg'

import { createBreakpoints } from "@chakra-ui/theme-tools"


//props if object from response api
const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } }) => {
  
  return (
<Link href={`/property/${externalID}`} passHref>
      {/* <Flex flexWrap='wrap' justifyContent='center'  m='10'> */}
    <Flex flexWrap='wrap' w={{ sm: "none", lg: "420px" }} p='5'  cursor='pointer' m={{ sm: "none", md: "15", lg:"10",  xl:"0"}} justifyContent={{ base: "center" }}
>
      {/* main foto */}
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt=""/>
      </Box>
      {/* deskripsi */}
      {/* <Box  w='420px'>  MOBILE*/}
      <Box > 
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
            <Text fontWeight='bold' fontSize='lg'  m="4">AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size='lg' src={agency?.logo?.url}></Avatar>
          </Box>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
 <Text fontSize='lg' >
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
        </Box>

       
      </Box>
    </Flex>
  </Link>

  )
};

export default Property;