import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MDBContainer, MDBRow } from 'mdbreact';
import OneAnimeGrid from './animeCard';

const AnimeGrid = ({ animeList }) => {
  const animes = animeList.map(anime => <OneAnimeGrid key={anime.mal_id} anime={anime} />);
  return (
    <MDBContainer>
      <MDBRow>{animes}</MDBRow>
    </MDBContainer>
  );
};

AnimeGrid.propTypes = {
  animeList: PropTypes.arrayOf(PropTypes.object),
};

AnimeGrid.defaultProps = {
  animeList: [],
};

const mapStateToProps = state => ({
  animeList: state.searchState.animeList,
});

export default connect(mapStateToProps, {})(AnimeGrid);

// const gridExamplesPage = () => {
//   return (

//   );
// };

// export default gridExamplesPage;
