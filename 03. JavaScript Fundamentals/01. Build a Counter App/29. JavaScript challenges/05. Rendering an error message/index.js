// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let renError = document.getElementById("error")

function renderError() {

    let message = "Something went wrong, please try again"
    renError.textContent = message
}
