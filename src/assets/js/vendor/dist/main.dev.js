"use strict";

var banner_swiper = new Swiper(".swiper-banner", {
  slidesPerView: 1,
  SlidesPerGroup: 1,
  autoplay: true,
  loop: true
});
var team_swiper = new Swiper(".swiper-team", {
  slidesPerView: 3,
  spaceBetween: 16,
  SlidesPerGroup: 1,
  autoplay: false,
  loop: false,
  grabCursor: true,
  navigation: {
    nextEl: ".next-member",
    prevEl: ".prev-member"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    810: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  }
});
var partner_swiper = new Swiper(".swiper-partner", {
  slidesPerView: 5,
  SlidesPerGroup: 1,
  spaceBetween: 60,
  autoplay: true,
  loop: true
});
var login_swiper = new Swiper(".swiper-login", {
  slidesPerView: 1,
  spaceBetween: 64,
  SlidesPerGroup: 1,
  autoplay: {
    delay: 5000
  },
  loop: true,
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 64
    },
    810: {
      slidesPerView: 1,
      spaceBetween: 64
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 64
    }
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = jQuery("#calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "fr",
    initialView: "dayGridMonth",
    selectable: true,
    headerToolbar: {
      center: "title"
    },
    dateClick: function dateClick(info) {
      alert("clicked " + info.dateStr);
    } // select: function (info) {
    //   alert("selected " + info.startStr + " to " + info.endStr);
    // },

  });
  calendar.render();
});
jQuery(".to-student-information").on("click", function (event) {
  event.preventDefault();
  jQuery("#professor-student").css("display", "none");
  jQuery("#informations-student-parent").css("display", "flex");
});
jQuery(".to-professor-information").on("click", function (event) {
  event.preventDefault();
  jQuery("#professor-student").css("display", "none");
  jQuery("#informations-professor").css("display", "flex");
});
jQuery(".signup-professor").on("click", function (event) {
  event.preventDefault();
  jQuery("#informations-professor").css("display", "none");
  jQuery("#choix-cours").css("display", "flex");
});
jQuery(".signup-student").on("click", function (event) {
  event.preventDefault();
  jQuery("#informations-student-parent").css("display", "none");
  jQuery("#cours-type").css("display", "flex");
});
jQuery(".to-success-registration").on("click", function (event) {
  event.preventDefault();
  jQuery("#choix-cours-student").css("display", "none");
  jQuery(".success-registration").css("display", "flex");
});
jQuery(".to-choix-cours").on("click", function (event) {
  event.preventDefault();
  jQuery("#cours-type").css("display", "none");
  jQuery("#choix-cours-student").css("display", "flex");
});