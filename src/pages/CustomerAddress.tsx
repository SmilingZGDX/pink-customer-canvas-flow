
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { useCustomers } from "@/context/CustomerContext";

const CustomerAddress = () => {
  const navigate = useNavigate();
  const { addCustomer } = useCustomers();
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const savedData = sessionStorage.getItem('customerAddress');
    if (savedData) {
      const { streetAddress: sa, city: c, state: s, postalCode: pc, country: co } = JSON.parse(savedData);
      setStreetAddress(sa || "");
      setCity(c || "");
      setState(s || "");
      setPostalCode(pc || "");
      setCountry(co || "");
    }
  }, []);

  const handleComplete = () => {
    if (!streetAddress || !city || !state || !postalCode || !country) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all address fields.",
        variant: "destructive"
      });
      return;
    }

    // Save current address data
    sessionStorage.setItem('customerAddress', JSON.stringify({ 
      streetAddress, city, state, postalCode, country 
    }));

    try {
      // Collect all data from session storage
      const nameData = JSON.parse(sessionStorage.getItem('customerName') || '{}');
      const identityData = JSON.parse(sessionStorage.getItem('customerIdentity') || '{}');
      const contactData = JSON.parse(sessionStorage.getItem('customerContact') || '{}');
      
      // Create complete customer record
      const newCustomer = {
        ...nameData,
        ...identityData,
        ...contactData,
        streetAddress,
        city,
        state,
        postalCode,
        country
      };

      // Add customer via context
      addCustomer(newCustomer);
      
      // Show success message
      toast({
        title: "Success!",
        description: "Customer details have been saved successfully.",
      });

      // Clear form data from session storage
      sessionStorage.removeItem('customerName');
      sessionStorage.removeItem('customerIdentity');
      sessionStorage.removeItem('customerContact');
      sessionStorage.removeItem('customerAddress');

      // Navigate back to details page
      navigate("/customer-details");
    } catch (error) {
      console.error("Error saving customer:", error);
      toast({
        title: "Error",
        description: "There was a problem saving the customer data. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-50 p-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-[#FC46AA] text-center">Address Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Street Address</Label>
            <Textarea 
              placeholder="Enter your street address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">City</Label>
            <Input 
              type="text" 
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">State/Province</Label>
            <Input 
              type="text" 
              placeholder="Enter your state or province"
              value={state}
              onChange={(e) => setState(e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Postal Code</Label>
            <Input 
              type="text" 
              placeholder="Enter your postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Country</Label>
            <Input 
              type="text" 
              placeholder="Enter your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)} 
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <Button 
            onClick={() => navigate("/customer-contact")}
            variant="outline"
            className="w-full border-[#FC46AA] text-[#FC46AA] hover:bg-pink-50"
          >
            Back
          </Button>
          <Button 
            onClick={handleComplete}
            className="w-full bg-[#FC46AA] hover:bg-pink-400 text-white"
          >
            Complete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomerAddress;
