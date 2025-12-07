document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {
        const header = item.querySelector(".acc-header");
        const body = item.querySelector(".acc-body");

        body.style.maxHeight = "0px";
        body.style.overflow = "hidden";

        function open() {
            body.style.maxHeight = body.scrollHeight + "px";
            item.setAttribute("aria-expanded", "true");
        }

        function close() {
            body.style.maxHeight = "0px";
            item.setAttribute("aria-expanded", "false");
        }

        header.addEventListener("click", () => {
            const isOpen = item.getAttribute("aria-expanded") === "true";
            if (isOpen) close();
            else {
                document
                    .querySelectorAll(".accordion-item[aria-expanded='true']")
                    .forEach(it => {
                        it.querySelector(".acc-body").style.maxHeight = "0px";
                        it.setAttribute("aria-expanded", "false");
                    });
                open();
            }
        });
    });
});