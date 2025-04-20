
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const CustomerName = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-50 p-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-[#F699CD] text-center">Name Details</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[#F699CD]">First Name</Label>
            <Input type="text" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#F699CD]">Middle Name (Optional)</Label>
            <Input type="text" placeholder="Enter your middle name" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#F699CD]">Last Name</Label>
            <Input type="text" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="flex space-x-4">
          <Button 
            onClick={() => navigate("/customer-details")}
            variant="outline"
            className="w-full border-[#F699CD] text-[#F699CD] hover:bg-pink-50"
          >
            Back
          </Button>
          <Button 
            onClick={() => navigate("/customer-identity")}
            className="w-full bg-[#F699CD] hover:bg-pink-400 text-white"
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomerName;
