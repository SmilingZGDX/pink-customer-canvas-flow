
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";

const CustomerAddress = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-50 p-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-[#FC46AA] text-center">Address Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Street Address</Label>
            <Textarea placeholder="Enter your street address" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">City</Label>
            <Input type="text" placeholder="Enter your city" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">State/Province</Label>
            <Input type="text" placeholder="Enter your state or province" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Postal Code</Label>
            <Input type="text" placeholder="Enter your postal code" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Country</Label>
            <Input type="text" placeholder="Enter your country" />
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
            onClick={() => navigate("/customer-details")}
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
