"use client";
import React, { useState, useRef } from "react";
import { Modal, TextField, Typography, Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import { sendEmail } from "../services/services";
interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}
interface FormValues {
  name: string;
  email: string;
  phone: string;
  query: string;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const formRef = useRef(null); // Create a ref for the form

  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const validateModalInputs = (): boolean => {
    const { name, email, phone, query } = formValues;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length <= 3 || !nameRegex.test(name)) {
      toast.error("Please fill all mandatory * fields!");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    if (phone.trim() === "") {
      toast.error("Phone number field cannot be empty!");
      return false;
    }
    if (query.trim() === "") {
      toast.error("Query field cannot be empty!");
      return false;
    }

    return true;
  };

  const handleModalSubmit = async () => {
    if (!validateModalInputs()) return;
    try {
      // Pass the form element (or its ref) as the third parameter
      await sendEmail(formRef.current);
      onClose();
      setFormValues({ name: "", email: "", phone: "", query: "" });
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      BackdropProps={{
        style: {
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
      }}
    >
      <Box
        component="form"
        ref={formRef}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" component="h2">
          How Can We Help You?
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Please let us know how we can improve.
        </Typography>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={formValues.name}
          onChange={handleInputChange}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={formValues.email}
          onChange={handleInputChange}
        />
        <TextField
          name="query"
          label="Query"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={formValues.query}
          onChange={handleInputChange}
        />
        <TextField
          name="phone"
          label="Phone Number"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          value={formValues.phone}
          onChange={handleInputChange}
        />
        <Button
          onClick={handleModalSubmit}
          variant="contained"
          sx={{ backgroundColor: "#ff6347", color: "white" }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
}
