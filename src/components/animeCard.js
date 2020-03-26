import React from 'react';
import PropTypes from 'prop-types';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from 'mdbreact';

const AnimeCard = ({ anime }) => {
  return (
    <MDBCol>
      <MDBCard m-2px="true" style={{ width: '14rem' }}>
        <MDBCardImage className="img-fluid" src={anime.image_url} waves />
        <MDBCardBody>
          <MDBCardTitle>{anime.title}</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the
            card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">add to my list</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

AnimeCard.propTypes = {
  anime: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  ).isRequired,
};

export default AnimeCard;
