import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { withRouter } from 'react-router';
import { provideHooks } from 'redial';
import Helmet from 'react-helmet';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import { H1 } from 'components/Title';
import Table from 'components/Table';
import Button from 'components/Button';
import FieldFilterForm from 'containers/forms/FieldFilterForm';

import { getUsers } from 'reducers';
import { fetchUsersList } from './redux';

import styles from './styles.scss';

@withRouter
@withStyles(styles)
@translate()
@provideHooks({
  fetch: ({ dispatch, location: { query } }) => dispatch(fetchUsersList(query)),
})
@connect(state => ({
  users: getUsers(state, state.pages.UsersPage.users),
}))
export default class UsersPage extends React.Component {
  filterUsers(filter) {
    const newFilter = {
      ...this.props.location.query,
      ...filter,
    };

    const query = Object.keys(newFilter).reduce((target, key) => {
      if (newFilter[key]) {
        target[key] = newFilter[key]; // eslint-disable-line
      }

      return target;
    }, { });
    console.log(query);

    this.props.router.push({
      ...this.props.location,
      query,
    });
  }

  render() {
    const { users = [], location, t } = this.props;
    return (
      <div id="users-page">
        <Helmet title={t('Users')} />
        <H1>{ t('Users') }</H1>
        <div>
          <FieldFilterForm
            initialValues={{ email: location.query.email }}
            onSubmit={({ email }) => this.filterUsers({ email })}
          />
        </div>
        <div id="users-table" className={styles.table}>
          <Table
            columns={[
              { key: 'id', title: t('Id') },
              { key: 'email', title: t('Email') },
              { key: 'actions', title: t('Details') },
            ]}
            data={users.map(item => ({
              id: item.id,
              email: <div className={styles.name}>
                {item.email}
              </div>,
              actions: (<Button
                id={`user-details-button-${item.id}`}
                theme="link"
                to={`/users/${item.id}`}
              >
                { t('Show user details') }
              </Button>),
            }))}
          />
        </div>
        <div className={styles.block}>
          <Button to="/users/create">{t('Create new user')}</Button>
        </div>
      </div>
    );
  }
}
