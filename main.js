// Global Variables
let chatbotOpen = false;

// Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close nav menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Initialize chatbot
    initializeChatbot();
});

// Chatbot Functions
function openChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.style.display = 'flex';
        chatbotOpen = true;
    }
}

function closeChatbot() {
    const chatbotContainer = document.getElementById('chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.style.display = 'none';
        chatbotOpen = false;
    }
}

function toggleChatbot() {
    if (chatbotOpen) {
        closeChatbot();
    } else {
        openChatbot();
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    
    if (input && messagesContainer && input.value.trim()) {
        // Add user message
        addMessage(input.value, 'user');
        
        // Get bot response
        const response = getBotResponse(input.value);
        
        // Clear input
        input.value = '';
        
        // Add bot response with delay
        setTimeout(() => {
            addMessage(response, 'bot');
        }, 1000);
    }
}

function addMessage(message, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = message;
    
    messageDiv.appendChild(messageContent);
    messagesContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Income-based responses
    if (message.includes('income') || message.includes('salary') || message.includes('earn')) {
        if (message.includes('10000') || message.includes('15000') || message.includes('low')) {
            return "For low-income families, I recommend:\n\n1. PM-KISAN Scheme - ₹6000/year for farmers\n2. Pradhan Mantri Awas Yojana - Housing assistance\n3. Ayushman Bharat - Free healthcare up to ₹5 lakh\n4. MGNREGA - 100 days guaranteed employment\n\nWould you like details about any specific scheme?";
        } else if (message.includes('25000') || message.includes('30000') || message.includes('middle')) {
            return "For middle-income families, consider:\n\n1. PPF (Public Provident Fund) - Tax savings + 15-year lock-in\n2. ELSS Mutual Funds - Tax saving with market returns\n3. National Pension System (NPS) - Retirement planning\n4. Sukanya Samriddhi Yojana - For girl child education\n\nWhich category interests you most?";
        } else if (message.includes('50000') || message.includes('high') || message.includes('lakh')) {
            return "For higher-income individuals:\n\n1. Equity Linked Savings Scheme (ELSS)\n2. ULIPs for insurance + investment\n3. Corporate Fixed Deposits\n4. Real Estate Investment Trusts (REITs)\n5. Private Wealth Management Services\n\nShall I provide detailed information about any of these?";
        }
    }
    
    // Category-specific responses
    if (message.includes('education') || message.includes('study') || message.includes('scholarship')) {
        return "Education schemes available:\n\n1. PM YASASVI Scheme - For OBC/EBC/DNT students\n2. National Scholarship Portal - Various scholarships\n3. Pradhan Mantri Vidya Lakshmi - Education loans\n4. Merit-cum-Means Scholarship - For minorities\n\nWhat's your education level and category?";
    }
    
    if (message.includes('health') || message.includes('medical') || message.includes('insurance')) {
        return "Health schemes for you:\n\n1. Ayushman Bharat PM-JAY - ₹5 lakh health cover\n2. Pradhan Mantri Suraksha Bima Yojana - Accident insurance\n3. Aam Aadmi Bima Yojana - Life insurance\n4. Rashtriya Swasthya Bima Yojana\n\nDo you have any existing health coverage?";
    }
    
    if (message.includes('business') || message.includes('startup') || message.includes('entrepreneur')) {
        return "Business & Entrepreneurship schemes:\n\n1. Pradhan Mantri Mudra Yojana - Up to ₹10 lakh loans\n2. Stand Up India - For SC/ST/Women entrepreneurs\n3. Startup India - Tax benefits and funding\n4. Atmanirbhar Bharat - Self-reliant India initiatives\n\nWhat type of business are you planning?";
    }
    
    if (message.includes('agriculture') || message.includes('farming') || message.includes('farmer')) {
        return "Agricultural schemes available:\n\n1. PM-KISAN - ₹6000/year direct benefit\n2. Pradhan Mantri Fasal Bima Yojana - Crop insurance\n3. Soil Health Card Scheme\n4. Pradhan Mantri Krishi Sinchai Yojana\n\nHow much land do you own?";
    }
    
    if (message.includes('housing') || message.includes('home') || message.includes('house')) {
        return "Housing schemes for you:\n\n1. Pradhan Mantri Awas Yojana - Urban & Rural\n2. Credit Linked Subsidy Scheme (CLSS)\n3. Deendayal Antyodaya Yojana\n4. Housing for All Mission\n\nAre you looking for urban or rural housing?";
    }
    
    // General responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! I'm here to help you find the best government and private schemes based on your needs. Could you tell me about your monthly income or the type of scheme you're looking for?";
    }
    
    if (message.includes('help') || message.includes('assist')) {
        return "I can help you with:\n\n• Finding schemes based on your income\n• Government welfare programs\n• Investment and savings options\n• Educational scholarships\n• Health insurance schemes\n• Business loans and startup funding\n\nWhat specific area would you like to explore?";
    }
    
    if (message.includes('thank')) {
        return "You're welcome! I'm always here to help you with financial planning and government schemes. Feel free to ask if you have more questions!";
    }
    
    // Default response
    return "I understand you're looking for financial advice. Could you please specify:\n\n1. Your monthly income range\n2. The type of scheme you're interested in (education, health, business, etc.)\n3. Your location (state)\n\nThis will help me provide more targeted recommendations!";
}

function initializeChatbot() {
    const chatbotInput = document.getElementById('chatbot-input');
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.feature-card, .category-card, .stat-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                counter.textContent = counter.textContent.replace(/\d+/, target);
                clearInterval(timer);
            } else {
                counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current));
            }
        }, 16);
    });
}

// Trigger counter animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}