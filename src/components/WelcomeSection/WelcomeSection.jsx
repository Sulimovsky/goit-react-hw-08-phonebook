import { useAuth } from 'components/hooks/useAuth';
import { ContactPhone } from '@mui/icons-material';
import { Section, Title } from './WelcomeSection.styled';

const WelcomeSection = () => {
  const { user } = useAuth();

  return (
    <Section>
      <Title>
        {user.name ? `Welcome, ${user.name}!` : `Welcome!`}
        <ContactPhone
          fontSize="large"
          sx={{ color: 'secondary.main', ml: 1 }}
        />
      </Title>
    </Section>
  );
};

export default WelcomeSection;
