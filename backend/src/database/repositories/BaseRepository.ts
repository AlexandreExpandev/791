import sql from 'mssql';
import { getDbPool } from '@/database/sqlServer';

/**
 * Abstract base class for repositories providing access to the database connection pool.
 */
export abstract class BaseRepository {
  protected pool: sql.ConnectionPool;

  constructor() {
    this.pool = getDbPool();
  }

  /**
   * Creates a new request object from the connection pool.
   * This is a convenience method for derived repository classes.
   * @returns A new sql.Request object.
   */
  protected createRequest(): sql.Request {
    return this.pool.request();
  }
}
