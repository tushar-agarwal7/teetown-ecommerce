'use client'
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

export default function Pay() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (cardNumber && expiration && cvv && billingAddress) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [cardNumber, expiration, cvv, billingAddress]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md w-full">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Secure Payment</h1>
          <p className="text-muted-foreground">Complete your purchase securely with our trusted payment gateway.</p>
        </div>
        <Card className="mt-8">
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="card-number">Card Number</Label>
              <Input
                id="card-number"
                type="text"
                placeholder="4111 1111 1111 1111"
                className="mt-1"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiration">Expiration Date</Label>
                <div className="mt-1 flex">
                  <Input
                    id="expiration"
                    type="text"
                    placeholder="MM/YY"
                    className="flex-1"
                    value={expiration}
                    onChange={(e) => setExpiration(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  className="mt-1"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="billing-address">Billing Address</Label>
              <Textarea
                id="billing-address"
                placeholder="Enter your billing address"
                className="mt-1"
                rows={3}
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Button className="w-full" disabled={isButtonDisabled}>
                Pay Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
