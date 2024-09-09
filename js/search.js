function searchFunction() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const pages = ["index.html", "jobs.html", "policies.html", "services.html", "training.html"];
    const terms = ["home", "jobs", "policies", "services", "training"];

    let foundPage = pages.find((page, index) => terms[index].includes(input));
    if (foundPage) {
        window.location.href = foundPage;
    }
}
