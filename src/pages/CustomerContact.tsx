
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const CustomerContact = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [alternativePhone, setAlternativePhone] = useState("");

  useEffect(() => {
    const savedData = sessionStorage.getItem('customerContact');
    if (savedData) {
      const { email: e, phone: p, alternativePhone: ap } = JSON.parse(savedData);
      setEmail(e || "");
      setPhone(p || "");
      setAlternativePhone(ap || "");
    }
  }, []);

  const handleNext = () => {
    if (!email || !phone) {
      toast({
        title: "Required fields missing",
        description: "Please enter your email and phone number.",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    sessionStorage.setItem('customerContact', JSON.stringify({ email, phone, alternativePhone }));
    navigate("/customer-address");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-50 p-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-[#FC46AA] text-center">Contact Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Email Address</Label>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Phone Number</Label>
            <Input 
              type="tel" 
              placeholder="Enter your phone number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Alternative Phone (Optional)</Label>
            <Input 
              type="tel" 
              placeholder="Enter alternative phone number" 
              value={alternativePhone}
              onChange={(e) => setAlternativePhone(e.target.value)}
            />
          </div>
        </div>
        <div className="flex space-x-4">
          <Button 
            onClick={() => navigate("/customer-identity")}
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

export default CustomerContact;
