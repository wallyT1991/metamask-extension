import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SiteOrigin from '../../ui/site-origin';
import SnapsAuthorshipPill from '../flask/snaps-authorship-pill';

export default class PermissionsConnectHeader extends Component {
  static propTypes = {
    icon: PropTypes.string,
    iconName: PropTypes.string.isRequired,
    siteOrigin: PropTypes.string.isRequired,
    headerTitle: PropTypes.node,
    headerText: PropTypes.string,
    npmPackageName: PropTypes.string,
  };

  static defaultProps = {
    icon: null,
    headerTitle: '',
    headerText: '',
  };

  renderHeaderIcon() {
    const { icon, iconName, siteOrigin } = this.props;

    return (
      <div className="permissions-connect-header__icon">
        <SiteOrigin siteOrigin={siteOrigin} iconSrc={icon} name={iconName} />
      </div>
    );
  }

  render() {
    const { headerTitle, headerText, npmPackageName } = this.props;
    const npmPackageUrl = `https://www.npmjs.com/package/${npmPackageName}`;
    return (
      <div className="permissions-connect-header">
        {this.renderHeaderIcon()}
        <div className="permissions-connect-header__title">{headerTitle}</div>
        {npmPackageName ? (
          <SnapsAuthorshipPill
            packageName={npmPackageName}
            url={npmPackageUrl}
          />
        ) : null}
        <div className="permissions-connect-header__subtitle">{headerText}</div>
      </div>
    );
  }
}
