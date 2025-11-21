import PageLayout from "@/components/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useState, useEffect } from "react";

const Signup = () => {
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const isValid = agree && /^\d{10}$/.test(phone);

  useEffect(() => {
    if (step === "otp" && timer > 0) {
      const t = setTimeout(() => setTimer((s) => s - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [step, timer]);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-primary/10 rounded-2xl p-10 flex items-center justify-center">
            <img src="https://tse4.mm.bing.net/th/id/OIP.RDZlnOOhkqCs058yFZDTxAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="OxyPC" className="max-w-full h-48 object-contain rounded-lg" />
          </div>
          <Card>
            <CardContent className="p-8 space-y-6">
              <h1 className="text-3xl font-bold">Signup</h1>
              {step === "phone" && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enter your mobile</label>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-2 bg-muted rounded text-sm">+91</span>
                      <Input
                        placeholder="Enter your Mobile"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                        maxLength={10}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox checked={agree} onCheckedChange={(v) => setAgree(Boolean(v))} />
                    <span className="text-sm">I agree to the <a href="/terms" className="underline">Terms and Conditions</a> & <a href="/privacy" className="underline">Privacy Policy</a></span>
                  </div>
                  <Button disabled={!isValid} className="w-full" onClick={() => { if (isValid) { setStep("otp"); setTimer(30); } }}>Continue</Button>
                  <div className="text-sm text-center">
                    Already have an account? <a href="/login" className="text-primary underline">Login</a>
                  </div>
                </>
              )}

              {step === "otp" && (
                <>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Enter OTP sent to +91 {phone}</label>
                    <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                      <InputOTPGroup>
                        {Array.from({ length: 6 }).map((_, i) => (
                          <InputOTPSlot key={i} index={i} />
                        ))}
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <button className="text-primary underline disabled:opacity-50" disabled={timer > 0} onClick={() => setTimer(30)}>Resend OTP{timer > 0 ? ` in ${timer}s` : ""}</button>
                    <a href="/signup" className="underline">Change number</a>
                  </div>
                  <Button disabled={otp.length !== 6} className="w-full">Verify & Create Account</Button>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default Signup;