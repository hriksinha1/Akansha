import { ContactFormData } from '../types';

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

export async function submitContactEnquiry(formData: ContactFormData): Promise<ApiResponse<ContactFormData>> {
  // Client-side validation
  const errors: Record<string, string> = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Please provide your full name or representative name.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = "Please provide a valid business or personal email address.";
  }

  if (!formData.projectType || formData.projectType.trim() === '') {
    errors.projectType = "Please select a project type.";
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Please share a brief message (at least 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  // Simulate network request to dummy endpoint /api/contact
  try {
    // Artificial latency for realistic UX feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (process.env.NODE_ENV === 'development') {
      console.log("[API /api/contact] Enquiry received:", {
        ...formData,
        timestamp: new Date().toISOString()
      });
    }

    return {
      success: true,
      message: "Thank you for reaching out. Your enquiry has been received and will be reviewed shortly.",
      data: formData,
    };
  } catch (error) {
    console.error("[API Error] Failed to submit enquiry:", error);
    return {
      success: false,
      message: "A temporary network issue occurred. Please try again or reach out directly via email.",
    };
  }
}
