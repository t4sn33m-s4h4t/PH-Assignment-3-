 const blogInfo = [
    {
        donationAmout: 0,
        title: "Donate for Flood at Noakhali, Bangladesh",
        desccription: " The recent floods in Noakhali have caused significant damage to homes  infrastructure. Your donation will help provide essential supplies and  to those affected by this disaster. Every contribution, big or small, makes  difference. Please join us in supporting the relief efforts and making a positive impact on the lives of those in need.",
        imgSrc: "./assets/noakhali.png"
    },
    {
        donationAmout: 600,
        title: "Donate for Flood Relief in Feni,Bangladesh",
        desccription: "The recent floods in Feni have devastated local communities, leading to severe disruption and loss. Your generous donation will help provide immediate aid, including food, clean water, and medical supplies, to those affected by this calamity. Together, we can offer crucial support and help rebuild lives in the aftermath of this disaster. Every contribution counts towards making a real difference. Please consider donating today to assist those in urgent need.",
        imgSrc: "./assets/feni.png"
    },
    {
        donationAmout: 2400,
        title: "Aid for Injured in the Quota Movement",
        desccription: "The recent Quota movement has resulted in numerous injuries and significant hardship for many individuals. Your support is crucial in providing medical assistance, rehabilitation, and necessary supplies to those affected. By contributing, you help ensure that injured individuals receive the care and support they need during this challenging time. Every donation plays a vital role in alleviating their suffering and aiding in their recovery. Please consider making a donation to support these brave individuals in their time of need.",
        imgSrc: "./assets/quota-protest.png"
    },
]

 const FAQs = [
    {
        Question: "What is Document Object Model(DOM)?",
        Answer: "The Document Object Model (DOM) is a structure of a webpage that is compared to a tree of objects or nodes. Nodes are simply HTML tag elements, attributes, text, etc. By using the DOM, we can access and manipulate the webpage content dynamically and respond to user interactions effectively. "
    },
    {
        Question: "How do you select an element from the DOM?",
        Answer: "To select an element from the DOM, you can use methods like document.getElementById(), document.getElementsByClassName(), and document.querySelector() and so on. These methods are used to access specific elements by their ID, tag, or class. By using these methods, you can easily access any element of a HTML page."
    },
    {
        Question: "What is event delegation in the context of the DOM, and why is it useful?",
        Answer: "Event delegation is a JS method where events from child elements bubble up to the parent element. This means that when a child element is added to the DOM, it automatically inherits the event listener from its parent. Also, these events can be stopped using various methods.",
    },
    {
        Question: "How do you manipulate an element's attributes and styles using DOM?",
        Answer: "There are many ways to manipulate an element's attributes and styles using the DOM. We can use setAttribute and getAttribute to set and get any attribute. We can also use CSS selectors to add styles. Also, we can directly add styles like this: donationContainer.style.backgroundColor = 'red';."
    }
]

 function addtoWebpage(f, flag) {
    let result;
    if (flag === "FAQ") {
        result = `  <div class="lg:py-7 lg:px-5 collapse collapse-arrow join-item border-base-300 border">
                      <input type="radio" name="my-accordion-4" />
                      <div class="collapse-title text-lg lg:text-xl font-medium mb-3">${f.Question}</div>
                      <div class="collapse-content text-gray-600 ">
                        <p class="lg:w-4/5">${f.Answer}</p>
                      </div>
                    </div>
                `

    } else if (flag === "Donation") {
        result = `
                    <div class="mb-8 border flex gap-8 lg:flex-row flex-col rounded-xl p-8">
                        <!-- Left Section (Image) -->
                        <div class="lg:w-1/2 ">
                            <img class=" object-cover h-full w-full rounded-xl" src="${f.imgSrc}">
                        </div>
                        <!-- Right Section(Descpition)-->
                        <div class="lg:w-1/2 flex flex-col justify-between">
                            <div>
                                <div class="bg-gray-100 inline-flex py-2 px-3 rounded-lg gap-2 text-gray-600 items-center mb-3">
                                    <img src="./assets/coin.png" alt="">
                                    <p><span class="donation-amount" >${f.donationAmout}</span></p>
                                    <p>BDT</p>
                                </div>
                                <h2 id="blog-title" class="text-xl font-bold mb-3">${f.title}</h2>
                                <p class="text-gray-500 text-md leading-relaxed font-light mb-4">${f.desccription}</p>
                            </div>
                            <!-- Input and Button -->
                            <div class="mt-4">
                                <input placeholder="Write Donation Amount" class="text-gray-500 input focus:outline-none font-light input-bordered w-full mb-4" />
                                <button class="donate-btn btn bg-lime-300 text-xl w-full">
                                Donate Now
                                </button>
                            </div>
                        </div>
                    </div>
                `
    }else if(flag==="History"){
        result = `
                <div class="rounded-lg">
                    <div class="border-2 rounded-lg p-6 mb-4">
                        <p class="text-lg font-bold mb-4">${f.amount} Taka is Donated for ${f.title}</p>
                        <p id="current-time" class="text-gray-500 font-light">Date: ${new Date().toString()}</p>
                    </div>
                </div>
                `
    }
    return result;
}