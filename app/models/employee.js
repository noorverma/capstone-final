import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  role: { type: String, required: true, enum: ['employee', 'manager'] },
});

const Employee = mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

export default Employee;
