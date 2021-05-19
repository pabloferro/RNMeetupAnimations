import React, {useState} from 'react';
import Layout from '../../components/Layout';
import MovingToast from '../../components/MovingToast';
import UserSection from '../../components/UserSection';
import Carousel from '../../components/Carousel';
import Button from '../../components/Button';
import {courses, user} from '../../constants/data';

import styles from './styles';
import PlayerControl from '../../components/PlayerControl';
import SnapDraggable from '../../components/SnapDraggable/index';

function HomeScreen() {
  const [playing, setPlaying] = useState(true);
  const [welcomeToastVisible, setWelcomeToastVisible] = useState(false);

  return (
    <>
      <Layout>
        <UserSection
          style={styles.userSection}
          userName={user.name}
          coursesInProgress={user.coursesInProgress}
        />
        <Button
          style={styles.button}
          title="Mostrar Toast"
          onPress={() => setWelcomeToastVisible(true)}
        />
        <Carousel style={styles.coursesCarrousel} items={courses} />
      </Layout>
      <SnapDraggable
        snapMargins={{
          horizontal: 10,
          vertical: 120,
        }}>
        <PlayerControl
          courseName="Accesibilidad"
          duration={1722}
          playing={playing}
          onPress={() => setPlaying(!playing)}
        />
      </SnapDraggable>
      <MovingToast
        visible={welcomeToastVisible}
        onClose={() => setWelcomeToastVisible(false)}>
        ¡Bienvenido {user.name}!
      </MovingToast>
    </>
  );
}

export default HomeScreen;
