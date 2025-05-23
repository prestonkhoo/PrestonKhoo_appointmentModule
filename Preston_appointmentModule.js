//Preston_222243Y
console.log("Starting appointment module");

let appointments = [];

module.exports = {
    description: "This is my appointment scheduling module",

    // This is to Add a new appointment
    addAppointment(name, date, time) {
        let appointment = {
            name: name,
            date: date,
            time: time
        };
        appointments.push(appointment);
    },

    // This is to Cancel an appointment by index
    cancelAppointment(index) {
        if (index >= 0 && index < appointments.length) {
            appointments.splice(index, 1);
        }
    },

    // This is to List all appointments
    listAppointments() {
        return appointments;
    },

    // This is to Update appointment date and time
    updateAppointment(index, newDate, newTime) {
        if (index >= 0 && index < appointments.length) {
            appointments[index].date = newDate;
            appointments[index].time = newTime;
        }
    },

    // This is to Search for appointments by date
    searchAppointmentsByDate(date) {
        let result = [];

        for (let i = 0; i < appointments.length; i++) {
            if (appointments[i].date === date) {
                result.push(appointments[i]);
            }
        }

        return result;
    }
};
