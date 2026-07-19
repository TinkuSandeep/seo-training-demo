type ContactRequest = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  subject?: unknown;
  message?: unknown;
};

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequest;

    const submission = {
      name: cleanText(body.name),
      email: cleanText(body.email),
      phone: cleanText(body.phone),
      company: cleanText(body.company),
      subject: cleanText(body.subject),
      message: cleanText(body.message),
    };

    const errors: Record<string, string> = {};

    if (!submission.name) {
      errors.name = "Name is required.";
    }

    if (!submission.email) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (
      submission.phone &&
      !/^[0-9+\-\s()]{7,20}$/.test(submission.phone)
    ) {
      errors.phone = "Enter a valid phone number.";
    }

    if (!submission.subject) {
      errors.subject = "Subject is required.";
    }

    if (!submission.message) {
      errors.message = "Message is required.";
    } else if (submission.message.length < 20) {
      errors.message = "Message must contain at least 20 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return Response.json(
        {
          success: false,
          message: "Please correct the highlighted fields.",
          errors,
        },
        { status: 400 }
      );
    }

    console.log("Contact form submission:", {
      ...submission,
      submittedAt: new Date().toISOString(),
    });

    return Response.json(
      {
        success: true,
        message: "Your message was submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to process your request. Please try again.",
      },
      { status: 500 }
    );
  }
}