import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import { useAuthContext } from "./../../../../hooks/useAuthContext";
import api from "./../../../../api/axios";
import "./Profile.css";

export default function Profile() {
  const { user } = useAuthContext();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await api.get(`/patient/history/${encodeURIComponent(user.id)}`);
        const upcomingAppointments = response.data.medical_records.filter(appointment => new Date(appointment.appointment_details.date) > new Date());
        setAppointments(upcomingAppointments);
      } catch (err) {
        console.error("Error fetching appointments:", err);
      }
    };

    fetchAppointments();
  }, [user.id]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "auto",
          }}
        >
          <h2 className="dashboard-title">Profile</h2>
          <div className="profile-content">
            <Avatar alt={user.name} />
            <label>
              Name: <span>{user.name}</span>
            </label>
            <label>
              Email: <span>{user.email}</span>
            </label>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "auto",
          }}
        >
          <h2 className="dashboard-title">Upcoming Appointments</h2>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Appointment Id</TableCell>
                  <TableCell align="center">Clinic Number</TableCell>
                  <TableCell align="center">Date & Time</TableCell>
                  <TableCell align="center">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments && appointments.length > 0 ? (
                  appointments.map((appointment, index) => (
                    <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell align="center">{"SECE" + appointment._id}</TableCell>
                      <TableCell align="center">{appointment.appointment_details.clinicNumber}</TableCell>
                      <TableCell align="center">{new Date(appointment.appointment_details.date).toUTCString()}</TableCell>
                      <TableCell align="center">{appointment.appointment_details.description}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">
                      No upcoming appointments
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </Grid>
  );
}
