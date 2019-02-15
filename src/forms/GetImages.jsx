import React, { Component } from 'react';
import styled from 'styled-components';
import ImageForm from './ImageForm';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getImages } from '../services/Images/actions';

const Card = styled.div`
margin-top: 25px;
`;

class GetImages extends Component {
    static propTypes = {
        getImages: PropTypes.func.isRequired,
    }
    
    render() {
        return (
            <Card className="card">
                <div className="card-body">
                    <ImageForm 
                          onSubmit={({ imgCount }) => {
                            this.props.getImages(imgCount);
                        }}
                    />
                </div>
            </Card>
        );
    }
}


const mapDispatchToProps = {
    getImages,
};

export default connect(() => ({}), mapDispatchToProps)(GetImages);