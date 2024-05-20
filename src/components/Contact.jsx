import { CONTACT } from "../constants";

export const Contact = () => {
  return (
    <div className="border-b borderneutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.location} </p>
        <p className="my-4">{CONTACT.phoneNo} </p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};
