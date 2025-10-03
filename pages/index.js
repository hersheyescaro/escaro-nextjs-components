import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import SkillsList from '../components/SkillsList';
import Footer from '../components/Footer';
import FloatingSparkles from '../components/FloatingSparkles';

export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem 1rem',
      position: 'relative',
      zIndex: 2
    }}>
      <FloatingSparkles />
      <Header />
      <ProfileCard />
      <SkillsList />
      <Footer />
    </div>
  );
}
