import { ContactFormData } from '../types';

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string>;
}

export async function submitContactEnquiry(formData: ContactFormData): Promise<ApiResponse<ContactFormData>> {
  const errors: Record<string, string> = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Please provide your name or organization contact.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email.trim())) {
    errors.email = "Please provide a valid business or personal email address.";
  }

  if (!formData.opportunityType || formData.opportunityType.trim() === '') {
    errors.opportunityType = "Please select an opportunity type.";
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = "Please share a brief message (minimum 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted fields.",
      errors,
    };
  }

  try {
    // Artificial latency for realistic feedback
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (process.env.NODE_ENV === 'development') {
      console.log("[POST /api/contact] New Enquiry Received:", {
        ...formData,
        timestamp: new Date().toISOString()
      });
    }

    return {
      success: true,
      message: "Thank you for reaching out. Your enquiry has been received and will be reviewed promptly.",
      data: formData,
    };
  } catch (error) {
    console.error("[API Error] Failed to submit enquiry:", error);
    return {
      success: false,
      message: "A network issue occurred. Please reach out directly via email.",
    };
  }
}
