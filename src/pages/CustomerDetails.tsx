
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const CustomerDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-50 p-4">
      <Card className="w-full max-w-2xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-[#FC46AA] text-center">Customer Details</h2>
        <div className="space-y-4">
          <Button 
            onClick={() => navigate("/customer-name")}
            className="w-full bg-[#FC46AA] hover:bg-pink-400 text-white"
          >
            Enter Name Details
          </Button>
          <Button 
            onClick={() => navigate("/customer-identity")}
            className="w-full bg-[#FC46AA] hover:bg-pink-400 text-white"
          >
            Proof of Identity
          </Button>
          <Button 
            onClick={() => navigate("/customer-contact")}
            className="w-full bg-[#FC46AA] hover:bg-pink-400 text-white"
          >
            Contact Information
          </Button>
          <Button 
            onClick={() => navigate("/customer-address")}
            className="w-full bg-[#FC46AA] hover:bg-pink-400 text-white"
          >
            Address Details
          </Button>
        </div>
        <Button 
          onClick={() => navigate("/")}
          variant="outline"
          className="w-full border-[#FC46AA] text-[#FC46AA] hover:bg-pink-50"
        >
          Back to Home
        </Button>
      </Card>
    </div>
  );
};

export default CustomerDetails;
