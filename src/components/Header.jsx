import React from "react";
import PropTypes from "prop-types";
import "../style/header.css";

/** Header
 * @param {string} firstName - user's firstname
 * @return {JSX.Element}
 */
const Header = ({ firstName }) => {
  return (
    <div>
      <h1 className="header__title">
        Bonjour <span style={{ color: "#FF0101" }}>{firstName}</span>
      </h1>
      <h2 className="header__slogan">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </h2>
    </div>
  );
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};
export default Header;
