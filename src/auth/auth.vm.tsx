export interface FilterSession {
    filter: string;
}

export const createEmptyFilterSession = () : FilterSession => ({
    filter: '',
});

