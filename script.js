function displayNav() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("hidden");
};

function displayFeatures() {
    const featureContent = document.getElementById("feature-content");
    const featureArrow = document.getElementById("feature-arrow");
    featureContent.classList.toggle("hidden");
    if (featureContent.classList.contains("hidden")) {
        featureArrow.src = "images/icon-arrow-down.svg";
    } else {
        featureArrow.src = "images/icon-arrow-up.svg";
    }
    
}

function displayCompanyContent() {
    const companyContent = document.getElementById("company-content");
    const companyArrow = document.getElementById("company-arrow");
    companyContent.classList.toggle("hidden");
    if (companyContent.classList.contains("hidden")) {
        companyArrow.src = "images/icon-arrow-down.svg";
    } else {
        companyArrow.src = "images/icon-arrow-up.svg";
    }
}