const HEADER_SECTION_STYLING = `

.header-section {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  -webkit-backdrop-filter: blur(0);
  backdrop-filter: blur(0);
  // transition: 1s ease;
}

.header-scroll-active {
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: var(--blurred-box-main-background);
  border: var(--blurred-box-main-border);
  box-shadow: var(--blurred-box-main-box-shadow);
  // transition: 0.5ms;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
}

.header-container img {
  height: 4rem;
  width: 4rem;
}
`;

export default HEADER_SECTION_STYLING