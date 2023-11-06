class patient {
  constructor(name, surnmame, pin, gender, dob) {
  this.name = name;
  this.surnmame = surnmame;
  this.pin = pin;
  this.gender = gender;
  this.dob = dob;
  }
}

class doctor {
  constructor(name, surnmame, branch) {
  this.name = name;
  this.surnmame = surnmame;
  this.branch = branch;
  this.patient_list = [];
}

  add_patient(patient) {
  this.patient_list.push(patient);
  }
  
delete_patient(patient) {
  const index = this.patient_list.indexOf(patient);
  if (index !== -1) {
    this.patient_list.splice(index, 1);
  }
}
}

class reservation {
constructor(doctor, patient, date) {
this.doctor = doctor;
this.patient = patient;
this.date = date;
}
  
reservation_info() {
return `Həkim: ${this.doctor.name} ${this.doctor.surnmame}, Xəstə: ${this.patient.name} ${this.patient.surnmame}, Rezervasiya tarixi: ${this.date}`;
}
}
class hospitalManagmentSystem {
constructor() {
this.patients = [];
this.doctors = [];
this.reservations = [];
}

add_patient(patient) {
    this.patients.push(patient);
}
  
add_doctor(doctor) {
    this.doctors.push(doctor);
}


add_rezervation(doctor, patient, date) {
    const reservation = new reservation(doctor, patient, date);
    this.reservations.push(reservation);
}

show_rezervation_list() {
    console.log("Rezervasiya siyahısı:");
    this.reservations.forEach((reservation, index) => {
    console.log(`${index + 1}. ${reservation.reservation_info()}`);
    });
}
  }
  
  const patient1 = new patient("Abbas", "Abbasov", "6V563Z", "Kişi", "01.01.1987");
  const doctor1 = new doctor("Məmməd", "Məmmədov", "Cərrah");
  
  const hospital = new hospitalManagmentSystem();
  hospital.add_patient(patient1);
  hospital.add_doctor(doctor1);
  doctor1.add_patient(patient1);
  hospital.add_rezervation(doctor1, patient1, "01.01.2024");
  hospital.show_rezervation_list();
  