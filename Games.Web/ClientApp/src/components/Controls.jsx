import React from 'react';
import PropTypes from 'prop-types';

import PlayingCard from './PlayingCard';

const Controls = props => {
    const { input, wildcard } = props;
    return <div>
        {input}
        <PlayingCard back />
        {wildcard}
    </div>;
};
Controls.propTypes = {
    input: PropTypes.node.isRequired,
    wildcard: PropTypes.node.isRequired
};
Controls.defaultProps = {
    input: null,
    wildcard: null
};

export default Controls;