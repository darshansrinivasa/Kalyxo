import { useState } from "react";
import Button from "@/components/Global/Button/Button";

function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">Select</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 dark:bg-slate-900 p-6 md:p-10 rounded-2xl space-y-6"
    >
      {/* Name + Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Full Name *"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
        <InputField
          label="Email Address *"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
      </div>

      {/* Phone + Company */}
      <div className="grid md:grid-cols-2 gap-6">
        <InputField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (234) 567-890"
        />
        <InputField
          label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your Company"
        />
      </div>

      {/* Selects */}
      {/* <div className="grid md:grid-cols-2 gap-6"> */}
        <SelectField
          label="Service Interested In *"
          name="service"
          value={formData.service}
          onChange={handleChange}
          options={[
            "Shopify Store Setup",
            "Custom Development",
            "Store Redesign",
            "Speed Optimization",
            "App Integration",
            "Maintenance & Support",
          ]}
        />

        {/* <SelectField
          label="Budget Range"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          options={[
            "$1k - $5k",
            "$5k - $10k",
            "$10k - $25k",
            "$25k+",
          ]}
        /> */}
      {/* </div> */}

      {/* Timeline */}
      {/* <SelectField
        label="Project Timeline"
        name="timeline"
        value={formData.timeline}
        onChange={handleChange}
        options={[
          "1-2 weeks",
          "2-4 weeks",
          "1-2 months",
          "Flexible",
        ]}
      /> */}

      {/* Message */}
      <div>
        <label className="block mb-2 font-medium">
          Project Details *
        </label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Tell us about your project..."
        />
      </div>

      <Button
        content="Send Message"
        className="button primary-button purple w-full py-4"
      />
    </form>
  );
}

export default ContactForm;