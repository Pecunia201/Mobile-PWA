// =====================
// Initialise Account Balances, Transactions
// =====================

const initialiseBalances = () => {
    // Initialise the balances
        ['balance1', 'balance2'].forEach((balance, index) => {
        sessionStorage.getItem(balance) || sessionStorage.setItem(balance, [10552.52, 1521.11][index]);
        });
        balanceAmount.innerHTML = `£${parseFloat(sessionStorage.getItem('balance1')).toLocaleString('en-GB', { minimumFractionDigits: 2 })}`;
    };
    // Update the transactions display
    const updateTransactionsDisplay = () => {
        const transactionsHTML = sessionStorage.getItem(isBlueActive ? 'blueCardTransactions' : 'orangeCardTransactions') || '';
        document.getElementById('menu-content').innerHTML = transactionsHTML;
    };
    // Initialise the balances and transactions when the page loads
    document.addEventListener('DOMContentLoaded', () => {
        initialiseBalances();
        updateTransactionsDisplay();
    });
    // Transaction HTML
    const bluetransactionHTML = `
    <div class="transaction row">
        <div class="transaction-image pastel-blue"></div>
        <div class="transaction-info">
            <p class="company"><strong>BlueCorp</strong> <span class="money"><strong>- £45.67</strong></span></p>
            <p class="date-time">31 April 2023 at 18:45</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-pink"></div>
        <div class="transaction-info">
            <p class="company"><strong>PinkTech</strong> <span class="money positive"><strong>+ £78.90</strong></span></p>
            <p class="date-time">17 April 2023 at 14:23</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-yellow"></div>
        <div class="transaction-info">
            <p class="company"><strong>YellowSoft</strong> <span class="money"><strong>- £12.34</strong></span></p>
            <p class="date-time">3 April 2023 at 10:11</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-green"></div>
        <div class="transaction-info">
            <p class="company"><strong>GreenGro</strong> <span class="money"><strong>- £56.78</strong></span></p>
            <p class="date-time">19 March 2023 at 9:08</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-orange"></div>
        <div class="transaction-info">
            <p class="company"><strong>OrangeInc</strong> <span class="money positive"><strong>+ £23.45</strong></span></p>
            <p class="date-time">5 March 2023 at 15:16</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-blue"></div>
        <div class="transaction-info">
            <p class="company"><strong>BlueTech</strong> <span class="money"><strong>- £67.89</strong></span></p>
            <p class="date-time">22 February 2023 at 7:21</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-pink"></div>
        <div class="transaction-info">
            <p class="company"><strong>PinkSolutions</strong> <span class="money"><strong>- £90.12</strong></span></p>
            <p class="date-time">8 February 2023 at 12:00</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-yellow"></div>
        <div class="transaction-info">
            <p class="company"><strong>YellowLabs</strong> <span class="money positive"><strong>+ £34.56</strong></span></p>
            <p class="date-time">24 Janurary 2023 at 6:10</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-green"></div>
        <div class="transaction-info">
            <p class="company"><strong>GreenTech</strong> <span class="money"><strong>- £78.90</strong></span></p>
            <p class="date-time">10 Janurary 2023 at 19:30</p>
        </div>
    </div>
    `;
    
    const orangetransactionHTML = `
    <div class="transaction row">
        <div class="transaction-image pastel-orange"></div>
        <div class="transaction-info">
            <p class="company"><strong>OrangeCo</strong> <span class="money"><strong>- £56.78</strong></span></p>
            <p class="date-time">5 July 2023 at 21:33</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-green"></div>
        <div class="transaction-info">
            <p class="company"><strong>GreenLife</strong> <span class="money positive"><strong>+ £67.89</strong></span></p>
            <p class="date-time">19 July 2023 at 2:04</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-orange"></div>
        <div class="transaction-info">
            <p class="company"><strong>OrangeTech</strong> <span class="money"><strong>- £12.34</strong></span></p>
            <p class="date-time">26 June 2023 at 11:22</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-blue"></div>
        <div class="transaction-info">
            <p class="company"><strong>BlueLabs</strong> <span class="money"><strong>- £45.67</strong></span></p>
            <p class="date-time">12 June 2023 at 16:14</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-pink"></div>
        <div class="transaction-info">
            <p class="company"><strong>PinkWare</strong> <span class="money positive"><strong>+ £89.01</strong></span></p>
            <p class="date-time">29 May 2023 at 8:09</p>
        </div>
    </div>
    <div class="transaction row">
        <div class="transaction-image pastel-yellow"></div>
        <div class="transaction-info">
            <p class="company"><strong>YellowCorp</strong> <span class="money"><strong>- £23.45</strong></span></p>
            <p class="date-time">15 May 2023 at 13:15</p>
        </div>
    </div>`;
    
    // Initialise the transactions
    ['orangeCardTransactions', 'blueCardTransactions'].forEach((key, index) => {
        sessionStorage.getItem(key) || sessionStorage.setItem(key, [orangetransactionHTML, bluetransactionHTML][index]);
    });  

// =====================
// Card Functionality
// =====================

const container = document.querySelector('.container');
const blue = document.querySelector('.bankcard.blue');
const orange = document.querySelector('.bankcard.orange');
const blueDot = document.getElementById('blue-dot');
const orangeDot = document.getElementById('orange-dot');
const menuContent = document.getElementById('menu-content');
const balanceAmount = document.getElementById('balance-amount');
const originalTransactionContent = menuContent.innerHTML;

let isBlueActive = true;
let startX = 0;

// Detect swipe on the card container
container.addEventListener('touchstart', (e) => { // Start of swipe
    startX = e.touches[0].clientX;
});

container.addEventListener('touchend', (e) => { // End of swipe
    const diffX = startX - e.changedTouches[0].clientX;

    if ((diffX > 50 && isBlueActive) || (diffX < -50 && !isBlueActive)) { // Switch cards if the swipe is long enough
        switchCards();
    }
});

// Switch between the Blue and Orange cards
function switchCards() {
    // Scroll the menu content back to the top
    const menuContent = document.querySelector('.menu-content');
    menuContent.scrollTop = 0;
    
    // if one card is active, switch to the other card, also switch the dot indicator
    const toggleClass = (element, class1, class2) => {
        element.classList.toggle(class1);
        element.classList.toggle(class2);
    };
    
    toggleClass(blueDot, 'active', 'inactive');
    toggleClass(orangeDot, 'active', 'inactive');
    toggleClass(blue, 'active', 'inactive');
    toggleClass(orange, 'active', 'inactive');

    if (isBlueActive) {
        balanceAmount.innerHTML = '£' + parseFloat(sessionStorage.getItem('balance2')).toLocaleString('en-GB', { minimumFractionDigits: 2 });
        var orangeCardTransactionsHTML = sessionStorage.getItem('orangeCardTransactions') || '';
        menuContent.innerHTML = orangeCardTransactionsHTML;
    } else {
        var blueCardTransactionsHTML = sessionStorage.getItem('blueCardTransactions') || '';
        menuContent.innerHTML = blueCardTransactionsHTML;
        balanceAmount.innerHTML = '£' + parseFloat(sessionStorage.getItem('balance1')).toLocaleString('en-GB', { minimumFractionDigits: 2 });
    }
    isBlueActive = !isBlueActive;
}

// Initialise Dot Indicator
document.getElementById('blue-dot').classList.add('active');

// =====================
// Drag Menu
// =====================

// Adjust the menu's height to fill the space under the balance box
const adjustMenuHeight = () => {
    const balanceBoxBottom = document.querySelector('.balance-box').getBoundingClientRect().bottom; // Find the bottom of the balance box
    const newHeight = window.innerHeight - balanceBoxBottom - 20; // 20px below the balance box
    document.querySelector('.menu').style.height = `${newHeight}px`; // Set the menu's height
    minHeight = newHeight;
};

// Call the function to adjust the menu's height when the page loads or is resized somehow
['resize', 'load'].forEach(event => window.addEventListener(event, adjustMenuHeight));

// Drag Menu Functionality
const menu = document.getElementById('menu');
const dragArea = document.getElementById('drag-area');

let minHeight = window.innerHeight * 0.25;
const maxHeight = window.innerHeight * 0.55;

// Set the snap thresholds
const snapThreshold = 0.15 * (maxHeight - minHeight); // 15% above the minimum height
const downSnapThreshold = 0.15 * maxHeight; // 15% below the maximum height

let startY = 0;
let currentHeight = minHeight;


// Function to transition to a specific height
const setMenuHeight = (height) => {
    menu.style.transition = "height 0.3s ease";
    menu.style.height = `${height}px`;
    setTimeout(() => menu.style.transition = "", 300);
};

// Detect swipe on the drag area
dragArea.addEventListener('touchstart', (e) => { // Start of swipe
    startY = e.touches[0].clientY;
    currentHeight = menu.clientHeight;
}, { passive: false });

dragArea.addEventListener('touchmove', (e) => { // While swiping, adjust the menu's height
    const newHeight = Math.max(minHeight, Math.min(currentHeight + startY - e.touches[0].clientY, maxHeight));
    menu.style.height = `${newHeight}px`;
}, { passive: false });

dragArea.addEventListener('touchend', (e) => { // End of swipe
    const endHeight = menu.clientHeight; // Grab the menu's height after the swipe
    const isDraggingUp = (startY - e.changedTouches[0].clientY) > 0; // Check if the user is dragging up or down
    
    // Snap if swipe is released within the snap threshold
    if ((isDraggingUp && endHeight - minHeight >= snapThreshold) || (!isDraggingUp && maxHeight - endHeight < downSnapThreshold)) { // Snap to max height if 15% above the minimum height
        setMenuHeight(maxHeight);
    } else { // Snap to min height if 15% below the maximum height
        setMenuHeight(minHeight);
    }
});

// =====================
// Modals
// =====================

const getBalance = card => parseFloat(sessionStorage.getItem(`balance${card}`) || '0'); // Get the balance of the specified card

const setBalance = (card, amount) => sessionStorage.setItem(`balance${card}`, (getBalance(card) + amount).toFixed(2)); // Set the balance of the specified card

const updateDynamicText = (modalType, inputID) => { // Update the dynamic text in the modal
    const amount = document.getElementById(inputID).value || '0.00';
    const action = modalType === 'transfer' ? 'transfer' : 'deposit';
    const cardText = (action === 'transfer' ^ isBlueActive) ? 'into Blue Card' : 'into Orange Card';
    document.getElementById(`dynamic-text-${modalType}`).textContent = `You will ${action} £${amount} ${cardText}.`;
};

const updateBalanceDisplay = () => { // Update the balance display
    balanceAmount.innerHTML = '£' + getBalance(isBlueActive ? 1 : 2).toLocaleString('en-GB', { minimumFractionDigits: 2 });
};

// Add a transaction to the recent transaction list
const addTransaction = (amount, type, company = 'Deposit', cardKeyOverride, isPositive = type === 'deposit') => { // Add a transaction to the transaction list
    const transactionContainer = document.getElementById('menu-content');
    const transactionImageClass = isPositive ? 'pastel-green' : (isBlueActive ? 'pastel-orange' : 'pastel-blue');
    const transactionHTML = `
        <div class="transaction row">
            <div class="transaction-image ${transactionImageClass}"></div>
            <div class="transaction-info">
                <p class="company"><strong>${company}</strong> <span class="money ${isPositive ? 'positive' : ''}"><strong>${isPositive ? '+' : '-'} £${amount.toFixed(2)}</strong></span></p>
                <p class="date-time">${new Date().toLocaleString('en-GB', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
            </div>
        </div>`;
    
    transactionContainer.insertAdjacentHTML('afterbegin', transactionHTML);

    const cardKey = cardKeyOverride || `${isBlueActive ? 'blue' : 'orange'}CardTransactions`;
    sessionStorage.setItem(cardKey, transactionHTML + (sessionStorage.getItem(cardKey) || ''));
};

// =====================
// Deposit Modal
// =====================

const $ = selector => document.querySelector(selector);
const getById = id => document.getElementById(id);

const depositModal = getById('deposit-modal');
const depositInput = getById('deposit-input');
const [depositButton, closeDepositModalButton, depositModalContent, depositModalButton] = ['.deposit-button', '#close-deposit-modal', '.deposit-modal .modal-content', '.deposit-modal .modal-button'].map($);

// Update the deposit value
const updateDepositValue = () => {
    let value = depositInput.value.replace(/[^0-9]/g, '');
    if (value.length > 7) value = value.slice(0, 7);
    depositInput.value = value.length > 2 ? value.slice(0, -2) + '.' + value.slice(-2) : value;
    updateDynamicText('deposit', 'deposit-input');
};

// Toggle the deposit modal
const toggleDepositModal = show => {
    depositModal.style.display = show ? 'flex' : 'none';
    depositInput.value = '';
    if (show) updateDynamicText('deposit', 'deposit-input');
};

// Handle the deposit
const handleDeposit = () => {
    const value = depositInput.value;
    if (!value || value === '0.00') return;

    const amount = parseFloat(value);
    if (amount > 0.00) {
        setBalance(isBlueActive ? 1 : 2, amount);
        addTransaction(amount, 'deposit');
        updateBalanceDisplay();
    }
    toggleDepositModal(false);
};

const addListeners = (el, type, listener) => el.addEventListener(type, listener);

addListeners(depositButton, 'click', () => toggleDepositModal(true));
addListeners(closeDepositModalButton, 'click', () => toggleDepositModal(false));
addListeners(depositInput, 'input', updateDepositValue);
addListeners(depositModalContent, 'click', event => event.stopPropagation());
addListeners(depositModalButton, 'click', handleDeposit);
addListeners(depositModal, 'click', () => toggleDepositModal(false));


// =====================
// Transfer Modal
// =====================

const $2 = selector => document.querySelector(selector);
const getById2 = id => document.getElementById(id);
const [transferModal, transferInput, transferButton, closeModalButton, transferModalContent, modalButton] =
    ['#transfer-modal', '#transfer-input', '.transfer-button', '#close-transfer-modal', '.transfer-modal-content', '.transfer-modal .modal-button'].map(s => s.startsWith('#') ? getById(s.slice(1)) : $(s));

// Update the transfer value
const updateValue = () => {
    let value = transferInput.value.replace(/[^0-9]/g, '');
    if (value.length > 7) value = value.slice(0, 7);
    if (!value) return;
    transferInput.value = value.length > 2 ? value.slice(0, -2) + '.' + value.slice(-2) : value;
    updateDynamicText('transfer', 'transfer-input');
};

// Toggle the transfer modal
const toggleModal = show => {
    const errorMessage = document.getElementById('error-message');
    transferModal.style.display = show ? 'flex' : 'none';
    transferInput.value = '';
    errorMessage.textContent = '';
    if (show) updateDynamicText('transfer', 'transfer-input');
};

// Handle the transfer
const handleTransfer = () => {
    const value = transferInput.value;
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if (!value || value === '0.00') return;

    const amount = parseFloat(value);
    const activeCard = isBlueActive ? 1 : 2;
    const otherCard = isBlueActive ? 2 : 1;
    
    if (amount > 0 && getBalance(activeCard) >= amount) {
        setBalance(activeCard, -amount);
        setBalance(otherCard, amount);
        
        const [fromCardTransactions, toCardTransactions] = isBlueActive
            ? ['blueCardTransactions', 'orangeCardTransactions']
            : ['orangeCardTransactions', 'blueCardTransactions']; 
    
        addTransaction(amount, 'transfer', 'Transfer', fromCardTransactions, false);
        addTransaction(amount, 'transfer', 'Transfer', toCardTransactions, true);
    
        updateBalanceDisplay();
        updateTransactionsDisplay();
        toggleModal(false);
    } else {
        errorMessage.textContent = 'Insufficient funds';
        errorMessage.style.color = 'red';
    }    
};

const addListeners2 = (el, type, listener) => el.addEventListener(type, listener);

addListeners2(transferButton, 'click', () => toggleModal(true));
addListeners2(closeModalButton, 'click', () => toggleModal(false));
addListeners2(transferInput, 'input', updateValue);
addListeners2(transferModal, 'click', () => toggleModal(false));
addListeners2(transferModalContent, 'click', event => event.stopPropagation());
addListeners2(modalButton, 'click', handleTransfer);

// =====================
// Landscape Mode Detection
// =====================

function checkOrientation() {
    if (window.innerWidth > window.innerHeight) {
        document.body.classList.add('landscape-mode');
    } else {
        document.body.classList.remove('landscape-mode');
    }
}

checkOrientation();

window.addEventListener('resize', checkOrientation); // Check for orientation changes