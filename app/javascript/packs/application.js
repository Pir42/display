// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import "../../../lib/assets/fonticon/style.css";
import "../styles/styles.scss";
import { turbolinksAdapterMixin } from "vue-turbolinks"

import songs from "./songs";
import song from "./song";
import setlist from "./setlist";
import setlists from "./setlists"

document.addEventListener('turbolinks:load', () => {

  let widthPhone = 770;

  // Add custom class to display phone if 
  // innerWidth of screen is less than
  // widthPone
  const mediaPhone = () => {
    let sidebar = document.querySelector(".sidebar")
    if(window.innerWidth < widthPhone && !sidebar.className.includes("sidebar-phone")) {
      sidebar.className += " sidebar-phone"
    }
    if (window.innerWidth > widthPhone) {
      sidebar.className = sidebar.className.replace(' sidebar-phone', '')
    }
  }

  mediaPhone();
  window.addEventListener('resize', () => mediaPhone());

  document.querySelector(".sidebar__menu").addEventListener("click", () => {
    let sidebarNav = document.querySelector(".sidebar__nav");
    if(sidebarNav.className.includes("display")) {
      sidebarNav.className = sidebarNav.className.replace(' display', '')
    } else {
      sidebarNav.className += " display"
    }
  })

  songs.init()
  song.init()
  setlist.init()
  setlists.init()

})