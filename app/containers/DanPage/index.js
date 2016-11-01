/*
 * DanPage
 *
 * The best page on the web
 */
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Helmet from 'react-helmet';

import messages from './messages';
import { FormattedMessage } from 'react-intl';
import H1 from 'components/H1';

export class DanPage extends React.Component {

}

DanPage.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(DanPage);
