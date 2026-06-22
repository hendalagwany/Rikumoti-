function ManagementLayout({ header, children }) {
    return (
        <div className="management-page">
            {header}
            <br />
            

            <div className="management-content">
                {children}
            </div>
        </div>
    );
}

export default ManagementLayout;