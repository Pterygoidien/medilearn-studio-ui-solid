import { Component, splitProps, type JSX } from "solid-js";
import { TextInputProps } from "./types/TextInputProps";

export const TextInput: Component<TextInputProps> = (props:TextInputProps): JSX.Element => { 
    const [, inputProps] = splitProps(props, ['value', 'label', 'error'])
    return (
        <>
            {props.label && <label>{props.label}</label>}
            <input {...inputProps}
                id={props.name}
                value={props.value || ''}
                aria-invalid={!!props.error}
                aria-errormessage={`${props.name}-error`}
            />
            {props.error && <span id={`${props.name}-error`}>{props.error}</span>}
        </>
    )
};