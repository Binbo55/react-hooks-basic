import React from 'react';
import PropTypes from 'prop-types';

Hero.propTypes = {
    name: PropTypes.string,
};

Hero.defaultProps = {
    name: '',
}

function Hero(props) {

    const { name } = props;

    return (
        <div>
            Hero name: {name}
        </div>
    );
}

export default React.memo(Hero);