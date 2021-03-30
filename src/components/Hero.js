import React from 'react';
import styled from 'styled-components';
import BgImg from '../assets/Hero.png';

const Section = styled.section`
    background-image: url(${BgImg});
    height: 785px;
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
`;
const Content = styled.div`
    width: 100%;
    height: 100px;
`;
const Left = styled.div``;
const Title = styled.p``;
const Desc = styled.p``;
const Button = styled.a``;

const Hero = () => {
    return (
        <Section>
            <Content>
                <Left>
                    <Title>
                        Get 2 FREE Stocks <br/> valued up to $1850!
                    </Title>
                        <Desc>
                        Open and fund a brokerage account with $100 or more and you will 
                        have a chance of claiming stocks like <span>GOOG, FB, SBUX</span> 
                        and more!

                        </Desc>
                        <Button href='https://invest.webull.com/auth/simple/signup?hl=en&os=web_pc&source=invite_gw&redirect_uri=https%3A%2F%2Fwww.webull.com%2Fcenter' target='_blank'>
                            <span>Claim your free stocks now</span>
                        </Button>
                    
                </Left>
            </Content>
        </Section>
    )
}

export default Hero
