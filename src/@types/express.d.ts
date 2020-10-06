declare namespace Express {
  export interface Request {
    session: {
      loan_id: number | undefined;
      status: string;
      destroy(): void;
    };
  }
}
