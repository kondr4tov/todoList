import { generateUtilityClass, generateUtilityClasses } from '@mui/base';
export function getInputBaseUtilityClass(slot) {
  return generateUtilityClass('MuiInputBase', slot);
}
var inputBaseClasses = generateUtilityClasses('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'readOnly', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);
export default inputBaseClasses;