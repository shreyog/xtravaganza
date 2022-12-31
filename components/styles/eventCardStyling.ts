const EVENT_CARD_STYLING = `
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  min-height: 19rem;

 
  border-radius: 1rem;
  background-color: var(--color-gray-darkest);
}

.card-backdrop-img {
  opacity: 0.3;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-header {
  display: flex;
  align-items: flex-start;
  // border: 1px solid blue;
}

.card-content {
  padding: 3rem;
  position: relative;
  z-index: 2;
  // border: 1px solid green;
  height: 100%;
}

.pill-container {
  position: absolute;
  right: 1rem;
  top: 1rem;
}

.pill {
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  border-radius: 2.5rem;
  margin-right: 0.25rem;
  // background-color: var(--color-primary-soft);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  white-space: nowrap;
  color: var(--color-white);
  
  font-size: var(--font-size-display-s)!important;
  line-height: var(--lh-size-display-s)!important;
  
  }

  .pill:last-child {
    margin-right: 0;
  }


  .check-list {
    margin: 0;
    padding-left: 0.8rem;
  }
  
  .check-list li {
    position: relative;
    list-style-type: none;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .check-list li:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: -2px;
      width: 5px;
      height: 11px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      border-color: #00a8a8;
      transform-origin: bottom left;
      transform: rotate(45deg);
  }

  .card-highlight-img {
    // max-height: 6rem;
    object-fit: cover;
    // border: 1px solid yellow;
    height: 100%;
    width: 100%;
  }


  .event-grid {
  display: grid;
  gap: 1.5rem;

  grid-template-rows: 1fr 2fr repeat(3, 1fr);
  grid-template-areas: 
  "a" 
  "b" 
  "c" 
  "d" 
  "e";

  padding-block: 2rem;
 
}

.card:nth-of-type(1) {
  grid-area: a;
}
.card:nth-of-type(2) {
  grid-area: b;
}
.card:nth-of-type(3) {
  grid-area: c;
}
.card:nth-of-type(4) {
  grid-area: d;
}
.card:nth-of-type(5) {
  grid-area: e;
}

.card:nth-of-type(2) > * {
 display: flex;
 flex-direction: column;
 justify-content: flex-end;
 margin-top: auto;
}

@media (min-width: 48.1em) {
  .event-grid {
   
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);  

    grid-template-areas: 
    "a b b c" 
    "d d e c";
  }
`;

export default EVENT_CARD_STYLING;
