/*
 * DanPage
 *
 * The best page on the web
 */

/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import H1 from 'components/H1';

// import styles from './styles.css';

export class DanPage extends React.Component {
  openHomePage = () => {
    this.props.dispatch(push('/'));
  };

  openFeaturesPage = () => {
    this.props.dispatch(push('/features'));
  };

  render() {
    return (
      <div>
        <Helmet
          title="Dan Page"
          meta={[
            { name: 'description', content: 'The best page on the web' },
          ]}
        />
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <p>
          <FormattedMessage {...messages.danMessage} />
        </p>
        <Button handleRoute={this.openHomePage}>
          <FormattedMessage {...messages.homeButton} />
        </Button>
        <Button handleRoute={this.openFeaturesPage}>
          <FormattedMessage {...messages.featuresButton} />
        </Button>
      </div>
    );
  }
}

DanPage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(DanPage);
