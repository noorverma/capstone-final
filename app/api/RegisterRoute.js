import { connectMongoDB } from "../utilities/MongoDB";
import Employee from "../models/employee";

connectMongoDB();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { employeeId, password, email, phone, address, role } = req.body;

    try {
      const newEmployee = new Employee({
        employeeId,
        password,
        email,
        phone,
        address,
        role,
      });

      await newEmployee.save();
      return res.status(201).json({ message: 'Employee registered successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
