import React from 'react';
import {AuthProvider} from './context/useContextToken';
import NavStack from './navigation/NavStack';
export default function App() {
  return (
    <AuthProvider>
      <NavStack />
    </AuthProvider>
  );
}
