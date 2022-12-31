const LAYOUT_STYLING = `

.container {
  width: 100%;
  background-color: var(--color-black);
  transform: translateZ(0) scale(1);
  z-index: 8;
}

 .container-content {
  width: min(95%, 70rem);
  margin-inline: auto;
}

.container:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 12;
  // margin-top: -10px;
  background: linear-gradient(to bottom, #000000 30%, transparent)
}

.container:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  z-index: 12;
  background: linear-gradient(to top, #000000 30%, transparent)
}

.pb-12 {
  padding-block: 12rem;
}



}
`;

export default LAYOUT_STYLING