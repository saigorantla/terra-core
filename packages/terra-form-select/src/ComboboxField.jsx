import React from 'react';
import PropTypes from 'prop-types';
import Field from 'terra-form-field';
import Combobox from './Combobox';
import OptGroup from './shared/_OptGroup';
import Option from './shared/_Option';

const propTypes = {
  /**
   * Whether a clear option is available to clear the selection.
   */
  allowClear: PropTypes.bool,
  /**
   * The select options.
   */
  children: PropTypes.node,
  /**
   * The field label.
   */
  label: PropTypes.string.isRequired,
  /**
   * The default value of the select. Can be a string, number, or array of strings/numbers.
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  /**
   * Whether the input is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Error message displayed when the select is invalid.
   */
  error: PropTypes.node,
  /**
   * Help message to display with the select.
   */
  help: PropTypes.node,
  /**
   * Whether to hide the required indicator on the label.
   */
  hideRequired: PropTypes.bool,
  /**
   * Whether the field displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
   */
  isIncomplete: PropTypes.bool,
  /**
   * Whether the field is displayed inline. Displays block by default.
   */
  isInline: PropTypes.bool,
  /**
   * Whether the field displays as Invalid. Use when value does not meet validation pattern.
   */
  isInvalid: PropTypes.bool,
  /**
   * Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines.
   */
  isLabelHidden: PropTypes.bool,
  /**
   * Ensures touch accessibility by rendering the dropdown inline without a portal.
   *
   * Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.
   * The dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor.
   */
  isTouchAccessible: PropTypes.bool,
  /**
   * Additional attributes to spread onto the label.
   */
  // eslint-disable-next-line react/forbid-prop-types
  labelAttrs: PropTypes.object,
  /**
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: PropTypes.string,
  /**
   * Callback function triggered when the select value changes. function(value)
   */
  onChange: PropTypes.func,
  /**
   * Placeholder text.
   */
  placeholder: PropTypes.string,
  /**
   * Whether the field is required.
   */
  required: PropTypes.bool,
  /**
   * Additional attributes to spread onto the select.
   */
  // eslint-disable-next-line react/forbid-prop-types
  selectAttrs: PropTypes.object,
  /**
   * The Select identifier. Links the htmlFor of the field to the select identifier.
   */
  selectId: PropTypes.string.isRequired,
  /**
   * Whether to append the 'optional' label to a non-required field label.
   */
  showOptional: PropTypes.bool,
  /**
   * The value of the select. Can be a string, number, or array of strings/numbers.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
};

const defaultProps = {
  allowClear: false,
  children: undefined,
  defaultValue: undefined,
  disabled: false,
  error: undefined,
  help: undefined,
  hideRequired: false,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isTouchAccessible: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxWidth: undefined,
  onChange: undefined,
  placeholder: undefined,
  required: false,
  selectAttrs: {},
  showOptional: false,
  value: undefined,
};

const ComboboxField = ({
  allowClear,
  children,
  defaultValue,
  disabled,
  error,
  help,
  hideRequired,
  isIncomplete,
  isInline,
  isInvalid,
  isLabelHidden,
  isTouchAccessible,
  label,
  labelAttrs,
  maxWidth,
  onChange,
  placeholder,
  required,
  selectAttrs,
  selectId,
  showOptional,
  value,
  ...customProps
}) => {
  let ariaDescriptionIds;

  if (help && error && isInvalid) {
    ariaDescriptionIds = `${selectId}-error ${selectId}-help`;
  } else {
    if (help) {
      ariaDescriptionIds = `${selectId}-help`;
    }

    if (error && isInvalid) {
      ariaDescriptionIds = `${selectId}-error`;
    }
  }

  return (
    <Field
      {...customProps}
      label={label}
      labelAttrs={labelAttrs}
      error={error}
      help={help}
      hideRequired={hideRequired}
      required={required}
      showOptional={showOptional}
      isInvalid={isInvalid}
      isInline={isInline}
      isLabelHidden={isLabelHidden}
      htmlFor={selectId}
      maxWidth={maxWidth}
    >
      <Combobox
        {...selectAttrs}
        ariaLabel={label}
        allowClear={allowClear}
        aria-describedby={ariaDescriptionIds}
        disabled={selectAttrs.disabled || disabled}
        inputId={selectId}
        isIncomplete={isIncomplete}
        isInvalid={isInvalid}
        isTouchAccessible={isTouchAccessible}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        value={value}
      >
        {children}
      </Combobox>
    </Field>
  );
};

ComboboxField.propTypes = propTypes;
ComboboxField.defaultProps = defaultProps;

ComboboxField.Option = Option;
ComboboxField.OptGroup = OptGroup;

export default ComboboxField;
