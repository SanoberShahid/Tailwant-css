import React from 'react'

const contact = () => {
  return (
   <section className='contact-form border max-w-lg mx-auto my-20 p-8 bg-white shadow-md rounded-md'>
<h2 className='text-4xl font-bold mb-6 text-center' data-aos='fade-up'>CONTACT-US</h2>
<form>
    <input type ='text' placeholder='fullname' className ='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md'required />
    <input type ='email' placeholder='email' className ='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md'required />
    <input type ='text' placeholder='phone-number' className ='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md'required />
    <textarea placeholder ='message' className ='w-full mb-4 px-4 py-2 border border-blue-500 rounded-md' rows={5} required /><textarea/>
    <button type ='submit' className='w-full bg-blue-500 text-white py-2 rounded-md'>SEND-ME</button>
</form>
   </section>
  )
}

export default contact
