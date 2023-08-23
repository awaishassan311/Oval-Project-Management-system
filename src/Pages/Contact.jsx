import React from "react";
import Contactus from "../component/Contact page/Contacts/Contactus";
import Offices from "../component/Contact page/Offices/Offices";
import Topics from "../component/Contact page/Topics/Topics";
import Teams from "../component/teams/Teams";
export default function Contact() {
  return (
    <div>
      <Contactus />
      <Topics />
      <Offices />
      <Teams />
    </div>
  );
}
