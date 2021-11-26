import React, { useCallback, useState } from 'react';
import { useI18nContext } from '../../../../hooks/useI18nContext';
import Modal from '../../modal';
import CheckBox from '../../../ui/check-box/check-box.component';
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../../store/actions';

export default function SnapInstallWarning() {
  const t = useI18nContext();
  const dispatch = useDispatch();

  const [isConfirmed, setIsConfirmed] = useState(false);

  const onCheckboxClicked = useCallback(() => setIsConfirmed(!isConfirmed));
  const onCancel = useCallback(() => dispatch(hideModal()));
  return (
    <Modal
      onSubmit={() => {}}
      onCancel={onCancel}
      submitText={t('approveAndInstall')}
      cancelText={t('cancel')}
      submitDisabled={!isConfirmed}
    >
      <div className="snap-install-warning">
        <div className="header">{t('areYouSure')}</div>
        <div className="subheader">{t('snapInstallWarningCheck')}</div>
        <div className="checkbox-label">
          <CheckBox
            checked={isConfirmed}
            disabled={false}
            id="warning-accept"
            onClick={onCheckboxClicked}
          />
          <label htmlFor="warning-accept">
            {t('snapInstallWarningKeyAccess', ['Filecoin'])}
          </label>
        </div>
      </div>
    </Modal>
  );
}
