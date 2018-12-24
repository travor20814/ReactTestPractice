import React, { PureComponent } from 'react';
import radium from 'radium';
import {
  Field,
  reduxForm,
} from 'redux-form';
// component
import ErrorBoundary from './ErrorBoundary.jsx';
import Input from '../components/Form/Input.jsx';

const FORM_NAME = 'FORM/TEST_FORM';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrapper: {
    width: 500,
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export class Landing extends PureComponent {
  render() {
    return (
      <ErrorBoundary>
        <form style={styles.wrapper}>
          <div style={styles.inputWrapper}>
            <Field
              name="name"
              label="名稱"
              placeholder="輸入名稱"
              component={Input} />
          </div>
          <div style={styles.inputWrapper}>
            <Field
              name="nickname"
              label="綽號"
              placeholder="輸入綽號"
              component={Input} />
          </div>
        </form>
      </ErrorBoundary>
    );
  }
}

export const formHook = reduxForm({
  form: FORM_NAME,
});

export default formHook(
  radium(
    Landing
  )
);
