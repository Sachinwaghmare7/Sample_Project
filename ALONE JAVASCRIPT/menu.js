function showMainItems() {
    let list = document.getElementById("jitterList");
    list.style.display = "block";
    setTimeout(() => {
        list.style.opacity = "1";
    }, 50);
}

function hideMainItems() {
    let list = document.getElementById("jitterList");
    list.style.opacity = "0";
    setTimeout(() => {
        list.style.display = "none";
    }, 300);
}