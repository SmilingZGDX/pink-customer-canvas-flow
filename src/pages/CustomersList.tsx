
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Users, FileSearch } from "lucide-react";
import { useCustomers } from "@/context/CustomerContext";

const CustomersList = () => {
  const navigate = useNavigate();
  const { customers } = useCustomers();

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
        
        {customers.length === 0 ? (
          <div className="text-center py-10">
            <FileSearch className="h-12 w-12 text-[#FC46AA] mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No customers found</h3>
            <p className="text-gray-500 mb-4">Start adding customers to see them listed here.</p>
            <Button
              onClick={() => navigate("/customer-name")}
              className="bg-[#FC46AA] hover:bg-pink-400 text-white"
            >
              Add New Customer
            </Button>
          </div>
        ) : (
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
        )}
      </Card>
    </div>
  );
};

export default CustomersList;
