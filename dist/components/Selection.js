import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
// Form components only used for layout
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import ButtonDialog from './ButtonDialog';
/**
 * Dialog form for selecting keys of an object using checkboxes.
 * @param props Context, callback, and styling of the component.
 * @returns A dialog form.
 */
function Selection(props) {
    const [state, setState] = React.useState({});
    const setterFactory = React.useCallback((field) => (_e, checked) => setState(state => (Object.assign(Object.assign({}, state), { [field]: checked }))), []);
    const onClose = React.useCallback(() => props.onClose(state), [props.onClose, state]);
    return (_jsx(ButtonDialog, Object.assign({ open: props.open, onClose: onClose, buttonColor: 'primary', size: 'sm' }, props.dialogStyle, { children: _jsx(FormGroup, { children: props.fields.map((field, idx) => {
                var _a;
                return (_jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: (_a = state[field.field]) !== null && _a !== void 0 ? _a : false, onChange: setterFactory(field.field) }, void 0), label: field.title }, idx));
            }) }, void 0) }), void 0));
}
export default Selection;