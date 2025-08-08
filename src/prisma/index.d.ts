
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Request
 * 
 */
export type Request = $Result.DefaultSelection<Prisma.$RequestPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model IEDs
 * 
 */
export type IEDs = $Result.DefaultSelection<Prisma.$IEDsPayload>
/**
 * Model Connections
 * 
 */
export type Connections = $Result.DefaultSelection<Prisma.$ConnectionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SmartDevice: {
  SDp: 'SDp',
  SDG: 'SDG',
  SDV: 'SDV',
  SDM: 'SDM'
};

export type SmartDevice = (typeof SmartDevice)[keyof typeof SmartDevice]


export const Status: {
  Ongoing: 'Ongoing',
  Done: 'Done',
  NotStarted: 'NotStarted'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ConnectionType: {
  Input: 'Input',
  Output: 'Output'
};

export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType]


export const Protocol: {
  Modbus: 'Modbus',
  DNP3: 'DNP3',
  IEC61850: 'IEC61850',
  AMQP: 'AMQP'
};

export type Protocol = (typeof Protocol)[keyof typeof Protocol]


export const Transmittion: {
  Serial: 'Serial',
  TCP: 'TCP'
};

export type Transmittion = (typeof Transmittion)[keyof typeof Transmittion]

}

export type SmartDevice = $Enums.SmartDevice

export const SmartDevice: typeof $Enums.SmartDevice

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ConnectionType = $Enums.ConnectionType

export const ConnectionType: typeof $Enums.ConnectionType

export type Protocol = $Enums.Protocol

export const Protocol: typeof $Enums.Protocol

export type Transmittion = $Enums.Transmittion

export const Transmittion: typeof $Enums.Transmittion

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Requests
 * const requests = await prisma.request.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Requests
   * const requests = await prisma.request.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.request`: Exposes CRUD operations for the **Request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Requests
    * const requests = await prisma.request.findMany()
    * ```
    */
  get request(): Prisma.RequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iEDs`: Exposes CRUD operations for the **IEDs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IEDs
    * const iEDs = await prisma.iEDs.findMany()
    * ```
    */
  get iEDs(): Prisma.IEDsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.connections`: Exposes CRUD operations for the **Connections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Connections
    * const connections = await prisma.connections.findMany()
    * ```
    */
  get connections(): Prisma.ConnectionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Request: 'Request',
    User: 'User',
    IEDs: 'IEDs',
    Connections: 'Connections'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "request" | "user" | "iEDs" | "connections"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Request: {
        payload: Prisma.$RequestPayload<ExtArgs>
        fields: Prisma.RequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findFirst: {
            args: Prisma.RequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          findMany: {
            args: Prisma.RequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          create: {
            args: Prisma.RequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          createMany: {
            args: Prisma.RequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          delete: {
            args: Prisma.RequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          update: {
            args: Prisma.RequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          deleteMany: {
            args: Prisma.RequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>[]
          }
          upsert: {
            args: Prisma.RequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RequestPayload>
          }
          aggregate: {
            args: Prisma.RequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRequest>
          }
          groupBy: {
            args: Prisma.RequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<RequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.RequestCountArgs<ExtArgs>
            result: $Utils.Optional<RequestCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      IEDs: {
        payload: Prisma.$IEDsPayload<ExtArgs>
        fields: Prisma.IEDsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IEDsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IEDsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload>
          }
          findFirst: {
            args: Prisma.IEDsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IEDsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload>
          }
          findMany: {
            args: Prisma.IEDsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload>[]
          }
          create: {
            args: Prisma.IEDsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload>
          }
          createMany: {
            args: Prisma.IEDsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IEDsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload>[]
          }
          delete: {
            args: Prisma.IEDsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload>
          }
          update: {
            args: Prisma.IEDsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload>
          }
          deleteMany: {
            args: Prisma.IEDsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IEDsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IEDsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload>[]
          }
          upsert: {
            args: Prisma.IEDsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IEDsPayload>
          }
          aggregate: {
            args: Prisma.IEDsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIEDs>
          }
          groupBy: {
            args: Prisma.IEDsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IEDsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IEDsCountArgs<ExtArgs>
            result: $Utils.Optional<IEDsCountAggregateOutputType> | number
          }
        }
      }
      Connections: {
        payload: Prisma.$ConnectionsPayload<ExtArgs>
        fields: Prisma.ConnectionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConnectionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConnectionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          findFirst: {
            args: Prisma.ConnectionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConnectionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          findMany: {
            args: Prisma.ConnectionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>[]
          }
          create: {
            args: Prisma.ConnectionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          createMany: {
            args: Prisma.ConnectionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConnectionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>[]
          }
          delete: {
            args: Prisma.ConnectionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          update: {
            args: Prisma.ConnectionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          deleteMany: {
            args: Prisma.ConnectionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConnectionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConnectionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>[]
          }
          upsert: {
            args: Prisma.ConnectionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConnectionsPayload>
          }
          aggregate: {
            args: Prisma.ConnectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConnections>
          }
          groupBy: {
            args: Prisma.ConnectionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConnectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConnectionsCountArgs<ExtArgs>
            result: $Utils.Optional<ConnectionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    request?: RequestOmit
    user?: UserOmit
    iEDs?: IEDsOmit
    connections?: ConnectionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RequestCountOutputType
   */

  export type RequestCountOutputType = {
    input: number
  }

  export type RequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    input?: boolean | RequestCountOutputTypeCountInputArgs
  }

  // Custom InputTypes
  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RequestCountOutputType
     */
    select?: RequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RequestCountOutputType without action
   */
  export type RequestCountOutputTypeCountInputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionsWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    request_assignee: number
    request_author: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request_assignee?: boolean | UserCountOutputTypeCountRequest_assigneeArgs
    request_author?: boolean | UserCountOutputTypeCountRequest_authorArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequest_assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequest_authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Request
   */

  export type AggregateRequest = {
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  export type RequestMinAggregateOutputType = {
    id: string | null
    sigma: boolean | null
    project: string | null
    createdAt: Date | null
    updatedAt: Date | null
    assigneeId: string | null
    authorId: string | null
    status: $Enums.Status | null
    device: $Enums.SmartDevice | null
    comment: string | null
    client: string | null
    thirdPart: string | null
    back: string | null
    invoiceTT: string | null
    invoiceClient: string | null
  }

  export type RequestMaxAggregateOutputType = {
    id: string | null
    sigma: boolean | null
    project: string | null
    createdAt: Date | null
    updatedAt: Date | null
    assigneeId: string | null
    authorId: string | null
    status: $Enums.Status | null
    device: $Enums.SmartDevice | null
    comment: string | null
    client: string | null
    thirdPart: string | null
    back: string | null
    invoiceTT: string | null
    invoiceClient: string | null
  }

  export type RequestCountAggregateOutputType = {
    id: number
    sigma: number
    project: number
    createdAt: number
    updatedAt: number
    assigneeId: number
    authorId: number
    status: number
    device: number
    comment: number
    client: number
    thirdPart: number
    docs: number
    back: number
    invoiceTT: number
    invoiceClient: number
    _all: number
  }


  export type RequestMinAggregateInputType = {
    id?: true
    sigma?: true
    project?: true
    createdAt?: true
    updatedAt?: true
    assigneeId?: true
    authorId?: true
    status?: true
    device?: true
    comment?: true
    client?: true
    thirdPart?: true
    back?: true
    invoiceTT?: true
    invoiceClient?: true
  }

  export type RequestMaxAggregateInputType = {
    id?: true
    sigma?: true
    project?: true
    createdAt?: true
    updatedAt?: true
    assigneeId?: true
    authorId?: true
    status?: true
    device?: true
    comment?: true
    client?: true
    thirdPart?: true
    back?: true
    invoiceTT?: true
    invoiceClient?: true
  }

  export type RequestCountAggregateInputType = {
    id?: true
    sigma?: true
    project?: true
    createdAt?: true
    updatedAt?: true
    assigneeId?: true
    authorId?: true
    status?: true
    device?: true
    comment?: true
    client?: true
    thirdPart?: true
    docs?: true
    back?: true
    invoiceTT?: true
    invoiceClient?: true
    _all?: true
  }

  export type RequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Request to aggregate.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Requests
    **/
    _count?: true | RequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RequestMaxAggregateInputType
  }

  export type GetRequestAggregateType<T extends RequestAggregateArgs> = {
        [P in keyof T & keyof AggregateRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRequest[P]>
      : GetScalarType<T[P], AggregateRequest[P]>
  }




  export type RequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithAggregationInput | RequestOrderByWithAggregationInput[]
    by: RequestScalarFieldEnum[] | RequestScalarFieldEnum
    having?: RequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RequestCountAggregateInputType | true
    _min?: RequestMinAggregateInputType
    _max?: RequestMaxAggregateInputType
  }

  export type RequestGroupByOutputType = {
    id: string
    sigma: boolean
    project: string | null
    createdAt: Date
    updatedAt: Date
    assigneeId: string
    authorId: string
    status: $Enums.Status
    device: $Enums.SmartDevice
    comment: string | null
    client: string | null
    thirdPart: string | null
    docs: string[]
    back: string | null
    invoiceTT: string | null
    invoiceClient: string | null
    _count: RequestCountAggregateOutputType | null
    _min: RequestMinAggregateOutputType | null
    _max: RequestMaxAggregateOutputType | null
  }

  type GetRequestGroupByPayload<T extends RequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RequestGroupByOutputType[P]>
            : GetScalarType<T[P], RequestGroupByOutputType[P]>
        }
      >
    >


  export type RequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigma?: boolean
    project?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigneeId?: boolean
    authorId?: boolean
    status?: boolean
    device?: boolean
    comment?: boolean
    client?: boolean
    thirdPart?: boolean
    docs?: boolean
    back?: boolean
    invoiceTT?: boolean
    invoiceClient?: boolean
    assignee?: boolean | Request$assigneeArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    input?: boolean | Request$inputArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigma?: boolean
    project?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigneeId?: boolean
    authorId?: boolean
    status?: boolean
    device?: boolean
    comment?: boolean
    client?: boolean
    thirdPart?: boolean
    docs?: boolean
    back?: boolean
    invoiceTT?: boolean
    invoiceClient?: boolean
    assignee?: boolean | Request$assigneeArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sigma?: boolean
    project?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigneeId?: boolean
    authorId?: boolean
    status?: boolean
    device?: boolean
    comment?: boolean
    client?: boolean
    thirdPart?: boolean
    docs?: boolean
    back?: boolean
    invoiceTT?: boolean
    invoiceClient?: boolean
    assignee?: boolean | Request$assigneeArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["request"]>

  export type RequestSelectScalar = {
    id?: boolean
    sigma?: boolean
    project?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigneeId?: boolean
    authorId?: boolean
    status?: boolean
    device?: boolean
    comment?: boolean
    client?: boolean
    thirdPart?: boolean
    docs?: boolean
    back?: boolean
    invoiceTT?: boolean
    invoiceClient?: boolean
  }

  export type RequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sigma" | "project" | "createdAt" | "updatedAt" | "assigneeId" | "authorId" | "status" | "device" | "comment" | "client" | "thirdPart" | "docs" | "back" | "invoiceTT" | "invoiceClient", ExtArgs["result"]["request"]>
  export type RequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Request$assigneeArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    input?: boolean | Request$inputArgs<ExtArgs>
    _count?: boolean | RequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Request$assigneeArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | Request$assigneeArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Request"
    objects: {
      assignee: Prisma.$UserPayload<ExtArgs> | null
      author: Prisma.$UserPayload<ExtArgs>
      input: Prisma.$ConnectionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sigma: boolean
      project: string | null
      createdAt: Date
      updatedAt: Date
      assigneeId: string
      authorId: string
      status: $Enums.Status
      device: $Enums.SmartDevice
      comment: string | null
      client: string | null
      thirdPart: string | null
      docs: string[]
      back: string | null
      invoiceTT: string | null
      invoiceClient: string | null
    }, ExtArgs["result"]["request"]>
    composites: {}
  }

  type RequestGetPayload<S extends boolean | null | undefined | RequestDefaultArgs> = $Result.GetResult<Prisma.$RequestPayload, S>

  type RequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RequestCountAggregateInputType | true
    }

  export interface RequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Request'], meta: { name: 'Request' } }
    /**
     * Find zero or one Request that matches the filter.
     * @param {RequestFindUniqueArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RequestFindUniqueArgs>(args: SelectSubset<T, RequestFindUniqueArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RequestFindUniqueOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RequestFindUniqueOrThrowArgs>(args: SelectSubset<T, RequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RequestFindFirstArgs>(args?: SelectSubset<T, RequestFindFirstArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindFirstOrThrowArgs} args - Arguments to find a Request
     * @example
     * // Get one Request
     * const request = await prisma.request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RequestFindFirstOrThrowArgs>(args?: SelectSubset<T, RequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Requests
     * const requests = await prisma.request.findMany()
     * 
     * // Get first 10 Requests
     * const requests = await prisma.request.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const requestWithIdOnly = await prisma.request.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RequestFindManyArgs>(args?: SelectSubset<T, RequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Request.
     * @param {RequestCreateArgs} args - Arguments to create a Request.
     * @example
     * // Create one Request
     * const Request = await prisma.request.create({
     *   data: {
     *     // ... data to create a Request
     *   }
     * })
     * 
     */
    create<T extends RequestCreateArgs>(args: SelectSubset<T, RequestCreateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Requests.
     * @param {RequestCreateManyArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RequestCreateManyArgs>(args?: SelectSubset<T, RequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Requests and returns the data saved in the database.
     * @param {RequestCreateManyAndReturnArgs} args - Arguments to create many Requests.
     * @example
     * // Create many Requests
     * const request = await prisma.request.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RequestCreateManyAndReturnArgs>(args?: SelectSubset<T, RequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Request.
     * @param {RequestDeleteArgs} args - Arguments to delete one Request.
     * @example
     * // Delete one Request
     * const Request = await prisma.request.delete({
     *   where: {
     *     // ... filter to delete one Request
     *   }
     * })
     * 
     */
    delete<T extends RequestDeleteArgs>(args: SelectSubset<T, RequestDeleteArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Request.
     * @param {RequestUpdateArgs} args - Arguments to update one Request.
     * @example
     * // Update one Request
     * const request = await prisma.request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RequestUpdateArgs>(args: SelectSubset<T, RequestUpdateArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Requests.
     * @param {RequestDeleteManyArgs} args - Arguments to filter Requests to delete.
     * @example
     * // Delete a few Requests
     * const { count } = await prisma.request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RequestDeleteManyArgs>(args?: SelectSubset<T, RequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RequestUpdateManyArgs>(args: SelectSubset<T, RequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Requests and returns the data updated in the database.
     * @param {RequestUpdateManyAndReturnArgs} args - Arguments to update many Requests.
     * @example
     * // Update many Requests
     * const request = await prisma.request.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Requests and only return the `id`
     * const requestWithIdOnly = await prisma.request.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RequestUpdateManyAndReturnArgs>(args: SelectSubset<T, RequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Request.
     * @param {RequestUpsertArgs} args - Arguments to update or create a Request.
     * @example
     * // Update or create a Request
     * const request = await prisma.request.upsert({
     *   create: {
     *     // ... data to create a Request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Request we want to update
     *   }
     * })
     */
    upsert<T extends RequestUpsertArgs>(args: SelectSubset<T, RequestUpsertArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestCountArgs} args - Arguments to filter Requests to count.
     * @example
     * // Count the number of Requests
     * const count = await prisma.request.count({
     *   where: {
     *     // ... the filter for the Requests we want to count
     *   }
     * })
    **/
    count<T extends RequestCountArgs>(
      args?: Subset<T, RequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RequestAggregateArgs>(args: Subset<T, RequestAggregateArgs>): Prisma.PrismaPromise<GetRequestAggregateType<T>>

    /**
     * Group by Request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RequestGroupByArgs['orderBy'] }
        : { orderBy?: RequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Request model
   */
  readonly fields: RequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignee<T extends Request$assigneeArgs<ExtArgs> = {}>(args?: Subset<T, Request$assigneeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    input<T extends Request$inputArgs<ExtArgs> = {}>(args?: Subset<T, Request$inputArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Request model
   */
  interface RequestFieldRefs {
    readonly id: FieldRef<"Request", 'String'>
    readonly sigma: FieldRef<"Request", 'Boolean'>
    readonly project: FieldRef<"Request", 'String'>
    readonly createdAt: FieldRef<"Request", 'DateTime'>
    readonly updatedAt: FieldRef<"Request", 'DateTime'>
    readonly assigneeId: FieldRef<"Request", 'String'>
    readonly authorId: FieldRef<"Request", 'String'>
    readonly status: FieldRef<"Request", 'Status'>
    readonly device: FieldRef<"Request", 'SmartDevice'>
    readonly comment: FieldRef<"Request", 'String'>
    readonly client: FieldRef<"Request", 'String'>
    readonly thirdPart: FieldRef<"Request", 'String'>
    readonly docs: FieldRef<"Request", 'String[]'>
    readonly back: FieldRef<"Request", 'String'>
    readonly invoiceTT: FieldRef<"Request", 'String'>
    readonly invoiceClient: FieldRef<"Request", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Request findUnique
   */
  export type RequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findUniqueOrThrow
   */
  export type RequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request findFirst
   */
  export type RequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findFirstOrThrow
   */
  export type RequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Request to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Requests.
     */
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request findMany
   */
  export type RequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter, which Requests to fetch.
     */
    where?: RequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Requests to fetch.
     */
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Requests.
     */
    cursor?: RequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Requests.
     */
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * Request create
   */
  export type RequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to create a Request.
     */
    data: XOR<RequestCreateInput, RequestUncheckedCreateInput>
  }

  /**
   * Request createMany
   */
  export type RequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Request createManyAndReturn
   */
  export type RequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to create many Requests.
     */
    data: RequestCreateManyInput | RequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request update
   */
  export type RequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The data needed to update a Request.
     */
    data: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
    /**
     * Choose, which Request to update.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request updateMany
   */
  export type RequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
  }

  /**
   * Request updateManyAndReturn
   */
  export type RequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * The data used to update Requests.
     */
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyInput>
    /**
     * Filter which Requests to update
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Request upsert
   */
  export type RequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * The filter to search for the Request to update in case it exists.
     */
    where: RequestWhereUniqueInput
    /**
     * In case the Request found by the `where` argument doesn't exist, create a new Request with this data.
     */
    create: XOR<RequestCreateInput, RequestUncheckedCreateInput>
    /**
     * In case the Request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RequestUpdateInput, RequestUncheckedUpdateInput>
  }

  /**
   * Request delete
   */
  export type RequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    /**
     * Filter which Request to delete.
     */
    where: RequestWhereUniqueInput
  }

  /**
   * Request deleteMany
   */
  export type RequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Requests to delete
     */
    where?: RequestWhereInput
    /**
     * Limit how many Requests to delete.
     */
    limit?: number
  }

  /**
   * Request.assignee
   */
  export type Request$assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Request.input
   */
  export type Request$inputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    where?: ConnectionsWhereInput
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    cursor?: ConnectionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * Request without action
   */
  export type RequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    setor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    setor: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    setor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    setor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    setor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    setor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    setor: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    setor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    request_assignee?: boolean | User$request_assigneeArgs<ExtArgs>
    request_author?: boolean | User$request_authorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    setor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    setor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    setor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "setor" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request_assignee?: boolean | User$request_assigneeArgs<ExtArgs>
    request_author?: boolean | User$request_authorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      request_assignee: Prisma.$RequestPayload<ExtArgs>[]
      request_author: Prisma.$RequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      setor: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request_assignee<T extends User$request_assigneeArgs<ExtArgs> = {}>(args?: Subset<T, User$request_assigneeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    request_author<T extends User$request_authorArgs<ExtArgs> = {}>(args?: Subset<T, User$request_authorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly setor: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.request_assignee
   */
  export type User$request_assigneeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User.request_author
   */
  export type User$request_authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Request
     */
    select?: RequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Request
     */
    omit?: RequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RequestInclude<ExtArgs> | null
    where?: RequestWhereInput
    orderBy?: RequestOrderByWithRelationInput | RequestOrderByWithRelationInput[]
    cursor?: RequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RequestScalarFieldEnum | RequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model IEDs
   */

  export type AggregateIEDs = {
    _count: IEDsCountAggregateOutputType | null
    _min: IEDsMinAggregateOutputType | null
    _max: IEDsMaxAggregateOutputType | null
  }

  export type IEDsMinAggregateOutputType = {
    id: string | null
    name: string | null
    manufacturer: string | null
    homologado: boolean | null
  }

  export type IEDsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    manufacturer: string | null
    homologado: boolean | null
  }

  export type IEDsCountAggregateOutputType = {
    id: number
    name: number
    manufacturer: number
    homologado: number
    _all: number
  }


  export type IEDsMinAggregateInputType = {
    id?: true
    name?: true
    manufacturer?: true
    homologado?: true
  }

  export type IEDsMaxAggregateInputType = {
    id?: true
    name?: true
    manufacturer?: true
    homologado?: true
  }

  export type IEDsCountAggregateInputType = {
    id?: true
    name?: true
    manufacturer?: true
    homologado?: true
    _all?: true
  }

  export type IEDsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IEDs to aggregate.
     */
    where?: IEDsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IEDs to fetch.
     */
    orderBy?: IEDsOrderByWithRelationInput | IEDsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IEDsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IEDs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IEDs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IEDs
    **/
    _count?: true | IEDsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IEDsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IEDsMaxAggregateInputType
  }

  export type GetIEDsAggregateType<T extends IEDsAggregateArgs> = {
        [P in keyof T & keyof AggregateIEDs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIEDs[P]>
      : GetScalarType<T[P], AggregateIEDs[P]>
  }




  export type IEDsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IEDsWhereInput
    orderBy?: IEDsOrderByWithAggregationInput | IEDsOrderByWithAggregationInput[]
    by: IEDsScalarFieldEnum[] | IEDsScalarFieldEnum
    having?: IEDsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IEDsCountAggregateInputType | true
    _min?: IEDsMinAggregateInputType
    _max?: IEDsMaxAggregateInputType
  }

  export type IEDsGroupByOutputType = {
    id: string
    name: string | null
    manufacturer: string
    homologado: boolean
    _count: IEDsCountAggregateOutputType | null
    _min: IEDsMinAggregateOutputType | null
    _max: IEDsMaxAggregateOutputType | null
  }

  type GetIEDsGroupByPayload<T extends IEDsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IEDsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IEDsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IEDsGroupByOutputType[P]>
            : GetScalarType<T[P], IEDsGroupByOutputType[P]>
        }
      >
    >


  export type IEDsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    manufacturer?: boolean
    homologado?: boolean
  }, ExtArgs["result"]["iEDs"]>

  export type IEDsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    manufacturer?: boolean
    homologado?: boolean
  }, ExtArgs["result"]["iEDs"]>

  export type IEDsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    manufacturer?: boolean
    homologado?: boolean
  }, ExtArgs["result"]["iEDs"]>

  export type IEDsSelectScalar = {
    id?: boolean
    name?: boolean
    manufacturer?: boolean
    homologado?: boolean
  }

  export type IEDsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "manufacturer" | "homologado", ExtArgs["result"]["iEDs"]>

  export type $IEDsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IEDs"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      manufacturer: string
      homologado: boolean
    }, ExtArgs["result"]["iEDs"]>
    composites: {}
  }

  type IEDsGetPayload<S extends boolean | null | undefined | IEDsDefaultArgs> = $Result.GetResult<Prisma.$IEDsPayload, S>

  type IEDsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IEDsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IEDsCountAggregateInputType | true
    }

  export interface IEDsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IEDs'], meta: { name: 'IEDs' } }
    /**
     * Find zero or one IEDs that matches the filter.
     * @param {IEDsFindUniqueArgs} args - Arguments to find a IEDs
     * @example
     * // Get one IEDs
     * const iEDs = await prisma.iEDs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IEDsFindUniqueArgs>(args: SelectSubset<T, IEDsFindUniqueArgs<ExtArgs>>): Prisma__IEDsClient<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IEDs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IEDsFindUniqueOrThrowArgs} args - Arguments to find a IEDs
     * @example
     * // Get one IEDs
     * const iEDs = await prisma.iEDs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IEDsFindUniqueOrThrowArgs>(args: SelectSubset<T, IEDsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IEDsClient<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IEDs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IEDsFindFirstArgs} args - Arguments to find a IEDs
     * @example
     * // Get one IEDs
     * const iEDs = await prisma.iEDs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IEDsFindFirstArgs>(args?: SelectSubset<T, IEDsFindFirstArgs<ExtArgs>>): Prisma__IEDsClient<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IEDs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IEDsFindFirstOrThrowArgs} args - Arguments to find a IEDs
     * @example
     * // Get one IEDs
     * const iEDs = await prisma.iEDs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IEDsFindFirstOrThrowArgs>(args?: SelectSubset<T, IEDsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IEDsClient<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IEDs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IEDsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IEDs
     * const iEDs = await prisma.iEDs.findMany()
     * 
     * // Get first 10 IEDs
     * const iEDs = await prisma.iEDs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const iEDsWithIdOnly = await prisma.iEDs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IEDsFindManyArgs>(args?: SelectSubset<T, IEDsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IEDs.
     * @param {IEDsCreateArgs} args - Arguments to create a IEDs.
     * @example
     * // Create one IEDs
     * const IEDs = await prisma.iEDs.create({
     *   data: {
     *     // ... data to create a IEDs
     *   }
     * })
     * 
     */
    create<T extends IEDsCreateArgs>(args: SelectSubset<T, IEDsCreateArgs<ExtArgs>>): Prisma__IEDsClient<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IEDs.
     * @param {IEDsCreateManyArgs} args - Arguments to create many IEDs.
     * @example
     * // Create many IEDs
     * const iEDs = await prisma.iEDs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IEDsCreateManyArgs>(args?: SelectSubset<T, IEDsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IEDs and returns the data saved in the database.
     * @param {IEDsCreateManyAndReturnArgs} args - Arguments to create many IEDs.
     * @example
     * // Create many IEDs
     * const iEDs = await prisma.iEDs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IEDs and only return the `id`
     * const iEDsWithIdOnly = await prisma.iEDs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IEDsCreateManyAndReturnArgs>(args?: SelectSubset<T, IEDsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IEDs.
     * @param {IEDsDeleteArgs} args - Arguments to delete one IEDs.
     * @example
     * // Delete one IEDs
     * const IEDs = await prisma.iEDs.delete({
     *   where: {
     *     // ... filter to delete one IEDs
     *   }
     * })
     * 
     */
    delete<T extends IEDsDeleteArgs>(args: SelectSubset<T, IEDsDeleteArgs<ExtArgs>>): Prisma__IEDsClient<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IEDs.
     * @param {IEDsUpdateArgs} args - Arguments to update one IEDs.
     * @example
     * // Update one IEDs
     * const iEDs = await prisma.iEDs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IEDsUpdateArgs>(args: SelectSubset<T, IEDsUpdateArgs<ExtArgs>>): Prisma__IEDsClient<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IEDs.
     * @param {IEDsDeleteManyArgs} args - Arguments to filter IEDs to delete.
     * @example
     * // Delete a few IEDs
     * const { count } = await prisma.iEDs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IEDsDeleteManyArgs>(args?: SelectSubset<T, IEDsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IEDs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IEDsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IEDs
     * const iEDs = await prisma.iEDs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IEDsUpdateManyArgs>(args: SelectSubset<T, IEDsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IEDs and returns the data updated in the database.
     * @param {IEDsUpdateManyAndReturnArgs} args - Arguments to update many IEDs.
     * @example
     * // Update many IEDs
     * const iEDs = await prisma.iEDs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IEDs and only return the `id`
     * const iEDsWithIdOnly = await prisma.iEDs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IEDsUpdateManyAndReturnArgs>(args: SelectSubset<T, IEDsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IEDs.
     * @param {IEDsUpsertArgs} args - Arguments to update or create a IEDs.
     * @example
     * // Update or create a IEDs
     * const iEDs = await prisma.iEDs.upsert({
     *   create: {
     *     // ... data to create a IEDs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IEDs we want to update
     *   }
     * })
     */
    upsert<T extends IEDsUpsertArgs>(args: SelectSubset<T, IEDsUpsertArgs<ExtArgs>>): Prisma__IEDsClient<$Result.GetResult<Prisma.$IEDsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IEDs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IEDsCountArgs} args - Arguments to filter IEDs to count.
     * @example
     * // Count the number of IEDs
     * const count = await prisma.iEDs.count({
     *   where: {
     *     // ... the filter for the IEDs we want to count
     *   }
     * })
    **/
    count<T extends IEDsCountArgs>(
      args?: Subset<T, IEDsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IEDsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IEDs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IEDsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IEDsAggregateArgs>(args: Subset<T, IEDsAggregateArgs>): Prisma.PrismaPromise<GetIEDsAggregateType<T>>

    /**
     * Group by IEDs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IEDsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IEDsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IEDsGroupByArgs['orderBy'] }
        : { orderBy?: IEDsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IEDsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIEDsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IEDs model
   */
  readonly fields: IEDsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IEDs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IEDsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IEDs model
   */
  interface IEDsFieldRefs {
    readonly id: FieldRef<"IEDs", 'String'>
    readonly name: FieldRef<"IEDs", 'String'>
    readonly manufacturer: FieldRef<"IEDs", 'String'>
    readonly homologado: FieldRef<"IEDs", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * IEDs findUnique
   */
  export type IEDsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * Filter, which IEDs to fetch.
     */
    where: IEDsWhereUniqueInput
  }

  /**
   * IEDs findUniqueOrThrow
   */
  export type IEDsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * Filter, which IEDs to fetch.
     */
    where: IEDsWhereUniqueInput
  }

  /**
   * IEDs findFirst
   */
  export type IEDsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * Filter, which IEDs to fetch.
     */
    where?: IEDsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IEDs to fetch.
     */
    orderBy?: IEDsOrderByWithRelationInput | IEDsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IEDs.
     */
    cursor?: IEDsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IEDs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IEDs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IEDs.
     */
    distinct?: IEDsScalarFieldEnum | IEDsScalarFieldEnum[]
  }

  /**
   * IEDs findFirstOrThrow
   */
  export type IEDsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * Filter, which IEDs to fetch.
     */
    where?: IEDsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IEDs to fetch.
     */
    orderBy?: IEDsOrderByWithRelationInput | IEDsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IEDs.
     */
    cursor?: IEDsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IEDs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IEDs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IEDs.
     */
    distinct?: IEDsScalarFieldEnum | IEDsScalarFieldEnum[]
  }

  /**
   * IEDs findMany
   */
  export type IEDsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * Filter, which IEDs to fetch.
     */
    where?: IEDsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IEDs to fetch.
     */
    orderBy?: IEDsOrderByWithRelationInput | IEDsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IEDs.
     */
    cursor?: IEDsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IEDs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IEDs.
     */
    skip?: number
    distinct?: IEDsScalarFieldEnum | IEDsScalarFieldEnum[]
  }

  /**
   * IEDs create
   */
  export type IEDsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * The data needed to create a IEDs.
     */
    data?: XOR<IEDsCreateInput, IEDsUncheckedCreateInput>
  }

  /**
   * IEDs createMany
   */
  export type IEDsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IEDs.
     */
    data: IEDsCreateManyInput | IEDsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IEDs createManyAndReturn
   */
  export type IEDsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * The data used to create many IEDs.
     */
    data: IEDsCreateManyInput | IEDsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IEDs update
   */
  export type IEDsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * The data needed to update a IEDs.
     */
    data: XOR<IEDsUpdateInput, IEDsUncheckedUpdateInput>
    /**
     * Choose, which IEDs to update.
     */
    where: IEDsWhereUniqueInput
  }

  /**
   * IEDs updateMany
   */
  export type IEDsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IEDs.
     */
    data: XOR<IEDsUpdateManyMutationInput, IEDsUncheckedUpdateManyInput>
    /**
     * Filter which IEDs to update
     */
    where?: IEDsWhereInput
    /**
     * Limit how many IEDs to update.
     */
    limit?: number
  }

  /**
   * IEDs updateManyAndReturn
   */
  export type IEDsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * The data used to update IEDs.
     */
    data: XOR<IEDsUpdateManyMutationInput, IEDsUncheckedUpdateManyInput>
    /**
     * Filter which IEDs to update
     */
    where?: IEDsWhereInput
    /**
     * Limit how many IEDs to update.
     */
    limit?: number
  }

  /**
   * IEDs upsert
   */
  export type IEDsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * The filter to search for the IEDs to update in case it exists.
     */
    where: IEDsWhereUniqueInput
    /**
     * In case the IEDs found by the `where` argument doesn't exist, create a new IEDs with this data.
     */
    create: XOR<IEDsCreateInput, IEDsUncheckedCreateInput>
    /**
     * In case the IEDs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IEDsUpdateInput, IEDsUncheckedUpdateInput>
  }

  /**
   * IEDs delete
   */
  export type IEDsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
    /**
     * Filter which IEDs to delete.
     */
    where: IEDsWhereUniqueInput
  }

  /**
   * IEDs deleteMany
   */
  export type IEDsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IEDs to delete
     */
    where?: IEDsWhereInput
    /**
     * Limit how many IEDs to delete.
     */
    limit?: number
  }

  /**
   * IEDs without action
   */
  export type IEDsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IEDs
     */
    select?: IEDsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IEDs
     */
    omit?: IEDsOmit<ExtArgs> | null
  }


  /**
   * Model Connections
   */

  export type AggregateConnections = {
    _count: ConnectionsCountAggregateOutputType | null
    _min: ConnectionsMinAggregateOutputType | null
    _max: ConnectionsMaxAggregateOutputType | null
  }

  export type ConnectionsMinAggregateOutputType = {
    id: string | null
    type: $Enums.ConnectionType | null
    protocol: $Enums.Protocol | null
    transmittion: string | null
    requestId: string | null
  }

  export type ConnectionsMaxAggregateOutputType = {
    id: string | null
    type: $Enums.ConnectionType | null
    protocol: $Enums.Protocol | null
    transmittion: string | null
    requestId: string | null
  }

  export type ConnectionsCountAggregateOutputType = {
    id: number
    type: number
    protocol: number
    transmittion: number
    details: number
    requestId: number
    ied: number
    _all: number
  }


  export type ConnectionsMinAggregateInputType = {
    id?: true
    type?: true
    protocol?: true
    transmittion?: true
    requestId?: true
  }

  export type ConnectionsMaxAggregateInputType = {
    id?: true
    type?: true
    protocol?: true
    transmittion?: true
    requestId?: true
  }

  export type ConnectionsCountAggregateInputType = {
    id?: true
    type?: true
    protocol?: true
    transmittion?: true
    details?: true
    requestId?: true
    ied?: true
    _all?: true
  }

  export type ConnectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to aggregate.
     */
    where?: ConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Connections
    **/
    _count?: true | ConnectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConnectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConnectionsMaxAggregateInputType
  }

  export type GetConnectionsAggregateType<T extends ConnectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateConnections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConnections[P]>
      : GetScalarType<T[P], AggregateConnections[P]>
  }




  export type ConnectionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConnectionsWhereInput
    orderBy?: ConnectionsOrderByWithAggregationInput | ConnectionsOrderByWithAggregationInput[]
    by: ConnectionsScalarFieldEnum[] | ConnectionsScalarFieldEnum
    having?: ConnectionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConnectionsCountAggregateInputType | true
    _min?: ConnectionsMinAggregateInputType
    _max?: ConnectionsMaxAggregateInputType
  }

  export type ConnectionsGroupByOutputType = {
    id: string
    type: $Enums.ConnectionType
    protocol: $Enums.Protocol
    transmittion: string
    details: JsonValue
    requestId: string
    ied: JsonValue[]
    _count: ConnectionsCountAggregateOutputType | null
    _min: ConnectionsMinAggregateOutputType | null
    _max: ConnectionsMaxAggregateOutputType | null
  }

  type GetConnectionsGroupByPayload<T extends ConnectionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConnectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConnectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConnectionsGroupByOutputType[P]>
            : GetScalarType<T[P], ConnectionsGroupByOutputType[P]>
        }
      >
    >


  export type ConnectionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    protocol?: boolean
    transmittion?: boolean
    details?: boolean
    requestId?: boolean
    ied?: boolean
    request_input?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connections"]>

  export type ConnectionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    protocol?: boolean
    transmittion?: boolean
    details?: boolean
    requestId?: boolean
    ied?: boolean
    request_input?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connections"]>

  export type ConnectionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    protocol?: boolean
    transmittion?: boolean
    details?: boolean
    requestId?: boolean
    ied?: boolean
    request_input?: boolean | RequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["connections"]>

  export type ConnectionsSelectScalar = {
    id?: boolean
    type?: boolean
    protocol?: boolean
    transmittion?: boolean
    details?: boolean
    requestId?: boolean
    ied?: boolean
  }

  export type ConnectionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "protocol" | "transmittion" | "details" | "requestId" | "ied", ExtArgs["result"]["connections"]>
  export type ConnectionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request_input?: boolean | RequestDefaultArgs<ExtArgs>
  }
  export type ConnectionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request_input?: boolean | RequestDefaultArgs<ExtArgs>
  }
  export type ConnectionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request_input?: boolean | RequestDefaultArgs<ExtArgs>
  }

  export type $ConnectionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Connections"
    objects: {
      request_input: Prisma.$RequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.ConnectionType
      protocol: $Enums.Protocol
      transmittion: string
      details: Prisma.JsonValue
      requestId: string
      ied: Prisma.JsonValue[]
    }, ExtArgs["result"]["connections"]>
    composites: {}
  }

  type ConnectionsGetPayload<S extends boolean | null | undefined | ConnectionsDefaultArgs> = $Result.GetResult<Prisma.$ConnectionsPayload, S>

  type ConnectionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConnectionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConnectionsCountAggregateInputType | true
    }

  export interface ConnectionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Connections'], meta: { name: 'Connections' } }
    /**
     * Find zero or one Connections that matches the filter.
     * @param {ConnectionsFindUniqueArgs} args - Arguments to find a Connections
     * @example
     * // Get one Connections
     * const connections = await prisma.connections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConnectionsFindUniqueArgs>(args: SelectSubset<T, ConnectionsFindUniqueArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Connections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConnectionsFindUniqueOrThrowArgs} args - Arguments to find a Connections
     * @example
     * // Get one Connections
     * const connections = await prisma.connections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConnectionsFindUniqueOrThrowArgs>(args: SelectSubset<T, ConnectionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsFindFirstArgs} args - Arguments to find a Connections
     * @example
     * // Get one Connections
     * const connections = await prisma.connections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConnectionsFindFirstArgs>(args?: SelectSubset<T, ConnectionsFindFirstArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Connections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsFindFirstOrThrowArgs} args - Arguments to find a Connections
     * @example
     * // Get one Connections
     * const connections = await prisma.connections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConnectionsFindFirstOrThrowArgs>(args?: SelectSubset<T, ConnectionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Connections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Connections
     * const connections = await prisma.connections.findMany()
     * 
     * // Get first 10 Connections
     * const connections = await prisma.connections.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const connectionsWithIdOnly = await prisma.connections.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConnectionsFindManyArgs>(args?: SelectSubset<T, ConnectionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Connections.
     * @param {ConnectionsCreateArgs} args - Arguments to create a Connections.
     * @example
     * // Create one Connections
     * const Connections = await prisma.connections.create({
     *   data: {
     *     // ... data to create a Connections
     *   }
     * })
     * 
     */
    create<T extends ConnectionsCreateArgs>(args: SelectSubset<T, ConnectionsCreateArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Connections.
     * @param {ConnectionsCreateManyArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connections = await prisma.connections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConnectionsCreateManyArgs>(args?: SelectSubset<T, ConnectionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Connections and returns the data saved in the database.
     * @param {ConnectionsCreateManyAndReturnArgs} args - Arguments to create many Connections.
     * @example
     * // Create many Connections
     * const connections = await prisma.connections.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Connections and only return the `id`
     * const connectionsWithIdOnly = await prisma.connections.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConnectionsCreateManyAndReturnArgs>(args?: SelectSubset<T, ConnectionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Connections.
     * @param {ConnectionsDeleteArgs} args - Arguments to delete one Connections.
     * @example
     * // Delete one Connections
     * const Connections = await prisma.connections.delete({
     *   where: {
     *     // ... filter to delete one Connections
     *   }
     * })
     * 
     */
    delete<T extends ConnectionsDeleteArgs>(args: SelectSubset<T, ConnectionsDeleteArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Connections.
     * @param {ConnectionsUpdateArgs} args - Arguments to update one Connections.
     * @example
     * // Update one Connections
     * const connections = await prisma.connections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConnectionsUpdateArgs>(args: SelectSubset<T, ConnectionsUpdateArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Connections.
     * @param {ConnectionsDeleteManyArgs} args - Arguments to filter Connections to delete.
     * @example
     * // Delete a few Connections
     * const { count } = await prisma.connections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConnectionsDeleteManyArgs>(args?: SelectSubset<T, ConnectionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Connections
     * const connections = await prisma.connections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConnectionsUpdateManyArgs>(args: SelectSubset<T, ConnectionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Connections and returns the data updated in the database.
     * @param {ConnectionsUpdateManyAndReturnArgs} args - Arguments to update many Connections.
     * @example
     * // Update many Connections
     * const connections = await prisma.connections.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Connections and only return the `id`
     * const connectionsWithIdOnly = await prisma.connections.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConnectionsUpdateManyAndReturnArgs>(args: SelectSubset<T, ConnectionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Connections.
     * @param {ConnectionsUpsertArgs} args - Arguments to update or create a Connections.
     * @example
     * // Update or create a Connections
     * const connections = await prisma.connections.upsert({
     *   create: {
     *     // ... data to create a Connections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Connections we want to update
     *   }
     * })
     */
    upsert<T extends ConnectionsUpsertArgs>(args: SelectSubset<T, ConnectionsUpsertArgs<ExtArgs>>): Prisma__ConnectionsClient<$Result.GetResult<Prisma.$ConnectionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsCountArgs} args - Arguments to filter Connections to count.
     * @example
     * // Count the number of Connections
     * const count = await prisma.connections.count({
     *   where: {
     *     // ... the filter for the Connections we want to count
     *   }
     * })
    **/
    count<T extends ConnectionsCountArgs>(
      args?: Subset<T, ConnectionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConnectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConnectionsAggregateArgs>(args: Subset<T, ConnectionsAggregateArgs>): Prisma.PrismaPromise<GetConnectionsAggregateType<T>>

    /**
     * Group by Connections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConnectionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConnectionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConnectionsGroupByArgs['orderBy'] }
        : { orderBy?: ConnectionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConnectionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConnectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Connections model
   */
  readonly fields: ConnectionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Connections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConnectionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request_input<T extends RequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RequestDefaultArgs<ExtArgs>>): Prisma__RequestClient<$Result.GetResult<Prisma.$RequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Connections model
   */
  interface ConnectionsFieldRefs {
    readonly id: FieldRef<"Connections", 'String'>
    readonly type: FieldRef<"Connections", 'ConnectionType'>
    readonly protocol: FieldRef<"Connections", 'Protocol'>
    readonly transmittion: FieldRef<"Connections", 'String'>
    readonly details: FieldRef<"Connections", 'Json'>
    readonly requestId: FieldRef<"Connections", 'String'>
    readonly ied: FieldRef<"Connections", 'Json[]'>
  }
    

  // Custom InputTypes
  /**
   * Connections findUnique
   */
  export type ConnectionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where: ConnectionsWhereUniqueInput
  }

  /**
   * Connections findUniqueOrThrow
   */
  export type ConnectionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where: ConnectionsWhereUniqueInput
  }

  /**
   * Connections findFirst
   */
  export type ConnectionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * Connections findFirstOrThrow
   */
  export type ConnectionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Connections.
     */
    cursor?: ConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Connections.
     */
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * Connections findMany
   */
  export type ConnectionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter, which Connections to fetch.
     */
    where?: ConnectionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Connections to fetch.
     */
    orderBy?: ConnectionsOrderByWithRelationInput | ConnectionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Connections.
     */
    cursor?: ConnectionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Connections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Connections.
     */
    skip?: number
    distinct?: ConnectionsScalarFieldEnum | ConnectionsScalarFieldEnum[]
  }

  /**
   * Connections create
   */
  export type ConnectionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Connections.
     */
    data: XOR<ConnectionsCreateInput, ConnectionsUncheckedCreateInput>
  }

  /**
   * Connections createMany
   */
  export type ConnectionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Connections.
     */
    data: ConnectionsCreateManyInput | ConnectionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Connections createManyAndReturn
   */
  export type ConnectionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * The data used to create many Connections.
     */
    data: ConnectionsCreateManyInput | ConnectionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connections update
   */
  export type ConnectionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Connections.
     */
    data: XOR<ConnectionsUpdateInput, ConnectionsUncheckedUpdateInput>
    /**
     * Choose, which Connections to update.
     */
    where: ConnectionsWhereUniqueInput
  }

  /**
   * Connections updateMany
   */
  export type ConnectionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionsUpdateManyMutationInput, ConnectionsUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionsWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
  }

  /**
   * Connections updateManyAndReturn
   */
  export type ConnectionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * The data used to update Connections.
     */
    data: XOR<ConnectionsUpdateManyMutationInput, ConnectionsUncheckedUpdateManyInput>
    /**
     * Filter which Connections to update
     */
    where?: ConnectionsWhereInput
    /**
     * Limit how many Connections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Connections upsert
   */
  export type ConnectionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Connections to update in case it exists.
     */
    where: ConnectionsWhereUniqueInput
    /**
     * In case the Connections found by the `where` argument doesn't exist, create a new Connections with this data.
     */
    create: XOR<ConnectionsCreateInput, ConnectionsUncheckedCreateInput>
    /**
     * In case the Connections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConnectionsUpdateInput, ConnectionsUncheckedUpdateInput>
  }

  /**
   * Connections delete
   */
  export type ConnectionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
    /**
     * Filter which Connections to delete.
     */
    where: ConnectionsWhereUniqueInput
  }

  /**
   * Connections deleteMany
   */
  export type ConnectionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Connections to delete
     */
    where?: ConnectionsWhereInput
    /**
     * Limit how many Connections to delete.
     */
    limit?: number
  }

  /**
   * Connections without action
   */
  export type ConnectionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Connections
     */
    select?: ConnectionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Connections
     */
    omit?: ConnectionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConnectionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RequestScalarFieldEnum: {
    id: 'id',
    sigma: 'sigma',
    project: 'project',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    assigneeId: 'assigneeId',
    authorId: 'authorId',
    status: 'status',
    device: 'device',
    comment: 'comment',
    client: 'client',
    thirdPart: 'thirdPart',
    docs: 'docs',
    back: 'back',
    invoiceTT: 'invoiceTT',
    invoiceClient: 'invoiceClient'
  };

  export type RequestScalarFieldEnum = (typeof RequestScalarFieldEnum)[keyof typeof RequestScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    setor: 'setor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IEDsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    manufacturer: 'manufacturer',
    homologado: 'homologado'
  };

  export type IEDsScalarFieldEnum = (typeof IEDsScalarFieldEnum)[keyof typeof IEDsScalarFieldEnum]


  export const ConnectionsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    protocol: 'protocol',
    transmittion: 'transmittion',
    details: 'details',
    requestId: 'requestId',
    ied: 'ied'
  };

  export type ConnectionsScalarFieldEnum = (typeof ConnectionsScalarFieldEnum)[keyof typeof ConnectionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'SmartDevice'
   */
  export type EnumSmartDeviceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SmartDevice'>
    


  /**
   * Reference to a field of type 'SmartDevice[]'
   */
  export type ListEnumSmartDeviceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SmartDevice[]'>
    


  /**
   * Reference to a field of type 'ConnectionType'
   */
  export type EnumConnectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionType'>
    


  /**
   * Reference to a field of type 'ConnectionType[]'
   */
  export type ListEnumConnectionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConnectionType[]'>
    


  /**
   * Reference to a field of type 'Protocol'
   */
  export type EnumProtocolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Protocol'>
    


  /**
   * Reference to a field of type 'Protocol[]'
   */
  export type ListEnumProtocolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Protocol[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type RequestWhereInput = {
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    id?: StringFilter<"Request"> | string
    sigma?: BoolFilter<"Request"> | boolean
    project?: StringNullableFilter<"Request"> | string | null
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    assigneeId?: StringFilter<"Request"> | string
    authorId?: StringFilter<"Request"> | string
    status?: EnumStatusFilter<"Request"> | $Enums.Status
    device?: EnumSmartDeviceFilter<"Request"> | $Enums.SmartDevice
    comment?: StringNullableFilter<"Request"> | string | null
    client?: StringNullableFilter<"Request"> | string | null
    thirdPart?: StringNullableFilter<"Request"> | string | null
    docs?: StringNullableListFilter<"Request">
    back?: StringNullableFilter<"Request"> | string | null
    invoiceTT?: StringNullableFilter<"Request"> | string | null
    invoiceClient?: StringNullableFilter<"Request"> | string | null
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    input?: ConnectionsListRelationFilter
  }

  export type RequestOrderByWithRelationInput = {
    id?: SortOrder
    sigma?: SortOrder
    project?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    device?: SortOrder
    comment?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    thirdPart?: SortOrderInput | SortOrder
    docs?: SortOrder
    back?: SortOrderInput | SortOrder
    invoiceTT?: SortOrderInput | SortOrder
    invoiceClient?: SortOrderInput | SortOrder
    assignee?: UserOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    input?: ConnectionsOrderByRelationAggregateInput
  }

  export type RequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RequestWhereInput | RequestWhereInput[]
    OR?: RequestWhereInput[]
    NOT?: RequestWhereInput | RequestWhereInput[]
    sigma?: BoolFilter<"Request"> | boolean
    project?: StringNullableFilter<"Request"> | string | null
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    assigneeId?: StringFilter<"Request"> | string
    authorId?: StringFilter<"Request"> | string
    status?: EnumStatusFilter<"Request"> | $Enums.Status
    device?: EnumSmartDeviceFilter<"Request"> | $Enums.SmartDevice
    comment?: StringNullableFilter<"Request"> | string | null
    client?: StringNullableFilter<"Request"> | string | null
    thirdPart?: StringNullableFilter<"Request"> | string | null
    docs?: StringNullableListFilter<"Request">
    back?: StringNullableFilter<"Request"> | string | null
    invoiceTT?: StringNullableFilter<"Request"> | string | null
    invoiceClient?: StringNullableFilter<"Request"> | string | null
    assignee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    input?: ConnectionsListRelationFilter
  }, "id">

  export type RequestOrderByWithAggregationInput = {
    id?: SortOrder
    sigma?: SortOrder
    project?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    device?: SortOrder
    comment?: SortOrderInput | SortOrder
    client?: SortOrderInput | SortOrder
    thirdPart?: SortOrderInput | SortOrder
    docs?: SortOrder
    back?: SortOrderInput | SortOrder
    invoiceTT?: SortOrderInput | SortOrder
    invoiceClient?: SortOrderInput | SortOrder
    _count?: RequestCountOrderByAggregateInput
    _max?: RequestMaxOrderByAggregateInput
    _min?: RequestMinOrderByAggregateInput
  }

  export type RequestScalarWhereWithAggregatesInput = {
    AND?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    OR?: RequestScalarWhereWithAggregatesInput[]
    NOT?: RequestScalarWhereWithAggregatesInput | RequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Request"> | string
    sigma?: BoolWithAggregatesFilter<"Request"> | boolean
    project?: StringNullableWithAggregatesFilter<"Request"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Request"> | Date | string
    assigneeId?: StringWithAggregatesFilter<"Request"> | string
    authorId?: StringWithAggregatesFilter<"Request"> | string
    status?: EnumStatusWithAggregatesFilter<"Request"> | $Enums.Status
    device?: EnumSmartDeviceWithAggregatesFilter<"Request"> | $Enums.SmartDevice
    comment?: StringNullableWithAggregatesFilter<"Request"> | string | null
    client?: StringNullableWithAggregatesFilter<"Request"> | string | null
    thirdPart?: StringNullableWithAggregatesFilter<"Request"> | string | null
    docs?: StringNullableListFilter<"Request">
    back?: StringNullableWithAggregatesFilter<"Request"> | string | null
    invoiceTT?: StringNullableWithAggregatesFilter<"Request"> | string | null
    invoiceClient?: StringNullableWithAggregatesFilter<"Request"> | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    setor?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    request_assignee?: RequestListRelationFilter
    request_author?: RequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    setor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    request_assignee?: RequestOrderByRelationAggregateInput
    request_author?: RequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    setor?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    request_assignee?: RequestListRelationFilter
    request_author?: RequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    setor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    setor?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type IEDsWhereInput = {
    AND?: IEDsWhereInput | IEDsWhereInput[]
    OR?: IEDsWhereInput[]
    NOT?: IEDsWhereInput | IEDsWhereInput[]
    id?: StringFilter<"IEDs"> | string
    name?: StringNullableFilter<"IEDs"> | string | null
    manufacturer?: StringFilter<"IEDs"> | string
    homologado?: BoolFilter<"IEDs"> | boolean
  }

  export type IEDsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    manufacturer?: SortOrder
    homologado?: SortOrder
  }

  export type IEDsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IEDsWhereInput | IEDsWhereInput[]
    OR?: IEDsWhereInput[]
    NOT?: IEDsWhereInput | IEDsWhereInput[]
    name?: StringNullableFilter<"IEDs"> | string | null
    manufacturer?: StringFilter<"IEDs"> | string
    homologado?: BoolFilter<"IEDs"> | boolean
  }, "id">

  export type IEDsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    manufacturer?: SortOrder
    homologado?: SortOrder
    _count?: IEDsCountOrderByAggregateInput
    _max?: IEDsMaxOrderByAggregateInput
    _min?: IEDsMinOrderByAggregateInput
  }

  export type IEDsScalarWhereWithAggregatesInput = {
    AND?: IEDsScalarWhereWithAggregatesInput | IEDsScalarWhereWithAggregatesInput[]
    OR?: IEDsScalarWhereWithAggregatesInput[]
    NOT?: IEDsScalarWhereWithAggregatesInput | IEDsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IEDs"> | string
    name?: StringNullableWithAggregatesFilter<"IEDs"> | string | null
    manufacturer?: StringWithAggregatesFilter<"IEDs"> | string
    homologado?: BoolWithAggregatesFilter<"IEDs"> | boolean
  }

  export type ConnectionsWhereInput = {
    AND?: ConnectionsWhereInput | ConnectionsWhereInput[]
    OR?: ConnectionsWhereInput[]
    NOT?: ConnectionsWhereInput | ConnectionsWhereInput[]
    id?: StringFilter<"Connections"> | string
    type?: EnumConnectionTypeFilter<"Connections"> | $Enums.ConnectionType
    protocol?: EnumProtocolFilter<"Connections"> | $Enums.Protocol
    transmittion?: StringFilter<"Connections"> | string
    details?: JsonFilter<"Connections">
    requestId?: StringFilter<"Connections"> | string
    ied?: JsonNullableListFilter<"Connections">
    request_input?: XOR<RequestScalarRelationFilter, RequestWhereInput>
  }

  export type ConnectionsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    transmittion?: SortOrder
    details?: SortOrder
    requestId?: SortOrder
    ied?: SortOrder
    request_input?: RequestOrderByWithRelationInput
  }

  export type ConnectionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConnectionsWhereInput | ConnectionsWhereInput[]
    OR?: ConnectionsWhereInput[]
    NOT?: ConnectionsWhereInput | ConnectionsWhereInput[]
    type?: EnumConnectionTypeFilter<"Connections"> | $Enums.ConnectionType
    protocol?: EnumProtocolFilter<"Connections"> | $Enums.Protocol
    transmittion?: StringFilter<"Connections"> | string
    details?: JsonFilter<"Connections">
    requestId?: StringFilter<"Connections"> | string
    ied?: JsonNullableListFilter<"Connections">
    request_input?: XOR<RequestScalarRelationFilter, RequestWhereInput>
  }, "id">

  export type ConnectionsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    transmittion?: SortOrder
    details?: SortOrder
    requestId?: SortOrder
    ied?: SortOrder
    _count?: ConnectionsCountOrderByAggregateInput
    _max?: ConnectionsMaxOrderByAggregateInput
    _min?: ConnectionsMinOrderByAggregateInput
  }

  export type ConnectionsScalarWhereWithAggregatesInput = {
    AND?: ConnectionsScalarWhereWithAggregatesInput | ConnectionsScalarWhereWithAggregatesInput[]
    OR?: ConnectionsScalarWhereWithAggregatesInput[]
    NOT?: ConnectionsScalarWhereWithAggregatesInput | ConnectionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Connections"> | string
    type?: EnumConnectionTypeWithAggregatesFilter<"Connections"> | $Enums.ConnectionType
    protocol?: EnumProtocolWithAggregatesFilter<"Connections"> | $Enums.Protocol
    transmittion?: StringWithAggregatesFilter<"Connections"> | string
    details?: JsonWithAggregatesFilter<"Connections">
    requestId?: StringWithAggregatesFilter<"Connections"> | string
    ied?: JsonNullableListFilter<"Connections">
  }

  export type RequestCreateInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
    assignee?: UserCreateNestedOneWithoutRequest_assigneeInput
    author: UserCreateNestedOneWithoutRequest_authorInput
    input?: ConnectionsCreateNestedManyWithoutRequest_inputInput
  }

  export type RequestUncheckedCreateInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId: string
    authorId: string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
    input?: ConnectionsUncheckedCreateNestedManyWithoutRequest_inputInput
  }

  export type RequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: UserUpdateOneWithoutRequest_assigneeNestedInput
    author?: UserUpdateOneRequiredWithoutRequest_authorNestedInput
    input?: ConnectionsUpdateManyWithoutRequest_inputNestedInput
  }

  export type RequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
    input?: ConnectionsUncheckedUpdateManyWithoutRequest_inputNestedInput
  }

  export type RequestCreateManyInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId: string
    authorId: string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
  }

  export type RequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    setor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request_assignee?: RequestCreateNestedManyWithoutAssigneeInput
    request_author?: RequestCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    setor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request_assignee?: RequestUncheckedCreateNestedManyWithoutAssigneeInput
    request_author?: RequestUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request_assignee?: RequestUpdateManyWithoutAssigneeNestedInput
    request_author?: RequestUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request_assignee?: RequestUncheckedUpdateManyWithoutAssigneeNestedInput
    request_author?: RequestUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    setor: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IEDsCreateInput = {
    id?: string
    name?: string | null
    manufacturer?: string
    homologado?: boolean
  }

  export type IEDsUncheckedCreateInput = {
    id?: string
    name?: string | null
    manufacturer?: string
    homologado?: boolean
  }

  export type IEDsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    homologado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IEDsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    homologado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IEDsCreateManyInput = {
    id?: string
    name?: string | null
    manufacturer?: string
    homologado?: boolean
  }

  export type IEDsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    homologado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IEDsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    homologado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ConnectionsCreateInput = {
    id?: string
    type: $Enums.ConnectionType
    protocol: $Enums.Protocol
    transmittion: string
    details: JsonNullValueInput | InputJsonValue
    ied?: ConnectionsCreateiedInput | InputJsonValue[]
    request_input: RequestCreateNestedOneWithoutInputInput
  }

  export type ConnectionsUncheckedCreateInput = {
    id?: string
    type: $Enums.ConnectionType
    protocol: $Enums.Protocol
    transmittion: string
    details: JsonNullValueInput | InputJsonValue
    requestId: string
    ied?: ConnectionsCreateiedInput | InputJsonValue[]
  }

  export type ConnectionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    protocol?: EnumProtocolFieldUpdateOperationsInput | $Enums.Protocol
    transmittion?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    ied?: ConnectionsUpdateiedInput | InputJsonValue[]
    request_input?: RequestUpdateOneRequiredWithoutInputNestedInput
  }

  export type ConnectionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    protocol?: EnumProtocolFieldUpdateOperationsInput | $Enums.Protocol
    transmittion?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    requestId?: StringFieldUpdateOperationsInput | string
    ied?: ConnectionsUpdateiedInput | InputJsonValue[]
  }

  export type ConnectionsCreateManyInput = {
    id?: string
    type: $Enums.ConnectionType
    protocol: $Enums.Protocol
    transmittion: string
    details: JsonNullValueInput | InputJsonValue
    requestId: string
    ied?: ConnectionsCreateiedInput | InputJsonValue[]
  }

  export type ConnectionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    protocol?: EnumProtocolFieldUpdateOperationsInput | $Enums.Protocol
    transmittion?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    ied?: ConnectionsUpdateiedInput | InputJsonValue[]
  }

  export type ConnectionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    protocol?: EnumProtocolFieldUpdateOperationsInput | $Enums.Protocol
    transmittion?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    requestId?: StringFieldUpdateOperationsInput | string
    ied?: ConnectionsUpdateiedInput | InputJsonValue[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumSmartDeviceFilter<$PrismaModel = never> = {
    equals?: $Enums.SmartDevice | EnumSmartDeviceFieldRefInput<$PrismaModel>
    in?: $Enums.SmartDevice[] | ListEnumSmartDeviceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SmartDevice[] | ListEnumSmartDeviceFieldRefInput<$PrismaModel>
    not?: NestedEnumSmartDeviceFilter<$PrismaModel> | $Enums.SmartDevice
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ConnectionsListRelationFilter = {
    every?: ConnectionsWhereInput
    some?: ConnectionsWhereInput
    none?: ConnectionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConnectionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RequestCountOrderByAggregateInput = {
    id?: SortOrder
    sigma?: SortOrder
    project?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    device?: SortOrder
    comment?: SortOrder
    client?: SortOrder
    thirdPart?: SortOrder
    docs?: SortOrder
    back?: SortOrder
    invoiceTT?: SortOrder
    invoiceClient?: SortOrder
  }

  export type RequestMaxOrderByAggregateInput = {
    id?: SortOrder
    sigma?: SortOrder
    project?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    device?: SortOrder
    comment?: SortOrder
    client?: SortOrder
    thirdPart?: SortOrder
    back?: SortOrder
    invoiceTT?: SortOrder
    invoiceClient?: SortOrder
  }

  export type RequestMinOrderByAggregateInput = {
    id?: SortOrder
    sigma?: SortOrder
    project?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigneeId?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    device?: SortOrder
    comment?: SortOrder
    client?: SortOrder
    thirdPart?: SortOrder
    back?: SortOrder
    invoiceTT?: SortOrder
    invoiceClient?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumSmartDeviceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SmartDevice | EnumSmartDeviceFieldRefInput<$PrismaModel>
    in?: $Enums.SmartDevice[] | ListEnumSmartDeviceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SmartDevice[] | ListEnumSmartDeviceFieldRefInput<$PrismaModel>
    not?: NestedEnumSmartDeviceWithAggregatesFilter<$PrismaModel> | $Enums.SmartDevice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSmartDeviceFilter<$PrismaModel>
    _max?: NestedEnumSmartDeviceFilter<$PrismaModel>
  }

  export type RequestListRelationFilter = {
    every?: RequestWhereInput
    some?: RequestWhereInput
    none?: RequestWhereInput
  }

  export type RequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    setor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    setor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    setor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IEDsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    manufacturer?: SortOrder
    homologado?: SortOrder
  }

  export type IEDsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    manufacturer?: SortOrder
    homologado?: SortOrder
  }

  export type IEDsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    manufacturer?: SortOrder
    homologado?: SortOrder
  }

  export type EnumConnectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionType | EnumConnectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionTypeFilter<$PrismaModel> | $Enums.ConnectionType
  }

  export type EnumProtocolFilter<$PrismaModel = never> = {
    equals?: $Enums.Protocol | EnumProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.Protocol[] | ListEnumProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Protocol[] | ListEnumProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumProtocolFilter<$PrismaModel> | $Enums.Protocol
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RequestScalarRelationFilter = {
    is?: RequestWhereInput
    isNot?: RequestWhereInput
  }

  export type ConnectionsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    transmittion?: SortOrder
    details?: SortOrder
    requestId?: SortOrder
    ied?: SortOrder
  }

  export type ConnectionsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    transmittion?: SortOrder
    requestId?: SortOrder
  }

  export type ConnectionsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    protocol?: SortOrder
    transmittion?: SortOrder
    requestId?: SortOrder
  }

  export type EnumConnectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionType | EnumConnectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionTypeFilter<$PrismaModel>
    _max?: NestedEnumConnectionTypeFilter<$PrismaModel>
  }

  export type EnumProtocolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Protocol | EnumProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.Protocol[] | ListEnumProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Protocol[] | ListEnumProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumProtocolWithAggregatesFilter<$PrismaModel> | $Enums.Protocol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProtocolFilter<$PrismaModel>
    _max?: NestedEnumProtocolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type RequestCreatedocsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutRequest_assigneeInput = {
    create?: XOR<UserCreateWithoutRequest_assigneeInput, UserUncheckedCreateWithoutRequest_assigneeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequest_assigneeInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRequest_authorInput = {
    create?: XOR<UserCreateWithoutRequest_authorInput, UserUncheckedCreateWithoutRequest_authorInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequest_authorInput
    connect?: UserWhereUniqueInput
  }

  export type ConnectionsCreateNestedManyWithoutRequest_inputInput = {
    create?: XOR<ConnectionsCreateWithoutRequest_inputInput, ConnectionsUncheckedCreateWithoutRequest_inputInput> | ConnectionsCreateWithoutRequest_inputInput[] | ConnectionsUncheckedCreateWithoutRequest_inputInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutRequest_inputInput | ConnectionsCreateOrConnectWithoutRequest_inputInput[]
    createMany?: ConnectionsCreateManyRequest_inputInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type ConnectionsUncheckedCreateNestedManyWithoutRequest_inputInput = {
    create?: XOR<ConnectionsCreateWithoutRequest_inputInput, ConnectionsUncheckedCreateWithoutRequest_inputInput> | ConnectionsCreateWithoutRequest_inputInput[] | ConnectionsUncheckedCreateWithoutRequest_inputInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutRequest_inputInput | ConnectionsCreateOrConnectWithoutRequest_inputInput[]
    createMany?: ConnectionsCreateManyRequest_inputInputEnvelope
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumSmartDeviceFieldUpdateOperationsInput = {
    set?: $Enums.SmartDevice
  }

  export type RequestUpdatedocsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneWithoutRequest_assigneeNestedInput = {
    create?: XOR<UserCreateWithoutRequest_assigneeInput, UserUncheckedCreateWithoutRequest_assigneeInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequest_assigneeInput
    upsert?: UserUpsertWithoutRequest_assigneeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequest_assigneeInput, UserUpdateWithoutRequest_assigneeInput>, UserUncheckedUpdateWithoutRequest_assigneeInput>
  }

  export type UserUpdateOneRequiredWithoutRequest_authorNestedInput = {
    create?: XOR<UserCreateWithoutRequest_authorInput, UserUncheckedCreateWithoutRequest_authorInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequest_authorInput
    upsert?: UserUpsertWithoutRequest_authorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequest_authorInput, UserUpdateWithoutRequest_authorInput>, UserUncheckedUpdateWithoutRequest_authorInput>
  }

  export type ConnectionsUpdateManyWithoutRequest_inputNestedInput = {
    create?: XOR<ConnectionsCreateWithoutRequest_inputInput, ConnectionsUncheckedCreateWithoutRequest_inputInput> | ConnectionsCreateWithoutRequest_inputInput[] | ConnectionsUncheckedCreateWithoutRequest_inputInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutRequest_inputInput | ConnectionsCreateOrConnectWithoutRequest_inputInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutRequest_inputInput | ConnectionsUpsertWithWhereUniqueWithoutRequest_inputInput[]
    createMany?: ConnectionsCreateManyRequest_inputInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutRequest_inputInput | ConnectionsUpdateWithWhereUniqueWithoutRequest_inputInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutRequest_inputInput | ConnectionsUpdateManyWithWhereWithoutRequest_inputInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type ConnectionsUncheckedUpdateManyWithoutRequest_inputNestedInput = {
    create?: XOR<ConnectionsCreateWithoutRequest_inputInput, ConnectionsUncheckedCreateWithoutRequest_inputInput> | ConnectionsCreateWithoutRequest_inputInput[] | ConnectionsUncheckedCreateWithoutRequest_inputInput[]
    connectOrCreate?: ConnectionsCreateOrConnectWithoutRequest_inputInput | ConnectionsCreateOrConnectWithoutRequest_inputInput[]
    upsert?: ConnectionsUpsertWithWhereUniqueWithoutRequest_inputInput | ConnectionsUpsertWithWhereUniqueWithoutRequest_inputInput[]
    createMany?: ConnectionsCreateManyRequest_inputInputEnvelope
    set?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    disconnect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    delete?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    connect?: ConnectionsWhereUniqueInput | ConnectionsWhereUniqueInput[]
    update?: ConnectionsUpdateWithWhereUniqueWithoutRequest_inputInput | ConnectionsUpdateWithWhereUniqueWithoutRequest_inputInput[]
    updateMany?: ConnectionsUpdateManyWithWhereWithoutRequest_inputInput | ConnectionsUpdateManyWithWhereWithoutRequest_inputInput[]
    deleteMany?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
  }

  export type RequestCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<RequestCreateWithoutAssigneeInput, RequestUncheckedCreateWithoutAssigneeInput> | RequestCreateWithoutAssigneeInput[] | RequestUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutAssigneeInput | RequestCreateOrConnectWithoutAssigneeInput[]
    createMany?: RequestCreateManyAssigneeInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RequestCreateWithoutAuthorInput, RequestUncheckedCreateWithoutAuthorInput> | RequestCreateWithoutAuthorInput[] | RequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutAuthorInput | RequestCreateOrConnectWithoutAuthorInput[]
    createMany?: RequestCreateManyAuthorInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<RequestCreateWithoutAssigneeInput, RequestUncheckedCreateWithoutAssigneeInput> | RequestCreateWithoutAssigneeInput[] | RequestUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutAssigneeInput | RequestCreateOrConnectWithoutAssigneeInput[]
    createMany?: RequestCreateManyAssigneeInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RequestCreateWithoutAuthorInput, RequestUncheckedCreateWithoutAuthorInput> | RequestCreateWithoutAuthorInput[] | RequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutAuthorInput | RequestCreateOrConnectWithoutAuthorInput[]
    createMany?: RequestCreateManyAuthorInputEnvelope
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
  }

  export type RequestUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<RequestCreateWithoutAssigneeInput, RequestUncheckedCreateWithoutAssigneeInput> | RequestCreateWithoutAssigneeInput[] | RequestUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutAssigneeInput | RequestCreateOrConnectWithoutAssigneeInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutAssigneeInput | RequestUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: RequestCreateManyAssigneeInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutAssigneeInput | RequestUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutAssigneeInput | RequestUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RequestCreateWithoutAuthorInput, RequestUncheckedCreateWithoutAuthorInput> | RequestCreateWithoutAuthorInput[] | RequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutAuthorInput | RequestCreateOrConnectWithoutAuthorInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutAuthorInput | RequestUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RequestCreateManyAuthorInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutAuthorInput | RequestUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutAuthorInput | RequestUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<RequestCreateWithoutAssigneeInput, RequestUncheckedCreateWithoutAssigneeInput> | RequestCreateWithoutAssigneeInput[] | RequestUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutAssigneeInput | RequestCreateOrConnectWithoutAssigneeInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutAssigneeInput | RequestUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: RequestCreateManyAssigneeInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutAssigneeInput | RequestUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutAssigneeInput | RequestUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type RequestUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RequestCreateWithoutAuthorInput, RequestUncheckedCreateWithoutAuthorInput> | RequestCreateWithoutAuthorInput[] | RequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RequestCreateOrConnectWithoutAuthorInput | RequestCreateOrConnectWithoutAuthorInput[]
    upsert?: RequestUpsertWithWhereUniqueWithoutAuthorInput | RequestUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RequestCreateManyAuthorInputEnvelope
    set?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    disconnect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    delete?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    connect?: RequestWhereUniqueInput | RequestWhereUniqueInput[]
    update?: RequestUpdateWithWhereUniqueWithoutAuthorInput | RequestUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RequestUpdateManyWithWhereWithoutAuthorInput | RequestUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RequestScalarWhereInput | RequestScalarWhereInput[]
  }

  export type ConnectionsCreateiedInput = {
    set: InputJsonValue[]
  }

  export type RequestCreateNestedOneWithoutInputInput = {
    create?: XOR<RequestCreateWithoutInputInput, RequestUncheckedCreateWithoutInputInput>
    connectOrCreate?: RequestCreateOrConnectWithoutInputInput
    connect?: RequestWhereUniqueInput
  }

  export type EnumConnectionTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConnectionType
  }

  export type EnumProtocolFieldUpdateOperationsInput = {
    set?: $Enums.Protocol
  }

  export type ConnectionsUpdateiedInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type RequestUpdateOneRequiredWithoutInputNestedInput = {
    create?: XOR<RequestCreateWithoutInputInput, RequestUncheckedCreateWithoutInputInput>
    connectOrCreate?: RequestCreateOrConnectWithoutInputInput
    upsert?: RequestUpsertWithoutInputInput
    connect?: RequestWhereUniqueInput
    update?: XOR<XOR<RequestUpdateToOneWithWhereWithoutInputInput, RequestUpdateWithoutInputInput>, RequestUncheckedUpdateWithoutInputInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumSmartDeviceFilter<$PrismaModel = never> = {
    equals?: $Enums.SmartDevice | EnumSmartDeviceFieldRefInput<$PrismaModel>
    in?: $Enums.SmartDevice[] | ListEnumSmartDeviceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SmartDevice[] | ListEnumSmartDeviceFieldRefInput<$PrismaModel>
    not?: NestedEnumSmartDeviceFilter<$PrismaModel> | $Enums.SmartDevice
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumSmartDeviceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SmartDevice | EnumSmartDeviceFieldRefInput<$PrismaModel>
    in?: $Enums.SmartDevice[] | ListEnumSmartDeviceFieldRefInput<$PrismaModel>
    notIn?: $Enums.SmartDevice[] | ListEnumSmartDeviceFieldRefInput<$PrismaModel>
    not?: NestedEnumSmartDeviceWithAggregatesFilter<$PrismaModel> | $Enums.SmartDevice
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSmartDeviceFilter<$PrismaModel>
    _max?: NestedEnumSmartDeviceFilter<$PrismaModel>
  }

  export type NestedEnumConnectionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionType | EnumConnectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionTypeFilter<$PrismaModel> | $Enums.ConnectionType
  }

  export type NestedEnumProtocolFilter<$PrismaModel = never> = {
    equals?: $Enums.Protocol | EnumProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.Protocol[] | ListEnumProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Protocol[] | ListEnumProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumProtocolFilter<$PrismaModel> | $Enums.Protocol
  }

  export type NestedEnumConnectionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConnectionType | EnumConnectionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConnectionType[] | ListEnumConnectionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConnectionTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConnectionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConnectionTypeFilter<$PrismaModel>
    _max?: NestedEnumConnectionTypeFilter<$PrismaModel>
  }

  export type NestedEnumProtocolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Protocol | EnumProtocolFieldRefInput<$PrismaModel>
    in?: $Enums.Protocol[] | ListEnumProtocolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Protocol[] | ListEnumProtocolFieldRefInput<$PrismaModel>
    not?: NestedEnumProtocolWithAggregatesFilter<$PrismaModel> | $Enums.Protocol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProtocolFilter<$PrismaModel>
    _max?: NestedEnumProtocolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutRequest_assigneeInput = {
    id?: string
    email: string
    name: string
    password: string
    setor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request_author?: RequestCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutRequest_assigneeInput = {
    id?: string
    email: string
    name: string
    password: string
    setor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request_author?: RequestUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutRequest_assigneeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequest_assigneeInput, UserUncheckedCreateWithoutRequest_assigneeInput>
  }

  export type UserCreateWithoutRequest_authorInput = {
    id?: string
    email: string
    name: string
    password: string
    setor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request_assignee?: RequestCreateNestedManyWithoutAssigneeInput
  }

  export type UserUncheckedCreateWithoutRequest_authorInput = {
    id?: string
    email: string
    name: string
    password: string
    setor: string
    createdAt?: Date | string
    updatedAt?: Date | string
    request_assignee?: RequestUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type UserCreateOrConnectWithoutRequest_authorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequest_authorInput, UserUncheckedCreateWithoutRequest_authorInput>
  }

  export type ConnectionsCreateWithoutRequest_inputInput = {
    id?: string
    type: $Enums.ConnectionType
    protocol: $Enums.Protocol
    transmittion: string
    details: JsonNullValueInput | InputJsonValue
    ied?: ConnectionsCreateiedInput | InputJsonValue[]
  }

  export type ConnectionsUncheckedCreateWithoutRequest_inputInput = {
    id?: string
    type: $Enums.ConnectionType
    protocol: $Enums.Protocol
    transmittion: string
    details: JsonNullValueInput | InputJsonValue
    ied?: ConnectionsCreateiedInput | InputJsonValue[]
  }

  export type ConnectionsCreateOrConnectWithoutRequest_inputInput = {
    where: ConnectionsWhereUniqueInput
    create: XOR<ConnectionsCreateWithoutRequest_inputInput, ConnectionsUncheckedCreateWithoutRequest_inputInput>
  }

  export type ConnectionsCreateManyRequest_inputInputEnvelope = {
    data: ConnectionsCreateManyRequest_inputInput | ConnectionsCreateManyRequest_inputInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRequest_assigneeInput = {
    update: XOR<UserUpdateWithoutRequest_assigneeInput, UserUncheckedUpdateWithoutRequest_assigneeInput>
    create: XOR<UserCreateWithoutRequest_assigneeInput, UserUncheckedCreateWithoutRequest_assigneeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequest_assigneeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequest_assigneeInput, UserUncheckedUpdateWithoutRequest_assigneeInput>
  }

  export type UserUpdateWithoutRequest_assigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request_author?: RequestUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutRequest_assigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request_author?: RequestUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserUpsertWithoutRequest_authorInput = {
    update: XOR<UserUpdateWithoutRequest_authorInput, UserUncheckedUpdateWithoutRequest_authorInput>
    create: XOR<UserCreateWithoutRequest_authorInput, UserUncheckedCreateWithoutRequest_authorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequest_authorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequest_authorInput, UserUncheckedUpdateWithoutRequest_authorInput>
  }

  export type UserUpdateWithoutRequest_authorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request_assignee?: RequestUpdateManyWithoutAssigneeNestedInput
  }

  export type UserUncheckedUpdateWithoutRequest_authorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    setor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    request_assignee?: RequestUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type ConnectionsUpsertWithWhereUniqueWithoutRequest_inputInput = {
    where: ConnectionsWhereUniqueInput
    update: XOR<ConnectionsUpdateWithoutRequest_inputInput, ConnectionsUncheckedUpdateWithoutRequest_inputInput>
    create: XOR<ConnectionsCreateWithoutRequest_inputInput, ConnectionsUncheckedCreateWithoutRequest_inputInput>
  }

  export type ConnectionsUpdateWithWhereUniqueWithoutRequest_inputInput = {
    where: ConnectionsWhereUniqueInput
    data: XOR<ConnectionsUpdateWithoutRequest_inputInput, ConnectionsUncheckedUpdateWithoutRequest_inputInput>
  }

  export type ConnectionsUpdateManyWithWhereWithoutRequest_inputInput = {
    where: ConnectionsScalarWhereInput
    data: XOR<ConnectionsUpdateManyMutationInput, ConnectionsUncheckedUpdateManyWithoutRequest_inputInput>
  }

  export type ConnectionsScalarWhereInput = {
    AND?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
    OR?: ConnectionsScalarWhereInput[]
    NOT?: ConnectionsScalarWhereInput | ConnectionsScalarWhereInput[]
    id?: StringFilter<"Connections"> | string
    type?: EnumConnectionTypeFilter<"Connections"> | $Enums.ConnectionType
    protocol?: EnumProtocolFilter<"Connections"> | $Enums.Protocol
    transmittion?: StringFilter<"Connections"> | string
    details?: JsonFilter<"Connections">
    requestId?: StringFilter<"Connections"> | string
    ied?: JsonNullableListFilter<"Connections">
  }

  export type RequestCreateWithoutAssigneeInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
    author: UserCreateNestedOneWithoutRequest_authorInput
    input?: ConnectionsCreateNestedManyWithoutRequest_inputInput
  }

  export type RequestUncheckedCreateWithoutAssigneeInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
    input?: ConnectionsUncheckedCreateNestedManyWithoutRequest_inputInput
  }

  export type RequestCreateOrConnectWithoutAssigneeInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutAssigneeInput, RequestUncheckedCreateWithoutAssigneeInput>
  }

  export type RequestCreateManyAssigneeInputEnvelope = {
    data: RequestCreateManyAssigneeInput | RequestCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type RequestCreateWithoutAuthorInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
    assignee?: UserCreateNestedOneWithoutRequest_assigneeInput
    input?: ConnectionsCreateNestedManyWithoutRequest_inputInput
  }

  export type RequestUncheckedCreateWithoutAuthorInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId: string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
    input?: ConnectionsUncheckedCreateNestedManyWithoutRequest_inputInput
  }

  export type RequestCreateOrConnectWithoutAuthorInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutAuthorInput, RequestUncheckedCreateWithoutAuthorInput>
  }

  export type RequestCreateManyAuthorInputEnvelope = {
    data: RequestCreateManyAuthorInput | RequestCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RequestUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutAssigneeInput, RequestUncheckedUpdateWithoutAssigneeInput>
    create: XOR<RequestCreateWithoutAssigneeInput, RequestUncheckedCreateWithoutAssigneeInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutAssigneeInput, RequestUncheckedUpdateWithoutAssigneeInput>
  }

  export type RequestUpdateManyWithWhereWithoutAssigneeInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type RequestScalarWhereInput = {
    AND?: RequestScalarWhereInput | RequestScalarWhereInput[]
    OR?: RequestScalarWhereInput[]
    NOT?: RequestScalarWhereInput | RequestScalarWhereInput[]
    id?: StringFilter<"Request"> | string
    sigma?: BoolFilter<"Request"> | boolean
    project?: StringNullableFilter<"Request"> | string | null
    createdAt?: DateTimeFilter<"Request"> | Date | string
    updatedAt?: DateTimeFilter<"Request"> | Date | string
    assigneeId?: StringFilter<"Request"> | string
    authorId?: StringFilter<"Request"> | string
    status?: EnumStatusFilter<"Request"> | $Enums.Status
    device?: EnumSmartDeviceFilter<"Request"> | $Enums.SmartDevice
    comment?: StringNullableFilter<"Request"> | string | null
    client?: StringNullableFilter<"Request"> | string | null
    thirdPart?: StringNullableFilter<"Request"> | string | null
    docs?: StringNullableListFilter<"Request">
    back?: StringNullableFilter<"Request"> | string | null
    invoiceTT?: StringNullableFilter<"Request"> | string | null
    invoiceClient?: StringNullableFilter<"Request"> | string | null
  }

  export type RequestUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RequestWhereUniqueInput
    update: XOR<RequestUpdateWithoutAuthorInput, RequestUncheckedUpdateWithoutAuthorInput>
    create: XOR<RequestCreateWithoutAuthorInput, RequestUncheckedCreateWithoutAuthorInput>
  }

  export type RequestUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RequestWhereUniqueInput
    data: XOR<RequestUpdateWithoutAuthorInput, RequestUncheckedUpdateWithoutAuthorInput>
  }

  export type RequestUpdateManyWithWhereWithoutAuthorInput = {
    where: RequestScalarWhereInput
    data: XOR<RequestUpdateManyMutationInput, RequestUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RequestCreateWithoutInputInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
    assignee?: UserCreateNestedOneWithoutRequest_assigneeInput
    author: UserCreateNestedOneWithoutRequest_authorInput
  }

  export type RequestUncheckedCreateWithoutInputInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId: string
    authorId: string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
  }

  export type RequestCreateOrConnectWithoutInputInput = {
    where: RequestWhereUniqueInput
    create: XOR<RequestCreateWithoutInputInput, RequestUncheckedCreateWithoutInputInput>
  }

  export type RequestUpsertWithoutInputInput = {
    update: XOR<RequestUpdateWithoutInputInput, RequestUncheckedUpdateWithoutInputInput>
    create: XOR<RequestCreateWithoutInputInput, RequestUncheckedCreateWithoutInputInput>
    where?: RequestWhereInput
  }

  export type RequestUpdateToOneWithWhereWithoutInputInput = {
    where?: RequestWhereInput
    data: XOR<RequestUpdateWithoutInputInput, RequestUncheckedUpdateWithoutInputInput>
  }

  export type RequestUpdateWithoutInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: UserUpdateOneWithoutRequest_assigneeNestedInput
    author?: UserUpdateOneRequiredWithoutRequest_authorNestedInput
  }

  export type RequestUncheckedUpdateWithoutInputInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ConnectionsCreateManyRequest_inputInput = {
    id?: string
    type: $Enums.ConnectionType
    protocol: $Enums.Protocol
    transmittion: string
    details: JsonNullValueInput | InputJsonValue
    ied?: ConnectionsCreateiedInput | InputJsonValue[]
  }

  export type ConnectionsUpdateWithoutRequest_inputInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    protocol?: EnumProtocolFieldUpdateOperationsInput | $Enums.Protocol
    transmittion?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    ied?: ConnectionsUpdateiedInput | InputJsonValue[]
  }

  export type ConnectionsUncheckedUpdateWithoutRequest_inputInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    protocol?: EnumProtocolFieldUpdateOperationsInput | $Enums.Protocol
    transmittion?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    ied?: ConnectionsUpdateiedInput | InputJsonValue[]
  }

  export type ConnectionsUncheckedUpdateManyWithoutRequest_inputInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumConnectionTypeFieldUpdateOperationsInput | $Enums.ConnectionType
    protocol?: EnumProtocolFieldUpdateOperationsInput | $Enums.Protocol
    transmittion?: StringFieldUpdateOperationsInput | string
    details?: JsonNullValueInput | InputJsonValue
    ied?: ConnectionsUpdateiedInput | InputJsonValue[]
  }

  export type RequestCreateManyAssigneeInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorId: string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
  }

  export type RequestCreateManyAuthorInput = {
    id?: string
    sigma?: boolean
    project?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assigneeId: string
    status?: $Enums.Status
    device?: $Enums.SmartDevice
    comment?: string | null
    client?: string | null
    thirdPart?: string | null
    docs?: RequestCreatedocsInput | string[]
    back?: string | null
    invoiceTT?: string | null
    invoiceClient?: string | null
  }

  export type RequestUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutRequest_authorNestedInput
    input?: ConnectionsUpdateManyWithoutRequest_inputNestedInput
  }

  export type RequestUncheckedUpdateWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
    input?: ConnectionsUncheckedUpdateManyWithoutRequest_inputNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutAssigneeInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RequestUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
    assignee?: UserUpdateOneWithoutRequest_assigneeNestedInput
    input?: ConnectionsUpdateManyWithoutRequest_inputNestedInput
  }

  export type RequestUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
    input?: ConnectionsUncheckedUpdateManyWithoutRequest_inputNestedInput
  }

  export type RequestUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    sigma?: BoolFieldUpdateOperationsInput | boolean
    project?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigneeId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    device?: EnumSmartDeviceFieldUpdateOperationsInput | $Enums.SmartDevice
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: NullableStringFieldUpdateOperationsInput | string | null
    thirdPart?: NullableStringFieldUpdateOperationsInput | string | null
    docs?: RequestUpdatedocsInput | string[]
    back?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceTT?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceClient?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}