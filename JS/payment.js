    function showCard() {
        document.getElementById("card-content").style.display = "block";
        document.getElementById("cash-content").style.display = "none";

        document.getElementById("card-tab").classList.add("active");
        document.getElementById("cash-tab").classList.remove("active");
    }

    function showCash() {
        document.getElementById("card-content").style.display = "none";
        document.getElementById("cash-content").style.display = "block";

        document.getElementById("card-tab").classList.remove("active");
        document.getElementById("cash-tab").classList.add("active");
    }

    window.onload = function () {
        showCard(); // default to card
    }