
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const CustomerName = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");

  // Store data in sessionStorage to maintain across form steps
  const handleNext = () => {
    if (!firstName || !lastName) {
      toast({
        title: "Required fields missing",
        description: "Please fill in the required fields (First Name and Last Name).",
        variant: "destructive"
      });
      return;
    }

    // Save to session storage for multi-page form
    sessionStorage.setItem('customerName', JSON.stringify({ firstName, middleName, lastName }));
    navigate("/customer-identity");
  };

  // Restore data if it exists
  useState(() => {
    const savedData = sessionStorage.getItem('customerName');
    if (savedData) {
      const { firstName: fn, middleName: mn, lastName: ln } = JSON.parse(savedData);
      setFirstName(fn || "");
      setMiddleName(mn || "");
      setLastName(ln || "");
    }
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-50 p-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-[#FC46AA] text-center">Name Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">First Name</Label>
            <Input 
              type="text" 
              placeholder="Enter your first name" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Middle Name (Optional)</Label>
            <Input 
              type="text" 
              placeholder="Enter your middle name" 
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Last Name</Label>
            <Input 
              type="text" 
              placeholder="Enter your last name" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <Button 
            onClick={() => navigate("/customer-details")}
            variant="outline"
            className="w-full border-[#FC46AA] text-[#FC46AA] hover:bg-pink-50"
          >
            Back
          </Button>
          <Button 
            onClick={handleNext}
            className="w-full bg-[#FC46AA] hover:bg-pink-400 text-white"
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomerName;
