document.addEventListener("DOMContentLoaded", () => {
  const domainInput = document.getElementById("domain");
  const form = document.getElementById("form");
  const errorMessage = document.getElementById("error-message");
  const defaultDomain = localStorage.getItem("domain");
  const allowedDomains = ["ldenim", "arautos", "bmp"];

  const isValidDomain = (domain) => {
    if (domain) {
      const domainName = domain.replace(/^https?:\/\//, "").split(".")[0];
      return allowedDomains.includes(domainName);
    }
  };

  const formatDomain = (domain) => {
    let formattedDomain = domain;
    if (
      allowedDomains.some((allowedDomain) => domain.startsWith(allowedDomain))
    ) {
      if (!domain.includes(".")) {
        formattedDomain += ".munshee.app";
      } else if (!domain.endsWith(".app")) {
        formattedDomain += ".app";
      }
      if (!formattedDomain.startsWith("https://")) {
        formattedDomain = "https://" + formattedDomain;
      }
    }
    return formattedDomain;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let domainValue = domainInput.value;
    if (isValidDomain(domainValue)) {
      domainValue = formatDomain(domainValue);
      localStorage.setItem("domain", domainValue);
      window.location.href = domainValue;
    } else {
      errorMessage.style.display = "block";
    }
  });

  const getDomain = () => {
    if (defaultDomain && isValidDomain(defaultDomain)) {
      console.log("Inside if block in get domain");
      const formattedDomain = formatDomain(defaultDomain);
      domainInput.value = formattedDomain;
      window.location.href = formattedDomain;
    }
  };

  getDomain();
});
