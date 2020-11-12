import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import  PersonalInfo  from "./steps/PersonalInfo";
import  Contact  from "./steps/Contact";
import  Gender  from "./steps/Gender";
import  Reason  from "./steps/Reason";
import  Insurance  from "./steps/Insurance";
import Appointment  from "./steps/Appointment";
import  Review  from "./steps/Review";
import  Submit  from "./steps/Submit";

const defaultData = {
  fulltName: "",
 
  streetAddress: "",
  city: "",
  state: "",
  apt: "",
  phone: "",
  timeSlot: "",
  date: "",
  reason: "",
  gender: "",
  preferredGender: "",
  insurance: "",
 
  email: "",
};

const steps = [
  { id: "personalInfo" },
  { id: "appointment" },
  
 
  { id: "reason" },
  { id: "gender" },
  { id: "insurance" },
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

const Booking = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "personalInfo":
      return <PersonalInfo {...props} />;
    case "appointment":
      return <Appointment {...props} />;
    case "reason":
      return <Reason {...props} />;
    case "gender":
      return <Gender {...props} />;
    case "insurance":
      return <Insurance {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>In Person Physical Therapy Booking</h1>
    </div>
  );
};

export default Booking;