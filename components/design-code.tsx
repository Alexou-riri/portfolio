import Image from 'next/image';
import React from 'react';
import { Container } from './container';
import { StyledDesignPlus } from './styles/index.styles';

const DesignCode = () => {
  return (
    <StyledDesignPlus>
      <Container className="container">
        <div className="text">
          <h2>Logistic+Code</h2>
          <p>
            In the last 5 years, I've been working in logistics and seeing
            different problems and situation that could be fixed or changed with
            the right application.
          </p>
        </div>
        <div className="image">
          <Image
            src="/images/article-preview.png"
            height={200}
            width={350}
            sizes="(min-width: 759px) 800px"
            alt="article preview"
          />
        </div>
      </Container>
    </StyledDesignPlus>
  );
};

export default DesignCode;
