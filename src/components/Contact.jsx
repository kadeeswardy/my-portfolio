import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-netural-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Get In Toush </h1>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
             <p className="my-4">{CONTACT.phoneNo}</p>
                <a href="kadeeswardyy44@gmail.com" className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
