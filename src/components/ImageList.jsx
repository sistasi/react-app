import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    ListGroup, Table
} from 'reactstrap';
import { connect } from 'react-redux';
import { getImages } from '../services/Images/actions';
import ImageItem from './Image';

const ImageListContainer = styled.div`
    margin-top: 25px;
`;

const LoadingText = styled.h3`
    position: relative;
    color: #FFFFFF;
`;

const Card = styled.div`
    background-color:#FFFFFF;
`;


class ImageList extends Component {
    static propTypes = {
        Images: PropTypes.shape({
            Images: PropTypes.arrayOf(PropTypes.shape({
                // id: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
            })),
            isLoading: PropTypes.shape({
                getting: PropTypes.bool.isRequired,
            }).isRequired,
        }).isRequired,
        getImages: PropTypes.func.isRequired,
    }

    componentWillMount() {
        this.props.getImages(5);
    }

    render() {
        const {
            images,
            isLoading: {
                getting,
            },
        } = this.props.Images;
        console.log(images);
        return (
            <ImageListContainer>
                {getting ? (
                    <LoadingText className="text-center">
                        Loading...
                    </LoadingText>
                ) : (
                        <Card className="card">
                            <div className="card-body">
                                <div className="container">
                                    <div className="row">
                                        {images.map((image, i) => (
                                            <div key={i}>

                                                <ImageItem
                                                    image={image}
                                                    index={i + 1}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    )}
            </ImageListContainer>
        );
    }
}

const mapStateToProps = state => ({
    Images: state.Images,
});

const mapDispatchToProps = {
    getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
