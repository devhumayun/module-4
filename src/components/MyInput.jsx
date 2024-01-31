/* eslint-disable react/display-name */

import { forwardRef } from 'react';

export const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} className="border p-2 border-indigo-300 rounded" />;
})
