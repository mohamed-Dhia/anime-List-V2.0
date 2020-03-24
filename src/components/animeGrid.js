import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AnimeGrid = ({ animeList }) => {
  const animeListVis = animeList.map(anime => <li>{anime.title}</li>);
  return <ul>{animeListVis}</ul>;
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
