import React from 'react'

function Alert({ alert }) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div style={{ height: '40px' }}>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(alert.type)}</strong>: {alert.message}
            </div>}
        </div>
    )
}

export default Alert