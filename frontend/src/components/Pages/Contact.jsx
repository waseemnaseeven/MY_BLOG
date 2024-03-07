import React from "react";

function Contact() {
    return (
        <div>
        <h1>Contact</h1>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <br />
            <label>
                Email:
                <input type="text" name="email" />
            </label>
            <br />
            <label>
                Message:
                <textarea name="message" />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
}

export default Contact;
