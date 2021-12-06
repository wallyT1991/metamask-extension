import React from 'react';
import PropTypes from 'prop-types';
import SnapSettingsCard from '../../../components/app/flask/snap-settings-card';
import ViewSnap from './view-snap';

const propTypes = {
  snaps: PropTypes.array.isRequired,
  viewingSnap: PropTypes.bool,
  snap: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

const SnapListTab = (props) => {
  if (props.viewingSnap) {
    return <ViewSnap snap={props.snap} />;
  }
  return (
    <div className="snaps-list-wrapper">
      {props.snaps.map((snap, i) => {
        return (
          <SnapSettingsCard
            className="snap-settings-card"
            isEnabled={snap.enabled}
            dateAdded={new Date().toDateString()}
            key={i}
            description={snap.description}
            url={snap.name}
            name={snap.name}
            status={snap.status}
            version={snap.version}
            onClick={(event) => {
              props.onClick(event, snap);
            }}
          />
        );
      })}
    </div>
  );
};

SnapListTab.propTypes = propTypes;

export default SnapListTab;
