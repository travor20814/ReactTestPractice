/*
Test Target
1. Component wrap with label, and label has htmlFor={name}
2. When label props exist, should have <span> tag to show label
3. When meta: { error } exist, show error annotation
4. When type === 'textarea', show <textarea />. Otherwise, show <input />
-textarea-
1. textarea has name/value/placeholder
2. textarea onChange work correctly
3. when disabled(prop) = true, disabled attribute should be true
-input-
1. input has type/name/value/placeholder
2. input onChange work correctly
3. when disabled(prop) = true, disabled attribute should be true
*/

import React from 'react';
import { expect } from 'chai';
import {
  shallow,
} from 'enzyme';
import sinon from 'sinon';

import { Input } from '../../../components/Form/Input.jsx';

describe('components/Form/Input.jsx', () => {
  // test target
  let subject = null;
  // props
  let input;
  let placeholder;
  let label;
  let type;
  let meta;
  let disabled;

  const TextInputSubject = () => {
    const props = {
      type,
      label,
      input,
      placeholder,
      meta,
      disabled,
    };

    return shallow(<Input {...props} />);
  };

  beforeEach(() => {
    input = {
      value: null,
      onChange: () => {},
      name: null,
    };
    placeholder = null;
    label = null;
    type = null;
    meta = {
      error: null,
    };
    disabled = false;
  });

  it('Component wrap with label and has htmlFor props', () => {
    input = {
      name: 'Input',
    };
    subject = TextInputSubject();
    const wrapLabel = subject.find('label');
    expect(wrapLabel).to.have.lengthOf(1);
    expect(wrapLabel.prop('htmlFor')).to.equal(input.name);
  });

  it('When error occurred, should have an annotation', () => {
    meta = {
      error: 'Error',
    };
    subject = TextInputSubject();
    const errorText = subject.find('span');
    expect(errorText).to.have.lengthOf(1);
    expect(errorText.text()).to.equal('!');
  });

  it('When label exist, should show label text', () => {
    label = 'I have label';
    subject = TextInputSubject();
    const labelText = subject.find('span');
    expect(labelText).to.have.lengthOf(1);
    expect(labelText.text()).to.equal(label);
  });

  context('When type is textarea', () => {
    it('should show textarea instead of input', () => {
      type = 'textarea';
      subject = TextInputSubject();
      const textArea = subject.find('textarea');
      expect(textArea.exists()).to.equal(true);
    });

    it('textarea should have name/value/placeholder(at least)', () => {
      type = 'textarea';
      input = {
        name: 'Input',
        onChange: () => {},
        value: 'Some Text',
      };
      placeholder = 'Hey placeholder';
      meta = {
        error: null,
      };
      subject = TextInputSubject();
      const textAreaProps = subject.find('textarea').props();
      expect(textAreaProps.name).to.equal(input.name);
      expect(textAreaProps.value).to.equal(input.value);
      expect(textAreaProps.placeholder).to.equal(placeholder);
    });

    it('textarea onChange work correctly', () => {
      type = 'textarea';
      input = {
        name: 'Input',
        onChange: sinon.spy(),
        value: 'Some Text',
      };
      subject = TextInputSubject();
      const textArea = subject.find('textarea');
      textArea.simulate('change');
      expect(input.onChange.callCount).to.equal(1);
    });

    it('when disabled(prop) = true, disabled attribute should be true', () => {
      type = 'textarea';
      disabled = true;
      subject = TextInputSubject();
      const textAreaProps = subject.find('textarea').props();
      expect(textAreaProps.disabled).to.equal(true);
    });
  });

  context('When type is "not" textarea', () => {
    it('should render an input tag', () => {
      type = 'text';
      subject = TextInputSubject();
      const textInput = subject.find('input');
      expect(textInput).to.have.lengthOf(1);
    });

    it('input should have type/name/value/placeholder(at least)', () => {
      type = 'text';
      input = {
        name: 'Input',
        onChange: () => {},
        value: 'Some Text',
      };
      placeholder = 'Hey placeholder';
      meta = {
        error: null,
      };
      subject = TextInputSubject();

      const textInputProps = subject.find('input').props();
      expect(textInputProps.type).to.equal(type);
      expect(textInputProps.name).to.equal(input.name);
      expect(textInputProps.value).to.equal(input.value);
      expect(textInputProps.placeholder).to.equal(placeholder);
    });

    it('input onChange work correctly', () => {
      type = 'text';
      input = {
        name: 'Input',
        onChange: sinon.spy(),
        value: 'Some Text',
      };
      subject = TextInputSubject();
      const textInput = subject.find('input');
      textInput.simulate('change');
      expect(input.onChange.callCount).to.equal(1);
    });

    it('when disabled(prop) = true, disabled attribute should be true', () => {
      type = 'text';
      disabled = true;
      subject = TextInputSubject();
      const textInputProps = subject.find('input').props();
      expect(textInputProps.disabled).to.equal(true);
    });
  });
});
