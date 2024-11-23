/** @format */

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { sendQuery } from "@/utils/api"; // Import the API function
import { Alert, AlertDescription } from "../ui/alert";
import { AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { Textarea } from "../ui/textarea";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [FormErrors, setFormErrors] = useState(null);
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
    setFormErrors(null);

    try {
      const result = await sendQuery(formValues, "/contact"); // Call API function
      console.log("Form submitted successfully:", result);
      setModalInfo({ open: true, type: "success" });
    } catch (err) {
      setFormErrors(err.response?.data?.message || "An error occurred");
      setModalInfo({ open: true, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="lg:max-w-lg ">
          <Card className="shadow-lg border-none bg-red-200 py-1 backdrop-filter backdrop-blur-sm bg-opacity-30">
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
              {FormErrors != null ? (
                <Alert variant="destructive" className={"bg-primary my-2"}>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{FormErrors}</AlertDescription>
                </Alert>
              ) : (
                ""
              )}
              <div className="mt-1">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Full name"
                    className="bg-white"
                    value={formValues.full_name}
                    onChange={(e) =>
                      handleInputChange("full_name", e.target.value)
                    }
                  />

                  <Input
                    placeholder="Phone no"
                    className="bg-white"
                    value={formValues.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />

                  <Input
                    placeholder="Email"
                    className="bg-white col-span-2"
                    type={"email"}
                    required
                    value={formValues.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                  <Textarea
                    placeholder={"You're Message"}
                    value={formValues.messages}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={"col-span-2 bg-white"}
                  />
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
                alt={"Thankyou for choosing us our agent will contact you soon"}
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
