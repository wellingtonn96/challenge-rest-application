declare namespace Express {
  export interface Request {
    session: {
      loan_id: number;
      status: string;
      destroy(): void;
    };
  }
}
