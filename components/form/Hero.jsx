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
import PassengerDropdown from "../form/passenger-dropdown";
import { CustomSelect } from "../form/select";
import { DatePickerWithRange } from "../form/date-range-picker";
import { Input } from "@/components/ui/input";
import { sendQuery } from "@/utils/api";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

import { motion } from "motion/react";

const MainForm = () => {
  const [formValues, setFormValues] = useState({
    departure: "",
    arrival: "",
    first_name: "",
    last_name: "",
    email: "",
    passengers: { adults: 1, children: 0, infants: 0 },
    date_range: null,
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

  const handlePassengerChange = (passengerCounts) => {
    setFormValues((prev) => ({
      ...prev,
      passengers: passengerCounts,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setFormErrors(null);

    try {
      console.log(formValues);
      const result = await sendQuery(formValues, "/queries"); // Call API function
      console.log("Form submitted successfully:", result);
      setModalInfo({ open: true, type: "success" });
    } catch (err) {
      setFormErrors(err.response?.data?.message || "An error occurred");
      setModalInfo({ open: true, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const test = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className=" ">
        <form onSubmit={handleSubmit}>
          <div className=" w-full">
            <Card className="shadow-lg border-none bg-violet-50 py-1 backdrop-filter backdrop-blur-sm bg-opacity-70 ">
              <CardContent className={" p-4"}>
                <div className=" grid lg:grid-cols-6 gap-4">
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 lg:col-span-5">
                    <CustomSelect
                      label="Departure"
                      values={test}
                      placeholder="Departure"
                      className={"bg-violet-50 "}
                      onChange={(value) =>
                        handleInputChange("departure", value)
                      }
                    />
                    <CustomSelect
                      label="Arrival"
                      values={test}
                      placeholder="Arrival"
                      className={"bg-violet-50"}
                      onChange={(value) => handleInputChange("arrival", value)}
                    />

                    <DatePickerWithRange
                      className="col-span-2"
                      color={"bg-violet-50"}
                      onChange={(value) =>
                        handleInputChange("date_range", value)
                      }
                    />
                    <Input
                      placeholder="First name"
                      className="bg-violet-50"
                      value={formValues.firstName}
                      onChange={(e) =>
                        handleInputChange("first_name", e.target.value)
                      }
                    />
                    <Input
                      placeholder="Last name"
                      className="bg-violet-50"
                      value={formValues.lastName}
                      onChange={(e) =>
                        handleInputChange("last_name", e.target.value)
                      }
                    />
                    <Input
                      placeholder="Email"
                      className="bg-violet-50"
                      value={formValues.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                    <PassengerDropdown
                      className={"bg-violet-50"}
                      onChange={handlePassengerChange}
                    />
                  </div>
                  <div className="col-span-1">
                    <Button
                      type="submit"
                      className=" h-full w-full"
                      disabled={loading}
                    >
                      {loading ? "Submitting..." : "Submit"}
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
                    "Thankyou for choosing us our agent will contact you soon"
                  }
                />
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-lg font-semibold text-red-600">Sorry!</h2>
                <p>
                  There was an error submitting your query. Please try again.
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </motion.div>
  );
};

export default MainForm;
