<script>
    $(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });

    var homeLink = document.querySelector('a[data-link="home"]');
    var aboutLink = document.querySelector('a[data-link="about"]');
    var ticketsLink = document.querySelector('a[data-link="tickets"]');

    function scrollToSection(id) {
    var section = document.getElementById(id);
    if (section) {
    section.scrollIntoView({ behavior: "smooth" });
}
}

    if (homeLink) {
    homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToSection("home");
});
}

    if (aboutLink) {
    aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToSection("about");
});
}

    if (ticketsLink) {
    ticketsLink.addEventListener("click", function (e) {
    e.preventDefault();
    scrollToSection("tickets");
});
}
});
</script>
