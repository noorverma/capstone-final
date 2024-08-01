import { connectMongoDB } from '../utilities/MongoDB';
import Employee from '../models/employee';

connectMongoDB();

export default async (req, res) => {
  if (req.method === 'POST') {
    const { employeeId, password } = req.body;

    try {
      const employee = await employee.findOne({ employeeId, password });

      if (!employee) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      return res.status(200).json({ role: employee.role });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

