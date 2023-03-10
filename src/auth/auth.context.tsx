import React from 'react';
import { FilterSession, createEmptyFilterSession } from './auth.vm';

type Props = {
    children?: React.ReactNode
  };

interface Context extends FilterSession {
    setFilterSession: (filterSession: FilterSession) => void;
}

const noFilter = 'no filter write';

export const AuthContext = React.createContext<Context>({
    filter: noFilter,
    setFilterSession: () =>
        console.warn('If you are reading this, likely you forgot to add a filter'),
});

export const AuthProvider: React.FC<Props> = ({ children }) =>{

    const [filterSession, setFilterSession] = React.useState<FilterSession>(
        createEmptyFilterSession()
    );

    return (
        <AuthContext.Provider
            value={{
                filter: filterSession.filter,
                setFilterSession,
            }}>
            {children}
        </AuthContext.Provider>
    );

}