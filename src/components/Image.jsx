import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const ImageS = styled.img`
    display: block;
    margin-left: auto;
    margin-right: 12px;
    width: 200px;
`;
const ImageBlock = styled.div`
    position:relative;
    width:100%;
`;

const ImageH2 = styled.h2`
    position: absolute; 
    top: 0; 
    width: 100%; 
`;

const ImageH2Span = styled.span`
    color: white; 
    font: bold 24px/45px Helvetica, Sans-Serif; 
    letter-spacing: -1px;  
    background: rgb(0, 0, 0); /* fallback color */
    background: rgba(0, 0, 0, 0.4);
    padding: 10px; 
`;

class Image extends PureComponent {
    static propTypes = {
        image: PropTypes.string.isRequired,
        index: PropTypes.number,
    }

    render() {
        const { image, index } = this.props;

        return (
          <div>
            <ImageBlock>
            <ImageS src={image} alt="" />      
            <ImageH2><ImageH2Span>{index}</ImageH2Span></ImageH2></ImageBlock><br/>
          </div>
        );
    }
}

export default Image;
