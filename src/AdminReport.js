import React, { useState, useEffect } from 'react';

const AdministratorPage = () => {
    // Use state to store the report data and any errors that may occur
    const [reportData, setReportData] = useState(null);
    const [websiteUsageData, setWebsiteUsageData] = useState(null);
    const [error, setError] = useState(null);

    // Fetch the report data from the backend when the component mounts
    useEffect(() => {
        fetch('/api/generate-report')
            .then((response) => response.json())
            .then((data) => setReportData(data))
            .catch((error) => setError(error));
    }, []);

    const generateReport = () => {
        // Fetch the report data from the backend and update the state
        fetch('/api/generate-report')
            .then((response) => response.json())
            .then((data) => setReportData(data))
            .catch((error) => setError(error));
    };

    const generateWebsiteUsageReport = () => {
        // Fetch the website usage data from the backend and update the state
        fetch('/api/generate-website-usage-report')
            .then((response) => response.json())
            .then((data) => setWebsiteUsageData(data))
            .catch((error) => setError(error));
    };

    return (
        <div>
            <h1>Administrator Page</h1>
            {/* Button to generate the report */}
            <button onClick={generateReport}>Generate report</button>
            {/* Button to generate the website usage report */}
            <button onClick={generateWebsiteUsageReport}>
                Generate website usage report
            </button>
            {/* Show the report data or any errors that occurred */}
            {reportData && (
                <div>
                    <h2>Report</h2>
                    <pre>{JSON.stringify(reportData, null, 2)}</pre>
                </div>
            )}
            {websiteUsageData && (
                <div>
                    <h2>Website Usage Report</h2>
                    <pre>{JSON.stringify(websiteUsageData, null, 2)}</pre>
                </div>
            )}
            {error && <p>{error.message}</p>}
        </div>
    );
};

export default AdministratorPage;