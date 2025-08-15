import React, { useState ,useRef } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const formRef = useRef();
  const [form,setForm] = useState({
    name:"",
    email:"",
    message:""
  })
  const [status,setStatus] = useState(
    {
      loading:false,
      ok:null,
      msg:""
    }
  )

  const handleChange = (e)=>{
    const {name,value } = e.target
    setForm((prev)=>({
      ...prev,
      [name]:value
    }))
  }

  const submit = async (e)=>{
    e.preventDefault();
    setStatus({loading:true,ok:null,msg:""});

    emailjs.sendForm( "service_3vsw6h4" , "template_e997eej",formRef.current,"oeYmccowsg22QJWIK")
    .then(()=>{
      setStatus({loading:false,ok:true,msg:"Message sent successfully."})
      setForm({
        name:"",
    email:"",
    message:""
      })
    })
    .catch(()=>{
      setStatus({loading:false,ok:false,msg:"Failed to send the message."})
    })

    // try{
    //   const res = await fetch(`${API_BASE}/api/contact`,{
    //     method:"POST",
    //     headers:{"Content-Type":"application/json"},
    //     body:JSON.stringify(form),
    //   })
    //   const date = await res.json();
    //   if(!res.ok) throw new Error(data?.message ||"Something went wrong");
    //   setStatus({
    //     loading:false,
    //     ok:true,
    //     msg:"Thanks! I'll get back to you shortly."
    //   })
    // }catch(err){
    //   setStatus({
    //     loading:false,
    //     ok:false,
    //     msg:err.message||"Failed to send."
    //   })
    // }
  }

  return (
    <section id="contact" className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <form ref={formRef} onSubmit={submit} className="max-w-lg mx-auto flex flex-col gap-4">

          <input 
          id="name" 
          name="name"
          value={form.name} 
          onChange={handleChange} 
          required 
          minLength={2} 
          type="text" 
          placeholder="Your Name" 
          className="p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700" 
          />

          <input 
          id="email" 
          name="email"
          type="email" 
          value={form.email} 
          onChange={handleChange} 
          placeholder="you@example.com" 
          className="p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700" 
          />

          <textarea 
          id="message" 
          name="message"
          rows="5" 
          value={form.message} 
          onChange={handleChange} 
          required 
          minLength={10} 
          placeholder="Message" 
          className="p-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700">
          </textarea>

          <button 
          disabled={status.loading}
          className={`px-6 py-3 rounded-lg ${status.loading ?"bg-purple-400 cursor-not-allowed":"bg-purple-500 hover:bg-purple-600"} hover:bg-purple-600`}>
            {status.loading ? "Sending..." :"Send Message"}
            </button>
          
          {status.msg && (
            <p className={`text-sm ${status.ok?"text-emerald-400":"text-red-400"}`}>
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

