let btnDonation = document.getElementById("btnDonation");
let btnHistory = document.getElementById("btnHistory");
let tabDonations = document.getElementById("tabDonations");
let tabHistory = document.getElementById("tabHistory");

let mainBalance = document.getElementById("mainBalance");

let totalDonation1 = document.getElementById("totalDonation1");
let totalDonation2 = document.getElementById("totalDonation2");
let totalDonation3 = document.getElementById("totalDonation3");

let donationAmount1 = document.getElementById("donationAmount1");
let donationAmount2 = document.getElementById("donationAmount2");
let donationAmount3 = document.getElementById("donationAmount3");

let btnDonate1 = document.getElementById("btnDonate1");
let btnDonate2 = document.getElementById("btnDonate2");
let btnDonate3 = document.getElementById("btnDonate3");



function ParsInteger(ele){
    let int = parseInt(ele);
    return int;

}

btnDonate1.addEventListener('click', function(event){
    event.preventDefault();
    let mainBalanceInt = ParsInteger(mainBalance.innerText);
    let totalDonation1Int = ParsInteger(totalDonation1.innerText);
    let donationAmount1Int = ParsInteger(donationAmount1.value);
    let finalDonation = totalDonation1Int + donationAmount1Int;
    let finalMainBalance = mainBalanceInt - donationAmount1Int;
    if (donationAmount1Int >= 100) {
        
        mainBalance.innerText = finalMainBalance;
        totalDonation1.innerText = finalDonation;
        window.location.href = "#my_modal_8";
        const d = new Date();
        let date = d.toDateString();
        let time = d.toTimeString();


        let text = `<div class="card lg:card-side bg-base-100 shadow-xl">
                        <div class="card-body">
                        <h2 class="card-title">${donationAmount1Int} Taka is Donate for Flood at Noakhali, Bangladesh</h2>
                          <p>Date: ${date} ${time} </p>
                          <div class="card-actions justify-end">
                          </div>
                        </div>
                      </div>`;
        
        tabHistory.innerHTML += text;


    }
    else{
        window.location.href = "#my_modal_9";
    }

});
btnDonate2.addEventListener('click', function(event){
    event.preventDefault();
    let mainBalanceInt = ParsInteger(mainBalance.innerText);
    let totalDonation1Int = ParsInteger(totalDonation2.innerText);
    let donationAmount1Int = ParsInteger(donationAmount2.value);
    let finalDonation = totalDonation1Int + donationAmount1Int;
    let finalMainBalance = mainBalanceInt - donationAmount1Int;
    if (donationAmount1Int >= 100) {
        
        mainBalance.innerText = finalMainBalance;
        totalDonation2.innerText = finalDonation;
        window.location.href = "#my_modal_8";
    
        const d = new Date();
        let date = d.toDateString();
        let time = d.toTimeString();

        let text = `<div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">${donationAmount1Int} Taka is Donate for Flood Relief in Feni,Bangladesh</h2>
           <p>Date: ${date} ${time} </p>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>`;

        tabHistory.innerHTML += text;
    }
    else{
        window.location.href = "#my_modal_9";
    }

});
btnDonate3.addEventListener('click', function(event){
    event.preventDefault();
    let mainBalanceInt = ParsInteger(mainBalance.innerText);
    let totalDonation1Int = ParsInteger(totalDonation3.innerText);
    let donationAmount1Int = ParsInteger(donationAmount3.value);
    let finalDonation = totalDonation1Int + donationAmount1Int;
    let finalMainBalance = mainBalanceInt - donationAmount1Int;
    if (donationAmount1Int >= 100) {
        
        mainBalance.innerText = finalMainBalance;
        totalDonation3.innerText = finalDonation;
        window.location.href = "#my_modal_8";
        const d = new Date();
        let date = d.toDateString();
        let time = d.toTimeString();

        let text = `<div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">${donationAmount1Int} Taka is Donate Aid for Injured in the Quota Movement</h2>
          <p>Date: ${date} ${time} </p>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>`;

        tabHistory.innerHTML += text;

    }
    else{
        window.location.href = "#my_modal_9";
    }

});

btnDonation.addEventListener('click', function(event){
    event.preventDefault();
    tabDonations.className = "d-block";
    tabHistory.className= "d-none";

});

btnHistory.addEventListener('click', function(event){
    event.preventDefault();
    tabDonations.className = "d-none";
    tabHistory.className= "d-block";

});
