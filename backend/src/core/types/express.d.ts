// Use this file to extend the Express Request, Response, or Application objects.
// For example, to add a 'user' property to the Request object after authentication:

declare namespace Express {
  export interface Request {
    // user?: {
    //   id: number;
    //   role: string;
    // };
  }
}
