import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface StyleProps {
  imageSize?: string;
  textMargin?: string;
  currentPathName: string;
  pagePathName: string;
}

const Image = styled.img<StyleProps>`
  width: ${({ imageSize }) => (imageSize ? imageSize : 'auto')};
  height: ${({ imageSize }) => (imageSize ? imageSize : 'auto')};
  opacity: ${({ currentPathName, pagePathName }) => (currentPathName === pagePathName ? 1 : 0.4)};
`;

const Title = styled.span<StyleProps>`
  margin-top: ${({ textMargin }) => (textMargin ? textMargin : '0px')};
  font-weight: 300;
  font-size: 13px;
  color: #90a0c1;
  line-height: 18px;
  white-space: nowrap;
  opacity: ${({ currentPathName, pagePathName }) => (currentPathName === pagePathName ? 1 : 0.4)};
`;

interface ButtonLinkLayoutProps {
  title: string;
  imageUrl: string;
  imageSize?: string;
  textMargin?: string;
  pagePathName: string;
}

const ButtonLinkLayout = ({ title, imageUrl, imageSize, textMargin, pagePathName }: ButtonLinkLayoutProps) => {
  const currentPathName = useLocation().pathname;

  return (
    <>
      <Image
        src={imageUrl}
        alt=""
        imageSize={imageSize || ''}
        currentPathName={currentPathName}
        pagePathName={pagePathName}
      />
      <Title textMargin={textMargin} currentPathName={currentPathName} pagePathName={pagePathName}>
        {title}
      </Title>
    </>
  );
};

export default ButtonLinkLayout;
