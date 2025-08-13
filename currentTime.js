class CurrentTime extends HTMLElement {
    // The browser calls this method when the element is
    // added to the DOM.
    constructor() {
        super()
    }

    connectedCallback() {
        // run tick every second
        const shadow = this.attachShadow({ mode: "closed" });
        const span = document.createElement("span");
        shadow.appendChild(span)
        const tick = setInterval(()=>{
            // Create a Date object representing the current date.
			  let now = new Date();

        	// Format the time to a human-friendly string, and set the
			    // formatted time as the text content of this element.
        	span.textContent = now.toLocaleTimeString();
		}, 1000 )
    }
}

// Register the CurrentDate component using the tag name <current-date>.
customElements.define('current-time', CurrentTime);