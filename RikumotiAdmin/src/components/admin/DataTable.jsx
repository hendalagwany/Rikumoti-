function DataTable({
    columns,
    data,
    renderActions,
    currentPage = 1,
    itemsPerPage = data.length
}) {
    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th></th>
                    {columns.map(col => (
                        <th key={col.key}>
                            {col.label}
                        </th>
                    ))}
                    {renderActions && <th>Actions</th>}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <td>
                            {(currentPage - 1) * itemsPerPage + index + 1}
                        </td>


                        {columns.map(col => (

                            <td key={col.key} className={col.className}>
                                {col.render ? col.render(item[col.key], item) : item[col.key]}
                            </td>
                        ))}

                        {renderActions && <td>{renderActions(item)}</td>}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default DataTable;