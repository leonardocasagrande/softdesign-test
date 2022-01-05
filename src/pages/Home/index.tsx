import AccountCard from 'components/AccountCard';
import Button from 'components/Button';
import Container from 'components/Container';
import ParticlesBackground from 'components/ParticlesBackground';

const Home = () => {
  const handleNewAccount = () => {
    console.log('NEW ACCOUNT');
  };

  const handleLogin = () => {
    console.log('LOGIN');
  };
  return (
    <Container>
      <ParticlesBackground />
      <h1>Teste de Front-end para SoftDesign</h1>
      <AccountCard />
    </Container>
  );
};

export default Home;
