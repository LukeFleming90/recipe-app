import LoginForm from '../../components/LoginForm/LoginForm';

export default function LogInPage({ setUser }) {
  return (
      <div>
          <LoginForm setUser={setUser}/>
      </div>
  );
}