import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ImageList from '../components/ImageList';
import backgroundPhoto from '../assets/bg.jpg';
import GetImagesForm from '../forms/GetImages';

const BackgroundImage = styled.img`
  position: fixed;
  top: 0px;
  left: 0px;
  min-width: 100%;
  min-height: 100%;
`;

const Container = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  position: relative;
  font-size: 3rem;
  color: #FFFFFF;
  text-align: center;
  margin-top: 25px;
  font-family: 'Verdana', cursive;
`;

class Home extends Component {
    render() {
        return (
            <div>
                <BackgroundImage src={backgroundPhoto} />
                <Container className="container">
                    <ToastContainer />
                   
                    <Title>
                    My Shibas
                    </Title>
                    <GetImagesForm/>
                    <ImageList />
                </Container>
                <Container className="container">
                </Container>
            </div>
        );
    }
}

export default Home;
