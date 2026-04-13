// function toggleAccordion() {
//   let content = document.getElementById("content");
//   let icon = document.getElementById("icon");

//   content.classList.toggle("hidden");

//   // Change + to -
//   if (content.classList.contains("hidden")) {
//     icon.innerText = "+";
//   } else {
//     icon.innerText = "−";
//   }
// }

let headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {

    let content = header.nextElementSibling;
    let icon = header.querySelector(".icon");

    content.classList.toggle("hidden");

    icon.innerText = content.classList.contains("hidden") ? "+" : "−";
  });
});



function sendToWhatsApp() {

    let name = document.querySelector("#name")?.value;
    let email = document.querySelector("#email")?.value;
    let phone = document.querySelector("#phone")?.value;
    let message = document.querySelector("#message")?.value;

    let fullMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
 
    let number = "917091364383"; // 👉 YOUR NUMBER HERE

    let url = `https://wa.me/${number}?text=${fullMessage}`;

    window.open(url, "_blank");
}


const images = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1537432376769-00a3e7c46b4c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581090700227-1e8a5b7b5f5f?auto=format&fit=crop&w=800&q=80"
];

function changeImages() {
    let allImages = document.querySelectorAll(".blogImage");

    allImages.forEach((img) => {
        let randomIndex = Math.floor(Math.random() * images.length);
        img.src = images[randomIndex];
    });
}

window.onload = changeImages;




// <div onclick="goToPage()" class="cursor-pointer"></div>

function goToPage() {
    window.location.href = "blog-study.html";
}
function goTo() {
    window.location.href = "case-studies.html";
}

function backTo(){
    window.history.back();
}