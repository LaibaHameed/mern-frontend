import React from 'react'

const Table = ({ headers, children }) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full min-w-2xl table-auto border-collapse">
            <thead>
                <tr className="border-b border-gray-500 bg-gray-100">
                    {headers.map((header, index) => (
                        <th key={index} className="text-left px-4 py-2">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
        </div>
    )
}

export default Table