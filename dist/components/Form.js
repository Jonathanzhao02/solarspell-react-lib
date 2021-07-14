import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
//Importing from outside the project
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//Importing from other files of the projects
import { fullEvery } from '../utils';
/**
 * A generic form for submitting data.
 * Takes care of state, validation, and callback.
 * Displays fields in a descending order in a column.
 * @param props The form content and callbacks.
 * @returns A form.
 */
function Form(props) {
    const [state, setState,] = React.useState({});
    const [reasons, setReasons,] = React.useState({});
    // Initializes state with initial values and initial state
    // Initial state takes priority over initialValue properties
    // Also returns a hook on unrender to reset state to empty
    React.useEffect(() => {
        setState(Object.assign(props.fields.reduce((accum, val) => (Object.assign(Object.assign({}, accum), { [val.field]: val.initialValue })), {}), props.initialState));
        return () => {
            setState({});
            setReasons({});
        };
    }, [props.fields, props.initialState, setState]);
    // Setter factory functions
    const genericSetter = React.useCallback((name, val) => {
        setState(oldState => (Object.assign(Object.assign({}, oldState), { [name]: (val instanceof Function) ? val(oldState[name]) : val })));
    }, [setState]);
    const stateSetter = React.useCallback((name) => genericSetter.bind(null, name), [setState, genericSetter]);
    // Performs validation on submission
    const onSubmit = React.useCallback(() => {
        const reasonDraft = {};
        // Check no reasons present
        if (fullEvery(props.fields, item => {
            if (item.validator) {
                const reason = item.validator(state);
                reasonDraft[item.field] = reason;
                return !reason;
            }
            else {
                return true;
            }
        })) {
            props.onSubmit(state);
        }
        setReasons(reasonDraft);
    }, [props.onSubmit, setState, setReasons, state, props.fields]);
    const formBody = (_jsx(Grid, Object.assign({ container: true }, { children: props.fields.map((item, idx) => {
            return (_jsx(Grid, Object.assign({ item: true, xs: 12, style: { marginBottom: '10px' } }, { children: item.component && _jsx(item.component, Object.assign({}, item.propFactory(state, reasons, stateSetter(item.field), genericSetter)), void 0) }), idx));
        }) }), void 0));
    return (props.renderer ?
        _jsx(props.renderer, { body: formBody, onSubmit: onSubmit }, void 0)
        :
            _jsxs(_Fragment, { children: [formBody, _jsx(Button, Object.assign({ onClick: onSubmit }, { children: "Submit" }), void 0)] }, void 0));
}
export default Form;