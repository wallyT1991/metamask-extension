import React from 'react';
import PropTypes from 'prop-types';
// import { useI18nContext } from '../../../../hooks/useI18nContext';

function ViewSnap({ snap }) {
  // const t = useI18nContext();

  return (
    <div className="settings-page__content-row">
      <div className="settings-page__content-item">
        <div className="settings-page__subheader view-snap__header">
          <div className="view-snap__header__name">{snap.name}</div>
        </div>
        <div className="settings-page__header view-snap__description">
          <div className="view-snap__header__name">{snap.description}</div>
        </div>
      </div>
    </div>
  );
}

ViewSnap.propTypes = {
  snap: PropTypes.object,
  // listRoute: PropTypes.string.isRequired,
};

export default React.memo(ViewSnap);
