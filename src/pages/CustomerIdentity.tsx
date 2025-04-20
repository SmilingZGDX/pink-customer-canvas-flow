
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const CustomerIdentity = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-50 p-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-[#FC46AA] text-center">Proof of Identity</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">ID Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select ID type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="driving-license">Driving License</SelectItem>
                <SelectItem value="national-id">National ID</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">ID Number</Label>
            <Input type="text" placeholder="Enter your ID number" />
          </div>
          <div className="space-y-2">
            <Label className="text-[#FC46AA]">Expiry Date</Label>
            <Input type="date" />
          </div>
        </div>
        <div className="flex space-x-4">
          <Button 
            onClick={() => navigate("/customer-name")}
            variant="outline"
            className="w-full border-[#FC46AA] text-[#FC46AA] hover:bg-pink-50"
          >
            Back
          </Button>
          <Button 
            onClick={() => navigate("/customer-contact")}
            className="w-full bg-[#FC46AA] hover:bg-pink-400 text-white"
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomerIdentity;
