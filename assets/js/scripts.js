document.addEventListener("DOMContentLoaded", () => {
  // 1) Fecha automaticamente o menu mobile ao clicar em links
  const navCollapseEl = document.getElementById("navbarNav");
  if (navCollapseEl && window.bootstrap) {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navCollapseEl, {
      toggle: false,
    });
    const links = navCollapseEl.querySelectorAll("a.nav-link, a.btn-cta-nav");

    links.forEach((link) => {
      link.addEventListener("click", () => {
        const toggler = document.querySelector(".navbar-toggler");
        const isMobile =
          toggler && getComputedStyle(toggler).display !== "none";
        if (isMobile) bsCollapse.hide();
      });
    });
  }

  // 2) Botão voltar ao topo (aparece após rolar)
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 500) backToTop.classList.add("show");
      else backToTop.classList.remove("show");
    };

    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
