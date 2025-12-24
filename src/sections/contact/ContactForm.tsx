import { useState } from "react";

// Google Form configuration
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSebObFn3pX5hvZ6zieh3ysRfgdZgvo-5X6Aud-YmlPumnG_Hw/formResponse";
const FORM_ENTRIES = {
    fullName: "entry.1798712113",
    phone: "entry.1485441159",
    email: "entry.1044350508",
    message: "entry.825016634",
};

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        // Build form data for Google Forms
        const googleFormData = new FormData();
        googleFormData.append(FORM_ENTRIES.fullName, formData.fullName);
        googleFormData.append(FORM_ENTRIES.phone, formData.phone);
        googleFormData.append(FORM_ENTRIES.email, formData.email);
        googleFormData.append(FORM_ENTRIES.message, formData.message);

        try {
            // Submit to Google Forms (using no-cors mode since Google Forms doesn't allow CORS)
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: "POST",
                body: googleFormData,
                mode: "no-cors", // Required for Google Forms
            });

            // Since no-cors doesn't return a readable response, we assume success
            setSubmitStatus("success");
            setFormData({ fullName: "", phone: "", email: "", message: "" });
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === "success" && (
                <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm">
                    Thank you! Your message has been sent successfully.
                </div>
            )}
            {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
                    Something went wrong. Please try again or email directly.
                </div>
            )}

            <div>
                <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-zinc-400 mb-2"
                >
                    Full Name
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg 
                             text-white placeholder-zinc-500 
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-colors duration-200"
                    required
                    disabled={isSubmitting}
                />
            </div>

            <div>
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-zinc-400 mb-2"
                >
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg 
                             text-white placeholder-zinc-500 
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-colors duration-200"
                    disabled={isSubmitting}
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-400 mb-2"
                >
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg 
                             text-white placeholder-zinc-500 
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-colors duration-200"
                    required
                    disabled={isSubmitting}
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-zinc-400 mb-2"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg 
                             text-white placeholder-zinc-500 
                             focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                             transition-colors duration-200 resize-none"
                    required
                    disabled={isSubmitting}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 
                         text-white font-semibold rounded-lg 
                         hover:from-cyan-400 hover:to-cyan-500 
                         transform hover:scale-[1.02] 
                         transition-all duration-200 
                         focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-900
                         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
                {isSubmitting ? "Sending..." : "Submit"}
            </button>
        </form>
    );
}
