/* eslint-disable react/display-name */

import { forwardRef, useImperativeHandle, useRef } from 'react';

export const MyInput = forwardRef((props, ref) => {

    const myRef = useRef(null)

    useImperativeHandle(ref, () => ({
        focus() {
            myRef.current.focus()
        }
    }))

    return <input {...props} ref={myRef} className="border p-2 border-indigo-300 rounded" />;
})
