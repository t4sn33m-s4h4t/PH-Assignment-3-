

// Show Blogs 
const BlogContainer = document.querySelector("#blog-container")
blogInfo.map(f => {
    const blog = addtoWebpage(f, "Donation")
    BlogContainer.innerHTML += blog;
})


// Show/Hide Donation and History 
const historyContainer = document.querySelector("#history-container");
const donationContainer = document.querySelector("#blog-container");
const btns = document.querySelectorAll(".menu-btns");

function showMenuContent(id) {
    // Reset all buttons and hide containers
    btns.forEach(btn => {
        btn.classList.remove("bg-lime-300", "border-transparent");
        btn.classList.add("text-gray-600");
        donationContainer.classList.add('hidden');
        historyContainer.classList.add("hidden");
    });

    // Highlight the selected button
    const btnDonHis = document.querySelector(`#${id}`);
    btnDonHis.classList.add("bg-lime-300");
    btnDonHis.classList.remove("text-gray-600");
    btnDonHis.classList.add("border-transparent");

    // Show the Selected container
    if (id === "don-btn") {
        donationContainer.classList.remove("hidden");
    } else if (id === "his-btn") {
        historyContainer.classList.remove("hidden");
    }
}

// Attach event listeners to buttons
btns.forEach(btn => {
    btn.addEventListener('click', () => showMenuContent(btn.id));
});


// Donation Function 

function DonateNow(e) {
    let amount = parseFloat(e.target.previousElementSibling.value);
    let currentBalance = parseFloat(document.getElementById("current-balance").innerText);
    
    if (amount > 0 && amount <= currentBalance && amount.toString().length === e.target.previousElementSibling.value.length) {
        updateBalanceAndDonation(e, amount);
        openModal();
        updateHistory(e, amount);
    } else {
        alert("Invalid Donation Amount");
    }
    e.target.previousElementSibling.value = '';
}


// Update History Function 
function updateHistory(e, amount) {
    let historyContainer = document.querySelector("#history-container");
    const defaultHistory = historyContainer.querySelector("#default-history")
    if (defaultHistory) defaultHistory.classList.add("hidden");


    const title = e.target.parentNode.parentNode.querySelector("#blog-title").innerText
    const history = addtoWebpage({title, amount}, "History")
      historyContainer.innerHTML+= history
}



// Update Balance and Donation Amount Function
function updateBalanceAndDonation(e, amount) {
    const donationElement = e.target.parentNode.parentNode.querySelector(".donation-amount");
    const currentBalanceElement = document.getElementById("current-balance");

    donationElement.innerText = updateAmount(donationElement.innerText, amount);
    currentBalanceElement.innerText = updateAmount(currentBalanceElement.innerText, -amount);
}

// Helper function to update amount
function updateAmount(currentAmount, changeAmount) {
    return parseFloat(currentAmount) + changeAmount;
}



// Open Modal Function 
function openModal() {
    let checkbox = document.getElementById("modal");
    checkbox.checked = !checkbox.checked;
}

// Handle Donate btn click 
const donateBtns = document.getElementsByClassName("donate-btn");
for (const donateBtn of donateBtns) {
    donateBtn.addEventListener('click', (e)=>{
        DonateNow(e)
    })
}











