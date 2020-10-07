declare namespace Express {
  export interface Request {
    session: {
      loan_id: number;
      state: 'UPLOAD' | 'APPROVAL';
      destroy(): void;
    };
  }
}
