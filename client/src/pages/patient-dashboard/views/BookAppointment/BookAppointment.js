import { TextField, Snackbar, Alert } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Box } from "@mui/system";
import api from "../../../../api/axios";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export default function BookAppointment() {
  const { user } = useAuthContext();
  const [description, setDescription] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Helper function to format the date and time
  const formatDateTime = (date) => {
    const pad = (num) => num.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  // Get the current date and time and set it as minDate
  const now = new Date();
  const currentDateTime = formatDateTime(now);

  // Set initial date state to the current time
  const [date, setDate] = useState(currentDateTime);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(date, description);

    const data = { date, description, id: user.id };
    try {
      const response = await api.post("/patient/appointment", data).then((userData) => {
        setDate(currentDateTime);
        setDescription("");
        setOpenSnackbar(true); // Open the success snackbar
        console.log(userData);
      });
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        className="title"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "auto",
        }}
      >
        <h2 className="dashboard-title">Book Appointment</h2>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 4 }}
            id="datetime-local"
            label="Next appointment"
            fullWidth
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            helperText="Please select suitable timings"
            required
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: currentDateTime,
            }}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            fullWidth
            multiline
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            helperText="What's the appointment regarding"
            maxRows={5}
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Book
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your appointment has been booked successfully!
        </Alert>
      </Snackbar>
    </Grid>
  );
}
