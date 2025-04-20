
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-50">
      <Card className="w-full max-w-2xl p-8 space-y-6 shadow-lg">
        <h1 className="text-4xl font-bold text-[#FC46AA] text-center">Welcome to Customer Onboarding</h1>
        <p className="text-[#FC46AA] text-center text-lg">
          Let's get started with your registration process
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={() => navigate("/customer-details")}
            className="bg-[#FC46AA] hover:bg-pink-400 text-white px-8 py-4 text-lg"
          >
            Start Registration
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;
