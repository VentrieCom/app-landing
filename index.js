const domain = document.getElementById("domain");
const form = document.getElementById("form");
const defaultDomain = localStorage.getItem("domain");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // window.open(domain.value);
  localStorage.setItem("domain", domain.value);
  window.location.href = domain.value;
});

const getDomain = () => {
  if (defaultDomain) {
    domain.value = localStorage.getItem("domain");
    window.location.href = domain.value;
  }
};

getDomain();
