import "./Contact.css";

let numberofContact = 5;

const profile3 = require("./8.jpg");
const profile2 = require("./11.jpg");
const profile1 = require("./20.jpg");
const profile4 = require("./43.jpg");
const profile5 = require("./70.jpg");

function Contact() {
  let clicked = false;
  return (
    <div>
      <h1>{numberofContact} Contacts</h1>
      <div className="Contact-details">
        <div className="inline-div">
          <img src={profile1} alt="pic1" />
          <p>
            Jess Yates
            <br />
            <span className="years">35 years</span>
          </p>
        </div>
        <div className="inline-div">
          <img src={profile2} alt="pic2" />
          <p>
            Jerry Hogan
            <br />
            <span className="years">29 years</span>
          </p>
        </div>
        <div className="inline-div">
          <img src={profile3} alt="pic3" />
          <p>
            Tom Hans
            <br />
            <span className="years">32 years</span>
          </p>
        </div>
        <div className="inline-div">
          <img src={profile4} alt="pic4" />
          <p>
            Harrison Walsh
            <br />
            <span className="years">44 years</span>
          </p>
        </div>
        <div className="inline-div">
          <img src={profile5} alt="pic5" />
          <p>
            Peb Gardner
            <br />
            <span className="years">21 years</span>
          </p>
        </div>
      </div>
      <button
        onClick={(e) => {
          if (clicked == false) {
            e.target.parentElement.firstChild.innerText = "0 Contact";
            e.target.parentElement.firstElementChild.nextSibling.remove();
            return (clicked = true);
          }
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default Contact;
