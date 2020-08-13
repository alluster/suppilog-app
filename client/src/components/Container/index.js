import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
	padding-right: 10px;


`;



const Container = ({children, className}) => {
    return(
        <Wrapper className={className}>
            {children}
        </Wrapper>
    );
};

 Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
 }

export default Container;