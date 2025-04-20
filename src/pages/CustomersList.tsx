
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users } from "lucide-react";

const CustomersList = () => {
  const navigate = useNavigate();
  
  // This is just mock data - real data would come from your backend
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", phone: "+1234567890" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", phone: "+0987654321" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 p-6">
      <Card className="max-w-6xl mx-auto p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-[#FC46AA]" />
            <h2 className="text-3xl font-semibold text-[#FC46AA]">All Customers</h2>
          </div>
          <Button
            onClick={() => navigate("/customer-details")}
            variant="outline"
            className="border-[#FC46AA] text-[#FC46AA] hover:bg-pink-50"
          >
            Back
          </Button>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.firstName}</TableCell>
                  <TableCell>{customer.lastName}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default CustomersList;
