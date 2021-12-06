import React, { useState } from 'react';
import { Provider } from 'react-redux';
// import { object, boolean, select } from '@storybook/addon-knobs';

import configureStore from '../../../store/store';
import testData from '../../../../.storybook/test-data';
import SnapListTab from './snap-list-tab.component';

// Using Test Data For Redux
const store = configureStore(testData);

export default {
  title: 'Pages/Settings/SnapListTab',
  id: __filename,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};
export const DefaultStory = () => {
  const state = store.getState();
  const [viewingSnap, setViewingSnap] = useState();
  const [snap, setSnap] = useState();

  return (
    <div>
      <SnapListTab
        snaps={state.metamask.snaps}
        viewingSnap={viewingSnap}
        snap={snap}
        onClick={(_, s) => {
          setSnap(s);
          setViewingSnap(true);
        }}
      />
    </div>
  );
};

DefaultStory.storyName = 'Default';
