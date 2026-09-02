// Sample data
const donors = [
    { name: 'John Smith', bloodGroup: 'O+', location: 'New York', lastDonation: '2024-08-15', status: 'eligible' },
    { name: 'Sarah Johnson', bloodGroup: 'A+', location: 'Los Angeles', lastDonation: '2024-07-20', status: 'eligible' },
    { name: 'Mike Davis', bloodGroup: 'B+', location: 'Chicago', lastDonation: '2024-09-01', status: 'donated' },
    { name: 'Emma Wilson', bloodGroup: 'AB+', location: 'Houston', lastDonation: '2023-12-10', status: 'ineligible' },
    { name: 'James Brown', bloodGroup: 'O-', location: 'Phoenix', lastDonation: '2024-08-20', status: 'eligible' },
    { name: 'Lisa Anderson', bloodGroup: 'A-', location: 'Philadelphia', lastDonation: '2024-07-15', status: 'eligible' }
];

const requests = [
    { id: 1, bloodGroup: 'O+', units: 5, hospital: 'City Medical Center', patient: 'Robert Lee', urgency: 'critical', status: 'pending' },
    { id: 2, bloodGroup: 'A+', units: 3, hospital: 'St. Luke Hospital', patient: 'Jennifer White', urgency: 'urgent', status: 'pending' },
    { id: 3, bloodGroup: 'B+', units: 2, hospital: 'General Hospital', patient: 'David Martin', urgency: 'normal', status: 'fulfilled' },
    { id: 4, bloodGroup: 'AB-', units: 4, hospital: 'City Medical Center', patient: 'Mary Taylor', urgency: 'urgent', status: 'pending' }
];

const bloodbanks = [
    { name: 'Central Blood Bank', city: 'New York', phone: '+1-555-0101', email: 'central@bloodbank.com', status: 'Open', inventory: { 'O+': 45, 'A+': 32, 'B+': 28, 'AB+': 15 } },
    { name: 'City Blood Services', city: 'Los Angeles', phone: '+1-555-0102', email: 'city@bloodservices.com', status: 'Open', inventory: { 'O+': 38, 'A+': 25, 'B+': 30, 'AB+': 18 } },
    { name: 'Metro Blood Donation', city: 'Chicago', phone: '+1-555-0103', email: 'metro@donation.com', status: 'Open', inventory: { 'O+': 52, 'A+': 40, 'B+': 22, 'AB+': 12 } },
    { name: 'Regional Transfusion Center', city: 'Houston', phone: '+1-555-0104', email: 'regional@transfusion.com', status: 'Open', inventory: { 'O+': 35, 'A+': 28, 'B+': 26, 'AB+': 20 } }
];

// Populate donors
function populateDonors() {
    const donorsGrid = document.getElementById('donorsGrid');
    if (!donorsGrid) return;
    
    donorsGrid.innerHTML = donors.map(donor => `
        <div class="donor-card">
            <div class="donor-header">
                <h3>${donor.name}</h3>
                <div class="blood-group-badge">${donor.bloodGroup}</div>
            </div>
            <div class="donor-body">
                <div class="donor-info"><strong>Location:</strong> ${donor.location}</div>
                <div class="donor-info"><strong>Last Donation:</strong> ${donor.lastDonation}</div>
                <span class="donor-status status-${donor.status}">${donor.status.charAt(0).toUpperCase() + donor.status.slice(1)}</span>
            </div>
        </div>
    `).join('');
}

// Populate blood requests
function populateRequests() {
    const requestsList = document.getElementById('requestsList');
    if (!requestsList) return;
    
    requestsList.innerHTML = requests.map(request => `
        <div class="request-item">
            <div class="request-header">
                <div>
                    <div class="request-title">${request.bloodGroup} Blood Needed</div>
                    <span class="urgency-badge urgency-${request.urgency}">${request.urgency.toUpperCase()}</span>
                </div>
            </div>
            <div class="request-body">
                <div class="request-detail"><strong>Patient:</strong> ${request.patient}</div>
                <div class="request-detail"><strong>Hospital:</strong> ${request.hospital}</div>
                <div class="request-detail"><strong>Units Needed:</strong> ${request.units}</div>
                <div class="request-detail"><strong>Status:</strong> ${request.status}</div>
            </div>
        </div>
    `).join('');
}

// Populate blood banks
function populateBloodBanks() {
    const bloodbanksGrid = document.getElementById('bloodbanksGrid');
    if (!bloodbanksGrid) return;
    
    bloodbanksGrid.innerHTML = bloodbanks.map(bank => `
        <div class="bloodbank-card">
            <div class="bloodbank-header">
                <h3>${bank.name}</h3>
                <p>${bank.city}</p>
            </div>
            <div class="bloodbank-body">
                <div class="bloodbank-info"><strong>Phone:</strong> ${bank.phone}</div>
                <div class="bloodbank-info"><strong>Email:</strong> ${bank.email}</div>
                <div class="bloodbank-info"><strong>Status:</strong> ${bank.status}</div>
                <div class="blood-inventory">
                    <strong>Inventory:</strong>
                    ${Object.entries(bank.inventory).map(([type, units]) => 
                        `<div class="inventory-item"><span>${type}</span> <strong>${units} units</strong></div>`
                    ).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Modal functions
function openNewRequestModal() {
    const modal = document.getElementById('requestModal');
    if (modal) modal.style.display = 'block';
}

function closeRequestModal() {
    const modal = document.getElementById('requestModal');
    if (modal) modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('requestModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Filter functionality
function filterRequests(type) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    const requestsList = document.getElementById('requestsList');
    let filtered = requests;
    
    if (type !== 'all') {
        if (type === 'urgent') {
            filtered = requests.filter(r => r.urgency === 'urgent' || r.urgency === 'critical');
        } else {
            filtered = requests.filter(r => r.status === type);
        }
    }
    
    if (requestsList) {
        requestsList.innerHTML = filtered.map(request => `
            <div class="request-item">
                <div class="request-header">
                    <div>
                        <div class="request-title">${request.bloodGroup} Blood Needed</div>
                        <span class="urgency-badge urgency-${request.urgency}">${request.urgency.toUpperCase()}</span>
                    </div>
                </div>
                <div class="request-body">
                    <div class="request-detail"><strong>Patient:</strong> ${request.patient}</div>
                    <div class="request-detail"><strong>Hospital:</strong> ${request.hospital}</div>
                    <div class="request-detail"><strong>Units Needed:</strong> ${request.units}</div>
                    <div class="request-detail"><strong>Status:</strong> ${request.status}</div>
                </div>
            </div>
        `).join('');
    }
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form submission
const newRequestForm = document.getElementById('newRequestForm');
if (newRequestForm) {
    newRequestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Blood request created successfully!');
        closeRequestModal();
        this.reset();
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    populateDonors();
    populateRequests();
    populateBloodBanks();
});
