import React from 'react';
import { MDBCol, MDBFormInline, MDBBtn } from 'mdbreact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import searchBarActions from '../actions/searchBarActions';

const SearchBar = ({ searchTerm, searchAnime, setSearchTerm }) => (
  <MDBCol md="12">
    <MDBFormInline className="md-form mr-auto mb-4">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search for an anime"
        aria-label="Search"
        value={searchTerm}
        onChange={setSearchTerm}
      />
      <MDBBtn
        gradient="aqua"
        rounded
        size="sm"
        type="submit"
        className="mr-auto"
        onClick={e => {
          e.preventDefault();
          searchAnime(searchTerm);
        }}
      >
        Search
      </MDBBtn>
    </MDBFormInline>
  </MDBCol>
);

SearchBar.propTypes = {
  searchAnime: PropTypes.func.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

SearchBar.defaultProps = {
  searchTerm: '',
};

const mapStateToProps = state => ({
  searchTerm: state.searchState.searchTerm,
});

const { searchAnime, setSearchTerm } = searchBarActions;

export default connect(mapStateToProps, { searchAnime, setSearchTerm })(SearchBar);
