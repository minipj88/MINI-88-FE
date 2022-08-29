import React from 'react';
import styled from 'styled-components';

interface StyleProps {
  imageSize?: string
  textMargin?: string;
  textMargin2?:string;
}

const Wrapper = styled.div`
  position:absolute;
  left:16px;
  right:16px;
  top:124px;
  
`

const Image = styled.img<StyleProps>`
  width: ${({imageSize}) => imageSize ? imageSize : '362px'};
  height: ${({imageSize}) => imageSize ? imageSize : '362px'};
  margin: 0 auto;
  display:block;
`
const InfoTitle = styled.p<StyleProps>`
 font-weight:bold;
 font-size:24px;
 line-height:141%;
 color:#001533;
 width:fit-content;
 height:42px;
 margin: ${({textMargin}) => textMargin ? textMargin : 0};
 
`
const InfoMessage = styled.p<StyleProps>`
  font-size:16px;
  line-height:150%;
  font-weight: 300;
  
  width: fit-content;
  margin: ${({textMargin2}) => textMargin2 ? textMargin2 : 0};
  word-break:keep-all;
`


interface GreetingLayoutProps {
  imageUrl : string;
  title: string;
  message: string;
  imageSize?:string;
  textMargin?: string;
  textMargin2?: string;
}


const GreetingLayout = ({imageUrl,title,message,imageSize,textMargin,textMargin2}:GreetingLayoutProps) => {
  return (
    <Wrapper>
    <Image src={imageUrl} alt="" imageSize={imageSize || ''} />
    <InfoTitle textMargin={textMargin} >
      {title}
    </InfoTitle>
    <InfoMessage textMargin2={textMargin2}>
      {message}
    </InfoMessage>
  </Wrapper>
  );
};

export default GreetingLayout;