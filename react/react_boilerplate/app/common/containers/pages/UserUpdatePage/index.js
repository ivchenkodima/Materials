import React from 'react';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { provideHooks } from 'redial';
import Helmet from 'react-helmet';

import FormPageWrapper from 'containers/blocks/FormPageWrapper';
import UserForm from 'containers/forms/UserForm';

import { getUserByID, updateUser } from 'redux/users';
import { getUser } from 'reducers';
import { onDeleteUser } from './redux';

import styles from './styles.scss';

@withStyles(styles)
@translate()
@provideHooks({
  fetch: ({ dispatch, params: { id } }) => Promise.all([
    dispatch(getUserByID(id)),
    dispatch(fetchUserRoles(id)),
  ]),
})
@connect((state, { params: { id } }) => ({
  user: getUser(state, id),
}), ({ onDeleteUser, updateUser }))
export default class UserUpdatePage extends React.Component {
  render() {
    const { onDeleteUser, deleteUserRole, user, updateUser, t, params } = this.props;
    return (
      <FormPageWrapper id="user-update-page" title={t('User details')} back="/users">
        <Helmet title={t('User details')} />
        <UserForm
          initialValues={user}
          update
          onDelete={onDeleteUser}
          onSubmit={values => updateUser(values, user.id)}
        />
      </FormPageWrapper>
    );
  }
}
