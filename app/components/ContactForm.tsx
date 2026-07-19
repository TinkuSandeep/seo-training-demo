"use client";

import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type ApiResponse = {
  success: boolean;
  message: string;
  errors?: FormErrors;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormData, value: string) {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    setSubmitStatus("idle");
    setStatusMessage("");
  }

  function validateForm(): FormErrors {
    const nextErrors: FormErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (
      formData.phone.trim() &&
      !/^[0-9+\-\s()]{7,20}$/.test(formData.phone)
    ) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 20) {
      nextErrors.message =
        "Please enter at least 20 characters in your message.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus("error");
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok || !result.success) {
        setErrors(result.errors ?? {});
        setSubmitStatus("error");
        setStatusMessage(
          result.message || "Unable to submit your message."
        );
        return;
      }

      setSubmitStatus("success");
      setStatusMessage(result.message);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Contact form error:", error);

      setSubmitStatus("error");
      setStatusMessage(
        "Unable to connect to the server. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm md:p-10"
    >
      {statusMessage && (
        <div
          role={submitStatus === "error" ? "alert" : "status"}
          className={
            submitStatus === "success"
              ? "mb-8 rounded-xl border border-green-200 bg-green-50 p-5 text-green-800"
              : "mb-8 rounded-xl border border-red-200 bg-red-50 p-5 text-red-800"
          }
        >
          <p className="font-semibold">{statusMessage}</p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block font-semibold text-gray-900">
            Full name <span className="text-red-600">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClassName}
            placeholder="Enter your full name"
          />

          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold text-gray-900">
            Email address <span className="text-red-600">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClassName}
            placeholder="name@example.com"
          />

          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block font-semibold text-gray-900">
            Phone number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClassName}
            placeholder="+91 98765 43210"
          />

          {errors.phone && (
            <p id="phone-error" className="mt-2 text-sm text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block font-semibold text-gray-900"
          >
            Company or team
          </label>

          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={inputClassName}
            placeholder="Enter company or team name"
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="block font-semibold text-gray-900">
          Subject <span className="text-red-600">*</span>
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={inputClassName}
          placeholder="What would you like to discuss?"
        />

        {errors.subject && (
          <p id="subject-error" className="mt-2 text-sm text-red-600">
            {errors.subject}
          </p>
        )}
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block font-semibold text-gray-900">
          Message <span className="text-red-600">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          rows={7}
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClassName} resize-y`}
          placeholder="Tell us about your SEO training requirement."
        />

        <div className="mt-2 flex justify-between gap-4 text-sm">
          <div>
            {errors.message && (
              <p id="message-error" className="text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <span className="text-gray-500">
            {formData.message.length} characters
          </span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 rounded-lg bg-blue-700 px-7 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
      >
        {isSubmitting ? "Submitting..." : "Submit Message"}
      </button>
    </form>
  );
}