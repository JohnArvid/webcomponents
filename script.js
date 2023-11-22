// create a class that extends HTMLElement
class MyComponent extends HTMLElement {
	// component implementation
	// lifecycle callbacks: 
	connectedCallback() {
		// code to run when element is added to DOM
		this.textContent = "Test string";
		}
	diconnectedCallback() {
		// code to run when element is removed from DOM
		// eg cleanup, removing evenlisteners etc
	}
	attributeChangedCallback() {
		// code to run when a 'watched' attribute is changed
		// watch attributes by adding them to component class's
		// observedAttributes property
	}
}


// register the component with the browser by calling:
customElements.define('my-component', MyComponent);
//hyphen in component name is required


class CurrentDate extends HTMLElement {
    // The browser calls this method when the element is
    // added to the DOM.
    connectedCallback() {
        // Create a Date object representing the current date.
        const now = new Date();
        
        // Format the date to a human-friendly string, and set the
        // formatted date as the text content of this element.
        this.textContent = now.toLocaleDateString();
    }
}

// Register the CurrentDate component using the tag name <current-date>.
customElements.define('current-date', CurrentDate);