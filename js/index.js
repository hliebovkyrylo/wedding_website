"use strict"

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

// slider
const slides = document.querySelectorAll(".venues__item");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
        slide.classList.add("active");
        } else {
        slide.classList.remove("active");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex); 

slides.forEach((slide, index) => {
    const prevBtn = slide.querySelector(".prev");
    const nextBtn = slide.querySelector(".next");

    prevBtn.addEventListener("click", () => {
        prevSlide();
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
    });
});

// swiper
const Swiper = new Swiper('.swiper', {
    direction: 'vertical',
})