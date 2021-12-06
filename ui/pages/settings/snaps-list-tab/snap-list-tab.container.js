import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ENVIRONMENT_TYPE_POPUP } from '../../../../shared/constants/app';
import { getEnvironmentType } from '../../../../app/scripts/lib/util';

import { SNAPS_VIEW_ROUTE } from '../../../helpers/constants/routes';
import SnapListTab from './snap-list-tab.component';

const mapStateToProps = (state, ownProps) => {
  const { location, history } = ownProps;
  const { pathname } = location;

  const viewingSnap = Boolean(pathname.match(SNAPS_VIEW_ROUTE));
  const pathNameTail = pathname.match(/[^/]+$/u)[0];
  const envIsPopup = getEnvironmentType() === ENVIRONMENT_TYPE_POPUP;
  const onClick = (_, snap) => {
    history.push(`${SNAPS_VIEW_ROUTE}/${snap.name}`);
  };
  return {
    snaps: state.metamask.snaps,
    snap: state.metamask.snaps.find((snap) => snap.name === pathNameTail),
    viewingSnap,
    envIsPopup,
    onClick,
  };
};

export default compose(withRouter, connect(mapStateToProps))(SnapListTab);
