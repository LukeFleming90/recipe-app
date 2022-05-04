import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SignUpPage({ setUser }) {
  return (
      <div>
          <SignUpForm setUser={setUser} />
      </div>
  );
}