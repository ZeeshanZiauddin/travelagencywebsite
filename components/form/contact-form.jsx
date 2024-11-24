/** @format */

"use client";

import React, { useState } from "react";
import { z } from "zod"; // Import Zod
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { sendQuery } from "@/utils/api";
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Textarea } from "../ui/textarea";

// Define Zod schema for validation
const contactSchema = z.object({
  full_name: z.string().min(1, "Full name is required."),
  email: z.string().email("Invalid email address."),
  phone: z
    .string()
    .regex(/^\d{10,16}$/, "Phone number must be between 10 and 16 digits.") // Example regex for phone validation
    .optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [modalInfo, setModalInfo] = useState({ open: false, type: "" });

  const handleInputChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFormErrors({});

    // Validate form values using Zod
    try {
      contactSchema.parse(formValues); // Throws an error if validation fails

      // Submit data to the API
      const result = await sendQuery(formValues, "/contact");
      console.log("Form submitted successfully:", result);
      setModalInfo({ open: true, type: "success" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.flatten().fieldErrors;
        setFormErrors(errors);
      } else {
        setFormErrors({ general: "An error occurred." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="lg:max-w-lg">
          <Card className="shadow-lg border-none bg-primary/5 py-1 backdrop-filter backdrop-blur-sm bg-opacity-30">
            <CardHeader className="text-start">
              <h2 className="text-2xl font-semibold leading-none tracking-tight text-primary">
                Contact us
              </h2>
              <CardDescription className="text-gray-500">
                Send us a request, Our agent will contact you as soon as
                possible!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mt-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Full name"
                      className="bg-white"
                      value={formValues.full_name}
                      onChange={(e) =>
                        handleInputChange("full_name", e.target.value)
                      }
                    />
                    {formErrors.full_name && (
                      <p className="text-red-500 text-[12px]">
                        {formErrors.full_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Input
                      placeholder="Phone no"
                      className="bg-white"
                      value={formValues.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-[12px]">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <Input
                      placeholder="Email"
                      className="bg-white "
                      type={"email"}
                      required
                      value={formValues.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-[12px]">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  <div className="col-span-2">
                    <Textarea
                      placeholder={"Your Message"}
                      value={formValues.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className={" bg-white"}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-[12px]">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="mt-3 col-span-2"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Get started"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </form>

      {/* Success or Error Modal */}
      <Dialog
        open={modalInfo.open}
        onOpenChange={(open) => setModalInfo({ open, type: "" })}
      >
        <DialogTitle />
        <DialogContent>
          {modalInfo.type === "success" ? (
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={"/thank-you.jpg"}
                width={400}
                height={400}
                alt={
                  "Thank you for choosing us. Our agent will contact you soon."
                }
              />
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-lg font-semibold text-red-600">Sorry!</h2>
              <p>There was an error submitting your query. Please try again.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactForm;
