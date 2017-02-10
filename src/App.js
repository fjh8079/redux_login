import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

// stylesheet
require('../assets/stylesheets/app.scss');

export class App extends React.Component {

    render() {
        const { dispatch } = this.props;
        return (
            <div>
                { this.props.children }
            </div>
        );
    }

}

export default connect()(App)
