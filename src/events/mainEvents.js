export const mainEvents = () => {
  $(document)
    .on("click", "#mobile-hamburger", (e) => {
      $(".nav-links").addClass("show");
      $("#mobile-hamburger").hide();
      $("#mobile-menu-close").show();
      $(".nav-links.show li:first-child a").focus();
    })
    .on("click", "#mobile-menu-close", (e) => {
      $(".nav-links").removeClass("show");
      $("#mobile-hamburger").show();
      $("#mobile-menu-close").hide();
    })
    .on("keydown", ".nav-links.show li:first-child a", (e) => {
      if (e.key === "Tab" && e.shiftKey) {
        e.preventDefault();
        $(".nav-links.show li:last-child").focus();
      }
    })
    .on("keydown", ".nav-links.show li:last-child", (e) => {
      if (e.key === "Tab" && !e.shiftKey) {
        e.preventDefault();
        $(".nav-links.show li:first-child a").focus();
      }
    });
};
