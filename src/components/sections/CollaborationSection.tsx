import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { submitContactEnquiry } from '../../services/api';
import { ContactFormData } from '../../types';
import { profile } from '../../data/profile';
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Mail, Instagram } from 'lucide-react';

export const CollaborationSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    projectType: 'Brand Collaboration',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-level error on edit
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setFieldErrors({});

    const res = await submitContactEnquiry(formData);

    setLoading(false);

    if (res.success) {
      setSuccess(true);
    } else {
      setErrorMsg(res.message);
      if (res.errors) {
        setFieldErrors(res.errors);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: 'Brand Collaboration',
      message: '',
    });
    setSuccess(false);
    setErrorMsg(null);
    setFieldErrors({});
  };

  return (
    <section id="collaborate" className="py-24 md:py-36 bg-[#F7F4EF] border-b border-[#DDD8D0]">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeading
                eyebrow="Get In Touch"
                title="Let's create something meaningful."
                subtitle="For brand partnerships, curated campaigns, public appearances, and media projects, let's connect."
              />

              <div className="space-y-6 pt-4 text-sm text-[#6F6A64]">
                <p className="leading-relaxed">
                  Every engagement is tailored to align with brand ethos, creative direction, and memorable visual storytelling. Inquiries are reviewed with discretion.
                </p>

                <div className="p-6 bg-white border border-[#DDD8D0] space-y-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A2032] font-semibold block">
                    Direct Contacts
                  </span>

                  <div className="flex items-center gap-3 text-sm text-[#171717]">
                    <Mail className="w-4 h-4 text-[#7A2032] shrink-0" />
                    <a
                      href={`mailto:${profile.contactEmail}`}
                      className="hover:text-[#7A2032] transition-colors"
                    >
                      {profile.contactEmail}
                    </a>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-[#171717]">
                    <Instagram className="w-4 h-4 text-[#7A2032] shrink-0" />
                    <a
                      href={profile.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#7A2032] transition-colors"
                    >
                      @{profile.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#DDD8D0] text-xs text-[#8C8379] space-y-1">
              <span className="block font-medium text-[#171717]">Availability Status</span>
              <p>Booking selected collaborations and engagements for 2026.</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#DDD8D0] p-6 sm:p-10 shadow-sm relative">
              {success ? (
                /* Success State Card */
                <div className="py-12 text-center space-y-5 animate-fadeIn">
                  <div className="w-14 h-14 bg-[#FAF7F2] border border-[#7A2032]/30 rounded-full flex items-center justify-center mx-auto text-[#7A2032]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <h3 className="font-serif text-3xl text-[#171717]">
                    Enquiry Received
                  </h3>

                  <p className="text-sm text-[#6F6A64] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name || 'there'}. Your inquiry has been received and will be reviewed promptly.
                  </p>

                  <div className="pt-6">
                    <button
                      onClick={handleReset}
                      className="py-3 px-6 border border-[#171717] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#171717] hover:text-[#F7F4EF] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-2"
                      >
                        Your Name <span className="text-[#7A2032]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Jane Doe"
                        className={`w-full py-3 px-4 bg-[#FAF8F5] border text-sm text-[#171717] focus:outline-none focus:bg-white transition-colors ${
                          fieldErrors.name
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#DDD8D0] focus:border-[#171717]'
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-red-600 text-[11px] mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-2"
                      >
                        Email Address <span className="text-[#7A2032]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full py-3 px-4 bg-[#FAF8F5] border text-sm text-[#171717] focus:outline-none focus:bg-white transition-colors ${
                          fieldErrors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-[#DDD8D0] focus:border-[#171717]'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-red-600 text-[11px] mt-1">{fieldErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Company / Brand */}
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-2"
                      >
                        Company / Agency / Brand
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization Name"
                        className="w-full py-3 px-4 bg-[#FAF8F5] border border-[#DDD8D0] text-sm text-[#171717] focus:outline-none focus:bg-white focus:border-[#171717] transition-colors"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-2"
                      >
                        Project Type <span className="text-[#7A2032]">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full py-3 px-4 bg-[#FAF8F5] border border-[#DDD8D0] text-sm text-[#171717] focus:outline-none focus:bg-white focus:border-[#171717] transition-colors"
                      >
                        <option value="Brand Collaboration">Brand Collaboration</option>
                        <option value="Campaign">Campaign</option>
                        <option value="Event / Appearance">Event / Appearance</option>
                        <option value="Content">Content Project</option>
                        <option value="Media">Media / Broadcast</option>
                        <option value="Other">Other Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-wider text-[#171717] font-medium mb-2"
                    >
                      Project Details / Message <span className="text-[#7A2032]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the campaign objectives, timelines, and specific requirements..."
                      className={`w-full py-3 px-4 bg-[#FAF8F5] border text-sm text-[#171717] focus:outline-none focus:bg-white transition-colors ${
                        fieldErrors.message
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-[#DDD8D0] focus:border-[#171717]'
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="text-red-600 text-[11px] mt-1">{fieldErrors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto py-4 px-10 bg-[#171717] text-[#F7F4EF] hover:bg-[#7A2032] disabled:bg-[#6F6A64] transition-colors duration-300 uppercase tracking-[0.18em] text-xs font-semibold inline-flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
