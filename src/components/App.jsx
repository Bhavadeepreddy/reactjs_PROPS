import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="+123 456 789"
        email="b@beyonce.com"
      />
      <Card
        name="Jack Bauer"
        imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="+987 654 321"
        email="jack@nowhere.com"
      />

      <Card
        name="Chuck Norris"
        imgURL="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phone="+918 372 574"
        email="gmail@chucknorris.com"
      />

      <Card
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />

      <Card
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
