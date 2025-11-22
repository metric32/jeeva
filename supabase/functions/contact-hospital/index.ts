import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactRequest {
  hospitalId: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  bedType: string;
  urgency: "low" | "medium" | "high" | "emergency";
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { hospitalId, patientName, patientPhone, patientEmail, bedType, urgency, message } =
      (await req.json()) as ContactRequest;

    if (!hospitalId || !patientName || !patientPhone || !bedType) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required fields",
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    const requestData = {
      timestamp: new Date().toISOString(),
      patient: {
        name: patientName,
        phone: patientPhone,
        email: patientEmail,
      },
      bedRequest: {
        type: bedType,
        urgency: urgency,
      },
      message: message || "",
    };

    console.log("Hospital Contact Request:", requestData);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Hospital contact request submitted successfully",
        requestId: crypto.randomUUID(),
        timestamp: requestData.timestamp,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing contact request:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to process contact request",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
