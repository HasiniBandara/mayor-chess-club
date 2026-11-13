import { useEffect } from "react";

// Port of your responsive.js. It was not linked in the HTML files you sent,
// so it is NOT used yet. To enable it on a page, call `useResponsiveLayout()`
// inside that page component.
export default function useResponsiveLayout() {
  useEffect(() => {
    const apply = () => {
      const navbar = document.querySelector(".navbar");
      const navbarList = document.querySelector(".navbarList");
      const boxes = document.querySelectorAll(".box");
      if (!navbar || !navbarList) return;
      const w = window.innerWidth;

      if (w <= 576) {
        navbar.style.flexDirection = "column";
        navbar.style.height = "auto";
        navbarList.style.flexDirection = "column";
        navbarList.style.gap = "15px";
        navbarList.style.marginRight = "0";
        navbarList.style.alignItems = "center";
        boxes.forEach((box) => {
          box.style.width = "90%";
          box.style.margin = "10px auto";
        });
      } else if (w <= 992) {
        navbar.style.flexDirection = "row";
        navbar.style.height = "auto";
        navbarList.style.flexDirection = "row";
        navbarList.style.gap = "20px";
        navbarList.style.marginRight = "40px";
        boxes.forEach((box) => {
          box.style.width = "45%";
          box.style.margin = "10px auto";
        });
      } else {
        navbar.style.flexDirection = "row";
        navbar.style.height = "90px";
        navbarList.style.flexDirection = "row";
        navbarList.style.gap = "30px";
        navbarList.style.marginRight = "120px";
        boxes.forEach((box) => {
          box.style.width = "360px";
          box.style.margin = "10px 30px";
        });
      }
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);
}
