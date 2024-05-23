window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});//yani umumiy window objecti chaqirildi yani butunlay ekran chaqirildi va window objectida addeventlistener hodisasi sodir bo'lganda toggle metodi bilan sticky classi qo'shilsin va scrolly noldan katta bo'lsa yani agar window noldan katta bo'lsa sticky classi qo'shilsin
