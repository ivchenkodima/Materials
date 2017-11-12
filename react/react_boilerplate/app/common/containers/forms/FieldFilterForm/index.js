import React from 'react';
import withStyles from 'withStyles';
import { reduxForm, Field } from 'redux-form';
import { translate } from 'react-i18next';
import { reduxFormValidate } from 'react-nebo15-validate';

import FieldInput from 'components/reduxForm/FieldInput';

import styles from './styles.scss';

@withStyles(styles)
@translate()
@reduxForm({
  form: 'field-filter-form',
  validate: reduxFormValidate({
    email: {
      required: true,
    },
  }),
})
export default class FieldFilterForm extends React.Component {
  render() {
    const { handleSubmit, submitting, t } = this.props;

    return (
      <form className={styles.main} onSubmit={handleSubmit}>
        <div>
          <Field
            type="text"
            placeholder={t('Enter email')}
            name="email"
            component={FieldInput}
          />
        </div>
        <div>
          <button className={styles.button} disabled={submitting} type="submit">
            { t('Search') }
          </button>
        </div>
      </form>
    );
  }
}
