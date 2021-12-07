import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useI18nContext } from '../../../hooks/useI18nContext';

const UNKNOWN_PERMISSION = Symbol('unknown');

export default function PermissionsConnectPermissionList({ permissions }) {
  const t = useI18nContext();

  // TODO:flask Fix Snap permission labels and support namespaced permissions
  const PERMISSION_TYPES = useMemo(() => {
    return {
      'eth_accounts': {
        leftIcon: 'fas fa-eye',
        label: t('eth_accounts'),
        rightIcon: null,
      },
      ///: BEGIN:ONLY_INCLUDE_IN(flask)
      'snap_confirm': {
        leftIcon: 'fas fa-eye',
        label: 'snap_confirm',
        rightIcon: null,
      },
      // TODO: We need a function to pass substitutions to `t` for this.
      'snap_getBip44Entropy_*': {
        leftIcon: 'fas fa-eye',
        label: 'snap_getBip44Entropy_*',
        rightIcon: null,
      },
      'snap_manageState': {
        leftIcon: 'fas fa-eye',
        label: 'snap_manageState',
        rightIcon: null,
      },
      'wallet_snap_*': {
        leftIcon: 'fas fa-eye',
        label: 'wallet_snap_*',
        rightIcon: null,
      },
      ///: END:ONLY_INCLUDE_IN
      [UNKNOWN_PERMISSION]: {
        leftIcon: null,
        label: 'Unknown Permission',
        rightIcon: null,
      },
    };
  }, [t]);

  ///: BEGIN:ONLY_INCLUDE_IN(flask)
  // TODO:flask Replace this with something better
  const getPermissionKey = (permissionName) => {
    if (PERMISSION_TYPES[permissionName]) {
      return permissionName;
    }

    let key = '';
    const split = permissionName.split('_');
    for (let i = 1; i < split.length; i++) {
      key = `${key.replace(/_\*$/u, '')}${split[i - 1]}_${split[i]}_*`;

      if (PERMISSION_TYPES[key]) {
        return key;
      }
    }
    return UNKNOWN_PERMISSION;
  };
  ///: END:ONLY_INCLUDE_IN

  return (
    <div className="permissions-connect-permission-list">
      {Object.keys(permissions).map((permission) => {
        const permissionKey = getPermissionKey(permission);
        console.log('PERM', permission, permissionKey);
        return (
          <div
            className="permission"
            key={PERMISSION_TYPES[permissionKey].label}
          >
            <i className={PERMISSION_TYPES[permissionKey].leftIcon} />
            {PERMISSION_TYPES[permissionKey].label}
            <i className={PERMISSION_TYPES[permissionKey].rightIcon} />
          </div>
        );
      })}
    </div>
  );
}

PermissionsConnectPermissionList.propTypes = {
  permissions: PropTypes.objectOf(PropTypes.bool).isRequired,
};
