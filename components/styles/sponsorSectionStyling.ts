const SPONSOR_SECTION_STYLING = `
.hide-slider-scrollbar::-webkit-scrollbar {
  display: none;
}

/* IE & Edge */
.hide-slider-scrollbar {
  -ms-overflow-style: none;
}

/* Firefox */
.hide-slider-scrollbar ::-moz-scrollbar {
  display: none;
}


@keyframes reviewCardAnim1 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-52%);
  }
}

.section-reviews {
  grid-column: 1/12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 8rem 0;
  transition: all 0.3s ease-in-out;
  
}

.review-card__anim1 {
  animation: reviewCardAnim1 25s ease-in-out infinite alternate;

  &:hover {
    animation-play-state: paused;
  }
}

@keyframes styles_line-animation {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.styles_line {
  white-space: nowrap;
  // animation: styles_line-animation 60s linear infinite;
  animation: reviewCardAnim1 25s ease-in-out infinite alternate;
}

.styles_line span {
  position: relative;
}

.styles_line
span:not(:last-child) {
margin-right: 44px;
}

.styles_line
span:not(:last-child):after {
content: "";
position: absolute;
top: 50%;
right: -28px;
transform: translateY(-50%);
width: 12px;
height: 12px;
background: var(--color-white-8);
border-radius: 50%;
}

`;

export default SPONSOR_SECTION_STYLING