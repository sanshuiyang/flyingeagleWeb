//还没弄清楚这里的children具体是什么意思

import React from 'react';

function AuthComponent({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}
export default AuthComponent