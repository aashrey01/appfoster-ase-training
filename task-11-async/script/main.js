
async function modalDataFetch(id){
    try{
      const response=await fetch(`https://gorest.co.in/public/v2/users/${id}`);
      const data=response.json();
      return data;
    }
    catch(err){
      console.log("Error fetching data "+err);
    }
  }
  
  async function myfunc(id) {
  
    const item=await modalDataFetch(id);
  
    if(!item) console.log("No item found-modal data ,myfunc() error")
  
    const modalEmail = document.querySelector("#modal-email");
    const modalGender = document.querySelector("#modal-gender");
    const modalStatus = document.querySelector("#modal-status");
  
    console.log(item)
    modalEmail.textContent = `${item.email}`;
    modalGender.textContent = `${item.gender}`;
    modalStatus.textContent = `${item.status}`;
  
    const modal = new bootstrap.Modal(document.querySelector(".modal"));
    modal.show();
  }
  
  async function fetchData() {
    try {
      const response = await fetch("https://gorest.co.in/public/v2/users");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  async function dData() {
    const container = document.querySelector(".container");
    const data = await fetchData();
  
    if (!data) {
      return;
    }
  
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("d-flex");
      card.classList.add("border-top");
      card.classList.add("text-primary");
      card.classList.add("p-2");
      card.classList.add("justify-content-between");
  
      const title = document.createElement("div");
      title.textContent = item.name;
  
      const body = document.createElement("div");
      body.innerHTML = `<i class="fa-solid fa-eye"></i>`;
      const eyeIcon = body.querySelector('i');

      eyeIcon.style.cursor = 'pointer';
      eyeIcon.addEventListener('mouseover', function() {
        eyeIcon.style.color = 'red'; 
      });
    
      eyeIcon.addEventListener('mouseout', function() {
        eyeIcon.style.color = ''; 
      });
  
      body.addEventListener("click", () => myfunc(item.id));
  
      card.appendChild(title);
      card.appendChild(body);
      container.appendChild(card);
    });
  }
  
  dData();
