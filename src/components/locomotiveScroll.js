// locomotiveScroll.js
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

export const initLocomotiveScroll = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smoothMobile: true, // Enable smooth scrolling on mobile devices
    inertia: 0.6, // Adjust inertia for smoother scrolling
  });

  return scroll;
};
