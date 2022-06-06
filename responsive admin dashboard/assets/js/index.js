const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");




menuBtn.addEventListener("click",() =>{
    sideMenu.style.display = "block";
})

closeBtn.addEventListener("click", () =>{
    sideMenu.style.display = "none";
});


// change theme

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");
    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// fill orders in table
Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = 
                 `
                        <td>${order.productName}</td>
                        <td>${order.ProductNumber}</td>
                        <td>${order.ProductStatus}</td>
                        <td class="${order.Shipping === "Declined" ? 'danger' : order.Shipping === 'pending' ? 'warning' :'primary'}">${order.Shipping}</td>
                        <td class="primary">Details</td>
    
                 `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

// change main content
const asideContent = document.querySelectorAll(".sidebar a");
const mainH1 = document.querySelector("#mainTitle");
// const sidebarLinks = this.document.querySelector("#mainTitle").innerText
// const Dashboard = sidebarLinks.getElementsByClassName('sides')[0].innerText
function loop(){
    for (let i = 0; i < asideContent.length; i++) {
        
        asideContent[i].addEventListener("click",() =>{
            
            // mainDasboardContent.forEach(dasboardContent => {
            //     const main = document.createElement('h1');
            //     const mainContent = `

            //     <h1>${dasboardContent.DashH1Name}</h1>
               
                
            //     `
            //     main.innerHTML = mainContent;
            //     document.querySelector('.sort').appendChild(main);
            // })
           
            mainH1.textContent = asideContent[i].textContent;
            
            // document.querySelector(".insight").style.display ="none";
            // DasboardContent.forEach(contents => {
            //      const divi = document.createElement("div");
            //      divi.className = 'insight';

            //      const insightContent =`
                 
            //      <div class="sales">
            //      <span class="fa fa-chart-line"></span>
            //      <div class="middle">
            //          <div class="left">
            //              <h3>Total sales${contents.DashH3Name}</h3>
            //             <h1>${contents.DashH1Number}</h1>
            //          </div>
            //          <div class="progress">
            //              <svg>
            //                  <circle cx="38" cy="36" r="36"></circle>
            //              </svg>
            //              <div class="number">
            //                  <p>81%</p>
            //              </div>
            //          </div>
            //      </div>
            //      <small class="text-muted">Last 24 Hours</small>
            //  </div>
            //  <!-- =======END OF SALES -->
            //  <div class="expenses">
            //      <span class="fa fa-chart-bar"></span>
                 
            //      <div class="middle">
            //          <div class="left">
            //              <h3>Total expenses</h3>
            //              <h1>$14,160</h1>
            //          </div>
            //          <div class="progress">
            //              <svg>
            //                  <circle cx="38" cy="36" r="36"></circle>
            //              </svg>
            //              <div class="number">
            //                  <p>62%</p>
            //              </div>
            //          </div>
            //      </div>
            //      <small class="text-muted">Last 24 Hours</small>
            //  </div>
            //  <!-- =======END OF EXPENSES -->
            //  <div class="income">
            //      <span class="fa fa-chart-area"></span>
            //      <div class="middle">
            //          <div class="left">
            //              <h3>Total income</h3>
            //              <h1>$10,864</h1>
            //          </div>
            //          <div class="progress">
            //              <svg>
            //                  <circle cx="38" cy="36" r="36"></circle>
            //              </svg>
            //              <div class="number">
            //                  <p>44%</p>
            //              </div>
            //          </div>
            //      </div>
            //      <small class="text-muted">Last 24 Hours</small>
            //  </div>
            //  <!-- =======END OF INCOME-->
            //      `
            //      divi.innerHTML = insightContent.append(divi);
            //      DasboardContent.append(divi);
            //  })
        })
        
    }
};

loop();

const customerz = document.getElementsByTagName("a")[1].addEventListener("click", () =>{
 document.querySelector(".insight1").style.display ="grid"; 
 document.querySelector(".insight").style.display ="none"; 

});

const Dashboard = document.getElementsByTagName("a")[0].addEventListener("click", () =>{
 document.querySelector(".insight1").style.display ="none"; 
 document.querySelector(".insight").style.display ="grid"; 

});



// function closeMenu(){
//     if (menuBtn.onMouseOver) {
//         alert("hello");
//     }
// }