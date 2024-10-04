/* eslint-disable react/prop-types */
import { CustomCard } from '../../../chakra/CustomCard';
import { Tag, Text } from '@chakra-ui/react'

const Infocard = ({ title, text, tag_color, imgUrl, bgColor, textColor, tag_text_color  }) => {
  return (
    <CustomCard bgImage={imgUrl} bgSize="cover" bgColor={bgColor}bgRepeat="no-repeat">
        <Tag bg={tag_color} color={tag_text_color} borderRadius="full">
            {title}
        </Tag>
        <Text mt="4" fontWeight="medium" textStyle="h5" color={textColor}>
        {text}
        </Text>
    </CustomCard>
  )
}

export default Infocard;