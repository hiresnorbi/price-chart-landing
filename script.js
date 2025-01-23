// Sample data for the chart
const monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Golden Retriever',
            data: [280, 290, 300, 310, 300, 300, 295, 305, 315, 310, 300, 290],
            borderColor: '#0a6638',
            backgroundColor: '#ffe50020',
            borderWidth: 2,
            tension: 0.1,
            fill: true
        }
    ]
};

// Create the chart
const ctx = document.getElementById('priceChart').getContext('2d');
new Chart(ctx, {
    type: 'line',
    data: monthlyData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Golden Retriever Average Price Trend 2024',
                color: '#0a6638'
            },
            legend: {
                labels: {
                    color: '#0a6638'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: true,
                    text: 'Price (£)',
                    color: '#0a6638'
                },
                ticks: {
                    color: '#0a6638'
                }
            },
            x: {
                ticks: {
                    color: '#0a6638'
                }
            }
        }
    }
});

// Listings Chart
const listingsData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'New Listings',
        data: [45, 52, 48, 60, 55, 58, 62, 65, 58, 56, 50, 48],
        borderColor: '#0a6638',
        backgroundColor: '#ffe50020',
        borderWidth: 2,
        tension: 0.1,
        fill: true
    }]
};

const listingsChart = new Chart(document.getElementById('listingsChart').getContext('2d'), {
    type: 'line',
    data: listingsData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Golden Retriever Listings (2024)',
                color: '#0a6638'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Listings',
                    color: '#0a6638'
                }
            }
        }
    }
});

// Sales Chart
const salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Sold Puppies',
        data: [38, 45, 42, 50, 48, 52, 55, 58, 50, 48, 44, 40],
        borderColor: '#0a6638',
        backgroundColor: '#ffe50020',
        borderWidth: 2,
        tension: 0.1,
        fill: true
    }]
};

const salesChart = new Chart(document.getElementById('salesChart').getContext('2d'), {
    type: 'line',
    data: salesData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Golden Retriever Sales (2024)',
                color: '#0a6638'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Sales',
                    color: '#0a6638'
                }
            }
        }
    }
});

// Search Interest Chart
const searchData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Search Interest',
        data: [65, 85, 72, 95, 68, 90, 75, 100, 82, 93, 70, 88],
        borderColor: '#0a6638',
        backgroundColor: '#ffe50020',
        borderWidth: 2,
        tension: 0.1,
        fill: true
    }]
};

const searchChart = new Chart(document.getElementById('searchChart').getContext('2d'), {
    type: 'line',
    data: searchData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Golden Retriever Search Interest (2024)',
                color: '#0a6638'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Search Interest (0-100)',
                    color: '#0a6638'
                }
            }
        }
    }
}); 