import { motion } from "motion/react"
import React from "react";
import Swal from "sweetalert2";

export const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "37c8eeb6-db38-459e-b55a-45502462169f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
            });
            // setResult("Message Sent Successfully");
            // event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <div className="border-b border-neutral-900 pb-20">
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -70 }}
                transition={{ duration: 0.5 }}>
                <h1 className="my-14 text-center text-4xl">
                    Get in Touch
                </h1>
            </motion.div>

            
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}

                className="flex justify-center pt-16">
                <form onSubmit={onSubmit}
                    className="  max-w-full bg-neutral-900 text-neutral-300 font-light py-3 px-5 rounded-2xl lg:px-10">

                    <div className="mt-4">
                        <label>Full Name</label>
                        <input type="text" name="name" className="w-full bg-transparent h-12 outline-none font-light p-3 border-2 rounded-md text-purple-400" placeholder='Enter your name' required />
                    </div>
                    <div className="mt-4">
                        <label>Email Address</label>
                        <input type="email" name="email" className="w-full bg-transparent h-12 outline-none font-light p-3 border-2 rounded-md text-purple-400" placeholder='Enter your email' required />
                    </div>
                    <div className="mt-4">
                        <label>Message</label>
                        <textarea name="message" className="w-full bg-transparent h-40  outline-none font-light p-3 border-2 rounded-md text-purple-400" placeholder="Enter your message" required> </textarea>
                    </div>
                    <div className="flex justify-center mt-3 mb-3">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 0px 8px",
                                color: "#9333ea"
                            }}
                            className="p-2 bg-neutral-800 text-neutral-200 rounded-lg w-full" type="submit">
                            Send Message
                        </motion.button>
                    </div>
                </form>

            </motion.div>
        </div>

    )
}
