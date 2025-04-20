
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Customer {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  idType?: string;
  idNumber?: string;
  expiryDate?: string;
  email: string;
  phone: string;
  alternativePhone?: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface CustomerContextType {
  customers: Customer[];
  addCustomer: (customer: Omit<Customer, 'id'>) => void;
}

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export const useCustomers = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error('useCustomers must be used within a CustomerProvider');
  }
  return context;
};

export const CustomerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", phone: "+1234567890", streetAddress: "123 Main St", city: "Anytown", state: "CA", postalCode: "12345", country: "USA" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", phone: "+0987654321", streetAddress: "456 Oak Ave", city: "Somewhere", state: "NY", postalCode: "54321", country: "USA" },
  ]);

  const addCustomer = (customer: Omit<Customer, 'id'>) => {
    setCustomers(prev => [...prev, { ...customer, id: prev.length + 1 }]);
  };

  return (
    <CustomerContext.Provider value={{ customers, addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};
