import React from 'react';
import {Text} from 'react-native';
import Layout from '../../components/Layout';
import UserSection from '../../components/UserSection';

const coursesInProgress = [
  'Intro a responsive',
  'React Hooks Avanzado',
  'Maquetado con Flex',
  'AsyncStorage',
];

function HomeScreen() {
  return (
    <Layout>
      <Text>Home</Text>
      <UserSection
        userName="Pablo Ferro"
        coursesInProgress={coursesInProgress}
      />
    </Layout>
  );
}

export default HomeScreen;
