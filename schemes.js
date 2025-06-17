// Schemes data and functionality
const schemesData = {
    'pm-kisan': {
        title: 'PM-KISAN Scheme',
        description: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector Scheme that provides income support to landholding farmer families.',
        eligibility: [
            'All landholding farmer families in the country',
            'Families having cultivable land',
            'Both small and marginal farmers eligible',
            'No income limit restriction'
        ],
        benefits: [
            'Direct cash transfer of ₹6000 per year',
            'Amount paid in three installments of ₹2000 each',
            'Direct benefit transfer to bank account',
            'No paperwork or intermediaries required'
        ],
        documents: [
            'Aadhaar Card',
            'Bank Account Details',
            'Land Ownership Documents',
            'Mobile Number for registration'
        ],
        applyUrl: 'https://pmkisan.gov.in'
    },
    'ayushman-bharat': {
        title: 'Ayushman Bharat PM-JAY',
        description: 'Pradhan Mantri Jan Arogya Yojana (PM-JAY) is the world\'s largest health insurance scheme providing coverage of up to ₹5 lakh per family per year.',
        eligibility: [
            'Families covered under SECC-2011 database',
            'Rural families with specific deprivation criteria',
            'Urban families in specified occupational categories',
            'Automatic eligibility - no application required'
        ],
        benefits: [
            'Free treatment up to ₹5 lakh per family per year',
            'Cashless and paperless access to services',
            'Coverage for pre and post-hospitalization',
            'Country wide portability'
        ],
        documents: [
            'Aadhaar Card or approved ID',
            'Ration Card',
            'Mobile Number',
            'Family verification documents'
        ],
        applyUrl: 'https://pmjay.gov.in'
    },
    'pm-yasasvi': {
        title: 'PM YASASVI Scheme',
        description: 'PM Young Achievers Scholarship Award Scheme for Vibrant India for OBC, EBC and DNT students pursuing higher education.',
        eligibility: [
            'Students from OBC/EBC/DNT communities',
            'Family income should not exceed ₹2.5 lakh per annum',
            'Students in Class IX to XII and diploma courses',
            'Minimum 60% marks in previous qualifying examination'
        ],
        benefits: [
            'Scholarship amount up to ₹1.25 lakh',
            'Direct benefit transfer to student account',
            'Coverage for tuition fees and other expenses',
            'Annual renewal based on performance'
        ],
        documents: [
            'Aadhaar Card',
            'Caste Certificate (OBC/EBC/DNT)',
            'Income Certificate',
            'Previous year mark sheets',
            'Bank Account Details'
        ],
        applyUrl: 'https://scholarships.gov.in'
    },
    'pm-mudra': {
        title: 'PM Mudra Yojana',
        description: 'Pradhan Mantri MUDRA Yojana provides loans up to ₹10 lakh to micro and small enterprises and to individuals who wish to start their own business.',
        eligibility: [
            'Non-corporate, non-farm small/micro enterprises',
            'Manufacturing, trading and service activities',
            'Individual entrepreneurs and small businesses',
            'No collateral security required'
        ],
        benefits: [
            'Loans up to ₹10 lakh without collateral',
            'Three categories: Shishu, Kishore, Tarun',
            'Flexible repayment terms',
            'Competitive interest rates'
        ],
        documents: [
            'Aadhaar Card and PAN Card',
            'Business plan and project report',
            'Bank statements',
            'Address proof and identity proof'
        ],
        applyUrl: 'https://mudra.org.in'
    },
    'pm-awas': {
        title: 'PM Awas Yojana',
        description: 'Pradhan Mantri Awas Yojana aims to provide affordable housing to all by 2022 through Credit Linked Subsidy and other interventions.',
        eligibility: [
            'Economically Weaker Section (EWS)',
            'Low Income Group (LIG)',
            'Middle Income Group (MIG)',
            'First-time home buyers priority'
        ],
        benefits: [
            'Interest subsidy on home loans',
            'Direct financial assistance',
            'Infrastructure development',
            'Easy EMI and flexible repayment'
        ],
        documents: [
            'Aadhaar Card',
            'Income Certificate',
            'Property documents',
            'Bank statements and loan documents'
        ],
        applyUrl: 'https://pmaymis.gov.in'
    },
    'sukanya-samriddhi': {
        title: 'Sukanya Samriddhi Yojana',
        description: 'A small savings scheme for the girl child offering one of the highest interest rates with income tax benefits under Sec 80C.',
        eligibility: [
            'Girl child between 0-10 years of age',
            'Maximum 2 accounts per family',
            'Parents or legal guardians can open account',
            'Indian resident girl child only'
        ],
        benefits: [
            'High interest rate of 8.2% per annum',
            'Tax deduction under Section 80C',
            'Tax-free interest and maturity amount',
            '21-year investment tenure'
        ],
        documents: [
            'Girl child birth certificate',
            'Parent/Guardian identity proof',
            'Address proof',
            'Initial deposit amount'
        ],
        applyUrl: 'https://www.nsiindia.gov.in'
    },
    'sip-mutual-funds': {
        title: 'SIP Mutual Funds',
        description: 'Systematic Investment Plan allows you to invest a fixed amount regularly in mutual funds, providing rupee cost averaging benefits.',
        eligibility: [
            'Any individual aged 18 years and above',
            'NRI investments allowed',
            'Minimum investment from ₹500 per month',
            'KYC compliance required'
        ],
        benefits: [
            'Professional fund management',
            'Rupee cost averaging benefits',
            'Power of compounding',
            'Flexible investment amounts',
            'Tax benefits under 80C (ELSS funds)'
        ],
        documents: [
            'PAN Card',
            'Aadhaar Card',
            'Bank account details',
            'KYC documents',
            'Passport size photographs'
        ],
        applyUrl: '#'
    },
    'term-insurance': {
        title: 'Term Insurance Plans',
        description: 'Pure life insurance providing high coverage at affordable premiums to secure your family\'s financial future.',
        eligibility: [
            'Age 18-65 years for entry',
            'Regular income source',
            'Medical examination may be required',
            'Non-smokers get better rates'
        ],
        benefits: [
            'High life coverage at low premium',
            'Tax deduction under Section 80C',
            'Tax-free death benefit under Section 10(10D)',
            'Flexible premium payment options',
            'Add-on riders available'
        ],
        documents: [
            'Age proof (Birth certificate/PAN)',
            'Identity proof (Aadhaar/Passport)',
            'Address proof',
            'Income proof',
            'Medical reports if required'
        ],
        applyUrl: '#'
    }
};

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeFilters();
    initializeSearch();
});

function initializeFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const schemeCards = document.querySelectorAll('.scheme-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            
            schemeCards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (filter === 'popular') {
                    // Show popular schemes (you can define your logic here)
                    const popularSchemes = ['pm-kisan', 'ayushman-bharat', 'pm-mudra', 'sip-mutual-funds'];
                    const cardId = card.querySelector('.scheme-btn').getAttribute('onclick').match(/'([^']+)'/)[1];
                    card.style.display = popularSchemes.includes(cardId) ? 'block' : 'none';
                } else {
                    const cardType = card.getAttribute('data-type');
                    card.style.display = cardType === filter ? 'block' : 'none';
                }
            });
        });
    });
}

function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchSchemes();
        });
    }
}

function searchSchemes() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const schemeCards = document.querySelectorAll('.scheme-card');

    schemeCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const category = card.getAttribute('data-category') || '';
        
        if (title.includes(searchTerm) || 
            description.includes(searchTerm) || 
            category.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function viewSchemeDetails(schemeId) {
    const scheme = schemesData[schemeId];
    if (!scheme) return;

    const modal = document.getElementById('scheme-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    modalTitle.textContent = scheme.title;
    
    modalBody.innerHTML = `
        <div class="modal-section">
            <h3>Description</h3>
            <p>${scheme.description}</p>
        </div>
        
        <div class="modal-section">
            <h3>Eligibility Criteria</h3>
            <ul class="eligibility-list">
                ${scheme.eligibility.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Benefits</h3>
            <ul class="benefits-list">
                ${scheme.benefits.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3>Required Documents</h3>
            <ul class="documents-list">
                ${scheme.documents.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        
        <button class="apply-btn" onclick="applyForScheme('${scheme.applyUrl}')">
            <i class="fas fa-external-link-alt"></i>
            Apply Now / Learn More
        </button>
    `;

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('scheme-modal');
    modal.style.display = 'none';
}

function applyForScheme(url) {
    if (url === '#') {
        alert('Please contact our financial advisor for more information about this scheme.');
    } else {
        window.open(url, '_blank');
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('scheme-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});