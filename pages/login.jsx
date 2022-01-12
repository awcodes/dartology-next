import AuthInput from "../components/auth/Input";
import AuthLabel from "../components/auth/Label";
import AuthLayout from "../components/AuthLayout";
import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "../context/user";

export default function Login() {
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("success");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    const { user, error } = await supabase.auth.signIn({
      email: event.target.email.value,
    });

    if (error) {
      console.log(error);
      setMessageType("error");
      setMessage("There was an issue trying to log you in. Please try again later.");
    } else {
      setMessageType("success");
      setMessage("A Login Link has been sent to your email address. If you do not receive the email, make sure to check your spam / junk folder.");
    }

    setLoading(false);
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleLogin}>
        <div>
          <AuthLabel for="email">Email</AuthLabel>
          <AuthInput id="email" className="block w-full mt-1" type="email" name="email" required autoFocus />
        </div>

        {message && <p className={`mt-4 ${messageType == "error" ? "text-red-500" : "text-green-500"}`}>{message}</p>}

        <div className="block mt-6">
          <button type="submit" className="mx-auto btn primary" disabled={loading}>
            {loading ? <span>Logging In</span> : <span>Log In</span>}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
