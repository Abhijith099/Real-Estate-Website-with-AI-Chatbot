import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext.js";
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import "@mantine/dates/styles.css"; // keep default Mantine base styles
import "./BookingModal.css"; // our custom design

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("✅ You have booked your visit!", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: () => bookVisit(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message),
    onSettled: () => setOpened(false),
  });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={<span className="modal-title">📅 Select your date of visit</span>}
      centered
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
      radius="lg"
      padding="lg"
      size="md"
      className="booking-modal"
    >
      <div className="booking-content">
        <DatePicker
          value={value}
          onChange={setValue}
          minDate={new Date()}
          size="md"
          className="custom-datepicker"
        />

        <Button
          disabled={!value || isLoading}
          onClick={() => mutate()}
          className="book-btn"
        >
          {isLoading ? "Booking..." : "Book visit"}
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
