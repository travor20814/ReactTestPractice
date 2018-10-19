// @flow
/* eslint jsx-a11y/label-has-for: 0 */
import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerWrap: {
    width: '100%',
    display: 'flex',
    position: 'relative',
  },
  label: {
    width: '100%',
    fontSize: 16,
    padding: '4px 0',
    letterSpacing: 2,
    whiteSpace: 'nowrap',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  labelText: {
    width: 140,
    padding: '0 10px 0 5px',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: '8px 8px 10px 10px',
    border: '1px solid rgba(140, 143, 147, 0.5)',
    borderRadius: 2,
    backgroundColor: '#fff',
    outline: 0,
    '::-webkit-input-placeholder': {
      color: 'rgba(0, 0, 0, 0.28)',
    },
  },
  textArea: {
    flex: 1,
    height: 200,
    padding: 8,
    border: '1px solid rgba(140, 143, 147, 0.5)',
    borderRadius: 2,
    backgroundColor: '#fff',
    outline: 0,
    resize: 'none',
    lineHeight: 1.5,
    overflowY: 'auto',
  },
  disable: {
    backgroundColor: 'transparent',
    border: 'none',
  },
  errorInput: {
    border: '1px solid rgb(149, 28, 28)',
  },
  disableText: {
    color: 'rgba(0, 0, 0, 0.38)',
    cursor: 'default',
  },
};

type Props = {
  input: {
    value: String,
    name: String,
    onChange: Function,
  },
  placeholder?: String,
  label?: String,
  type?: String,
  style?: Object,
  wrapperStyle?: Object,
  disabled?: Boolean,
  meta: {
    error: String,
  },
};

class Input extends PureComponent<Props> {
  render() {
    const {
      input: {
        value,
        onChange,
        name,
      },
      placeholder,
      label,
      type,
      style,
      wrapperStyle,
      disabled,
      meta: {
        error,
      },
    } = this.props;

    const customStyles = Array.isArray(style) ? style : [style];
    const customWrapperStyles = Array.isArray(wrapperStyle) ? wrapperStyle : [wrapperStyle];

    return (
      <div
        style={[
          styles.wrapper,
          ...customWrapperStyles,
        ]}>
        <div style={styles.innerWrap}>
          <label htmlFor={name} style={[styles.label]}>
            {error ? (
              <span style={{ display: 'block', color: 'rgb(149, 28, 28)' }}>
                !
              </span>
            ) : null}
            {label ? (
              <span style={styles.labelText}>
                {label}
              </span>
            ) : null}
            {type === 'textarea' ? (
              <textarea
                id={name}
                key="input"
                name={name}
                value={value}
                style={[
                  styles.textArea,
                  error && styles.errorInput,
                  disabled && styles.disableText,
                  ...customStyles,
                ]}
                placeholder={placeholder}
                disabled={disabled}
                onChange={e => onChange(e)} />
            ) : (
              <input
                id={name}
                key="input"
                type={type}
                value={value}
                checked={value || false}
                onChange={e => onChange(e)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') e.preventDefault();
                }}
                name={name}
                placeholder={placeholder}
                disabled={disabled}
                style={[
                  styles.input,
                  error && styles.errorInput,
                  disabled && styles.disableText,
                  ...customStyles,
                ]} />
            )}
          </label>
        </div>
      </div>
    );
  }
}

Input.defaultProps = {
  type: 'text',
  style: [],
  wrapperStyle: [],
  placeholder: '',
  label: null,
  disabled: false,
};

export default radium(Input);
