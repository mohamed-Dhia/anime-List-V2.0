import React, { useState } from 'react';
import { MDBCol, MDBFormInline, MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import services from '../services';
import searchBarActions from '../actions/searchBarActions';

// const {
//   searchBarService: { searchAnime },
// } = services;
const { searchAnime } = searchBarActions;

const SearchBar = props => {
  const [searchTerm, setSearchTerm] = useState('');
  // const [animeList, setAnimeList] = useState([]);

  const updateTerm = e => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const submit = async e => {
    e.preventDefault();
    await props.searchAnime(searchTerm);
    // setAnimeList(await searchAnime(searchTerm));
  };

  return (
    <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={updateTerm}
        />
        <MDBBtn
          gradient="aqua"
          rounded
          size="sm"
          type="submit"
          className="mr-auto"
          onClick={submit}
        >
          Search
        </MDBBtn>
      </MDBFormInline>
    </MDBCol>
  );
};

SearchBar.prototype = {
  searchAnime: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  animeList: state.animeList,
});

export default connect(mapStateToProps, { searchAnime })(SearchBar);
