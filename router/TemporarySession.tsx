import { createContext, useContext, useState, type ReactNode } from 'react';

type TemporaryUser = { email: string };
type Session = {
  user: TemporaryUser | null;
  signIn: (email: string) => void;
  signOut: () => void;
};

const SessionContext = createContext<Session | null>(null);

export function TemporarySessionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<TemporaryUser | null>(null);
  // Demo session only: no password or session is persisted or sent to a server.
  return (
    <SessionContext.Provider value={{
      user,
      signIn: (email) => setUser({ email: email.trim() }),
      signOut: () => setUser(null),
    }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useTemporarySession() {
  const session = useContext(SessionContext);
  if (!session) throw new Error('TemporarySessionProvider is required');
  return session;
}
