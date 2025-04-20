
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CustomerDetails from "./pages/CustomerDetails";
import CustomerName from "./pages/CustomerName";
import CustomerIdentity from "./pages/CustomerIdentity";
import CustomerContact from "./pages/CustomerContact";
import CustomerAddress from "./pages/CustomerAddress";
import CustomersList from "./pages/CustomersList";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/customer-details" element={<CustomerDetails />} />
          <Route path="/customer-name" element={<CustomerName />} />
          <Route path="/customer-identity" element={<CustomerIdentity />} />
          <Route path="/customer-contact" element={<CustomerContact />} />
          <Route path="/customer-address" element={<CustomerAddress />} />
          <Route path="/customers-list" element={<CustomersList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
