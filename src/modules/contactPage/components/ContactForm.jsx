import axios from "axios";
import clsx from "clsx";
import { useState } from "react";
import { FiClock as ClockIcon } from "react-icons/fi";
import { toast } from 'react-toastify';

import Button from "@/common/components/elements/Button";

const formInitialState = {
  name: "",
  email: "",
  message: ""
}

const ContactForm = () => {
  const [formData, setFormData] = useState(formInitialState)

  const [formErrors, setFormErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    setFormErrors({
      ...formErrors,
      [name]: value ? undefined : `${name} is required`
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const hasErrors = Object.values(formErrors).some(error => error)

    if (!hasErrors) {
      setIsLoading(true)
      try {
        const response = await axios.post("/api/contact", { formData })
        if (response.status === 200) {
          // toast.success('Message sent successfully!');
          toast.success('Message sent successfully!', {
            className: 'custom-toast-success dark:custom-toast-success-dark',
          });
          setFormData(formInitialState)
        }
      } catch (error) {
        // toast.error(error);
        toast.error(error, {
          className: 'custom-toast-error dark:custom-toast-error-dark',
        });
      }
      setIsLoading(false)
    } else {
      // toast.error('Error!');
      toast.error('Error!', {
        className: 'custom-toast-error dark:custom-toast-error-dark',
      });
    }
  }

  const isSubmitDisabled = Object.values(formErrors).some(error => error)

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-grow flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
          <input
            className="w-full rounded-md border px-3 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-none border-zinc-300 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950/90"
            type="text"
            placeholder="Name*"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="w-full rounded-md border px-3 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-none border-zinc-300 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950/90"
            type="email"
            placeholder="Email*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          className="w-full rounded-md border px-3 py-2 text-zinc-800 dark:text-zinc-200 focus:outline-none border-zinc-300 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-950/90"
          rows={5}
          placeholder="Message*"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          className={clsx(
            "flex justify-center dark:!border-zinc-700 !bg-zinc-200 hover:!bg-zinc-300 dark:!bg-zinc-800 dark:hover:!bg-zinc-700 py-2.5"
          )}
          type="submit"
          icon={<></>}
          data-umami-event="Send Contact Message"
          disabled={isSubmitDisabled}
        >
          {isLoading ? "Sending Message..." : "Send Message"}
        </Button>
      </div>

      <div className="my-5 flex items-center gap-2 dark:text-zinc-400">
        <ClockIcon />
        <div className="text-sm">
          <span className="font-medium">Avg. response:</span> 1-2 Hours (Working
          Hours, GMT+7)
        </div>
      </div>
    </form>
  )
}

export default ContactForm;
