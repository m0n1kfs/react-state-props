// mode = danger, warning, secondary

function Panel({ mode = 'secondary', className = '', children }) {     {/* En lugar de usar "props" se pone un {} y siempre incluir el clasName vacío */}    
    return(
        <div className={`bg-${mode}-subtle p-3 rounded ${className}`}>
            {children}
        </div>
    )
}

export default Panel;