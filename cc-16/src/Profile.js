import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ name, role, picture }) => {
  return (
    <div className="profile">
      <img src={picture} alt={name} className="profile-picture" />
      <div className="profile-name">{name}</div>
      <div className="profile-role">{role}</div>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default Profile;